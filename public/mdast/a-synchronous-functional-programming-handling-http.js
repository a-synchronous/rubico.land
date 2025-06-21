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
          value: ' for the ',
          position: {
            start: { line: 42, column: 187, offset: 2107 },
            end: { line: 42, column: 196, offset: 2116 }
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
                start: { line: 42, column: 197, offset: 2117 },
                end: { line: 42, column: 206, offset: 2126 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 196, offset: 2116 },
            end: { line: 42, column: 228, offset: 2148 }
          }
        },
        {
          type: 'text',
          value: ' protocol, ',
          position: {
            start: { line: 42, column: 228, offset: 2148 },
            end: { line: 42, column: 239, offset: 2159 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mailto',
          position: {
            start: { line: 42, column: 239, offset: 2159 },
            end: { line: 42, column: 247, offset: 2167 }
          }
        },
        {
          type: 'text',
          value: ' for the "mailto:" protocol, and ',
          position: {
            start: { line: 42, column: 247, offset: 2167 },
            end: { line: 42, column: 280, offset: 2200 }
          }
        },
        {
          type: 'inlineCode',
          value: 'file',
          position: {
            start: { line: 42, column: 280, offset: 2200 },
            end: { line: 42, column: 286, offset: 2206 }
          }
        },
        {
          type: 'text',
          value: ' for the "file:" protocol.',
          position: {
            start: { line: 42, column: 286, offset: 2206 },
            end: { line: 42, column: 312, offset: 2232 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 1921 },
        end: { line: 42, column: 312, offset: 2232 }
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
            start: { line: 44, column: 5, offset: 2238 },
            end: { line: 44, column: 20, offset: 2253 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 2234 },
        end: { line: 44, column: 20, offset: 2253 }
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
            start: { line: 46, column: 1, offset: 2255 },
            end: { line: 46, column: 88, offset: 2342 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 2255 },
        end: { line: 46, column: 88, offset: 2342 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The domain name of a URL is a unique name that translates to the address of a computer where the resource of the URL is located. Domain names are translated via the ',
          position: {
            start: { line: 48, column: 1, offset: 2344 },
            end: { line: 48, column: 166, offset: 2509 }
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
                start: { line: 48, column: 167, offset: 2510 },
                end: { line: 48, column: 191, offset: 2534 }
              }
            }
          ],
          position: {
            start: { line: 48, column: 166, offset: 2509 },
            end: { line: 48, column: 246, offset: 2589 }
          }
        },
        {
          type: 'text',
          value: ' to computer addresses running web servers to which HTTP clients can send requests.',
          position: {
            start: { line: 48, column: 246, offset: 2589 },
            end: { line: 48, column: 329, offset: 2672 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 2344 },
        end: { line: 48, column: 329, offset: 2672 }
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
            start: { line: 50, column: 5, offset: 2678 },
            end: { line: 50, column: 13, offset: 2686 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 2674 },
        end: { line: 50, column: 13, offset: 2686 }
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
            start: { line: 52, column: 1, offset: 2688 },
            end: { line: 52, column: 74, offset: 2761 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2688 },
        end: { line: 52, column: 74, offset: 2761 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The port of a URL is a number that identifies a specific process or network service running on the computer where the resource of the URL is located. When a computer starts up a process like a web server, it can assign it a numerical port between 0 and 65535. The web server would then listen on this assigned port for HTTP requests.',
          position: {
            start: { line: 54, column: 1, offset: 2763 },
            end: { line: 54, column: 334, offset: 3096 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 2763 },
        end: { line: 54, column: 334, offset: 3096 }
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
            start: { line: 56, column: 5, offset: 3102 },
            end: { line: 56, column: 18, offset: 3115 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 3098 },
        end: { line: 56, column: 18, offset: 3115 }
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
            start: { line: 58, column: 1, offset: 3117 },
            end: { line: 58, column: 84, offset: 3200 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 3117 },
        end: { line: 58, column: 84, offset: 3200 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The authority of a URL consists of the domain name and port of the URL separated by a colon.',
          position: {
            start: { line: 60, column: 1, offset: 3202 },
            end: { line: 60, column: 93, offset: 3294 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3202 },
        end: { line: 60, column: 93, offset: 3294 }
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
            start: { line: 62, column: 5, offset: 3300 },
            end: { line: 62, column: 13, offset: 3308 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3296 },
        end: { line: 62, column: 13, offset: 3308 }
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
            start: { line: 64, column: 1, offset: 3310 },
            end: { line: 64, column: 74, offset: 3383 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 3310 },
        end: { line: 64, column: 74, offset: 3383 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The path of a URL is a string that identifies the physical or abstract location of the resource within the URL's domain.",
          position: {
            start: { line: 66, column: 1, offset: 3385 },
            end: { line: 66, column: 121, offset: 3505 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3385 },
        end: { line: 66, column: 121, offset: 3505 }
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
            start: { line: 68, column: 5, offset: 3511 },
            end: { line: 68, column: 25, offset: 3531 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3507 },
        end: { line: 68, column: 25, offset: 3531 }
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
            start: { line: 70, column: 1, offset: 3533 },
            end: { line: 70, column: 98, offset: 3630 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 3533 },
        end: { line: 70, column: 98, offset: 3630 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The query parameters of a URL are a list of key-value pairs separated by the ',
          position: {
            start: { line: 72, column: 1, offset: 3632 },
            end: { line: 72, column: 78, offset: 3709 }
          }
        },
        {
          type: 'inlineCode',
          value: '&',
          position: {
            start: { line: 72, column: 78, offset: 3709 },
            end: { line: 72, column: 81, offset: 3712 }
          }
        },
        {
          type: 'text',
          value: ' symbol. The query parameters can further identify the resource of a URL.',
          position: {
            start: { line: 72, column: 81, offset: 3712 },
            end: { line: 72, column: 154, offset: 3785 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 3632 },
        end: { line: 72, column: 154, offset: 3785 }
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
            start: { line: 74, column: 5, offset: 3791 },
            end: { line: 74, column: 15, offset: 3801 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 3787 },
        end: { line: 74, column: 15, offset: 3801 }
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
            start: { line: 76, column: 1, offset: 3803 },
            end: { line: 76, column: 78, offset: 3880 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3803 },
        end: { line: 76, column: 78, offset: 3880 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `The anchor of a URL specifies a part of the URL's resource, and does not necessarily locate the resource. When a web server serves a web page as a resource, the anchor acts as a sort of "bookmark" inside the resource. Browsers will see the anchor and scroll the page down to where the section identified by the anchor is visible.`,
          position: {
            start: { line: 78, column: 1, offset: 3882 },
            end: { line: 78, column: 330, offset: 4211 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3882 },
        end: { line: 78, column: 330, offset: 4211 }
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
            start: { line: 80, column: 4, offset: 4216 },
            end: { line: 80, column: 15, offset: 4227 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 4213 },
        end: { line: 80, column: 15, offset: 4227 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP client is a component of a ',
          position: {
            start: { line: 82, column: 1, offset: 4229 },
            end: { line: 82, column: 36, offset: 4264 }
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
                start: { line: 82, column: 37, offset: 4265 },
                end: { line: 82, column: 57, offset: 4285 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 36, offset: 4264 },
            end: { line: 82, column: 110, offset: 4338 }
          }
        },
        {
          type: 'text',
          value: ' running inside a computer that sends HTTP requests to HTTP servers. The JavaScript code below is part of a software application that runs in your web browser. The code demonstrates the use of an HTTP client ',
          position: {
            start: { line: 82, column: 110, offset: 4338 },
            end: { line: 82, column: 318, offset: 4546 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 82, column: 318, offset: 4546 },
            end: { line: 82, column: 325, offset: 4553 }
          }
        },
        {
          type: 'text',
          value: ' to send a request to an HTTP server at the url ',
          position: {
            start: { line: 82, column: 325, offset: 4553 },
            end: { line: 82, column: 373, offset: 4601 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https://jsonplaceholder.typicode.com/todos/1',
          position: {
            start: { line: 82, column: 373, offset: 4601 },
            end: { line: 82, column: 419, offset: 4647 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 82, column: 419, offset: 4647 },
            end: { line: 82, column: 420, offset: 4648 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 4229 },
        end: { line: 82, column: 420, offset: 4648 }
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
        start: { line: 84, column: 1, offset: 4650 },
        end: { line: 95, column: 4, offset: 4983 }
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
            start: { line: 97, column: 4, offset: 4988 },
            end: { line: 97, column: 16, offset: 5000 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 4985 },
        end: { line: 97, column: 16, offset: 5000 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request is a message conforming to the HTTP protocol that a client sends to a server. An HTTP request has the following properties:',
          position: {
            start: { line: 99, column: 1, offset: 5002 },
            end: { line: 99, column: 140, offset: 5141 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 5002 },
        end: { line: 99, column: 140, offset: 5141 }
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
                    start: { line: 100, column: 4, offset: 5145 },
                    end: { line: 100, column: 10, offset: 5151 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 4, offset: 5145 },
                end: { line: 100, column: 10, offset: 5151 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 2, offset: 5143 },
            end: { line: 100, column: 10, offset: 5151 }
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
                    start: { line: 101, column: 4, offset: 5155 },
                    end: { line: 101, column: 7, offset: 5158 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 4, offset: 5155 },
                end: { line: 101, column: 7, offset: 5158 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 2, offset: 5153 },
            end: { line: 101, column: 7, offset: 5158 }
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
                    start: { line: 102, column: 4, offset: 5162 },
                    end: { line: 102, column: 11, offset: 5169 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 4, offset: 5162 },
                end: { line: 102, column: 11, offset: 5169 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 2, offset: 5160 },
            end: { line: 102, column: 11, offset: 5169 }
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
                    start: { line: 103, column: 4, offset: 5173 },
                    end: { line: 103, column: 8, offset: 5177 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 4, offset: 5173 },
                end: { line: 103, column: 8, offset: 5177 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 2, offset: 5171 },
            end: { line: 103, column: 8, offset: 5177 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 2, offset: 5143 },
        end: { line: 103, column: 8, offset: 5177 }
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
            start: { line: 105, column: 5, offset: 5183 },
            end: { line: 105, column: 24, offset: 5202 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 5179 },
        end: { line: 105, column: 24, offset: 5202 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: ',
          position: {
            start: { line: 107, column: 1, offset: 5204 },
            end: { line: 107, column: 192, offset: 5395 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 107, column: 192, offset: 5395 },
            end: { line: 107, column: 197, offset: 5400 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 197, offset: 5400 },
            end: { line: 107, column: 199, offset: 5402 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 107, column: 199, offset: 5402 },
            end: { line: 107, column: 205, offset: 5408 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 205, offset: 5408 },
            end: { line: 107, column: 207, offset: 5410 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 107, column: 207, offset: 5410 },
            end: { line: 107, column: 213, offset: 5416 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 213, offset: 5416 },
            end: { line: 107, column: 215, offset: 5418 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 107, column: 215, offset: 5418 },
            end: { line: 107, column: 220, offset: 5423 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 220, offset: 5423 },
            end: { line: 107, column: 222, offset: 5425 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 107, column: 222, offset: 5425 },
            end: { line: 107, column: 229, offset: 5432 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 229, offset: 5432 },
            end: { line: 107, column: 231, offset: 5434 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 107, column: 231, offset: 5434 },
            end: { line: 107, column: 239, offset: 5442 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 239, offset: 5442 },
            end: { line: 107, column: 241, offset: 5444 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 107, column: 241, offset: 5444 },
            end: { line: 107, column: 250, offset: 5453 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 250, offset: 5453 },
            end: { line: 107, column: 252, offset: 5455 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 107, column: 252, offset: 5455 },
            end: { line: 107, column: 261, offset: 5464 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 107, column: 261, offset: 5464 },
            end: { line: 107, column: 267, offset: 5470 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 107, column: 267, offset: 5470 },
            end: { line: 107, column: 274, offset: 5477 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 107, column: 274, offset: 5477 },
            end: { line: 107, column: 275, offset: 5478 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 5204 },
        end: { line: 107, column: 275, offset: 5478 }
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
            start: { line: 109, column: 6, offset: 5485 },
            end: { line: 109, column: 9, offset: 5488 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 5480 },
        end: { line: 109, column: 9, offset: 5488 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 111, column: 1, offset: 5490 },
            end: { line: 111, column: 5, offset: 5494 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 5, offset: 5494 },
            end: { line: 111, column: 10, offset: 5499 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for a data representation of the resource. ',
          position: {
            start: { line: 111, column: 10, offset: 5499 },
            end: { line: 111, column: 94, offset: 5583 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 94, offset: 5583 },
            end: { line: 111, column: 99, offset: 5588 }
          }
        },
        {
          type: 'text',
          value: ' requests are ',
          position: {
            start: { line: 111, column: 99, offset: 5588 },
            end: { line: 111, column: 113, offset: 5602 }
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
                start: { line: 111, column: 114, offset: 5603 },
                end: { line: 111, column: 118, offset: 5607 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 113, offset: 5602 },
            end: { line: 111, column: 180, offset: 5669 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 111, column: 180, offset: 5669 },
            end: { line: 111, column: 182, offset: 5671 }
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
                start: { line: 111, column: 183, offset: 5672 },
                end: { line: 111, column: 193, offset: 5682 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 182, offset: 5671 },
            end: { line: 111, column: 256, offset: 5745 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 111, column: 256, offset: 5745 },
            end: { line: 111, column: 262, offset: 5751 }
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
                start: { line: 111, column: 263, offset: 5752 },
                end: { line: 111, column: 272, offset: 5761 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 262, offset: 5751 },
            end: { line: 111, column: 334, offset: 5823 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 111, column: 334, offset: 5823 },
            end: { line: 111, column: 335, offset: 5824 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 5490 },
        end: { line: 111, column: 335, offset: 5824 }
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
            start: { line: 113, column: 6, offset: 5831 },
            end: { line: 113, column: 10, offset: 5835 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 5826 },
        end: { line: 113, column: 10, offset: 5835 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 115, column: 1, offset: 5837 },
            end: { line: 115, column: 5, offset: 5841 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 5, offset: 5841 },
            end: { line: 115, column: 11, offset: 5847 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for metadata about the resource. ',
          position: {
            start: { line: 115, column: 11, offset: 5847 },
            end: { line: 115, column: 85, offset: 5921 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 85, offset: 5921 },
            end: { line: 115, column: 91, offset: 5927 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, idempotent, and cacheable.',
          position: {
            start: { line: 115, column: 91, offset: 5927 },
            end: { line: 115, column: 137, offset: 5973 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 5837 },
        end: { line: 115, column: 137, offset: 5973 }
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
            start: { line: 117, column: 6, offset: 5980 },
            end: { line: 117, column: 10, offset: 5984 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 5975 },
        end: { line: 117, column: 10, offset: 5984 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 119, column: 1, offset: 5986 },
            end: { line: 119, column: 5, offset: 5990 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 5, offset: 5990 },
            end: { line: 119, column: 11, offset: 5996 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to create the resource. ',
          position: {
            start: { line: 119, column: 11, offset: 5996 },
            end: { line: 119, column: 85, offset: 6070 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 85, offset: 6070 },
            end: { line: 119, column: 91, offset: 6076 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 119, column: 91, offset: 6076 },
            end: { line: 119, column: 185, offset: 6170 }
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
                start: { line: 119, column: 186, offset: 6171 },
                end: { line: 119, column: 195, offset: 6180 }
              }
            }
          ],
          position: {
            start: { line: 119, column: 185, offset: 6170 },
            end: { line: 119, column: 257, offset: 6242 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 119, column: 257, offset: 6242 },
            end: { line: 119, column: 278, offset: 6263 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 119, column: 278, offset: 6263 },
            end: { line: 119, column: 287, offset: 6272 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 119, column: 287, offset: 6272 },
            end: { line: 119, column: 291, offset: 6276 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 119, column: 291, offset: 6276 },
            end: { line: 119, column: 306, offset: 6291 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 119, column: 306, offset: 6291 },
            end: { line: 119, column: 328, offset: 6313 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 119, column: 328, offset: 6313 },
            end: { line: 119, column: 346, offset: 6331 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 119, column: 346, offset: 6331 },
            end: { line: 119, column: 354, offset: 6339 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 5986 },
        end: { line: 119, column: 354, offset: 6339 }
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
            start: { line: 121, column: 6, offset: 6346 },
            end: { line: 121, column: 9, offset: 6349 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6341 },
        end: { line: 121, column: 9, offset: 6349 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 123, column: 1, offset: 6351 },
            end: { line: 123, column: 5, offset: 6355 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 5, offset: 6355 },
            end: { line: 123, column: 10, offset: 6360 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 123, column: 10, offset: 6360 },
            end: { line: 123, column: 135, offset: 6485 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 135, offset: 6485 },
            end: { line: 123, column: 140, offset: 6490 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 123, column: 140, offset: 6490 },
            end: { line: 123, column: 198, offset: 6548 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6351 },
        end: { line: 123, column: 198, offset: 6548 }
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
            start: { line: 125, column: 6, offset: 6555 },
            end: { line: 125, column: 11, offset: 6560 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6550 },
        end: { line: 125, column: 11, offset: 6560 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 127, column: 1, offset: 6562 },
            end: { line: 127, column: 5, offset: 6566 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 5, offset: 6566 },
            end: { line: 127, column: 12, offset: 6573 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the resource. ',
          position: {
            start: { line: 127, column: 12, offset: 6573 },
            end: { line: 127, column: 96, offset: 6657 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 96, offset: 6657 },
            end: { line: 127, column: 103, offset: 6664 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 127, column: 103, offset: 6664 },
            end: { line: 127, column: 227, offset: 6788 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 127, column: 227, offset: 6788 },
            end: { line: 127, column: 236, offset: 6797 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 127, column: 236, offset: 6797 },
            end: { line: 127, column: 240, offset: 6801 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 127, column: 240, offset: 6801 },
            end: { line: 127, column: 255, offset: 6816 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 127, column: 255, offset: 6816 },
            end: { line: 127, column: 277, offset: 6838 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 127, column: 277, offset: 6838 },
            end: { line: 127, column: 295, offset: 6856 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 127, column: 295, offset: 6856 },
            end: { line: 127, column: 303, offset: 6864 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6562 },
        end: { line: 127, column: 303, offset: 6864 }
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
            start: { line: 129, column: 6, offset: 6871 },
            end: { line: 129, column: 12, offset: 6877 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 6866 },
        end: { line: 129, column: 12, offset: 6877 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 131, column: 1, offset: 6879 },
            end: { line: 131, column: 5, offset: 6883 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 5, offset: 6883 },
            end: { line: 131, column: 13, offset: 6891 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the resource. ',
          position: {
            start: { line: 131, column: 13, offset: 6891 },
            end: { line: 131, column: 78, offset: 6956 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 78, offset: 6956 },
            end: { line: 131, column: 86, offset: 6964 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 131, column: 86, offset: 6964 },
            end: { line: 131, column: 148, offset: 7026 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 6879 },
        end: { line: 131, column: 148, offset: 7026 }
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
            start: { line: 133, column: 6, offset: 7033 },
            end: { line: 133, column: 13, offset: 7040 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 7028 },
        end: { line: 133, column: 13, offset: 7040 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 135, column: 1, offset: 7042 },
            end: { line: 135, column: 5, offset: 7046 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 5, offset: 7046 },
            end: { line: 135, column: 14, offset: 7055 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the resource. ',
          position: {
            start: { line: 135, column: 14, offset: 7055 },
            end: { line: 135, column: 119, offset: 7160 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 119, offset: 7160 },
            end: { line: 135, column: 128, offset: 7169 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 135, column: 128, offset: 7169 },
            end: { line: 135, column: 194, offset: 7235 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 7042 },
        end: { line: 135, column: 194, offset: 7235 }
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
            start: { line: 137, column: 6, offset: 7242 },
            end: { line: 137, column: 13, offset: 7249 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 7237 },
        end: { line: 137, column: 13, offset: 7249 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 139, column: 1, offset: 7251 },
            end: { line: 139, column: 5, offset: 7255 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 5, offset: 7255 },
            end: { line: 139, column: 14, offset: 7264 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options of the resource. ',
          position: {
            start: { line: 139, column: 14, offset: 7264 },
            end: { line: 139, column: 110, offset: 7360 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 110, offset: 7360 },
            end: { line: 139, column: 119, offset: 7369 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 139, column: 119, offset: 7369 },
            end: { line: 139, column: 177, offset: 7427 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7251 },
        end: { line: 139, column: 177, offset: 7427 }
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
            start: { line: 141, column: 6, offset: 7434 },
            end: { line: 141, column: 11, offset: 7439 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7429 },
        end: { line: 141, column: 11, offset: 7439 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 143, column: 1, offset: 7441 },
            end: { line: 143, column: 5, offset: 7445 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 5, offset: 7445 },
            end: { line: 143, column: 12, offset: 7452 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 143, column: 12, offset: 7452 },
            end: { line: 143, column: 66, offset: 7506 }
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
                start: { line: 143, column: 67, offset: 7507 },
                end: { line: 143, column: 81, offset: 7521 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 66, offset: 7506 },
            end: { line: 143, column: 134, offset: 7574 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the URL. ',
          position: {
            start: { line: 143, column: 134, offset: 7574 },
            end: { line: 143, column: 162, offset: 7602 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 162, offset: 7602 },
            end: { line: 143, column: 169, offset: 7609 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 143, column: 169, offset: 7609 },
            end: { line: 143, column: 227, offset: 7667 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7441 },
        end: { line: 143, column: 227, offset: 7667 }
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
            start: { line: 145, column: 5, offset: 7673 },
            end: { line: 145, column: 21, offset: 7689 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7669 },
        end: { line: 145, column: 21, offset: 7689 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request URL is the ',
          position: {
            start: { line: 147, column: 1, offset: 7691 },
            end: { line: 147, column: 29, offset: 7719 }
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
                start: { line: 147, column: 30, offset: 7720 },
                end: { line: 147, column: 33, offset: 7723 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 29, offset: 7719 },
            end: { line: 147, column: 40, offset: 7730 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 147, column: 40, offset: 7730 },
            end: { line: 147, column: 137, offset: 7827 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7691 },
        end: { line: 147, column: 137, offset: 7827 }
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
            start: { line: 149, column: 5, offset: 7833 },
            end: { line: 149, column: 25, offset: 7853 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 7829 },
        end: { line: 149, column: 25, offset: 7853 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request.',
          position: {
            start: { line: 151, column: 1, offset: 7855 },
            end: { line: 151, column: 144, offset: 7998 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 7855 },
        end: { line: 151, column: 144, offset: 7998 }
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
            start: { line: 153, column: 5, offset: 8004 },
            end: { line: 153, column: 22, offset: 8021 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 8000 },
        end: { line: 153, column: 22, offset: 8021 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP request body is the part of the request that carries the bulk of the data sent to the server. The content type of the request body should be specified in the request's ",
          position: {
            start: { line: 155, column: 1, offset: 8023 },
            end: { line: 155, column: 178, offset: 8200 }
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
                start: { line: 155, column: 179, offset: 8201 },
                end: { line: 155, column: 191, offset: 8213 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 178, offset: 8200 },
            end: { line: 155, column: 274, offset: 8296 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 155, column: 274, offset: 8296 },
            end: { line: 155, column: 282, offset: 8304 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 8023 },
        end: { line: 155, column: 282, offset: 8304 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP request bodies:',
          position: {
            start: { line: 157, column: 1, offset: 8306 },
            end: { line: 157, column: 38, offset: 8343 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 8306 },
        end: { line: 157, column: 38, offset: 8343 }
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
                        start: { line: 158, column: 5, offset: 8348 },
                        end: { line: 158, column: 9, offset: 8352 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 8347 },
                    end: { line: 158, column: 45, offset: 8388 }
                  }
                },
                {
                  type: 'text',
                  value: ' - request body used for web applications. The request method is typically ',
                  position: {
                    start: { line: 158, column: 45, offset: 8388 },
                    end: { line: 158, column: 120, offset: 8463 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 158, column: 120, offset: 8463 },
                    end: { line: 158, column: 125, offset: 8468 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 158, column: 125, offset: 8468 },
                    end: { line: 158, column: 127, offset: 8470 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 158, column: 127, offset: 8470 },
                    end: { line: 158, column: 133, offset: 8476 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 158, column: 133, offset: 8476 },
                    end: { line: 158, column: 138, offset: 8481 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 158, column: 138, offset: 8481 },
                    end: { line: 158, column: 145, offset: 8488 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 158, column: 145, offset: 8488 },
                    end: { line: 158, column: 151, offset: 8494 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 158, column: 151, offset: 8494 },
                    end: { line: 158, column: 165, offset: 8508 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 158, column: 165, offset: 8508 },
                    end: { line: 158, column: 187, offset: 8530 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 158, column: 187, offset: 8530 },
                    end: { line: 158, column: 205, offset: 8548 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 158, column: 205, offset: 8548 },
                    end: { line: 158, column: 206, offset: 8549 }
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 8347 },
                end: { line: 158, column: 206, offset: 8549 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 2, offset: 8345 },
            end: { line: 158, column: 206, offset: 8549 }
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
                    start: { line: 159, column: 4, offset: 8553 },
                    end: { line: 159, column: 83, offset: 8632 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 159, column: 83, offset: 8632 },
                    end: { line: 159, column: 88, offset: 8637 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 159, column: 88, offset: 8637 },
                    end: { line: 159, column: 92, offset: 8641 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 159, column: 92, offset: 8641 },
                    end: { line: 159, column: 98, offset: 8647 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 159, column: 98, offset: 8647 },
                    end: { line: 159, column: 104, offset: 8653 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 159, column: 104, offset: 8653 },
                    end: { line: 159, column: 118, offset: 8667 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 159, column: 118, offset: 8667 },
                    end: { line: 159, column: 139, offset: 8688 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 159, column: 139, offset: 8688 },
                    end: { line: 159, column: 151, offset: 8700 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 151, offset: 8700 },
                    end: { line: 159, column: 153, offset: 8702 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 159, column: 153, offset: 8702 },
                    end: { line: 159, column: 164, offset: 8713 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 164, offset: 8713 },
                    end: { line: 159, column: 166, offset: 8715 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 159, column: 166, offset: 8715 },
                    end: { line: 159, column: 178, offset: 8727 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 178, offset: 8727 },
                    end: { line: 159, column: 180, offset: 8729 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 159, column: 180, offset: 8729 },
                    end: { line: 159, column: 193, offset: 8742 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 159, column: 193, offset: 8742 },
                    end: { line: 159, column: 198, offset: 8747 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 159, column: 198, offset: 8747 },
                    end: { line: 159, column: 209, offset: 8758 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 159, column: 209, offset: 8758 },
                    end: { line: 159, column: 210, offset: 8759 }
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 8553 },
                end: { line: 159, column: 210, offset: 8759 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 2, offset: 8551 },
            end: { line: 159, column: 210, offset: 8759 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 2, offset: 8345 },
        end: { line: 159, column: 210, offset: 8759 }
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
            start: { line: 161, column: 4, offset: 8764 },
            end: { line: 161, column: 17, offset: 8777 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8761 },
        end: { line: 161, column: 17, offset: 8777 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client. An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8779 },
            end: { line: 163, column: 149, offset: 8927 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8779 },
        end: { line: 163, column: 149, offset: 8927 }
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
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response status code is a three-digit code that indicates the status of the server's processing of the request.",
          position: {
            start: { line: 170, column: 1, offset: 8994 },
            end: { line: 170, column: 121, offset: 9114 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 8994 },
        end: { line: 170, column: 121, offset: 9114 }
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
            start: { line: 172, column: 6, offset: 9121 },
            end: { line: 172, column: 42, offset: 9157 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 9116 },
        end: { line: 172, column: 42, offset: 9157 }
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
            start: { line: 174, column: 7, offset: 9165 },
            end: { line: 174, column: 19, offset: 9177 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 9159 },
        end: { line: 174, column: 19, offset: 9177 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received the request headers and is ready for the client to send the request body.',
          position: {
            start: { line: 176, column: 1, offset: 9179 },
            end: { line: 176, column: 98, offset: 9276 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 9179 },
        end: { line: 176, column: 98, offset: 9276 }
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
            start: { line: 178, column: 7, offset: 9284 },
            end: { line: 178, column: 30, offset: 9307 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 9278 },
        end: { line: 178, column: 30, offset: 9307 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is switching to a different protocol, specified in the ',
          position: {
            start: { line: 180, column: 1, offset: 9309 },
            end: { line: 180, column: 67, offset: 9375 }
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
                start: { line: 180, column: 68, offset: 9376 },
                end: { line: 180, column: 75, offset: 9383 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 67, offset: 9375 },
            end: { line: 180, column: 153, offset: 9461 }
          }
        },
        {
          type: 'text',
          value: " header, at the client's request. ",
          position: {
            start: { line: 180, column: 153, offset: 9461 },
            end: { line: 180, column: 187, offset: 9495 }
          }
        },
        {
          type: 'inlineCode',
          value: '101 Switching Protocols',
          position: {
            start: { line: 180, column: 187, offset: 9495 },
            end: { line: 180, column: 212, offset: 9520 }
          }
        },
        {
          type: 'text',
          value: ' is used by the ',
          position: {
            start: { line: 180, column: 212, offset: 9520 },
            end: { line: 180, column: 228, offset: 9536 }
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
                start: { line: 180, column: 229, offset: 9537 },
                end: { line: 180, column: 238, offset: 9546 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 228, offset: 9536 },
            end: { line: 180, column: 260, offset: 9568 }
          }
        },
        {
          type: 'text',
          value: ' protocol when switching from HTTP.',
          position: {
            start: { line: 180, column: 260, offset: 9568 },
            end: { line: 180, column: 295, offset: 9603 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 9309 },
        end: { line: 180, column: 295, offset: 9603 }
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
            start: { line: 182, column: 7, offset: 9611 },
            end: { line: 182, column: 21, offset: 9625 }
          }
        }
      ],
      position: {
        start: { line: 182, column: 1, offset: 9605 },
        end: { line: 182, column: 21, offset: 9625 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received and is processing the request but no response is available yet.',
          position: {
            start: { line: 184, column: 1, offset: 9627 },
            end: { line: 184, column: 88, offset: 9714 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 9627 },
        end: { line: 184, column: 88, offset: 9714 }
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
            start: { line: 186, column: 7, offset: 9722 },
            end: { line: 186, column: 22, offset: 9737 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 9716 },
        end: { line: 186, column: 22, offset: 9737 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.',
          position: {
            start: { line: 188, column: 1, offset: 9739 },
            end: { line: 188, column: 139, offset: 9877 }
          }
        }
      ],
      position: {
        start: { line: 188, column: 1, offset: 9739 },
        end: { line: 188, column: 139, offset: 9877 }
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
            start: { line: 190, column: 6, offset: 9884 },
            end: { line: 190, column: 39, offset: 9917 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 9879 },
        end: { line: 190, column: 39, offset: 9917 }
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
            start: { line: 192, column: 7, offset: 9925 },
            end: { line: 192, column: 13, offset: 9931 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 9919 },
        end: { line: 192, column: 13, offset: 9931 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server successfully processed the request. The meaning of success depends on the request method:',
          position: {
            start: { line: 194, column: 1, offset: 9933 },
            end: { line: 194, column: 101, offset: 10033 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 9933 },
        end: { line: 194, column: 101, offset: 10033 }
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
                    start: { line: 195, column: 4, offset: 10037 },
                    end: { line: 195, column: 9, offset: 10042 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource has been successfully retrieved and transmitted in the response message body.',
                  position: {
                    start: { line: 195, column: 9, offset: 10042 },
                    end: { line: 195, column: 102, offset: 10135 }
                  }
                }
              ],
              position: {
                start: { line: 195, column: 4, offset: 10037 },
                end: { line: 195, column: 102, offset: 10135 }
              }
            }
          ],
          position: {
            start: { line: 195, column: 2, offset: 10035 },
            end: { line: 195, column: 102, offset: 10135 }
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
                    start: { line: 196, column: 4, offset: 10139 },
                    end: { line: 196, column: 10, offset: 10145 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The requested metadata about the resource is available in the response headers.',
                  position: {
                    start: { line: 196, column: 10, offset: 10145 },
                    end: { line: 196, column: 92, offset: 10227 }
                  }
                }
              ],
              position: {
                start: { line: 196, column: 4, offset: 10139 },
                end: { line: 196, column: 92, offset: 10227 }
              }
            }
          ],
          position: {
            start: { line: 196, column: 2, offset: 10137 },
            end: { line: 196, column: 92, offset: 10227 }
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
                    start: { line: 197, column: 4, offset: 10231 },
                    end: { line: 197, column: 10, offset: 10237 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created successfully.',
                  position: {
                    start: { line: 197, column: 10, offset: 10237 },
                    end: { line: 197, column: 51, offset: 10278 }
                  }
                }
              ],
              position: {
                start: { line: 197, column: 4, offset: 10231 },
                end: { line: 197, column: 51, offset: 10278 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 2, offset: 10229 },
            end: { line: 197, column: 51, offset: 10278 }
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
                    start: { line: 198, column: 4, offset: 10282 },
                    end: { line: 198, column: 9, offset: 10287 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created or updated successfully.',
                  position: {
                    start: { line: 198, column: 9, offset: 10287 },
                    end: { line: 198, column: 61, offset: 10339 }
                  }
                }
              ],
              position: {
                start: { line: 198, column: 4, offset: 10282 },
                end: { line: 198, column: 61, offset: 10339 }
              }
            }
          ],
          position: {
            start: { line: 198, column: 2, offset: 10280 },
            end: { line: 198, column: 61, offset: 10339 }
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
                    start: { line: 199, column: 4, offset: 10343 },
                    end: { line: 199, column: 11, offset: 10350 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was updated successfully.',
                  position: {
                    start: { line: 199, column: 11, offset: 10350 },
                    end: { line: 199, column: 52, offset: 10391 }
                  }
                }
              ],
              position: {
                start: { line: 199, column: 4, offset: 10343 },
                end: { line: 199, column: 52, offset: 10391 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 2, offset: 10341 },
            end: { line: 199, column: 52, offset: 10391 }
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
                    start: { line: 200, column: 4, offset: 10395 },
                    end: { line: 200, column: 12, offset: 10403 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was deleted successfully.',
                  position: {
                    start: { line: 200, column: 12, offset: 10403 },
                    end: { line: 200, column: 53, offset: 10444 }
                  }
                }
              ],
              position: {
                start: { line: 200, column: 4, offset: 10395 },
                end: { line: 200, column: 53, offset: 10444 }
              }
            }
          ],
          position: {
            start: { line: 200, column: 2, offset: 10393 },
            end: { line: 200, column: 53, offset: 10444 }
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
                    start: { line: 201, column: 4, offset: 10448 },
                    end: { line: 201, column: 13, offset: 10457 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The connection was established successfully.',
                  position: {
                    start: { line: 201, column: 13, offset: 10457 },
                    end: { line: 201, column: 60, offset: 10504 }
                  }
                }
              ],
              position: {
                start: { line: 201, column: 4, offset: 10448 },
                end: { line: 201, column: 60, offset: 10504 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 2, offset: 10446 },
            end: { line: 201, column: 60, offset: 10504 }
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
                    start: { line: 202, column: 4, offset: 10508 },
                    end: { line: 202, column: 13, offset: 10517 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The communication options are available in the ',
                  position: {
                    start: { line: 202, column: 13, offset: 10517 },
                    end: { line: 202, column: 63, offset: 10567 }
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
                        start: { line: 202, column: 64, offset: 10568 },
                        end: { line: 202, column: 69, offset: 10573 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 202, column: 63, offset: 10567 },
                    end: { line: 202, column: 145, offset: 10649 }
                  }
                },
                {
                  type: 'text',
                  value: ' header.',
                  position: {
                    start: { line: 202, column: 145, offset: 10649 },
                    end: { line: 202, column: 153, offset: 10657 }
                  }
                }
              ],
              position: {
                start: { line: 202, column: 4, offset: 10508 },
                end: { line: 202, column: 153, offset: 10657 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 2, offset: 10506 },
            end: { line: 202, column: 153, offset: 10657 }
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
                    start: { line: 203, column: 4, offset: 10661 },
                    end: { line: 203, column: 11, offset: 10668 }
                  }
                },
                {
                  type: 'text',
                  value: " - The server successfully received and echoed back the client's request.",
                  position: {
                    start: { line: 203, column: 11, offset: 10668 },
                    end: { line: 203, column: 84, offset: 10741 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10661 },
                end: { line: 203, column: 84, offset: 10741 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10659 },
            end: { line: 203, column: 84, offset: 10741 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 2, offset: 10035 },
        end: { line: 203, column: 84, offset: 10741 }
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
            start: { line: 205, column: 7, offset: 10749 },
            end: { line: 205, column: 18, offset: 10760 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 10743 },
        end: { line: 205, column: 18, offset: 10760 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded and a new resource was created.',
          position: {
            start: { line: 207, column: 1, offset: 10762 },
            end: { line: 207, column: 54, offset: 10815 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 10762 },
        end: { line: 207, column: 54, offset: 10815 }
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
            start: { line: 209, column: 7, offset: 10823 },
            end: { line: 209, column: 19, offset: 10835 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 10817 },
        end: { line: 209, column: 19, offset: 10835 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request has been received but has not yet been processed.',
          position: {
            start: { line: 211, column: 1, offset: 10837 },
            end: { line: 211, column: 62, offset: 10898 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 10837 },
        end: { line: 211, column: 62, offset: 10898 }
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
            start: { line: 213, column: 7, offset: 10906 },
            end: { line: 213, column: 40, offset: 10939 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 10900 },
        end: { line: 213, column: 40, offset: 10939 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded but the response headers or body were modified by a proxy server before being sent to the client.',
          position: {
            start: { line: 215, column: 1, offset: 10941 },
            end: { line: 215, column: 120, offset: 11060 }
          }
        }
      ],
      position: {
        start: { line: 215, column: 1, offset: 10941 },
        end: { line: 215, column: 120, offset: 11060 }
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
            start: { line: 217, column: 7, offset: 11068 },
            end: { line: 217, column: 21, offset: 11082 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 11062 },
        end: { line: 217, column: 21, offset: 11082 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, but there is no content available for this request. The client may update its cached headers for the requested resource with the response headers from this request.',
          position: {
            start: { line: 219, column: 1, offset: 11084 },
            end: { line: 219, column: 216, offset: 11299 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 11084 },
        end: { line: 219, column: 216, offset: 11299 }
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
            start: { line: 221, column: 7, offset: 11307 },
            end: { line: 221, column: 24, offset: 11324 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 11301 },
        end: { line: 221, column: 24, offset: 11324 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and asks the client to reset the document to its original state.',
          position: {
            start: { line: 223, column: 1, offset: 11326 },
            end: { line: 223, column: 116, offset: 11441 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 11326 },
        end: { line: 223, column: 116, offset: 11441 }
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
            start: { line: 225, column: 7, offset: 11449 },
            end: { line: 225, column: 26, offset: 11468 }
          }
        }
      ],
      position: {
        start: { line: 225, column: 1, offset: 11443 },
        end: { line: 225, column: 26, offset: 11468 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and is delivering only part of the requested resource. ',
          position: {
            start: { line: 227, column: 1, offset: 11470 },
            end: { line: 227, column: 107, offset: 11576 }
          }
        },
        {
          type: 'inlineCode',
          value: '206 Partial Content',
          position: {
            start: { line: 227, column: 107, offset: 11576 },
            end: { line: 227, column: 128, offset: 11597 }
          }
        },
        {
          type: 'text',
          value: ' is commonly used in ',
          position: {
            start: { line: 227, column: 128, offset: 11597 },
            end: { line: 227, column: 149, offset: 11618 }
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
                start: { line: 227, column: 150, offset: 11619 },
                end: { line: 227, column: 164, offset: 11633 }
              }
            }
          ],
          position: {
            start: { line: 227, column: 149, offset: 11618 },
            end: { line: 227, column: 238, offset: 11707 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 227, column: 238, offset: 11707 },
            end: { line: 227, column: 239, offset: 11708 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 11470 },
        end: { line: 227, column: 239, offset: 11708 }
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
            start: { line: 229, column: 6, offset: 11715 },
            end: { line: 229, column: 40, offset: 11749 }
          }
        }
      ],
      position: {
        start: { line: 229, column: 1, offset: 11710 },
        end: { line: 229, column: 40, offset: 11749 }
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
            start: { line: 231, column: 7, offset: 11757 },
            end: { line: 231, column: 27, offset: 11777 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 1, offset: 11751 },
        end: { line: 231, column: 27, offset: 11777 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has multiple representations, and the client needs to choose which one to access.',
          position: {
            start: { line: 233, column: 1, offset: 11779 },
            end: { line: 233, column: 95, offset: 11873 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 11779 },
        end: { line: 233, column: 95, offset: 11873 }
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
            start: { line: 235, column: 7, offset: 11881 },
            end: { line: 235, column: 28, offset: 11902 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 11875 },
        end: { line: 235, column: 28, offset: 11902 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 237, column: 1, offset: 11904 },
            end: { line: 237, column: 118, offset: 12021 }
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
                start: { line: 237, column: 119, offset: 12022 },
                end: { line: 237, column: 127, offset: 12030 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 118, offset: 12021 },
            end: { line: 237, column: 206, offset: 12109 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 237, column: 206, offset: 12109 },
            end: { line: 237, column: 230, offset: 12133 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 11904 },
        end: { line: 237, column: 230, offset: 12133 }
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
            start: { line: 239, column: 7, offset: 12141 },
            end: { line: 239, column: 16, offset: 12150 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 12135 },
        end: { line: 239, column: 16, offset: 12150 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 241, column: 1, offset: 12152 },
            end: { line: 241, column: 118, offset: 12269 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 241, column: 118, offset: 12269 },
            end: { line: 241, column: 128, offset: 12279 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 241, column: 128, offset: 12279 },
            end: { line: 241, column: 152, offset: 12303 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 12152 },
        end: { line: 241, column: 152, offset: 12303 }
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
            start: { line: 243, column: 7, offset: 12311 },
            end: { line: 243, column: 20, offset: 12324 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 12305 },
        end: { line: 243, column: 20, offset: 12324 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is redirecting the client's request for the resource to a different resource. The URL of the redirected resource is available in the ",
          position: {
            start: { line: 245, column: 1, offset: 12326 },
            end: { line: 245, column: 145, offset: 12470 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 245, column: 145, offset: 12470 },
            end: { line: 245, column: 155, offset: 12480 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the HTTP ',
          position: {
            start: { line: 245, column: 155, offset: 12480 },
            end: { line: 245, column: 211, offset: 12536 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 245, column: 211, offset: 12536 },
            end: { line: 245, column: 216, offset: 12541 }
          }
        },
        {
          type: 'text',
          value: ' method to request the redirected resource.',
          position: {
            start: { line: 245, column: 216, offset: 12541 },
            end: { line: 245, column: 259, offset: 12584 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 12326 },
        end: { line: 245, column: 259, offset: 12584 }
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
            start: { line: 247, column: 7, offset: 12592 },
            end: { line: 247, column: 23, offset: 12608 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 12586 },
        end: { line: 247, column: 23, offset: 12608 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has not been modified since the last access, so the client can continue to use the same cached version of the resource.',
          position: {
            start: { line: 249, column: 1, offset: 12610 },
            end: { line: 249, column: 133, offset: 12742 }
          }
        }
      ],
      position: {
        start: { line: 249, column: 1, offset: 12610 },
        end: { line: 249, column: 133, offset: 12742 }
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
            start: { line: 251, column: 7, offset: 12750 },
            end: { line: 251, column: 29, offset: 12772 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 12744 },
        end: { line: 251, column: 29, offset: 12772 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 253, column: 1, offset: 12774 },
            end: { line: 253, column: 118, offset: 12891 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 253, column: 118, offset: 12891 },
            end: { line: 253, column: 128, offset: 12901 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 253, column: 128, offset: 12901 },
            end: { line: 253, column: 235, offset: 13008 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 12774 },
        end: { line: 253, column: 235, offset: 13008 }
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
            start: { line: 255, column: 7, offset: 13016 },
            end: { line: 255, column: 29, offset: 13038 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 13010 },
        end: { line: 255, column: 29, offset: 13038 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 257, column: 1, offset: 13040 },
            end: { line: 257, column: 118, offset: 13157 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 257, column: 118, offset: 13157 },
            end: { line: 257, column: 128, offset: 13167 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 257, column: 128, offset: 13167 },
            end: { line: 257, column: 235, offset: 13274 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 13040 },
        end: { line: 257, column: 235, offset: 13274 }
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
            start: { line: 259, column: 6, offset: 13281 },
            end: { line: 259, column: 41, offset: 13316 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 13276 },
        end: { line: 259, column: 41, offset: 13316 }
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
            start: { line: 261, column: 7, offset: 13324 },
            end: { line: 261, column: 22, offset: 13339 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 13318 },
        end: { line: 261, column: 22, offset: 13339 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot process the request due to client error, e.g. invalid syntax.',
          position: {
            start: { line: 263, column: 1, offset: 13341 },
            end: { line: 263, column: 80, offset: 13420 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 13341 },
        end: { line: 263, column: 80, offset: 13420 }
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
            start: { line: 265, column: 7, offset: 13428 },
            end: { line: 265, column: 23, offset: 13444 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 13422 },
        end: { line: 265, column: 23, offset: 13444 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials.',
          position: {
            start: { line: 267, column: 1, offset: 13446 },
            end: { line: 267, column: 52, offset: 13497 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 13446 },
        end: { line: 267, column: 52, offset: 13497 }
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
            start: { line: 269, column: 7, offset: 13505 },
            end: { line: 269, column: 27, offset: 13525 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 13499 },
        end: { line: 269, column: 27, offset: 13525 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested content is not available until the client makes a payment.',
          position: {
            start: { line: 271, column: 1, offset: 13527 },
            end: { line: 271, column: 73, offset: 13599 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 13527 },
        end: { line: 271, column: 73, offset: 13599 }
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
            start: { line: 273, column: 7, offset: 13607 },
            end: { line: 273, column: 20, offset: 13620 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 13601 },
        end: { line: 273, column: 20, offset: 13620 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is refusing the client access to the requested resource.',
          position: {
            start: { line: 275, column: 1, offset: 13622 },
            end: { line: 275, column: 68, offset: 13689 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 13622 },
        end: { line: 275, column: 68, offset: 13689 }
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
            start: { line: 277, column: 7, offset: 13697 },
            end: { line: 277, column: 20, offset: 13710 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 13691 },
        end: { line: 277, column: 20, offset: 13710 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot find the requested resource. Either the URL is not recognized, or the URL is recognized but the requested resource does not exist.',
          position: {
            start: { line: 279, column: 1, offset: 13712 },
            end: { line: 279, column: 149, offset: 13860 }
          }
        }
      ],
      position: {
        start: { line: 279, column: 1, offset: 13712 },
        end: { line: 279, column: 149, offset: 13860 }
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
            start: { line: 281, column: 7, offset: 13868 },
            end: { line: 281, column: 29, offset: 13890 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 13862 },
        end: { line: 281, column: 29, offset: 13890 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is known by the server but it is not supported for the requested resource.',
          position: {
            start: { line: 283, column: 1, offset: 13892 },
            end: { line: 283, column: 94, offset: 13985 }
          }
        }
      ],
      position: {
        start: { line: 283, column: 1, offset: 13892 },
        end: { line: 283, column: 94, offset: 13985 }
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
            start: { line: 285, column: 7, offset: 13993 },
            end: { line: 285, column: 25, offset: 14011 }
          }
        }
      ],
      position: {
        start: { line: 285, column: 1, offset: 13987 },
        end: { line: 285, column: 25, offset: 14011 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is unable to provide a response that matches the client's requested format, typically specified in the ",
          position: {
            start: { line: 287, column: 1, offset: 14013 },
            end: { line: 287, column: 115, offset: 14127 }
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
                start: { line: 287, column: 116, offset: 14128 },
                end: { line: 287, column: 122, offset: 14134 }
              }
            }
          ],
          position: {
            start: { line: 287, column: 115, offset: 14127 },
            end: { line: 287, column: 199, offset: 14211 }
          }
        },
        {
          type: 'text',
          value: ' header of the request.',
          position: {
            start: { line: 287, column: 199, offset: 14211 },
            end: { line: 287, column: 222, offset: 14234 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 14013 },
        end: { line: 287, column: 222, offset: 14234 }
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
            start: { line: 289, column: 7, offset: 14242 },
            end: { line: 289, column: 40, offset: 14275 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 14236 },
        end: { line: 289, column: 40, offset: 14275 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials for the ',
          position: {
            start: { line: 291, column: 1, offset: 14277 },
            end: { line: 291, column: 60, offset: 14336 }
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
                start: { line: 291, column: 61, offset: 14337 },
                end: { line: 291, column: 73, offset: 14349 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 60, offset: 14336 },
            end: { line: 291, column: 118, offset: 14394 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 291, column: 118, offset: 14394 },
            end: { line: 291, column: 119, offset: 14395 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 14277 },
        end: { line: 291, column: 120, offset: 14396 }
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
            start: { line: 293, column: 7, offset: 14404 },
            end: { line: 293, column: 26, offset: 14423 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 14398 },
        end: { line: 293, column: 26, offset: 14423 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server would like to shut down the unused connection.',
          position: {
            start: { line: 295, column: 1, offset: 14425 },
            end: { line: 295, column: 58, offset: 14482 }
          }
        }
      ],
      position: {
        start: { line: 295, column: 1, offset: 14425 },
        end: { line: 295, column: 58, offset: 14482 }
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
            start: { line: 297, column: 7, offset: 14490 },
            end: { line: 297, column: 19, offset: 14502 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 14484 },
        end: { line: 297, column: 19, offset: 14502 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request conflicts with the current state of the resource, e.g. when trying to create a resource that already exists.',
          position: {
            start: { line: 299, column: 1, offset: 14504 },
            end: { line: 299, column: 121, offset: 14624 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 14504 },
        end: { line: 299, column: 121, offset: 14624 }
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
            start: { line: 301, column: 7, offset: 14632 },
            end: { line: 301, column: 15, offset: 14640 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 14626 },
        end: { line: 301, column: 15, offset: 14640 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has been permanently removed from the server.',
          position: {
            start: { line: 303, column: 1, offset: 14642 },
            end: { line: 303, column: 59, offset: 14700 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 14642 },
        end: { line: 303, column: 59, offset: 14700 }
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
            start: { line: 305, column: 7, offset: 14708 },
            end: { line: 305, column: 26, offset: 14727 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 14702 },
        end: { line: 305, column: 26, offset: 14727 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 307, column: 1, offset: 14729 },
            end: { line: 307, column: 5, offset: 14733 }
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
                start: { line: 307, column: 6, offset: 14734 },
                end: { line: 307, column: 20, offset: 14748 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 5, offset: 14733 },
            end: { line: 307, column: 105, offset: 14833 }
          }
        },
        {
          type: 'text',
          value: ' request header is required but not present.',
          position: {
            start: { line: 307, column: 105, offset: 14833 },
            end: { line: 307, column: 149, offset: 14877 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 14729 },
        end: { line: 307, column: 149, offset: 14877 }
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
            start: { line: 309, column: 7, offset: 14885 },
            end: { line: 309, column: 30, offset: 14908 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 1, offset: 14879 },
        end: { line: 309, column: 30, offset: 14908 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request headers have indicated preconditions that the server does not meet.',
          position: {
            start: { line: 311, column: 1, offset: 14910 },
            end: { line: 311, column: 80, offset: 14989 }
          }
        }
      ],
      position: {
        start: { line: 311, column: 1, offset: 14910 },
        end: { line: 311, column: 80, offset: 14989 }
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
            start: { line: 313, column: 7, offset: 14997 },
            end: { line: 313, column: 28, offset: 15018 }
          }
        }
      ],
      position: {
        start: { line: 313, column: 1, offset: 14991 },
        end: { line: 313, column: 28, offset: 15018 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request body is larger than the limits defined by the server. The server might close the connection or respond with a ',
          position: {
            start: { line: 315, column: 1, offset: 15020 },
            end: { line: 315, column: 123, offset: 15142 }
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
                start: { line: 315, column: 124, offset: 15143 },
                end: { line: 315, column: 135, offset: 15154 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 123, offset: 15142 },
            end: { line: 315, column: 217, offset: 15236 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 315, column: 217, offset: 15236 },
            end: { line: 315, column: 225, offset: 15244 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 15020 },
        end: { line: 315, column: 225, offset: 15244 }
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
            start: { line: 317, column: 7, offset: 15252 },
            end: { line: 317, column: 23, offset: 15268 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 15246 },
        end: { line: 317, column: 23, offset: 15268 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource is too long.',
          position: {
            start: { line: 319, column: 1, offset: 15270 },
            end: { line: 319, column: 47, offset: 15316 }
          }
        }
      ],
      position: {
        start: { line: 319, column: 1, offset: 15270 },
        end: { line: 319, column: 47, offset: 15316 }
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
            start: { line: 321, column: 7, offset: 15324 },
            end: { line: 321, column: 33, offset: 15350 }
          }
        }
      ],
      position: {
        start: { line: 321, column: 1, offset: 15318 },
        end: { line: 321, column: 33, offset: 15350 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The media format of the requested resource is not supported by the server.',
          position: {
            start: { line: 323, column: 1, offset: 15352 },
            end: { line: 323, column: 75, offset: 15426 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 15352 },
        end: { line: 323, column: 75, offset: 15426 }
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
            start: { line: 325, column: 7, offset: 15434 },
            end: { line: 325, column: 32, offset: 15459 }
          }
        }
      ],
      position: {
        start: { line: 325, column: 1, offset: 15428 },
        end: { line: 325, column: 32, offset: 15459 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The ranges specified in the request's ",
          position: {
            start: { line: 327, column: 1, offset: 15461 },
            end: { line: 327, column: 39, offset: 15499 }
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
                start: { line: 327, column: 40, offset: 15500 },
                end: { line: 327, column: 45, offset: 15505 }
              }
            }
          ],
          position: {
            start: { line: 327, column: 39, offset: 15499 },
            end: { line: 327, column: 121, offset: 15581 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be fulfilled by the server.',
          position: {
            start: { line: 327, column: 121, offset: 15581 },
            end: { line: 327, column: 163, offset: 15623 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 15461 },
        end: { line: 327, column: 163, offset: 15623 }
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
            start: { line: 329, column: 7, offset: 15631 },
            end: { line: 329, column: 29, offset: 15653 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 15625 },
        end: { line: 329, column: 29, offset: 15653 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The expectation indicated by the request's ",
          position: {
            start: { line: 331, column: 1, offset: 15655 },
            end: { line: 331, column: 44, offset: 15698 }
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
                start: { line: 331, column: 45, offset: 15699 },
                end: { line: 331, column: 51, offset: 15705 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 44, offset: 15698 },
            end: { line: 331, column: 128, offset: 15782 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be met by the server.',
          position: {
            start: { line: 331, column: 128, offset: 15782 },
            end: { line: 331, column: 164, offset: 15818 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 15655 },
        end: { line: 331, column: 164, offset: 15818 }
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
            start: { line: 333, column: 7, offset: 15826 },
            end: { line: 333, column: 23, offset: 15842 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 15820 },
        end: { line: 333, column: 23, offset: 15842 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses the attempt to brew coffee with a teapot.',
          position: {
            start: { line: 335, column: 1, offset: 15844 },
            end: { line: 335, column: 61, offset: 15904 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 15844 },
        end: { line: 335, column: 61, offset: 15904 }
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
            start: { line: 337, column: 7, offset: 15912 },
            end: { line: 337, column: 30, offset: 15935 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 15906 },
        end: { line: 337, column: 30, offset: 15935 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The request was directed at a server that is not configured to produce a response for the request URL's scheme and authority.",
          position: {
            start: { line: 339, column: 1, offset: 15937 },
            end: { line: 339, column: 126, offset: 16062 }
          }
        }
      ],
      position: {
        start: { line: 339, column: 1, offset: 15937 },
        end: { line: 339, column: 126, offset: 16062 }
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
            start: { line: 341, column: 7, offset: 16070 },
            end: { line: 341, column: 32, offset: 16095 }
          }
        }
      ],
      position: {
        start: { line: 341, column: 1, offset: 16064 },
        end: { line: 341, column: 32, offset: 16095 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request was well-formed but was unable to be processed due to semantic errors.',
          position: {
            start: { line: 343, column: 1, offset: 16097 },
            end: { line: 343, column: 83, offset: 16179 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 16097 },
        end: { line: 343, column: 83, offset: 16179 }
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
            start: { line: 345, column: 7, offset: 16187 },
            end: { line: 345, column: 17, offset: 16197 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 16181 },
        end: { line: 345, column: 17, offset: 16197 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is locked.',
          position: {
            start: { line: 347, column: 1, offset: 16199 },
            end: { line: 347, column: 34, offset: 16232 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 16199 },
        end: { line: 347, column: 34, offset: 16232 }
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
            start: { line: 349, column: 7, offset: 16240 },
            end: { line: 349, column: 28, offset: 16261 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 16234 },
        end: { line: 349, column: 28, offset: 16261 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request failed due to the failure of a previous request.',
          position: {
            start: { line: 351, column: 1, offset: 16263 },
            end: { line: 351, column: 61, offset: 16323 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 16263 },
        end: { line: 351, column: 61, offset: 16323 }
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
            start: { line: 353, column: 7, offset: 16331 },
            end: { line: 353, column: 20, offset: 16344 }
          }
        }
      ],
      position: {
        start: { line: 353, column: 1, offset: 16325 },
        end: { line: 353, column: 20, offset: 16344 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is unwilling to risk processing a request that might be replayed.',
          position: {
            start: { line: 355, column: 1, offset: 16346 },
            end: { line: 355, column: 77, offset: 16422 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 16346 },
        end: { line: 355, column: 77, offset: 16422 }
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
            start: { line: 357, column: 7, offset: 16430 },
            end: { line: 357, column: 27, offset: 16450 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 16424 },
        end: { line: 357, column: 27, offset: 16450 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses to process the request under the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an ',
          position: {
            start: { line: 359, column: 1, offset: 16452 },
            end: { line: 359, column: 171, offset: 16622 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Upgrade',
          position: {
            start: { line: 359, column: 171, offset: 16622 },
            end: { line: 359, column: 180, offset: 16631 }
          }
        },
        {
          type: 'text',
          value: ' header in the response to indicate the required protocol(s).',
          position: {
            start: { line: 359, column: 180, offset: 16631 },
            end: { line: 359, column: 241, offset: 16692 }
          }
        }
      ],
      position: {
        start: { line: 359, column: 1, offset: 16452 },
        end: { line: 359, column: 241, offset: 16692 }
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
            start: { line: 361, column: 7, offset: 16700 },
            end: { line: 361, column: 32, offset: 16725 }
          }
        }
      ],
      position: {
        start: { line: 361, column: 1, offset: 16694 },
        end: { line: 361, column: 32, offset: 16725 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The origin server requires the request to be ',
          position: {
            start: { line: 363, column: 1, offset: 16727 },
            end: { line: 363, column: 46, offset: 16772 }
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
                start: { line: 363, column: 47, offset: 16773 },
                end: { line: 363, column: 58, offset: 16784 }
              }
            }
          ],
          position: {
            start: { line: 363, column: 46, offset: 16772 },
            end: { line: 363, column: 138, offset: 16864 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 363, column: 138, offset: 16864 },
            end: { line: 363, column: 139, offset: 16865 }
          }
        }
      ],
      position: {
        start: { line: 363, column: 1, offset: 16727 },
        end: { line: 363, column: 139, offset: 16865 }
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
            start: { line: 365, column: 7, offset: 16873 },
            end: { line: 365, column: 28, offset: 16894 }
          }
        }
      ],
      position: {
        start: { line: 365, column: 1, offset: 16867 },
        end: { line: 365, column: 28, offset: 16894 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client has sent too many requests in a given time period. See ',
          position: {
            start: { line: 367, column: 1, offset: 16896 },
            end: { line: 367, column: 67, offset: 16962 }
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
                start: { line: 367, column: 68, offset: 16963 },
                end: { line: 367, column: 81, offset: 16976 }
              }
            }
          ],
          position: {
            start: { line: 367, column: 67, offset: 16962 },
            end: { line: 367, column: 144, offset: 17039 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 367, column: 144, offset: 17039 },
            end: { line: 367, column: 145, offset: 17040 }
          }
        }
      ],
      position: {
        start: { line: 367, column: 1, offset: 16896 },
        end: { line: 367, column: 145, offset: 17040 }
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
            start: { line: 369, column: 7, offset: 17048 },
            end: { line: 369, column: 42, offset: 17083 }
          }
        }
      ],
      position: {
        start: { line: 369, column: 1, offset: 17042 },
        end: { line: 369, column: 42, offset: 17083 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request header fields are too large.',
          position: {
            start: { line: 371, column: 1, offset: 17085 },
            end: { line: 371, column: 41, offset: 17125 }
          }
        }
      ],
      position: {
        start: { line: 371, column: 1, offset: 17085 },
        end: { line: 371, column: 41, offset: 17125 }
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
            start: { line: 373, column: 7, offset: 17133 },
            end: { line: 373, column: 40, offset: 17166 }
          }
        }
      ],
      position: {
        start: { line: 373, column: 1, offset: 17127 },
        end: { line: 373, column: 40, offset: 17166 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is unavailable due to legal reasons.',
          position: {
            start: { line: 375, column: 1, offset: 17168 },
            end: { line: 375, column: 60, offset: 17227 }
          }
        }
      ],
      position: {
        start: { line: 375, column: 1, offset: 17168 },
        end: { line: 375, column: 60, offset: 17227 }
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
            start: { line: 377, column: 6, offset: 17234 },
            end: { line: 377, column: 41, offset: 17269 }
          }
        }
      ],
      position: {
        start: { line: 377, column: 1, offset: 17229 },
        end: { line: 377, column: 41, offset: 17269 }
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
            start: { line: 379, column: 7, offset: 17277 },
            end: { line: 379, column: 32, offset: 17302 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 17271 },
        end: { line: 379, column: 32, offset: 17302 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has encountered a situation it does not know how to handle.',
          position: {
            start: { line: 381, column: 1, offset: 17304 },
            end: { line: 381, column: 71, offset: 17374 }
          }
        }
      ],
      position: {
        start: { line: 381, column: 1, offset: 17304 },
        end: { line: 381, column: 71, offset: 17374 }
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
            start: { line: 383, column: 7, offset: 17382 },
            end: { line: 383, column: 26, offset: 17401 }
          }
        }
      ],
      position: {
        start: { line: 383, column: 1, offset: 17376 },
        end: { line: 383, column: 26, offset: 17401 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is not supported by the server and cannot be handled.',
          position: {
            start: { line: 385, column: 1, offset: 17403 },
            end: { line: 385, column: 73, offset: 17475 }
          }
        }
      ],
      position: {
        start: { line: 385, column: 1, offset: 17403 },
        end: { line: 385, column: 73, offset: 17475 }
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
            start: { line: 387, column: 7, offset: 17483 },
            end: { line: 387, column: 22, offset: 17498 }
          }
        }
      ],
      position: {
        start: { line: 387, column: 1, offset: 17477 },
        end: { line: 387, column: 22, offset: 17498 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The gateway server received an invalid response from an upstream server or origin server.',
          position: {
            start: { line: 389, column: 1, offset: 17500 },
            end: { line: 389, column: 90, offset: 17589 }
          }
        }
      ],
      position: {
        start: { line: 389, column: 1, offset: 17500 },
        end: { line: 389, column: 90, offset: 17589 }
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
            start: { line: 391, column: 7, offset: 17597 },
            end: { line: 391, column: 30, offset: 17620 }
          }
        }
      ],
      position: {
        start: { line: 391, column: 1, offset: 17591 },
        end: { line: 391, column: 30, offset: 17620 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is not ready to handle the request.',
          position: {
            start: { line: 393, column: 1, offset: 17622 },
            end: { line: 393, column: 47, offset: 17668 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 17622 },
        end: { line: 393, column: 47, offset: 17668 }
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
            start: { line: 395, column: 7, offset: 17676 },
            end: { line: 395, column: 26, offset: 17695 }
          }
        }
      ],
      position: {
        start: { line: 395, column: 1, offset: 17670 },
        end: { line: 395, column: 26, offset: 17695 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The gateway server's request to an upstream server or origin server timed out.",
          position: {
            start: { line: 397, column: 1, offset: 17697 },
            end: { line: 397, column: 79, offset: 17775 }
          }
        }
      ],
      position: {
        start: { line: 397, column: 1, offset: 17697 },
        end: { line: 397, column: 79, offset: 17775 }
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
            start: { line: 399, column: 7, offset: 17783 },
            end: { line: 399, column: 37, offset: 17813 }
          }
        }
      ],
      position: {
        start: { line: 399, column: 1, offset: 17777 },
        end: { line: 399, column: 37, offset: 17813 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP version used in the request is not supported by the server.',
          position: {
            start: { line: 401, column: 1, offset: 17815 },
            end: { line: 401, column: 69, offset: 17883 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 17815 },
        end: { line: 401, column: 69, offset: 17883 }
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
            start: { line: 403, column: 7, offset: 17891 },
            end: { line: 403, column: 34, offset: 17918 }
          }
        }
      ],
      position: {
        start: { line: 403, column: 1, offset: 17885 },
        end: { line: 403, column: 34, offset: 17918 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has an internal configuration error related to content negotiation.',
          position: {
            start: { line: 405, column: 1, offset: 17920 },
            end: { line: 405, column: 79, offset: 17998 }
          }
        }
      ],
      position: {
        start: { line: 405, column: 1, offset: 17920 },
        end: { line: 405, column: 79, offset: 17998 }
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
            start: { line: 407, column: 7, offset: 18006 },
            end: { line: 407, column: 31, offset: 18030 }
          }
        }
      ],
      position: {
        start: { line: 407, column: 1, offset: 18000 },
        end: { line: 407, column: 31, offset: 18030 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server does not have enough available storage to successfully process the request.',
          position: {
            start: { line: 409, column: 1, offset: 18032 },
            end: { line: 409, column: 87, offset: 18118 }
          }
        }
      ],
      position: {
        start: { line: 409, column: 1, offset: 18032 },
        end: { line: 409, column: 87, offset: 18118 }
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
            start: { line: 411, column: 7, offset: 18126 },
            end: { line: 411, column: 24, offset: 18143 }
          }
        }
      ],
      position: {
        start: { line: 411, column: 1, offset: 18120 },
        end: { line: 411, column: 24, offset: 18143 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server detected an infinite loop while processing the request.',
          position: {
            start: { line: 413, column: 1, offset: 18145 },
            end: { line: 413, column: 67, offset: 18211 }
          }
        }
      ],
      position: {
        start: { line: 413, column: 1, offset: 18145 },
        end: { line: 413, column: 67, offset: 18211 }
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
            start: { line: 415, column: 7, offset: 18219 },
            end: { line: 415, column: 23, offset: 18235 }
          }
        }
      ],
      position: {
        start: { line: 415, column: 1, offset: 18213 },
        end: { line: 415, column: 23, offset: 18235 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client declares an HTTP Extension (',
          position: {
            start: { line: 417, column: 1, offset: 18237 },
            end: { line: 417, column: 40, offset: 18276 }
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
                start: { line: 417, column: 41, offset: 18277 },
                end: { line: 417, column: 49, offset: 18285 }
              }
            }
          ],
          position: {
            start: { line: 417, column: 40, offset: 18276 },
            end: { line: 417, column: 97, offset: 18333 }
          }
        },
        {
          type: 'text',
          value: ') that should be used to process the request, but the extension is not supported by the server.',
          position: {
            start: { line: 417, column: 97, offset: 18333 },
            end: { line: 417, column: 192, offset: 18428 }
          }
        }
      ],
      position: {
        start: { line: 417, column: 1, offset: 18237 },
        end: { line: 417, column: 192, offset: 18428 }
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
            start: { line: 419, column: 7, offset: 18436 },
            end: { line: 419, column: 42, offset: 18471 }
          }
        }
      ],
      position: {
        start: { line: 419, column: 1, offset: 18430 },
        end: { line: 419, column: 42, offset: 18471 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client needs to authenticate to gain network access.',
          position: {
            start: { line: 421, column: 1, offset: 18473 },
            end: { line: 421, column: 57, offset: 18529 }
          }
        }
      ],
      position: {
        start: { line: 421, column: 1, offset: 18473 },
        end: { line: 421, column: 57, offset: 18529 }
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
            start: { line: 423, column: 5, offset: 18535 },
            end: { line: 423, column: 26, offset: 18556 }
          }
        }
      ],
      position: {
        start: { line: 423, column: 1, offset: 18531 },
        end: { line: 423, column: 26, offset: 18556 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP response headers are key-value pairs assigned to each response. HTTP response headers pass additional context and metadata about the response.',
          position: {
            start: { line: 425, column: 1, offset: 18558 },
            end: { line: 425, column: 148, offset: 18705 }
          }
        }
      ],
      position: {
        start: { line: 425, column: 1, offset: 18558 },
        end: { line: 425, column: 148, offset: 18705 }
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
            start: { line: 427, column: 5, offset: 18711 },
            end: { line: 427, column: 23, offset: 18729 }
          }
        }
      ],
      position: {
        start: { line: 427, column: 1, offset: 18707 },
        end: { line: 427, column: 23, offset: 18729 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response body is the part of the response that carries the bulk of the data sent back to the client. The content type of the response body should be specified in the response's ",
          position: {
            start: { line: 429, column: 1, offset: 18731 },
            end: { line: 429, column: 187, offset: 18917 }
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
                start: { line: 429, column: 188, offset: 18918 },
                end: { line: 429, column: 200, offset: 18930 }
              }
            }
          ],
          position: {
            start: { line: 429, column: 187, offset: 18917 },
            end: { line: 429, column: 283, offset: 19013 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 429, column: 283, offset: 19013 },
            end: { line: 429, column: 291, offset: 19021 }
          }
        }
      ],
      position: {
        start: { line: 429, column: 1, offset: 18731 },
        end: { line: 429, column: 291, offset: 19021 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP response bodies:',
          position: {
            start: { line: 431, column: 1, offset: 19023 },
            end: { line: 431, column: 39, offset: 19061 }
          }
        }
      ],
      position: {
        start: { line: 431, column: 1, offset: 19023 },
        end: { line: 431, column: 39, offset: 19061 }
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
                        start: { line: 432, column: 5, offset: 19066 },
                        end: { line: 432, column: 9, offset: 19070 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 432, column: 4, offset: 19065 },
                    end: { line: 432, column: 61, offset: 19122 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web pages. The method of the request is typically ',
                  position: {
                    start: { line: 432, column: 61, offset: 19122 },
                    end: { line: 432, column: 137, offset: 19198 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 432, column: 137, offset: 19198 },
                    end: { line: 432, column: 142, offset: 19203 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 432, column: 142, offset: 19203 },
                    end: { line: 432, column: 148, offset: 19209 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 432, column: 148, offset: 19209 },
                    end: { line: 432, column: 162, offset: 19223 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 432, column: 162, offset: 19223 },
                    end: { line: 432, column: 184, offset: 19245 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/html',
                  position: {
                    start: { line: 432, column: 184, offset: 19245 },
                    end: { line: 432, column: 195, offset: 19256 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 432, column: 195, offset: 19256 },
                    end: { line: 432, column: 196, offset: 19257 }
                  }
                }
              ],
              position: {
                start: { line: 432, column: 4, offset: 19065 },
                end: { line: 432, column: 196, offset: 19257 }
              }
            }
          ],
          position: {
            start: { line: 432, column: 2, offset: 19063 },
            end: { line: 432, column: 196, offset: 19257 }
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
                        start: { line: 433, column: 5, offset: 19262 },
                        end: { line: 433, column: 9, offset: 19266 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 433, column: 4, offset: 19261 },
                    end: { line: 433, column: 45, offset: 19302 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web applications. The method of the request is typically ',
                  position: {
                    start: { line: 433, column: 45, offset: 19302 },
                    end: { line: 433, column: 128, offset: 19385 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 433, column: 128, offset: 19385 },
                    end: { line: 433, column: 133, offset: 19390 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 433, column: 133, offset: 19390 },
                    end: { line: 433, column: 135, offset: 19392 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 433, column: 135, offset: 19392 },
                    end: { line: 433, column: 141, offset: 19398 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 433, column: 141, offset: 19398 },
                    end: { line: 433, column: 146, offset: 19403 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 433, column: 146, offset: 19403 },
                    end: { line: 433, column: 153, offset: 19410 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 433, column: 153, offset: 19410 },
                    end: { line: 433, column: 159, offset: 19416 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 433, column: 159, offset: 19416 },
                    end: { line: 433, column: 173, offset: 19430 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 433, column: 173, offset: 19430 },
                    end: { line: 433, column: 195, offset: 19452 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 433, column: 195, offset: 19452 },
                    end: { line: 433, column: 213, offset: 19470 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 433, column: 213, offset: 19470 },
                    end: { line: 433, column: 214, offset: 19471 }
                  }
                }
              ],
              position: {
                start: { line: 433, column: 4, offset: 19261 },
                end: { line: 433, column: 214, offset: 19471 }
              }
            }
          ],
          position: {
            start: { line: 433, column: 2, offset: 19259 },
            end: { line: 433, column: 214, offset: 19471 }
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
                        start: { line: 434, column: 5, offset: 19476 },
                        end: { line: 434, column: 8, offset: 19479 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 4, offset: 19475 },
                    end: { line: 434, column: 46, offset: 19517 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for ',
                  position: {
                    start: { line: 434, column: 46, offset: 19517 },
                    end: { line: 434, column: 72, offset: 19543 }
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
                        start: { line: 434, column: 73, offset: 19544 },
                        end: { line: 434, column: 81, offset: 19552 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 72, offset: 19543 },
                    end: { line: 434, column: 161, offset: 19632 }
                  }
                },
                {
                  type: 'text',
                  value: ' or web applications. The method of the request can be ',
                  position: {
                    start: { line: 434, column: 161, offset: 19632 },
                    end: { line: 434, column: 216, offset: 19687 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 434, column: 216, offset: 19687 },
                    end: { line: 434, column: 221, offset: 19692 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 221, offset: 19692 },
                    end: { line: 434, column: 223, offset: 19694 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 434, column: 223, offset: 19694 },
                    end: { line: 434, column: 228, offset: 19699 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 228, offset: 19699 },
                    end: { line: 434, column: 230, offset: 19701 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 434, column: 230, offset: 19701 },
                    end: { line: 434, column: 236, offset: 19707 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 434, column: 236, offset: 19707 },
                    end: { line: 434, column: 241, offset: 19712 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 434, column: 241, offset: 19712 },
                    end: { line: 434, column: 248, offset: 19719 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 434, column: 248, offset: 19719 },
                    end: { line: 434, column: 254, offset: 19725 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 434, column: 254, offset: 19725 },
                    end: { line: 434, column: 268, offset: 19739 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 434, column: 268, offset: 19739 },
                    end: { line: 434, column: 289, offset: 19760 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/xml',
                  position: {
                    start: { line: 434, column: 289, offset: 19760 },
                    end: { line: 434, column: 306, offset: 19777 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 434, column: 306, offset: 19777 },
                    end: { line: 434, column: 310, offset: 19781 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/xml',
                  position: {
                    start: { line: 434, column: 310, offset: 19781 },
                    end: { line: 434, column: 320, offset: 19791 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 434, column: 320, offset: 19791 },
                    end: { line: 434, column: 321, offset: 19792 }
                  }
                }
              ],
              position: {
                start: { line: 434, column: 4, offset: 19475 },
                end: { line: 434, column: 321, offset: 19792 }
              }
            }
          ],
          position: {
            start: { line: 434, column: 2, offset: 19473 },
            end: { line: 434, column: 321, offset: 19792 }
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
                    start: { line: 435, column: 4, offset: 19796 },
                    end: { line: 435, column: 91, offset: 19883 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 435, column: 91, offset: 19883 },
                    end: { line: 435, column: 96, offset: 19888 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 435, column: 96, offset: 19888 },
                    end: { line: 435, column: 102, offset: 19894 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 435, column: 102, offset: 19894 },
                    end: { line: 435, column: 116, offset: 19908 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 435, column: 116, offset: 19908 },
                    end: { line: 435, column: 137, offset: 19929 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 435, column: 137, offset: 19929 },
                    end: { line: 435, column: 149, offset: 19941 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 149, offset: 19941 },
                    end: { line: 435, column: 151, offset: 19943 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 435, column: 151, offset: 19943 },
                    end: { line: 435, column: 162, offset: 19954 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 162, offset: 19954 },
                    end: { line: 435, column: 164, offset: 19956 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 435, column: 164, offset: 19956 },
                    end: { line: 435, column: 176, offset: 19968 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 176, offset: 19968 },
                    end: { line: 435, column: 178, offset: 19970 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 435, column: 178, offset: 19970 },
                    end: { line: 435, column: 191, offset: 19983 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 435, column: 191, offset: 19983 },
                    end: { line: 435, column: 196, offset: 19988 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 435, column: 196, offset: 19988 },
                    end: { line: 435, column: 207, offset: 19999 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 435, column: 207, offset: 19999 },
                    end: { line: 435, column: 208, offset: 20000 }
                  }
                }
              ],
              position: {
                start: { line: 435, column: 4, offset: 19796 },
                end: { line: 435, column: 208, offset: 20000 }
              }
            }
          ],
          position: {
            start: { line: 435, column: 2, offset: 19794 },
            end: { line: 435, column: 208, offset: 20000 }
          }
        }
      ],
      position: {
        start: { line: 432, column: 2, offset: 19063 },
        end: { line: 435, column: 208, offset: 20000 }
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
            start: { line: 437, column: 4, offset: 20005 },
            end: { line: 437, column: 15, offset: 20016 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 20002 },
        end: { line: 437, column: 15, offset: 20016 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 439, column: 1, offset: 20018 },
            end: { line: 439, column: 226, offset: 20243 }
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
                start: { line: 439, column: 227, offset: 20244 },
                end: { line: 439, column: 233, offset: 20250 }
              }
            }
          ],
          position: {
            start: { line: 439, column: 226, offset: 20243 },
            end: { line: 439, column: 257, offset: 20274 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 439, column: 257, offset: 20274 },
            end: { line: 439, column: 371, offset: 20388 }
          }
        }
      ],
      position: {
        start: { line: 439, column: 1, offset: 20018 },
        end: { line: 439, column: 371, offset: 20388 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 441, column: 1, offset: 20390 },
            end: { line: 441, column: 23, offset: 20412 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 441, column: 23, offset: 20412 },
            end: { line: 441, column: 29, offset: 20418 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 441, column: 29, offset: 20418 },
            end: { line: 441, column: 62, offset: 20451 }
          }
        }
      ],
      position: {
        start: { line: 441, column: 1, offset: 20390 },
        end: { line: 441, column: 62, offset: 20451 }
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
        start: { line: 443, column: 1, offset: 20453 },
        end: { line: 456, column: 4, offset: 20689 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates a NodeJS HTTP server with ',
          position: {
            start: { line: 458, column: 1, offset: 20691 },
            end: { line: 458, column: 58, offset: 20748 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 458, column: 58, offset: 20748 },
            end: { line: 458, column: 77, offset: 20767 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 458, column: 77, offset: 20767 },
            end: { line: 458, column: 106, offset: 20796 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 458, column: 106, offset: 20796 },
            end: { line: 458, column: 136, offset: 20826 }
          }
        },
        {
          type: 'text',
          value: ' that only responds with status ',
          position: {
            start: { line: 458, column: 136, offset: 20826 },
            end: { line: 458, column: 168, offset: 20858 }
          }
        },
        {
          type: 'inlineCode',
          value: '200',
          position: {
            start: { line: 458, column: 168, offset: 20858 },
            end: { line: 458, column: 173, offset: 20863 }
          }
        },
        {
          type: 'text',
          value: ' and body ',
          position: {
            start: { line: 458, column: 173, offset: 20863 },
            end: { line: 458, column: 183, offset: 20873 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ok',
          position: {
            start: { line: 458, column: 183, offset: 20873 },
            end: { line: 458, column: 187, offset: 20877 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 458, column: 187, offset: 20877 },
            end: { line: 458, column: 230, offset: 20920 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 458, column: 230, offset: 20920 },
            end: { line: 458, column: 236, offset: 20926 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 458, column: 236, offset: 20926 },
            end: { line: 458, column: 254, offset: 20944 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 458, column: 254, offset: 20944 },
            end: { line: 458, column: 269, offset: 20959 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 458, column: 269, offset: 20959 },
            end: { line: 458, column: 270, offset: 20960 }
          }
        }
      ],
      position: {
        start: { line: 458, column: 1, offset: 20691 },
        end: { line: 458, column: 270, offset: 20960 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 460, column: 1, offset: 20962 },
            end: { line: 460, column: 45, offset: 21006 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 20962 },
        end: { line: 460, column: 45, offset: 21006 }
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
                    start: { line: 461, column: 4, offset: 21010 },
                    end: { line: 461, column: 8, offset: 21014 }
                  }
                }
              ],
              position: {
                start: { line: 461, column: 4, offset: 21010 },
                end: { line: 461, column: 8, offset: 21014 }
              }
            }
          ],
          position: {
            start: { line: 461, column: 2, offset: 21008 },
            end: { line: 461, column: 8, offset: 21014 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 2, offset: 21008 },
        end: { line: 461, column: 8, offset: 21014 }
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
            start: { line: 463, column: 5, offset: 21020 },
            end: { line: 463, column: 21, offset: 21036 }
          }
        }
      ],
      position: {
        start: { line: 463, column: 1, offset: 21016 },
        end: { line: 463, column: 21, offset: 21036 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server port is a number that represents the network port on which the server is listening. A network port is a logical communication endpoint within a network. The value for the port can range from 0 and 65535. In the above example, we created an HTTP web server that listened on port ',
          position: {
            start: { line: 465, column: 1, offset: 21038 },
            end: { line: 465, column: 294, offset: 21331 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 465, column: 294, offset: 21331 },
            end: { line: 465, column: 300, offset: 21337 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 465, column: 300, offset: 21337 },
            end: { line: 465, column: 301, offset: 21338 }
          }
        }
      ],
      position: {
        start: { line: 465, column: 1, offset: 21038 },
        end: { line: 465, column: 301, offset: 21338 }
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
            start: { line: 467, column: 4, offset: 21343 },
            end: { line: 467, column: 16, offset: 21355 }
          }
        }
      ],
      position: {
        start: { line: 467, column: 1, offset: 21340 },
        end: { line: 467, column: 16, offset: 21355 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 469, column: 1, offset: 21357 },
            end: { line: 469, column: 109, offset: 21465 }
          }
        }
      ],
      position: {
        start: { line: 469, column: 1, offset: 21357 },
        end: { line: 469, column: 109, offset: 21465 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 471, column: 1, offset: 21467 },
            end: { line: 471, column: 61, offset: 21527 }
          }
        }
      ],
      position: {
        start: { line: 471, column: 1, offset: 21467 },
        end: { line: 471, column: 61, offset: 21527 }
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
                    start: { line: 472, column: 4, offset: 21531 },
                    end: { line: 472, column: 74, offset: 21601 }
                  }
                }
              ],
              position: {
                start: { line: 472, column: 4, offset: 21531 },
                end: { line: 472, column: 74, offset: 21601 }
              }
            }
          ],
          position: {
            start: { line: 472, column: 2, offset: 21529 },
            end: { line: 472, column: 74, offset: 21601 }
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
                    start: { line: 473, column: 4, offset: 21605 },
                    end: { line: 473, column: 52, offset: 21653 }
                  }
                }
              ],
              position: {
                start: { line: 473, column: 4, offset: 21605 },
                end: { line: 473, column: 52, offset: 21653 }
              }
            }
          ],
          position: {
            start: { line: 473, column: 2, offset: 21603 },
            end: { line: 473, column: 52, offset: 21653 }
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
                    start: { line: 474, column: 4, offset: 21657 },
                    end: { line: 474, column: 237, offset: 21890 }
                  }
                }
              ],
              position: {
                start: { line: 474, column: 4, offset: 21657 },
                end: { line: 474, column: 237, offset: 21890 }
              }
            }
          ],
          position: {
            start: { line: 474, column: 2, offset: 21655 },
            end: { line: 474, column: 237, offset: 21890 }
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
                    start: { line: 475, column: 4, offset: 21894 },
                    end: { line: 475, column: 128, offset: 22018 }
                  }
                }
              ],
              position: {
                start: { line: 475, column: 4, offset: 21894 },
                end: { line: 475, column: 128, offset: 22018 }
              }
            }
          ],
          position: {
            start: { line: 475, column: 2, offset: 21892 },
            end: { line: 475, column: 128, offset: 22018 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 2, offset: 21529 },
        end: { line: 475, column: 128, offset: 22018 }
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
            start: { line: 477, column: 5, offset: 22024 },
            end: { line: 477, column: 28, offset: 22047 }
          }
        }
      ],
      position: {
        start: { line: 477, column: 1, offset: 22020 },
        end: { line: 477, column: 28, offset: 22047 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 479, column: 1, offset: 22049 },
            end: { line: 479, column: 33, offset: 22081 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 479, column: 33, offset: 22081 },
            end: { line: 479, column: 39, offset: 22087 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 479, column: 39, offset: 22087 },
            end: { line: 479, column: 161, offset: 22209 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 479, column: 161, offset: 22209 },
            end: { line: 479, column: 176, offset: 22224 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 479, column: 176, offset: 22224 },
            end: { line: 479, column: 184, offset: 22232 }
          }
        }
      ],
      position: {
        start: { line: 479, column: 1, offset: 22049 },
        end: { line: 479, column: 184, offset: 22232 }
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
        start: { line: 481, column: 1, offset: 22234 },
        end: { line: 494, column: 4, offset: 22559 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 496, column: 1, offset: 22561 },
            end: { line: 496, column: 12, offset: 22572 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 496, column: 12, offset: 22572 },
            end: { line: 496, column: 18, offset: 22578 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 496, column: 18, offset: 22578 },
            end: { line: 496, column: 88, offset: 22648 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 496, column: 88, offset: 22648 },
            end: { line: 496, column: 104, offset: 22664 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 496, column: 104, offset: 22664 },
            end: { line: 496, column: 113, offset: 22673 }
          }
        }
      ],
      position: {
        start: { line: 496, column: 1, offset: 22561 },
        end: { line: 496, column: 113, offset: 22673 }
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
        start: { line: 498, column: 1, offset: 22675 },
        end: { line: 504, column: 4, offset: 22872 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 506, column: 1, offset: 22874 },
            end: { line: 506, column: 35, offset: 22908 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 506, column: 35, offset: 22908 },
            end: { line: 506, column: 50, offset: 22923 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 506, column: 50, offset: 22923 },
            end: { line: 506, column: 55, offset: 22928 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 506, column: 55, offset: 22928 },
            end: { line: 506, column: 71, offset: 22944 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 506, column: 71, offset: 22944 },
            end: { line: 506, column: 112, offset: 22985 }
          }
        }
      ],
      position: {
        start: { line: 506, column: 1, offset: 22874 },
        end: { line: 506, column: 112, offset: 22985 }
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
        start: { line: 508, column: 1, offset: 22987 },
        end: { line: 523, column: 4, offset: 23418 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 525, column: 1, offset: 23420 },
            end: { line: 525, column: 81, offset: 23500 }
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
                start: { line: 525, column: 82, offset: 23501 },
                end: { line: 525, column: 93, offset: 23512 }
              }
            }
          ],
          position: {
            start: { line: 525, column: 81, offset: 23500 },
            end: { line: 525, column: 108, offset: 23527 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 525, column: 108, offset: 23527 },
            end: { line: 525, column: 117, offset: 23536 }
          }
        }
      ],
      position: {
        start: { line: 525, column: 1, offset: 23420 },
        end: { line: 525, column: 117, offset: 23536 }
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
        start: { line: 527, column: 1, offset: 23538 },
        end: { line: 561, column: 4, offset: 24189 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server ',
          position: {
            start: { line: 563, column: 1, offset: 24191 },
            end: { line: 563, column: 17, offset: 24207 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server',
          position: {
            start: { line: 563, column: 17, offset: 24207 },
            end: { line: 563, column: 25, offset: 24215 }
          }
        },
        {
          type: 'text',
          value: ' created by the NodeJS ',
          position: {
            start: { line: 563, column: 25, offset: 24215 },
            end: { line: 563, column: 48, offset: 24238 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 563, column: 48, offset: 24238 },
            end: { line: 563, column: 54, offset: 24244 }
          }
        },
        {
          type: 'text',
          value: " module's ",
          position: {
            start: { line: 563, column: 54, offset: 24244 },
            end: { line: 563, column: 64, offset: 24254 }
          }
        },
        {
          type: 'inlineCode',
          value: 'createServer',
          position: {
            start: { line: 563, column: 64, offset: 24254 },
            end: { line: 563, column: 78, offset: 24268 }
          }
        },
        {
          type: 'text',
          value: ' accepts the HTTP handler ',
          position: {
            start: { line: 563, column: 78, offset: 24268 },
            end: { line: 563, column: 104, offset: 24294 }
          }
        },
        {
          type: 'inlineCode',
          value: 'handler',
          position: {
            start: { line: 563, column: 104, offset: 24294 },
            end: { line: 563, column: 113, offset: 24303 }
          }
        },
        {
          type: 'text',
          value: ' as a single argument. To start the server we only need to call ',
          position: {
            start: { line: 563, column: 113, offset: 24303 },
            end: { line: 563, column: 177, offset: 24367 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 563, column: 177, offset: 24367 },
            end: { line: 563, column: 192, offset: 24382 }
          }
        },
        {
          type: 'text',
          value: ', specifying port ',
          position: {
            start: { line: 563, column: 192, offset: 24382 },
            end: { line: 563, column: 210, offset: 24400 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 563, column: 210, offset: 24400 },
            end: { line: 563, column: 216, offset: 24406 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 563, column: 216, offset: 24406 },
            end: { line: 563, column: 217, offset: 24407 }
          }
        }
      ],
      position: {
        start: { line: 563, column: 1, offset: 24191 },
        end: { line: 563, column: 217, offset: 24407 }
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
            start: { line: 565, column: 5, offset: 24413 },
            end: { line: 565, column: 59, offset: 24467 }
          }
        }
      ],
      position: {
        start: { line: 565, column: 1, offset: 24409 },
        end: { line: 565, column: 59, offset: 24467 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In [A]synchronous Functional Programming, HTTP handlers are simple, reusable, and modular. Consider the following web server implementation with a complex HTTP handler:',
          position: {
            start: { line: 567, column: 1, offset: 24469 },
            end: { line: 567, column: 169, offset: 24637 }
          }
        }
      ],
      position: {
        start: { line: 567, column: 1, offset: 24469 },
        end: { line: 567, column: 169, offset: 24637 }
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
        '\n' +
        '      response.writeHead(200, {\n' +
        "        'Content-Type': 'text/plain',\n" +
        '      })\n' +
        "      response.end('ok')\n" +
        '\n' +
        "    } else if (request.method == 'OPTIONS') {\n" +
        '      // OPTIONS\n' +
        '\n' +
        '      response.writeHead(204, {\n' +
        "        'Access-Control-Allow-Origin': '*',\n" +
        "        'Access-Control-Allow-Methods': '*',\n" +
        "        'Access-Control-Allow-Headers': '*',\n" +
        "        'Access-Control-Max-Age': '86400',\n" +
        '      })\n' +
        '      response.end()\n' +
        '\n' +
        "    } else if (request.method == 'GET' && /^\\/user\\/\\d+$/.test(request.url)) {\n" +
        '      // GET /user/:userId\n' +
        '      // retrieves a user resource\n' +
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
        '      // retrieve the user record from the db\n' +
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
        "    } else if (request.method == 'PUT' && /^\\/user\\/\\d+$/.test(request.url)) {\n" +
        '      // PUT /user/:userId\n' +
        '      // creates or updates a user resource\n' +
        '\n' +
        '      const userId = request.url.match(/\\d+/)[0]\n' +
        '\n' +
        '      const requestBodyBuffer = await new Promise(resolve => {\n' +
        '        const binaryArray = []\n' +
        "        request.on('data', chunk => {\n" +
        '          binaryArray.push(chunk)\n' +
        '        })\n' +
        "        request.on('end', () => {\n" +
        '          resolve(Buffer.concat(binaryArray))\n' +
        '        })\n' +
        '      })\n' +
        "      const requestBodyString = requestBodyBuffer.toString('utf8')\n" +
        '      const requestBodyJSON = JSON.parse(requestBodyString)\n' +
        '\n' +
        '      // validate\n' +
        '      if (isNaN(Number(userId))) {\n' +
        "        const error = new Error('Bad Request')\n" +
        '        error.code = 400\n' +
        '        throw error\n' +
        '      }\n' +
        "      if (typeof requestBodyJSON.id != 'string') {\n" +
        "        const error = new Error('Bad Request')\n" +
        '        error.code = 400\n' +
        '        throw error\n' +
        '      }\n' +
        "      if (typeof requestBodyJSON.name != 'string') {\n" +
        "        const error = new Error('Bad Request')\n" +
        '        error.code = 400\n' +
        '        throw error\n' +
        '      }\n' +
        "      if (typeof requestBodyJSON.birthdate != 'string') {\n" +
        "        const error = new Error('Bad Request')\n" +
        '        error.code = 400\n' +
        '        throw error\n' +
        '      }\n' +
        "      if (typeof requestBodyJSON.profilePictureUrl != 'string') {\n" +
        "        const error = new Error('Bad Request')\n" +
        '        error.code = 400\n' +
        '        throw error\n' +
        '      }\n' +
        "      if (typeof requestBodyJSON.email != 'string') {\n" +
        "        const error = new Error('Bad Request')\n" +
        '        error.code = 400\n' +
        '        throw error\n' +
        '      }\n' +
        '\n' +
        '      const user = {\n' +
        '        id: requestBodyJSON.id,\n' +
        '        name: requestBodyJSON.name,\n' +
        '        birthdate: requestBodyJSON.birthdate,\n' +
        '        profilePictureUrl: requestBodyJSON.profilePictureUrl,\n' +
        '        email: requestBodyJSON.email,\n' +
        '        createTime: Date.now(),\n' +
        '      }\n' +
        '\n' +
        '      // save user record to the db\n' +
        '      await userTable.put(user)\n' +
        '\n' +
        '      // send back a successful response\n' +
        '      response.writeHead(200, {\n' +
        "        'Access-Control-Allow-Origin': '*',\n" +
        "        'Content-Type': 'application/json',\n" +
        '      })\n' +
        '      response.end(JSON.stringify({\n' +
        "        message: 'success',\n" +
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
        'const server = http.createServer(complexHandler)\n' +
        '\n' +
        'const port = 8080\n' +
        '\n' +
        'server.listen(port)',
      position: {
        start: { line: 569, column: 1, offset: 24639 },
        end: { line: 729, column: 4, offset: 28985 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above handler ',
          position: {
            start: { line: 731, column: 1, offset: 28987 },
            end: { line: 731, column: 19, offset: 29005 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 731, column: 19, offset: 29005 },
            end: { line: 731, column: 35, offset: 29021 }
          }
        },
        {
          type: 'text',
          value: ' has many responsibilities, including handling health checks, handling options requests, retrieving user resources, updating or creating user resources, and handling application errors.',
          position: {
            start: { line: 731, column: 35, offset: 29021 },
            end: { line: 731, column: 220, offset: 29206 }
          }
        }
      ],
      position: {
        start: { line: 731, column: 1, offset: 28987 },
        end: { line: 731, column: 220, offset: 29206 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, we can break down the above complex HTTP handler into simple, modular, and reusable handlers, then use the library ',
          position: {
            start: { line: 733, column: 1, offset: 29208 },
            end: { line: 733, column: 160, offset: 29367 }
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
                start: { line: 733, column: 161, offset: 29368 },
                end: { line: 733, column: 167, offset: 29374 }
              }
            }
          ],
          position: {
            start: { line: 733, column: 160, offset: 29367 },
            end: { line: 733, column: 190, offset: 29397 }
          }
        },
        {
          type: 'text',
          value: ' to combine those handlers in a meaningful way.',
          position: {
            start: { line: 733, column: 190, offset: 29397 },
            end: { line: 733, column: 237, offset: 29444 }
          }
        }
      ],
      position: {
        start: { line: 733, column: 1, offset: 29208 },
        end: { line: 733, column: 237, offset: 29444 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "First, let's break down the complex handler.",
          position: {
            start: { line: 735, column: 1, offset: 29446 },
            end: { line: 735, column: 45, offset: 29490 }
          }
        }
      ],
      position: {
        start: { line: 735, column: 1, offset: 29446 },
        end: { line: 735, column: 45, offset: 29490 }
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
        '// GET /user/:userId\n' +
        '// retrieves a user resource\n' +
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
        '// PUT /user/:userId\n' +
        '// creates or updates a user resource\n' +
        'async function putUserHandler(request, response) {\n' +
        '  const userId = request.url.match(/\\d+/)[0]\n' +
        '\n' +
        '  const requestBodyBuffer = await new Promise(resolve => {\n' +
        '    const binaryArray = []\n' +
        "    request.on('data', chunk => {\n" +
        '      binaryArray.push(chunk)\n' +
        '    })\n' +
        "    request.on('end', () => {\n" +
        '      resolve(Buffer.concat(binaryArray))\n' +
        '    })\n' +
        '  })\n' +
        "  const requestBodyString = requestBodyBuffer.toString('utf8')\n" +
        '  const requestBodyJSON = JSON.parse(requestBodyString)\n' +
        '\n' +
        '  // validate\n' +
        '  if (isNaN(Number(userId))) {\n' +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.id != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.name != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.birthdate != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.profilePictureUrl != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.email != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        '\n' +
        '  const user = {\n' +
        '    id: requestBodyJSON.id,\n' +
        '    name: requestBodyJSON.name,\n' +
        '    birthdate: requestBodyJSON.birthdate,\n' +
        '    profilePictureUrl: requestBodyJSON.profilePictureUrl,\n' +
        '    email: requestBodyJSON.email,\n' +
        '    createTime: Date.now(),\n' +
        '  }\n' +
        '\n' +
        '  // save user record to the db\n' +
        '  await userTable.put(user)\n' +
        '\n' +
        '  // send back a successful response\n' +
        '  response.writeHead(200, {\n' +
        "    'Access-Control-Allow-Origin': '*',\n" +
        "    'Content-Type': 'application/json',\n" +
        '  })\n' +
        '  response.end(JSON.stringify({\n' +
        "    message: 'success',\n" +
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
        'function errorHandler(error, request, response) {\n' +
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
        start: { line: 737, column: 1, offset: 29492 },
        end: { line: 885, column: 4, offset: 33148 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "We've broken down the complex handler ",
          position: {
            start: { line: 887, column: 1, offset: 33150 },
            end: { line: 887, column: 39, offset: 33188 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 887, column: 39, offset: 33188 },
            end: { line: 887, column: 55, offset: 33204 }
          }
        },
        {
          type: 'text',
          value: ' into smaller, simpler handlers ',
          position: {
            start: { line: 887, column: 55, offset: 33204 },
            end: { line: 887, column: 87, offset: 33236 }
          }
        },
        {
          type: 'inlineCode',
          value: 'healthCheckHandler',
          position: {
            start: { line: 887, column: 87, offset: 33236 },
            end: { line: 887, column: 107, offset: 33256 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 887, column: 107, offset: 33256 },
            end: { line: 887, column: 109, offset: 33258 }
          }
        },
        {
          type: 'inlineCode',
          value: 'optionsHandler',
          position: {
            start: { line: 887, column: 109, offset: 33258 },
            end: { line: 887, column: 125, offset: 33274 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 887, column: 125, offset: 33274 },
            end: { line: 887, column: 127, offset: 33276 }
          }
        },
        {
          type: 'inlineCode',
          value: 'getUserHandler',
          position: {
            start: { line: 887, column: 127, offset: 33276 },
            end: { line: 887, column: 143, offset: 33292 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 887, column: 143, offset: 33292 },
            end: { line: 887, column: 145, offset: 33294 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notFoundHandler',
          position: {
            start: { line: 887, column: 145, offset: 33294 },
            end: { line: 887, column: 162, offset: 33311 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 887, column: 162, offset: 33311 },
            end: { line: 887, column: 168, offset: 33317 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 887, column: 168, offset: 33317 },
            end: { line: 887, column: 182, offset: 33331 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 887, column: 182, offset: 33331 },
            end: { line: 887, column: 183, offset: 33332 }
          }
        }
      ],
      position: {
        start: { line: 887, column: 1, offset: 33150 },
        end: { line: 887, column: 183, offset: 33332 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Now let's combine the smaller handlers using rubico's ",
          position: {
            start: { line: 889, column: 1, offset: 33334 },
            end: { line: 889, column: 55, offset: 33388 }
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
                start: { line: 889, column: 56, offset: 33389 },
                end: { line: 889, column: 64, offset: 33397 }
              }
            }
          ],
          position: {
            start: { line: 889, column: 55, offset: 33388 },
            end: { line: 889, column: 81, offset: 33414 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 889, column: 81, offset: 33414 },
            end: { line: 889, column: 86, offset: 33419 }
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
                start: { line: 889, column: 87, offset: 33420 },
                end: { line: 889, column: 97, offset: 33430 }
              }
            }
          ],
          position: {
            start: { line: 889, column: 86, offset: 33419 },
            end: { line: 889, column: 116, offset: 33449 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 889, column: 116, offset: 33449 },
            end: { line: 889, column: 117, offset: 33450 }
          }
        }
      ],
      position: {
        start: { line: 889, column: 1, offset: 33334 },
        end: { line: 889, column: 117, offset: 33450 }
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
        "    request => request.method == 'PUT' && /^\\/user\\/\\d+$/.test(request.url),\n" +
        '    putUserHandler,\n' +
        '\n' +
        '    notFoundHandler,\n' +
        '  ]),\n' +
        '\n' +
        '  errorHandler\n' +
        ')',
      position: {
        start: { line: 891, column: 1, offset: 33452 },
        end: { line: 913, column: 4, offset: 33979 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'combinedHandler',
          position: {
            start: { line: 915, column: 1, offset: 33981 },
            end: { line: 915, column: 18, offset: 33998 }
          }
        },
        {
          type: 'text',
          value: ' is functionally equivalent to ',
          position: {
            start: { line: 915, column: 18, offset: 33998 },
            end: { line: 915, column: 49, offset: 34029 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 915, column: 49, offset: 34029 },
            end: { line: 915, column: 65, offset: 34045 }
          }
        },
        {
          type: 'text',
          value: ', but is able to be expressed using a combination of smaller, simpler HTTP handlers. The benefits are as follows: being able to structure your application as small, simple components lends itself well to development, testing, and maintenance.',
          position: {
            start: { line: 915, column: 65, offset: 34045 },
            end: { line: 915, column: 307, offset: 34287 }
          }
        }
      ],
      position: {
        start: { line: 915, column: 1, offset: 33981 },
        end: { line: 915, column: 307, offset: 34287 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Development is quick and easy: where you once had to digest and add onto the entire complex component, now you only need to write a simple, greenfield component.',
          position: {
            start: { line: 917, column: 1, offset: 34289 },
            end: { line: 917, column: 162, offset: 34450 }
          }
        }
      ],
      position: {
        start: { line: 917, column: 1, offset: 34289 },
        end: { line: 917, column: 162, offset: 34450 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Testing is simplified: where you once had to write a complex integration test with many controls and conditions for the complex component, now you only need to write simple integration tests for the simple components.',
          position: {
            start: { line: 919, column: 1, offset: 34452 },
            end: { line: 919, column: 218, offset: 34669 }
          }
        }
      ],
      position: {
        start: { line: 919, column: 1, offset: 34452 },
        end: { line: 919, column: 218, offset: 34669 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The maintenance overhead is reduced: where you once had to concern yourself with testing changes over large areas of code with complex components, now you can reduce the burden to smaller areas of code with simple components.',
          position: {
            start: { line: 921, column: 1, offset: 34671 },
            end: { line: 921, column: 226, offset: 34896 }
          }
        }
      ],
      position: {
        start: { line: 921, column: 1, offset: 34671 },
        end: { line: 921, column: 226, offset: 34896 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Putting everything together:',
          position: {
            start: { line: 923, column: 1, offset: 34898 },
            end: { line: 923, column: 29, offset: 34926 }
          }
        }
      ],
      position: {
        start: { line: 923, column: 1, offset: 34898 },
        end: { line: 923, column: 29, offset: 34926 }
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
        '// GET /user/:userId\n' +
        '// retrieves a user resource\n' +
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
        '// PUT /user/:userId\n' +
        '// creates or updates a user resource\n' +
        'async function putUserHandler(request, response) {\n' +
        '  const userId = request.url.match(/\\d+/)[0]\n' +
        '\n' +
        '  const requestBodyBuffer = await new Promise(resolve => {\n' +
        '    const binaryArray = []\n' +
        "    request.on('data', chunk => {\n" +
        '      binaryArray.push(chunk)\n' +
        '    })\n' +
        "    request.on('end', () => {\n" +
        '      resolve(Buffer.concat(binaryArray))\n' +
        '    })\n' +
        '  })\n' +
        "  const requestBodyString = requestBodyBuffer.toString('utf8')\n" +
        '  const requestBodyJSON = JSON.parse(requestBodyString)\n' +
        '\n' +
        '  // validate\n' +
        '  if (isNaN(Number(userId))) {\n' +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.id != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.name != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.birthdate != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.profilePictureUrl != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        "  if (typeof requestBodyJSON.email != 'string') {\n" +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        '\n' +
        '  const user = {\n' +
        '    id: requestBodyJSON.id,\n' +
        '    name: requestBodyJSON.name,\n' +
        '    birthdate: requestBodyJSON.birthdate,\n' +
        '    profilePictureUrl: requestBodyJSON.profilePictureUrl,\n' +
        '    email: requestBodyJSON.email,\n' +
        '    createTime: Date.now(),\n' +
        '  }\n' +
        '\n' +
        '  // save user record to the db\n' +
        '  await userTable.put(user)\n' +
        '\n' +
        '  // send back a successful response\n' +
        '  response.writeHead(200, {\n' +
        "    'Access-Control-Allow-Origin': '*',\n" +
        "    'Content-Type': 'application/json',\n" +
        '  })\n' +
        '  response.end(JSON.stringify({\n' +
        "    message: 'success',\n" +
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
        'function errorHandler(error, request, response) {\n' +
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
        "    request => request.method == 'PUT' && /^\\/user\\/\\d+$/.test(request.url),\n" +
        '    putUserHandler,\n' +
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
        start: { line: 925, column: 1, offset: 34928 },
        end: { line: 1102, column: 4, offset: 39161 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can find a working example of the above HTTP server code at ',
          position: {
            start: { line: 1104, column: 1, offset: 39163 },
            end: { line: 1104, column: 65, offset: 39227 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/tree/master/examples/rubico-http-server',
          children: [
            {
              type: 'text',
              value: 'rubico-http-server',
              position: {
                start: { line: 1104, column: 66, offset: 39228 },
                end: { line: 1104, column: 84, offset: 39246 }
              }
            }
          ],
          position: {
            start: { line: 1104, column: 65, offset: 39227 },
            end: { line: 1104, column: 166, offset: 39328 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1104, column: 166, offset: 39328 },
            end: { line: 1104, column: 167, offset: 39329 }
          }
        }
      ],
      position: {
        start: { line: 1104, column: 1, offset: 39163 },
        end: { line: 1104, column: 167, offset: 39329 }
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
            start: { line: 1106, column: 5, offset: 39335 },
            end: { line: 1106, column: 15, offset: 39345 }
          }
        }
      ],
      position: {
        start: { line: 1106, column: 1, offset: 39331 },
        end: { line: 1106, column: 15, offset: 39345 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Handling HTTP in [A]synchronous Functional Programming.',
          position: {
            start: { line: 1108, column: 1, offset: 39347 },
            end: { line: 1108, column: 71, offset: 39417 }
          }
        }
      ],
      position: {
        start: { line: 1108, column: 1, offset: 39347 },
        end: { line: 1108, column: 71, offset: 39417 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about rubico and would like to get started, please visit rubico's home page: ",
          position: {
            start: { line: 1110, column: 1, offset: 39419 },
            end: { line: 1110, column: 97, offset: 39515 }
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
                start: { line: 1110, column: 98, offset: 39516 },
                end: { line: 1110, column: 109, offset: 39527 }
              }
            }
          ],
          position: {
            start: { line: 1110, column: 97, offset: 39515 },
            end: { line: 1110, column: 113, offset: 39531 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1110, column: 113, offset: 39531 },
            end: { line: 1110, column: 114, offset: 39532 }
          }
        }
      ],
      position: {
        start: { line: 1110, column: 1, offset: 39419 },
        end: { line: 1110, column: 114, offset: 39532 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1111, column: 1, offset: 39533 }
  }
}