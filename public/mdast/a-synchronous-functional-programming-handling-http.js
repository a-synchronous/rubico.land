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
          value: ' HTTP request method sends data to the web server to create or update the resource. ',
          position: {
            start: { line: 119, column: 11, offset: 5996 },
            end: { line: 119, column: 95, offset: 6080 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 95, offset: 6080 },
            end: { line: 119, column: 101, offset: 6086 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 119, column: 101, offset: 6086 },
            end: { line: 119, column: 195, offset: 6180 }
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
                start: { line: 119, column: 196, offset: 6181 },
                end: { line: 119, column: 205, offset: 6190 }
              }
            }
          ],
          position: {
            start: { line: 119, column: 195, offset: 6180 },
            end: { line: 119, column: 267, offset: 6252 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 119, column: 267, offset: 6252 },
            end: { line: 119, column: 288, offset: 6273 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 119, column: 288, offset: 6273 },
            end: { line: 119, column: 297, offset: 6282 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 119, column: 297, offset: 6282 },
            end: { line: 119, column: 301, offset: 6286 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 119, column: 301, offset: 6286 },
            end: { line: 119, column: 316, offset: 6301 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 119, column: 316, offset: 6301 },
            end: { line: 119, column: 338, offset: 6323 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 119, column: 338, offset: 6323 },
            end: { line: 119, column: 356, offset: 6341 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 119, column: 356, offset: 6341 },
            end: { line: 119, column: 364, offset: 6349 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 5986 },
        end: { line: 119, column: 364, offset: 6349 }
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
            start: { line: 121, column: 6, offset: 6356 },
            end: { line: 121, column: 9, offset: 6359 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6351 },
        end: { line: 121, column: 9, offset: 6359 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 123, column: 1, offset: 6361 },
            end: { line: 123, column: 5, offset: 6365 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 5, offset: 6365 },
            end: { line: 123, column: 10, offset: 6370 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 123, column: 10, offset: 6370 },
            end: { line: 123, column: 135, offset: 6495 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 135, offset: 6495 },
            end: { line: 123, column: 140, offset: 6500 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 123, column: 140, offset: 6500 },
            end: { line: 123, column: 198, offset: 6558 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6361 },
        end: { line: 123, column: 198, offset: 6558 }
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
            start: { line: 125, column: 6, offset: 6565 },
            end: { line: 125, column: 11, offset: 6570 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6560 },
        end: { line: 125, column: 11, offset: 6570 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 127, column: 1, offset: 6572 },
            end: { line: 127, column: 5, offset: 6576 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 5, offset: 6576 },
            end: { line: 127, column: 12, offset: 6583 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the resource. ',
          position: {
            start: { line: 127, column: 12, offset: 6583 },
            end: { line: 127, column: 96, offset: 6667 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 96, offset: 6667 },
            end: { line: 127, column: 103, offset: 6674 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 127, column: 103, offset: 6674 },
            end: { line: 127, column: 227, offset: 6798 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 127, column: 227, offset: 6798 },
            end: { line: 127, column: 236, offset: 6807 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 127, column: 236, offset: 6807 },
            end: { line: 127, column: 240, offset: 6811 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 127, column: 240, offset: 6811 },
            end: { line: 127, column: 255, offset: 6826 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 127, column: 255, offset: 6826 },
            end: { line: 127, column: 277, offset: 6848 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 127, column: 277, offset: 6848 },
            end: { line: 127, column: 295, offset: 6866 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 127, column: 295, offset: 6866 },
            end: { line: 127, column: 303, offset: 6874 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6572 },
        end: { line: 127, column: 303, offset: 6874 }
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
            start: { line: 129, column: 6, offset: 6881 },
            end: { line: 129, column: 12, offset: 6887 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 6876 },
        end: { line: 129, column: 12, offset: 6887 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 131, column: 1, offset: 6889 },
            end: { line: 131, column: 5, offset: 6893 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 5, offset: 6893 },
            end: { line: 131, column: 13, offset: 6901 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the resource. ',
          position: {
            start: { line: 131, column: 13, offset: 6901 },
            end: { line: 131, column: 78, offset: 6966 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 78, offset: 6966 },
            end: { line: 131, column: 86, offset: 6974 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 131, column: 86, offset: 6974 },
            end: { line: 131, column: 148, offset: 7036 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 6889 },
        end: { line: 131, column: 148, offset: 7036 }
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
            start: { line: 133, column: 6, offset: 7043 },
            end: { line: 133, column: 13, offset: 7050 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 7038 },
        end: { line: 133, column: 13, offset: 7050 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 135, column: 1, offset: 7052 },
            end: { line: 135, column: 5, offset: 7056 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 5, offset: 7056 },
            end: { line: 135, column: 14, offset: 7065 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the resource. ',
          position: {
            start: { line: 135, column: 14, offset: 7065 },
            end: { line: 135, column: 119, offset: 7170 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 119, offset: 7170 },
            end: { line: 135, column: 128, offset: 7179 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 135, column: 128, offset: 7179 },
            end: { line: 135, column: 194, offset: 7245 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 7052 },
        end: { line: 135, column: 194, offset: 7245 }
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
            start: { line: 137, column: 6, offset: 7252 },
            end: { line: 137, column: 13, offset: 7259 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 7247 },
        end: { line: 137, column: 13, offset: 7259 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 139, column: 1, offset: 7261 },
            end: { line: 139, column: 5, offset: 7265 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 5, offset: 7265 },
            end: { line: 139, column: 14, offset: 7274 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options of the resource. ',
          position: {
            start: { line: 139, column: 14, offset: 7274 },
            end: { line: 139, column: 110, offset: 7370 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 110, offset: 7370 },
            end: { line: 139, column: 119, offset: 7379 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 139, column: 119, offset: 7379 },
            end: { line: 139, column: 177, offset: 7437 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7261 },
        end: { line: 139, column: 177, offset: 7437 }
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
            start: { line: 141, column: 6, offset: 7444 },
            end: { line: 141, column: 11, offset: 7449 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7439 },
        end: { line: 141, column: 11, offset: 7449 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 143, column: 1, offset: 7451 },
            end: { line: 143, column: 5, offset: 7455 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 5, offset: 7455 },
            end: { line: 143, column: 12, offset: 7462 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 143, column: 12, offset: 7462 },
            end: { line: 143, column: 66, offset: 7516 }
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
                start: { line: 143, column: 67, offset: 7517 },
                end: { line: 143, column: 81, offset: 7531 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 66, offset: 7516 },
            end: { line: 143, column: 134, offset: 7584 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the URL. ',
          position: {
            start: { line: 143, column: 134, offset: 7584 },
            end: { line: 143, column: 162, offset: 7612 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 162, offset: 7612 },
            end: { line: 143, column: 169, offset: 7619 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 143, column: 169, offset: 7619 },
            end: { line: 143, column: 227, offset: 7677 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7451 },
        end: { line: 143, column: 227, offset: 7677 }
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
            start: { line: 145, column: 5, offset: 7683 },
            end: { line: 145, column: 21, offset: 7699 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7679 },
        end: { line: 145, column: 21, offset: 7699 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request URL is the ',
          position: {
            start: { line: 147, column: 1, offset: 7701 },
            end: { line: 147, column: 29, offset: 7729 }
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
                start: { line: 147, column: 30, offset: 7730 },
                end: { line: 147, column: 33, offset: 7733 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 29, offset: 7729 },
            end: { line: 147, column: 40, offset: 7740 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 147, column: 40, offset: 7740 },
            end: { line: 147, column: 137, offset: 7837 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7701 },
        end: { line: 147, column: 137, offset: 7837 }
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
            start: { line: 149, column: 5, offset: 7843 },
            end: { line: 149, column: 25, offset: 7863 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 7839 },
        end: { line: 149, column: 25, offset: 7863 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request.',
          position: {
            start: { line: 151, column: 1, offset: 7865 },
            end: { line: 151, column: 144, offset: 8008 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 7865 },
        end: { line: 151, column: 144, offset: 8008 }
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
            start: { line: 153, column: 5, offset: 8014 },
            end: { line: 153, column: 22, offset: 8031 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 8010 },
        end: { line: 153, column: 22, offset: 8031 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP request body is the part of the request that carries the bulk of the data sent to the server. The content type of the request body should be specified in the request's ",
          position: {
            start: { line: 155, column: 1, offset: 8033 },
            end: { line: 155, column: 178, offset: 8210 }
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
                start: { line: 155, column: 179, offset: 8211 },
                end: { line: 155, column: 191, offset: 8223 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 178, offset: 8210 },
            end: { line: 155, column: 274, offset: 8306 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 155, column: 274, offset: 8306 },
            end: { line: 155, column: 282, offset: 8314 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 8033 },
        end: { line: 155, column: 282, offset: 8314 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP request bodies:',
          position: {
            start: { line: 157, column: 1, offset: 8316 },
            end: { line: 157, column: 38, offset: 8353 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 8316 },
        end: { line: 157, column: 38, offset: 8353 }
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
                        start: { line: 158, column: 5, offset: 8358 },
                        end: { line: 158, column: 9, offset: 8362 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 8357 },
                    end: { line: 158, column: 45, offset: 8398 }
                  }
                },
                {
                  type: 'text',
                  value: ' - request body used for web applications. The request method is typically ',
                  position: {
                    start: { line: 158, column: 45, offset: 8398 },
                    end: { line: 158, column: 120, offset: 8473 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 158, column: 120, offset: 8473 },
                    end: { line: 158, column: 125, offset: 8478 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 158, column: 125, offset: 8478 },
                    end: { line: 158, column: 127, offset: 8480 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 158, column: 127, offset: 8480 },
                    end: { line: 158, column: 133, offset: 8486 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 158, column: 133, offset: 8486 },
                    end: { line: 158, column: 138, offset: 8491 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 158, column: 138, offset: 8491 },
                    end: { line: 158, column: 145, offset: 8498 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 158, column: 145, offset: 8498 },
                    end: { line: 158, column: 151, offset: 8504 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 158, column: 151, offset: 8504 },
                    end: { line: 158, column: 165, offset: 8518 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 158, column: 165, offset: 8518 },
                    end: { line: 158, column: 187, offset: 8540 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 158, column: 187, offset: 8540 },
                    end: { line: 158, column: 205, offset: 8558 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 158, column: 205, offset: 8558 },
                    end: { line: 158, column: 206, offset: 8559 }
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 8357 },
                end: { line: 158, column: 206, offset: 8559 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 2, offset: 8355 },
            end: { line: 158, column: 206, offset: 8559 }
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
                    start: { line: 159, column: 4, offset: 8563 },
                    end: { line: 159, column: 83, offset: 8642 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 159, column: 83, offset: 8642 },
                    end: { line: 159, column: 88, offset: 8647 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 159, column: 88, offset: 8647 },
                    end: { line: 159, column: 92, offset: 8651 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 159, column: 92, offset: 8651 },
                    end: { line: 159, column: 98, offset: 8657 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 159, column: 98, offset: 8657 },
                    end: { line: 159, column: 104, offset: 8663 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 159, column: 104, offset: 8663 },
                    end: { line: 159, column: 118, offset: 8677 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 159, column: 118, offset: 8677 },
                    end: { line: 159, column: 139, offset: 8698 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 159, column: 139, offset: 8698 },
                    end: { line: 159, column: 151, offset: 8710 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 151, offset: 8710 },
                    end: { line: 159, column: 153, offset: 8712 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 159, column: 153, offset: 8712 },
                    end: { line: 159, column: 164, offset: 8723 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 164, offset: 8723 },
                    end: { line: 159, column: 166, offset: 8725 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 159, column: 166, offset: 8725 },
                    end: { line: 159, column: 178, offset: 8737 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 178, offset: 8737 },
                    end: { line: 159, column: 180, offset: 8739 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 159, column: 180, offset: 8739 },
                    end: { line: 159, column: 193, offset: 8752 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 159, column: 193, offset: 8752 },
                    end: { line: 159, column: 198, offset: 8757 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 159, column: 198, offset: 8757 },
                    end: { line: 159, column: 209, offset: 8768 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 159, column: 209, offset: 8768 },
                    end: { line: 159, column: 210, offset: 8769 }
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 8563 },
                end: { line: 159, column: 210, offset: 8769 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 2, offset: 8561 },
            end: { line: 159, column: 210, offset: 8769 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 2, offset: 8355 },
        end: { line: 159, column: 210, offset: 8769 }
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
            start: { line: 161, column: 4, offset: 8774 },
            end: { line: 161, column: 17, offset: 8787 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8771 },
        end: { line: 161, column: 17, offset: 8787 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client. An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8789 },
            end: { line: 163, column: 149, offset: 8937 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8789 },
        end: { line: 163, column: 149, offset: 8937 }
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
                    start: { line: 164, column: 4, offset: 8941 },
                    end: { line: 164, column: 15, offset: 8952 }
                  }
                }
              ],
              position: {
                start: { line: 164, column: 4, offset: 8941 },
                end: { line: 164, column: 15, offset: 8952 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 2, offset: 8939 },
            end: { line: 164, column: 15, offset: 8952 }
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
                    start: { line: 165, column: 4, offset: 8956 },
                    end: { line: 165, column: 11, offset: 8963 }
                  }
                }
              ],
              position: {
                start: { line: 165, column: 4, offset: 8956 },
                end: { line: 165, column: 11, offset: 8963 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 2, offset: 8954 },
            end: { line: 165, column: 11, offset: 8963 }
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
                    start: { line: 166, column: 4, offset: 8967 },
                    end: { line: 166, column: 8, offset: 8971 }
                  }
                }
              ],
              position: {
                start: { line: 166, column: 4, offset: 8967 },
                end: { line: 166, column: 8, offset: 8971 }
              }
            }
          ],
          position: {
            start: { line: 166, column: 2, offset: 8965 },
            end: { line: 166, column: 8, offset: 8971 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 2, offset: 8939 },
        end: { line: 166, column: 8, offset: 8971 }
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
            start: { line: 168, column: 5, offset: 8977 },
            end: { line: 168, column: 30, offset: 9002 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 8973 },
        end: { line: 168, column: 30, offset: 9002 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response status code is a three-digit code that indicates the status of the server's processing of the request.",
          position: {
            start: { line: 170, column: 1, offset: 9004 },
            end: { line: 170, column: 121, offset: 9124 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 9004 },
        end: { line: 170, column: 121, offset: 9124 }
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
            start: { line: 172, column: 6, offset: 9131 },
            end: { line: 172, column: 42, offset: 9167 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 9126 },
        end: { line: 172, column: 42, offset: 9167 }
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
            start: { line: 174, column: 7, offset: 9175 },
            end: { line: 174, column: 19, offset: 9187 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 9169 },
        end: { line: 174, column: 19, offset: 9187 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received the request headers and is ready for the client to send the request body.',
          position: {
            start: { line: 176, column: 1, offset: 9189 },
            end: { line: 176, column: 98, offset: 9286 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 9189 },
        end: { line: 176, column: 98, offset: 9286 }
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
            start: { line: 178, column: 7, offset: 9294 },
            end: { line: 178, column: 30, offset: 9317 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 9288 },
        end: { line: 178, column: 30, offset: 9317 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is switching to a different protocol, specified in the ',
          position: {
            start: { line: 180, column: 1, offset: 9319 },
            end: { line: 180, column: 67, offset: 9385 }
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
                start: { line: 180, column: 68, offset: 9386 },
                end: { line: 180, column: 75, offset: 9393 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 67, offset: 9385 },
            end: { line: 180, column: 153, offset: 9471 }
          }
        },
        {
          type: 'text',
          value: " header, at the client's request. ",
          position: {
            start: { line: 180, column: 153, offset: 9471 },
            end: { line: 180, column: 187, offset: 9505 }
          }
        },
        {
          type: 'inlineCode',
          value: '101 Switching Protocols',
          position: {
            start: { line: 180, column: 187, offset: 9505 },
            end: { line: 180, column: 212, offset: 9530 }
          }
        },
        {
          type: 'text',
          value: ' is used by the ',
          position: {
            start: { line: 180, column: 212, offset: 9530 },
            end: { line: 180, column: 228, offset: 9546 }
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
                start: { line: 180, column: 229, offset: 9547 },
                end: { line: 180, column: 238, offset: 9556 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 228, offset: 9546 },
            end: { line: 180, column: 260, offset: 9578 }
          }
        },
        {
          type: 'text',
          value: ' protocol when switching from HTTP.',
          position: {
            start: { line: 180, column: 260, offset: 9578 },
            end: { line: 180, column: 295, offset: 9613 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 9319 },
        end: { line: 180, column: 295, offset: 9613 }
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
            start: { line: 182, column: 7, offset: 9621 },
            end: { line: 182, column: 21, offset: 9635 }
          }
        }
      ],
      position: {
        start: { line: 182, column: 1, offset: 9615 },
        end: { line: 182, column: 21, offset: 9635 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received and is processing the request but no response is available yet.',
          position: {
            start: { line: 184, column: 1, offset: 9637 },
            end: { line: 184, column: 88, offset: 9724 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 9637 },
        end: { line: 184, column: 88, offset: 9724 }
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
            start: { line: 186, column: 7, offset: 9732 },
            end: { line: 186, column: 22, offset: 9747 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 9726 },
        end: { line: 186, column: 22, offset: 9747 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.',
          position: {
            start: { line: 188, column: 1, offset: 9749 },
            end: { line: 188, column: 139, offset: 9887 }
          }
        }
      ],
      position: {
        start: { line: 188, column: 1, offset: 9749 },
        end: { line: 188, column: 139, offset: 9887 }
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
            start: { line: 190, column: 6, offset: 9894 },
            end: { line: 190, column: 39, offset: 9927 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 9889 },
        end: { line: 190, column: 39, offset: 9927 }
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
            start: { line: 192, column: 7, offset: 9935 },
            end: { line: 192, column: 13, offset: 9941 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 9929 },
        end: { line: 192, column: 13, offset: 9941 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server successfully processed the request. The meaning of success depends on the request method:',
          position: {
            start: { line: 194, column: 1, offset: 9943 },
            end: { line: 194, column: 101, offset: 10043 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 9943 },
        end: { line: 194, column: 101, offset: 10043 }
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
                    start: { line: 195, column: 4, offset: 10047 },
                    end: { line: 195, column: 9, offset: 10052 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource has been successfully retrieved and transmitted in the response message body.',
                  position: {
                    start: { line: 195, column: 9, offset: 10052 },
                    end: { line: 195, column: 102, offset: 10145 }
                  }
                }
              ],
              position: {
                start: { line: 195, column: 4, offset: 10047 },
                end: { line: 195, column: 102, offset: 10145 }
              }
            }
          ],
          position: {
            start: { line: 195, column: 2, offset: 10045 },
            end: { line: 195, column: 102, offset: 10145 }
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
                    start: { line: 196, column: 4, offset: 10149 },
                    end: { line: 196, column: 10, offset: 10155 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The requested metadata about the resource is available in the response headers.',
                  position: {
                    start: { line: 196, column: 10, offset: 10155 },
                    end: { line: 196, column: 92, offset: 10237 }
                  }
                }
              ],
              position: {
                start: { line: 196, column: 4, offset: 10149 },
                end: { line: 196, column: 92, offset: 10237 }
              }
            }
          ],
          position: {
            start: { line: 196, column: 2, offset: 10147 },
            end: { line: 196, column: 92, offset: 10237 }
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
                    start: { line: 197, column: 4, offset: 10241 },
                    end: { line: 197, column: 10, offset: 10247 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created or updated successfully.',
                  position: {
                    start: { line: 197, column: 10, offset: 10247 },
                    end: { line: 197, column: 62, offset: 10299 }
                  }
                }
              ],
              position: {
                start: { line: 197, column: 4, offset: 10241 },
                end: { line: 197, column: 62, offset: 10299 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 2, offset: 10239 },
            end: { line: 197, column: 62, offset: 10299 }
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
                    start: { line: 198, column: 4, offset: 10303 },
                    end: { line: 198, column: 9, offset: 10308 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was replaced successfully.',
                  position: {
                    start: { line: 198, column: 9, offset: 10308 },
                    end: { line: 198, column: 51, offset: 10350 }
                  }
                }
              ],
              position: {
                start: { line: 198, column: 4, offset: 10303 },
                end: { line: 198, column: 51, offset: 10350 }
              }
            }
          ],
          position: {
            start: { line: 198, column: 2, offset: 10301 },
            end: { line: 198, column: 51, offset: 10350 }
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
                    start: { line: 199, column: 4, offset: 10354 },
                    end: { line: 199, column: 11, offset: 10361 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was updated successfully.',
                  position: {
                    start: { line: 199, column: 11, offset: 10361 },
                    end: { line: 199, column: 52, offset: 10402 }
                  }
                }
              ],
              position: {
                start: { line: 199, column: 4, offset: 10354 },
                end: { line: 199, column: 52, offset: 10402 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 2, offset: 10352 },
            end: { line: 199, column: 52, offset: 10402 }
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
                    start: { line: 200, column: 4, offset: 10406 },
                    end: { line: 200, column: 12, offset: 10414 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was deleted successfully.',
                  position: {
                    start: { line: 200, column: 12, offset: 10414 },
                    end: { line: 200, column: 53, offset: 10455 }
                  }
                }
              ],
              position: {
                start: { line: 200, column: 4, offset: 10406 },
                end: { line: 200, column: 53, offset: 10455 }
              }
            }
          ],
          position: {
            start: { line: 200, column: 2, offset: 10404 },
            end: { line: 200, column: 53, offset: 10455 }
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
                    start: { line: 201, column: 4, offset: 10459 },
                    end: { line: 201, column: 13, offset: 10468 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The connection was established successfully.',
                  position: {
                    start: { line: 201, column: 13, offset: 10468 },
                    end: { line: 201, column: 60, offset: 10515 }
                  }
                }
              ],
              position: {
                start: { line: 201, column: 4, offset: 10459 },
                end: { line: 201, column: 60, offset: 10515 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 2, offset: 10457 },
            end: { line: 201, column: 60, offset: 10515 }
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
                    start: { line: 202, column: 4, offset: 10519 },
                    end: { line: 202, column: 13, offset: 10528 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The communication options are available in the ',
                  position: {
                    start: { line: 202, column: 13, offset: 10528 },
                    end: { line: 202, column: 63, offset: 10578 }
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
                        start: { line: 202, column: 64, offset: 10579 },
                        end: { line: 202, column: 69, offset: 10584 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 202, column: 63, offset: 10578 },
                    end: { line: 202, column: 145, offset: 10660 }
                  }
                },
                {
                  type: 'text',
                  value: ' header.',
                  position: {
                    start: { line: 202, column: 145, offset: 10660 },
                    end: { line: 202, column: 153, offset: 10668 }
                  }
                }
              ],
              position: {
                start: { line: 202, column: 4, offset: 10519 },
                end: { line: 202, column: 153, offset: 10668 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 2, offset: 10517 },
            end: { line: 202, column: 153, offset: 10668 }
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
                    start: { line: 203, column: 4, offset: 10672 },
                    end: { line: 203, column: 11, offset: 10679 }
                  }
                },
                {
                  type: 'text',
                  value: " - The server successfully received and echoed back the client's request.",
                  position: {
                    start: { line: 203, column: 11, offset: 10679 },
                    end: { line: 203, column: 84, offset: 10752 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10672 },
                end: { line: 203, column: 84, offset: 10752 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10670 },
            end: { line: 203, column: 84, offset: 10752 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 2, offset: 10045 },
        end: { line: 203, column: 84, offset: 10752 }
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
            start: { line: 205, column: 7, offset: 10760 },
            end: { line: 205, column: 18, offset: 10771 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 10754 },
        end: { line: 205, column: 18, offset: 10771 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded and a new resource was created.',
          position: {
            start: { line: 207, column: 1, offset: 10773 },
            end: { line: 207, column: 54, offset: 10826 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 10773 },
        end: { line: 207, column: 54, offset: 10826 }
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
            start: { line: 209, column: 7, offset: 10834 },
            end: { line: 209, column: 19, offset: 10846 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 10828 },
        end: { line: 209, column: 19, offset: 10846 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request has been received but has not yet been processed.',
          position: {
            start: { line: 211, column: 1, offset: 10848 },
            end: { line: 211, column: 62, offset: 10909 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 10848 },
        end: { line: 211, column: 62, offset: 10909 }
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
            start: { line: 213, column: 7, offset: 10917 },
            end: { line: 213, column: 40, offset: 10950 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 10911 },
        end: { line: 213, column: 40, offset: 10950 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded but the response headers or body were modified by a proxy server before being sent to the client.',
          position: {
            start: { line: 215, column: 1, offset: 10952 },
            end: { line: 215, column: 120, offset: 11071 }
          }
        }
      ],
      position: {
        start: { line: 215, column: 1, offset: 10952 },
        end: { line: 215, column: 120, offset: 11071 }
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
            start: { line: 217, column: 7, offset: 11079 },
            end: { line: 217, column: 21, offset: 11093 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 11073 },
        end: { line: 217, column: 21, offset: 11093 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, but there is no content available for this request. The client may update its cached headers for the requested resource with the response headers from this request.',
          position: {
            start: { line: 219, column: 1, offset: 11095 },
            end: { line: 219, column: 216, offset: 11310 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 11095 },
        end: { line: 219, column: 216, offset: 11310 }
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
            start: { line: 221, column: 7, offset: 11318 },
            end: { line: 221, column: 24, offset: 11335 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 11312 },
        end: { line: 221, column: 24, offset: 11335 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and asks the client to reset the document to its original state.',
          position: {
            start: { line: 223, column: 1, offset: 11337 },
            end: { line: 223, column: 116, offset: 11452 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 11337 },
        end: { line: 223, column: 116, offset: 11452 }
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
            start: { line: 225, column: 7, offset: 11460 },
            end: { line: 225, column: 26, offset: 11479 }
          }
        }
      ],
      position: {
        start: { line: 225, column: 1, offset: 11454 },
        end: { line: 225, column: 26, offset: 11479 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and is delivering only part of the requested resource. ',
          position: {
            start: { line: 227, column: 1, offset: 11481 },
            end: { line: 227, column: 107, offset: 11587 }
          }
        },
        {
          type: 'inlineCode',
          value: '206 Partial Content',
          position: {
            start: { line: 227, column: 107, offset: 11587 },
            end: { line: 227, column: 128, offset: 11608 }
          }
        },
        {
          type: 'text',
          value: ' is commonly used in ',
          position: {
            start: { line: 227, column: 128, offset: 11608 },
            end: { line: 227, column: 149, offset: 11629 }
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
                start: { line: 227, column: 150, offset: 11630 },
                end: { line: 227, column: 164, offset: 11644 }
              }
            }
          ],
          position: {
            start: { line: 227, column: 149, offset: 11629 },
            end: { line: 227, column: 238, offset: 11718 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 227, column: 238, offset: 11718 },
            end: { line: 227, column: 239, offset: 11719 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 11481 },
        end: { line: 227, column: 239, offset: 11719 }
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
            start: { line: 229, column: 6, offset: 11726 },
            end: { line: 229, column: 40, offset: 11760 }
          }
        }
      ],
      position: {
        start: { line: 229, column: 1, offset: 11721 },
        end: { line: 229, column: 40, offset: 11760 }
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
            start: { line: 231, column: 7, offset: 11768 },
            end: { line: 231, column: 27, offset: 11788 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 1, offset: 11762 },
        end: { line: 231, column: 27, offset: 11788 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has multiple representations, and the client needs to choose which one to access.',
          position: {
            start: { line: 233, column: 1, offset: 11790 },
            end: { line: 233, column: 95, offset: 11884 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 11790 },
        end: { line: 233, column: 95, offset: 11884 }
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
            start: { line: 235, column: 7, offset: 11892 },
            end: { line: 235, column: 28, offset: 11913 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 11886 },
        end: { line: 235, column: 28, offset: 11913 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 237, column: 1, offset: 11915 },
            end: { line: 237, column: 118, offset: 12032 }
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
                start: { line: 237, column: 119, offset: 12033 },
                end: { line: 237, column: 127, offset: 12041 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 118, offset: 12032 },
            end: { line: 237, column: 206, offset: 12120 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 237, column: 206, offset: 12120 },
            end: { line: 237, column: 230, offset: 12144 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 11915 },
        end: { line: 237, column: 230, offset: 12144 }
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
            start: { line: 239, column: 7, offset: 12152 },
            end: { line: 239, column: 16, offset: 12161 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 12146 },
        end: { line: 239, column: 16, offset: 12161 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 241, column: 1, offset: 12163 },
            end: { line: 241, column: 118, offset: 12280 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 241, column: 118, offset: 12280 },
            end: { line: 241, column: 128, offset: 12290 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 241, column: 128, offset: 12290 },
            end: { line: 241, column: 152, offset: 12314 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 12163 },
        end: { line: 241, column: 152, offset: 12314 }
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
            start: { line: 243, column: 7, offset: 12322 },
            end: { line: 243, column: 20, offset: 12335 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 12316 },
        end: { line: 243, column: 20, offset: 12335 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is redirecting the client's request for the resource to a different resource. The URL of the redirected resource is available in the ",
          position: {
            start: { line: 245, column: 1, offset: 12337 },
            end: { line: 245, column: 145, offset: 12481 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 245, column: 145, offset: 12481 },
            end: { line: 245, column: 155, offset: 12491 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the HTTP ',
          position: {
            start: { line: 245, column: 155, offset: 12491 },
            end: { line: 245, column: 211, offset: 12547 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 245, column: 211, offset: 12547 },
            end: { line: 245, column: 216, offset: 12552 }
          }
        },
        {
          type: 'text',
          value: ' method to request the redirected resource.',
          position: {
            start: { line: 245, column: 216, offset: 12552 },
            end: { line: 245, column: 259, offset: 12595 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 12337 },
        end: { line: 245, column: 259, offset: 12595 }
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
            start: { line: 247, column: 7, offset: 12603 },
            end: { line: 247, column: 23, offset: 12619 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 12597 },
        end: { line: 247, column: 23, offset: 12619 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has not been modified since the last access, so the client can continue to use the same cached version of the resource.',
          position: {
            start: { line: 249, column: 1, offset: 12621 },
            end: { line: 249, column: 133, offset: 12753 }
          }
        }
      ],
      position: {
        start: { line: 249, column: 1, offset: 12621 },
        end: { line: 249, column: 133, offset: 12753 }
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
            start: { line: 251, column: 7, offset: 12761 },
            end: { line: 251, column: 29, offset: 12783 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 12755 },
        end: { line: 251, column: 29, offset: 12783 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 253, column: 1, offset: 12785 },
            end: { line: 253, column: 118, offset: 12902 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 253, column: 118, offset: 12902 },
            end: { line: 253, column: 128, offset: 12912 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 253, column: 128, offset: 12912 },
            end: { line: 253, column: 235, offset: 13019 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 12785 },
        end: { line: 253, column: 235, offset: 13019 }
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
            start: { line: 255, column: 7, offset: 13027 },
            end: { line: 255, column: 29, offset: 13049 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 13021 },
        end: { line: 255, column: 29, offset: 13049 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 257, column: 1, offset: 13051 },
            end: { line: 257, column: 118, offset: 13168 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 257, column: 118, offset: 13168 },
            end: { line: 257, column: 128, offset: 13178 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 257, column: 128, offset: 13178 },
            end: { line: 257, column: 235, offset: 13285 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 13051 },
        end: { line: 257, column: 235, offset: 13285 }
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
            start: { line: 259, column: 6, offset: 13292 },
            end: { line: 259, column: 41, offset: 13327 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 13287 },
        end: { line: 259, column: 41, offset: 13327 }
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
            start: { line: 261, column: 7, offset: 13335 },
            end: { line: 261, column: 22, offset: 13350 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 13329 },
        end: { line: 261, column: 22, offset: 13350 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot process the request due to client error, e.g. invalid syntax.',
          position: {
            start: { line: 263, column: 1, offset: 13352 },
            end: { line: 263, column: 80, offset: 13431 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 13352 },
        end: { line: 263, column: 80, offset: 13431 }
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
            start: { line: 265, column: 7, offset: 13439 },
            end: { line: 265, column: 23, offset: 13455 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 13433 },
        end: { line: 265, column: 23, offset: 13455 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials.',
          position: {
            start: { line: 267, column: 1, offset: 13457 },
            end: { line: 267, column: 52, offset: 13508 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 13457 },
        end: { line: 267, column: 52, offset: 13508 }
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
            start: { line: 269, column: 7, offset: 13516 },
            end: { line: 269, column: 27, offset: 13536 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 13510 },
        end: { line: 269, column: 27, offset: 13536 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested content is not available until the client makes a payment.',
          position: {
            start: { line: 271, column: 1, offset: 13538 },
            end: { line: 271, column: 73, offset: 13610 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 13538 },
        end: { line: 271, column: 73, offset: 13610 }
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
            start: { line: 273, column: 7, offset: 13618 },
            end: { line: 273, column: 20, offset: 13631 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 13612 },
        end: { line: 273, column: 20, offset: 13631 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is refusing the client access to the requested resource. The client's authentication credentials are usually valid.",
          position: {
            start: { line: 275, column: 1, offset: 13633 },
            end: { line: 275, column: 127, offset: 13759 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 13633 },
        end: { line: 275, column: 127, offset: 13759 }
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
            start: { line: 277, column: 7, offset: 13767 },
            end: { line: 277, column: 20, offset: 13780 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 13761 },
        end: { line: 277, column: 20, offset: 13780 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot find the requested resource. The URL is not recognized, or the URL is recognized but the requested resource does not exist.',
          position: {
            start: { line: 279, column: 1, offset: 13782 },
            end: { line: 279, column: 142, offset: 13923 }
          }
        }
      ],
      position: {
        start: { line: 279, column: 1, offset: 13782 },
        end: { line: 279, column: 142, offset: 13923 }
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
            start: { line: 281, column: 7, offset: 13931 },
            end: { line: 281, column: 29, offset: 13953 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 13925 },
        end: { line: 281, column: 29, offset: 13953 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is known by the server but it is not supported for the requested resource.',
          position: {
            start: { line: 283, column: 1, offset: 13955 },
            end: { line: 283, column: 94, offset: 14048 }
          }
        }
      ],
      position: {
        start: { line: 283, column: 1, offset: 13955 },
        end: { line: 283, column: 94, offset: 14048 }
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
            start: { line: 285, column: 7, offset: 14056 },
            end: { line: 285, column: 25, offset: 14074 }
          }
        }
      ],
      position: {
        start: { line: 285, column: 1, offset: 14050 },
        end: { line: 285, column: 25, offset: 14074 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is unable to provide a response that matches the client's requested format, typically specified in the ",
          position: {
            start: { line: 287, column: 1, offset: 14076 },
            end: { line: 287, column: 115, offset: 14190 }
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
                start: { line: 287, column: 116, offset: 14191 },
                end: { line: 287, column: 122, offset: 14197 }
              }
            }
          ],
          position: {
            start: { line: 287, column: 115, offset: 14190 },
            end: { line: 287, column: 199, offset: 14274 }
          }
        },
        {
          type: 'text',
          value: ' header of the request.',
          position: {
            start: { line: 287, column: 199, offset: 14274 },
            end: { line: 287, column: 222, offset: 14297 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 14076 },
        end: { line: 287, column: 222, offset: 14297 }
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
            start: { line: 289, column: 7, offset: 14305 },
            end: { line: 289, column: 40, offset: 14338 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 14299 },
        end: { line: 289, column: 40, offset: 14338 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials for the ',
          position: {
            start: { line: 291, column: 1, offset: 14340 },
            end: { line: 291, column: 60, offset: 14399 }
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
                start: { line: 291, column: 61, offset: 14400 },
                end: { line: 291, column: 73, offset: 14412 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 60, offset: 14399 },
            end: { line: 291, column: 118, offset: 14457 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 291, column: 118, offset: 14457 },
            end: { line: 291, column: 119, offset: 14458 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 14340 },
        end: { line: 291, column: 120, offset: 14459 }
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
            start: { line: 293, column: 7, offset: 14467 },
            end: { line: 293, column: 26, offset: 14486 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 14461 },
        end: { line: 293, column: 26, offset: 14486 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server would like to shut down the unused connection.',
          position: {
            start: { line: 295, column: 1, offset: 14488 },
            end: { line: 295, column: 58, offset: 14545 }
          }
        }
      ],
      position: {
        start: { line: 295, column: 1, offset: 14488 },
        end: { line: 295, column: 58, offset: 14545 }
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
            start: { line: 297, column: 7, offset: 14553 },
            end: { line: 297, column: 19, offset: 14565 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 14547 },
        end: { line: 297, column: 19, offset: 14565 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request conflicts with the current state of the resource, e.g. when trying to create a resource that already exists.',
          position: {
            start: { line: 299, column: 1, offset: 14567 },
            end: { line: 299, column: 121, offset: 14687 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 14567 },
        end: { line: 299, column: 121, offset: 14687 }
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
            start: { line: 301, column: 7, offset: 14695 },
            end: { line: 301, column: 15, offset: 14703 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 14689 },
        end: { line: 301, column: 15, offset: 14703 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has been permanently removed from the server.',
          position: {
            start: { line: 303, column: 1, offset: 14705 },
            end: { line: 303, column: 59, offset: 14763 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 14705 },
        end: { line: 303, column: 59, offset: 14763 }
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
            start: { line: 305, column: 7, offset: 14771 },
            end: { line: 305, column: 26, offset: 14790 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 14765 },
        end: { line: 305, column: 26, offset: 14790 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 307, column: 1, offset: 14792 },
            end: { line: 307, column: 5, offset: 14796 }
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
                start: { line: 307, column: 6, offset: 14797 },
                end: { line: 307, column: 20, offset: 14811 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 5, offset: 14796 },
            end: { line: 307, column: 105, offset: 14896 }
          }
        },
        {
          type: 'text',
          value: ' request header is required but not present.',
          position: {
            start: { line: 307, column: 105, offset: 14896 },
            end: { line: 307, column: 149, offset: 14940 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 14792 },
        end: { line: 307, column: 149, offset: 14940 }
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
            start: { line: 309, column: 7, offset: 14948 },
            end: { line: 309, column: 30, offset: 14971 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 1, offset: 14942 },
        end: { line: 309, column: 30, offset: 14971 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request headers has indicated preconditions that the server does not meet.',
          position: {
            start: { line: 311, column: 1, offset: 14973 },
            end: { line: 311, column: 79, offset: 15051 }
          }
        }
      ],
      position: {
        start: { line: 311, column: 1, offset: 14973 },
        end: { line: 311, column: 79, offset: 15051 }
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
            start: { line: 313, column: 7, offset: 15059 },
            end: { line: 313, column: 28, offset: 15080 }
          }
        }
      ],
      position: {
        start: { line: 313, column: 1, offset: 15053 },
        end: { line: 313, column: 28, offset: 15080 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request body is larger than the limits defined by the server. The server might close the connection or respond with a ',
          position: {
            start: { line: 315, column: 1, offset: 15082 },
            end: { line: 315, column: 123, offset: 15204 }
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
                start: { line: 315, column: 124, offset: 15205 },
                end: { line: 315, column: 135, offset: 15216 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 123, offset: 15204 },
            end: { line: 315, column: 217, offset: 15298 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 315, column: 217, offset: 15298 },
            end: { line: 315, column: 225, offset: 15306 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 15082 },
        end: { line: 315, column: 225, offset: 15306 }
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
            start: { line: 317, column: 7, offset: 15314 },
            end: { line: 317, column: 23, offset: 15330 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 15308 },
        end: { line: 317, column: 23, offset: 15330 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource is too long.',
          position: {
            start: { line: 319, column: 1, offset: 15332 },
            end: { line: 319, column: 47, offset: 15378 }
          }
        }
      ],
      position: {
        start: { line: 319, column: 1, offset: 15332 },
        end: { line: 319, column: 47, offset: 15378 }
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
            start: { line: 321, column: 7, offset: 15386 },
            end: { line: 321, column: 33, offset: 15412 }
          }
        }
      ],
      position: {
        start: { line: 321, column: 1, offset: 15380 },
        end: { line: 321, column: 33, offset: 15412 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The media format of the requested resource is not supported by the server.',
          position: {
            start: { line: 323, column: 1, offset: 15414 },
            end: { line: 323, column: 75, offset: 15488 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 15414 },
        end: { line: 323, column: 75, offset: 15488 }
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
            start: { line: 325, column: 7, offset: 15496 },
            end: { line: 325, column: 32, offset: 15521 }
          }
        }
      ],
      position: {
        start: { line: 325, column: 1, offset: 15490 },
        end: { line: 325, column: 32, offset: 15521 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The ranges specified in the request's ",
          position: {
            start: { line: 327, column: 1, offset: 15523 },
            end: { line: 327, column: 39, offset: 15561 }
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
                start: { line: 327, column: 40, offset: 15562 },
                end: { line: 327, column: 45, offset: 15567 }
              }
            }
          ],
          position: {
            start: { line: 327, column: 39, offset: 15561 },
            end: { line: 327, column: 121, offset: 15643 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be fulfilled by the server.',
          position: {
            start: { line: 327, column: 121, offset: 15643 },
            end: { line: 327, column: 163, offset: 15685 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 15523 },
        end: { line: 327, column: 163, offset: 15685 }
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
            start: { line: 329, column: 7, offset: 15693 },
            end: { line: 329, column: 29, offset: 15715 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 15687 },
        end: { line: 329, column: 29, offset: 15715 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The expectation indicated by the request's ",
          position: {
            start: { line: 331, column: 1, offset: 15717 },
            end: { line: 331, column: 44, offset: 15760 }
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
                start: { line: 331, column: 45, offset: 15761 },
                end: { line: 331, column: 51, offset: 15767 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 44, offset: 15760 },
            end: { line: 331, column: 128, offset: 15844 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be met by the server.',
          position: {
            start: { line: 331, column: 128, offset: 15844 },
            end: { line: 331, column: 164, offset: 15880 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 15717 },
        end: { line: 331, column: 164, offset: 15880 }
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
            start: { line: 333, column: 7, offset: 15888 },
            end: { line: 333, column: 23, offset: 15904 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 15882 },
        end: { line: 333, column: 23, offset: 15904 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses the attempt to brew coffee with a teapot.',
          position: {
            start: { line: 335, column: 1, offset: 15906 },
            end: { line: 335, column: 61, offset: 15966 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 15906 },
        end: { line: 335, column: 61, offset: 15966 }
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
            start: { line: 337, column: 7, offset: 15974 },
            end: { line: 337, column: 30, offset: 15997 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 15968 },
        end: { line: 337, column: 30, offset: 15997 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The request was directed at a server that is not configured to produce a response for the request URL's scheme and authority.",
          position: {
            start: { line: 339, column: 1, offset: 15999 },
            end: { line: 339, column: 126, offset: 16124 }
          }
        }
      ],
      position: {
        start: { line: 339, column: 1, offset: 15999 },
        end: { line: 339, column: 126, offset: 16124 }
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
            start: { line: 341, column: 7, offset: 16132 },
            end: { line: 341, column: 32, offset: 16157 }
          }
        }
      ],
      position: {
        start: { line: 341, column: 1, offset: 16126 },
        end: { line: 341, column: 32, offset: 16157 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request was well-formed but was unable to be processed due to semantic errors.',
          position: {
            start: { line: 343, column: 1, offset: 16159 },
            end: { line: 343, column: 83, offset: 16241 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 16159 },
        end: { line: 343, column: 83, offset: 16241 }
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
            start: { line: 345, column: 7, offset: 16249 },
            end: { line: 345, column: 17, offset: 16259 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 16243 },
        end: { line: 345, column: 17, offset: 16259 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is locked.',
          position: {
            start: { line: 347, column: 1, offset: 16261 },
            end: { line: 347, column: 34, offset: 16294 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 16261 },
        end: { line: 347, column: 34, offset: 16294 }
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
            start: { line: 349, column: 7, offset: 16302 },
            end: { line: 349, column: 28, offset: 16323 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 16296 },
        end: { line: 349, column: 28, offset: 16323 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request failed due to the failure of a previous request.',
          position: {
            start: { line: 351, column: 1, offset: 16325 },
            end: { line: 351, column: 61, offset: 16385 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 16325 },
        end: { line: 351, column: 61, offset: 16385 }
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
            start: { line: 353, column: 7, offset: 16393 },
            end: { line: 353, column: 20, offset: 16406 }
          }
        }
      ],
      position: {
        start: { line: 353, column: 1, offset: 16387 },
        end: { line: 353, column: 20, offset: 16406 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is unwilling to risk processing a request that might be replayed.',
          position: {
            start: { line: 355, column: 1, offset: 16408 },
            end: { line: 355, column: 77, offset: 16484 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 16408 },
        end: { line: 355, column: 77, offset: 16484 }
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
            start: { line: 357, column: 7, offset: 16492 },
            end: { line: 357, column: 27, offset: 16512 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 16486 },
        end: { line: 357, column: 27, offset: 16512 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses to process the request under the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an ',
          position: {
            start: { line: 359, column: 1, offset: 16514 },
            end: { line: 359, column: 171, offset: 16684 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Upgrade',
          position: {
            start: { line: 359, column: 171, offset: 16684 },
            end: { line: 359, column: 180, offset: 16693 }
          }
        },
        {
          type: 'text',
          value: ' header in the response to indicate the required protocol(s).',
          position: {
            start: { line: 359, column: 180, offset: 16693 },
            end: { line: 359, column: 241, offset: 16754 }
          }
        }
      ],
      position: {
        start: { line: 359, column: 1, offset: 16514 },
        end: { line: 359, column: 241, offset: 16754 }
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
            start: { line: 361, column: 7, offset: 16762 },
            end: { line: 361, column: 32, offset: 16787 }
          }
        }
      ],
      position: {
        start: { line: 361, column: 1, offset: 16756 },
        end: { line: 361, column: 32, offset: 16787 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The origin server requires the request to be ',
          position: {
            start: { line: 363, column: 1, offset: 16789 },
            end: { line: 363, column: 46, offset: 16834 }
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
                start: { line: 363, column: 47, offset: 16835 },
                end: { line: 363, column: 58, offset: 16846 }
              }
            }
          ],
          position: {
            start: { line: 363, column: 46, offset: 16834 },
            end: { line: 363, column: 138, offset: 16926 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 363, column: 138, offset: 16926 },
            end: { line: 363, column: 139, offset: 16927 }
          }
        }
      ],
      position: {
        start: { line: 363, column: 1, offset: 16789 },
        end: { line: 363, column: 139, offset: 16927 }
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
            start: { line: 365, column: 7, offset: 16935 },
            end: { line: 365, column: 28, offset: 16956 }
          }
        }
      ],
      position: {
        start: { line: 365, column: 1, offset: 16929 },
        end: { line: 365, column: 28, offset: 16956 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client has sent too many requests in a given time period. See ',
          position: {
            start: { line: 367, column: 1, offset: 16958 },
            end: { line: 367, column: 67, offset: 17024 }
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
                start: { line: 367, column: 68, offset: 17025 },
                end: { line: 367, column: 81, offset: 17038 }
              }
            }
          ],
          position: {
            start: { line: 367, column: 67, offset: 17024 },
            end: { line: 367, column: 144, offset: 17101 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 367, column: 144, offset: 17101 },
            end: { line: 367, column: 145, offset: 17102 }
          }
        }
      ],
      position: {
        start: { line: 367, column: 1, offset: 16958 },
        end: { line: 367, column: 145, offset: 17102 }
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
            start: { line: 369, column: 7, offset: 17110 },
            end: { line: 369, column: 42, offset: 17145 }
          }
        }
      ],
      position: {
        start: { line: 369, column: 1, offset: 17104 },
        end: { line: 369, column: 42, offset: 17145 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request header fields are too large.',
          position: {
            start: { line: 371, column: 1, offset: 17147 },
            end: { line: 371, column: 41, offset: 17187 }
          }
        }
      ],
      position: {
        start: { line: 371, column: 1, offset: 17147 },
        end: { line: 371, column: 41, offset: 17187 }
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
            start: { line: 373, column: 7, offset: 17195 },
            end: { line: 373, column: 40, offset: 17228 }
          }
        }
      ],
      position: {
        start: { line: 373, column: 1, offset: 17189 },
        end: { line: 373, column: 40, offset: 17228 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is unavailable due to legal reasons.',
          position: {
            start: { line: 375, column: 1, offset: 17230 },
            end: { line: 375, column: 60, offset: 17289 }
          }
        }
      ],
      position: {
        start: { line: 375, column: 1, offset: 17230 },
        end: { line: 375, column: 60, offset: 17289 }
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
            start: { line: 377, column: 6, offset: 17296 },
            end: { line: 377, column: 41, offset: 17331 }
          }
        }
      ],
      position: {
        start: { line: 377, column: 1, offset: 17291 },
        end: { line: 377, column: 41, offset: 17331 }
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
            start: { line: 379, column: 7, offset: 17339 },
            end: { line: 379, column: 32, offset: 17364 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 17333 },
        end: { line: 379, column: 32, offset: 17364 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has encountered a situation it does not know how to handle.',
          position: {
            start: { line: 381, column: 1, offset: 17366 },
            end: { line: 381, column: 71, offset: 17436 }
          }
        }
      ],
      position: {
        start: { line: 381, column: 1, offset: 17366 },
        end: { line: 381, column: 71, offset: 17436 }
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
            start: { line: 383, column: 7, offset: 17444 },
            end: { line: 383, column: 26, offset: 17463 }
          }
        }
      ],
      position: {
        start: { line: 383, column: 1, offset: 17438 },
        end: { line: 383, column: 26, offset: 17463 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is not supported by the server and cannot be handled.',
          position: {
            start: { line: 385, column: 1, offset: 17465 },
            end: { line: 385, column: 73, offset: 17537 }
          }
        }
      ],
      position: {
        start: { line: 385, column: 1, offset: 17465 },
        end: { line: 385, column: 73, offset: 17537 }
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
            start: { line: 387, column: 7, offset: 17545 },
            end: { line: 387, column: 22, offset: 17560 }
          }
        }
      ],
      position: {
        start: { line: 387, column: 1, offset: 17539 },
        end: { line: 387, column: 22, offset: 17560 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The gateway server received an invalid response from an upstream server or origin server.',
          position: {
            start: { line: 389, column: 1, offset: 17562 },
            end: { line: 389, column: 90, offset: 17651 }
          }
        }
      ],
      position: {
        start: { line: 389, column: 1, offset: 17562 },
        end: { line: 389, column: 90, offset: 17651 }
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
            start: { line: 391, column: 7, offset: 17659 },
            end: { line: 391, column: 30, offset: 17682 }
          }
        }
      ],
      position: {
        start: { line: 391, column: 1, offset: 17653 },
        end: { line: 391, column: 30, offset: 17682 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is not ready to handle the request.',
          position: {
            start: { line: 393, column: 1, offset: 17684 },
            end: { line: 393, column: 47, offset: 17730 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 17684 },
        end: { line: 393, column: 47, offset: 17730 }
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
            start: { line: 395, column: 7, offset: 17738 },
            end: { line: 395, column: 26, offset: 17757 }
          }
        }
      ],
      position: {
        start: { line: 395, column: 1, offset: 17732 },
        end: { line: 395, column: 26, offset: 17757 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The gateway server's request to an upstream server or origin server timed out.",
          position: {
            start: { line: 397, column: 1, offset: 17759 },
            end: { line: 397, column: 79, offset: 17837 }
          }
        }
      ],
      position: {
        start: { line: 397, column: 1, offset: 17759 },
        end: { line: 397, column: 79, offset: 17837 }
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
            start: { line: 399, column: 7, offset: 17845 },
            end: { line: 399, column: 37, offset: 17875 }
          }
        }
      ],
      position: {
        start: { line: 399, column: 1, offset: 17839 },
        end: { line: 399, column: 37, offset: 17875 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP version used in the request is not supported by the server.',
          position: {
            start: { line: 401, column: 1, offset: 17877 },
            end: { line: 401, column: 69, offset: 17945 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 17877 },
        end: { line: 401, column: 69, offset: 17945 }
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
            start: { line: 403, column: 7, offset: 17953 },
            end: { line: 403, column: 34, offset: 17980 }
          }
        }
      ],
      position: {
        start: { line: 403, column: 1, offset: 17947 },
        end: { line: 403, column: 34, offset: 17980 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has an internal configuration error related to content negotiation.',
          position: {
            start: { line: 405, column: 1, offset: 17982 },
            end: { line: 405, column: 79, offset: 18060 }
          }
        }
      ],
      position: {
        start: { line: 405, column: 1, offset: 17982 },
        end: { line: 405, column: 79, offset: 18060 }
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
            start: { line: 407, column: 7, offset: 18068 },
            end: { line: 407, column: 31, offset: 18092 }
          }
        }
      ],
      position: {
        start: { line: 407, column: 1, offset: 18062 },
        end: { line: 407, column: 31, offset: 18092 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server does not have enough available storage to successfully process the request.',
          position: {
            start: { line: 409, column: 1, offset: 18094 },
            end: { line: 409, column: 87, offset: 18180 }
          }
        }
      ],
      position: {
        start: { line: 409, column: 1, offset: 18094 },
        end: { line: 409, column: 87, offset: 18180 }
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
            start: { line: 411, column: 7, offset: 18188 },
            end: { line: 411, column: 24, offset: 18205 }
          }
        }
      ],
      position: {
        start: { line: 411, column: 1, offset: 18182 },
        end: { line: 411, column: 24, offset: 18205 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server detected an infinite loop while processing the request.',
          position: {
            start: { line: 413, column: 1, offset: 18207 },
            end: { line: 413, column: 67, offset: 18273 }
          }
        }
      ],
      position: {
        start: { line: 413, column: 1, offset: 18207 },
        end: { line: 413, column: 67, offset: 18273 }
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
            start: { line: 415, column: 7, offset: 18281 },
            end: { line: 415, column: 23, offset: 18297 }
          }
        }
      ],
      position: {
        start: { line: 415, column: 1, offset: 18275 },
        end: { line: 415, column: 23, offset: 18297 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client declares an HTTP Extension (',
          position: {
            start: { line: 417, column: 1, offset: 18299 },
            end: { line: 417, column: 40, offset: 18338 }
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
                start: { line: 417, column: 41, offset: 18339 },
                end: { line: 417, column: 49, offset: 18347 }
              }
            }
          ],
          position: {
            start: { line: 417, column: 40, offset: 18338 },
            end: { line: 417, column: 97, offset: 18395 }
          }
        },
        {
          type: 'text',
          value: ') that should be used to process the request, but the extension is not supported by the server.',
          position: {
            start: { line: 417, column: 97, offset: 18395 },
            end: { line: 417, column: 192, offset: 18490 }
          }
        }
      ],
      position: {
        start: { line: 417, column: 1, offset: 18299 },
        end: { line: 417, column: 192, offset: 18490 }
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
            start: { line: 419, column: 7, offset: 18498 },
            end: { line: 419, column: 42, offset: 18533 }
          }
        }
      ],
      position: {
        start: { line: 419, column: 1, offset: 18492 },
        end: { line: 419, column: 42, offset: 18533 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client needs to authenticate to gain network access.',
          position: {
            start: { line: 421, column: 1, offset: 18535 },
            end: { line: 421, column: 57, offset: 18591 }
          }
        }
      ],
      position: {
        start: { line: 421, column: 1, offset: 18535 },
        end: { line: 421, column: 57, offset: 18591 }
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
            start: { line: 423, column: 5, offset: 18597 },
            end: { line: 423, column: 26, offset: 18618 }
          }
        }
      ],
      position: {
        start: { line: 423, column: 1, offset: 18593 },
        end: { line: 423, column: 26, offset: 18618 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP response headers are key-value pairs assigned to each response. HTTP response headers pass additional context and metadata about the response.',
          position: {
            start: { line: 425, column: 1, offset: 18620 },
            end: { line: 425, column: 148, offset: 18767 }
          }
        }
      ],
      position: {
        start: { line: 425, column: 1, offset: 18620 },
        end: { line: 425, column: 148, offset: 18767 }
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
            start: { line: 427, column: 5, offset: 18773 },
            end: { line: 427, column: 23, offset: 18791 }
          }
        }
      ],
      position: {
        start: { line: 427, column: 1, offset: 18769 },
        end: { line: 427, column: 23, offset: 18791 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response body is the part of the response that carries the bulk of the data sent back to the client. The content type of the response body should be specified in the response's ",
          position: {
            start: { line: 429, column: 1, offset: 18793 },
            end: { line: 429, column: 187, offset: 18979 }
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
                start: { line: 429, column: 188, offset: 18980 },
                end: { line: 429, column: 200, offset: 18992 }
              }
            }
          ],
          position: {
            start: { line: 429, column: 187, offset: 18979 },
            end: { line: 429, column: 283, offset: 19075 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 429, column: 283, offset: 19075 },
            end: { line: 429, column: 291, offset: 19083 }
          }
        }
      ],
      position: {
        start: { line: 429, column: 1, offset: 18793 },
        end: { line: 429, column: 291, offset: 19083 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP response bodies:',
          position: {
            start: { line: 431, column: 1, offset: 19085 },
            end: { line: 431, column: 39, offset: 19123 }
          }
        }
      ],
      position: {
        start: { line: 431, column: 1, offset: 19085 },
        end: { line: 431, column: 39, offset: 19123 }
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
                        start: { line: 432, column: 5, offset: 19128 },
                        end: { line: 432, column: 9, offset: 19132 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 432, column: 4, offset: 19127 },
                    end: { line: 432, column: 61, offset: 19184 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web pages. The method of the request is typically ',
                  position: {
                    start: { line: 432, column: 61, offset: 19184 },
                    end: { line: 432, column: 137, offset: 19260 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 432, column: 137, offset: 19260 },
                    end: { line: 432, column: 142, offset: 19265 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 432, column: 142, offset: 19265 },
                    end: { line: 432, column: 148, offset: 19271 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 432, column: 148, offset: 19271 },
                    end: { line: 432, column: 162, offset: 19285 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 432, column: 162, offset: 19285 },
                    end: { line: 432, column: 184, offset: 19307 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/html',
                  position: {
                    start: { line: 432, column: 184, offset: 19307 },
                    end: { line: 432, column: 195, offset: 19318 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 432, column: 195, offset: 19318 },
                    end: { line: 432, column: 196, offset: 19319 }
                  }
                }
              ],
              position: {
                start: { line: 432, column: 4, offset: 19127 },
                end: { line: 432, column: 196, offset: 19319 }
              }
            }
          ],
          position: {
            start: { line: 432, column: 2, offset: 19125 },
            end: { line: 432, column: 196, offset: 19319 }
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
                        start: { line: 433, column: 5, offset: 19324 },
                        end: { line: 433, column: 9, offset: 19328 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 433, column: 4, offset: 19323 },
                    end: { line: 433, column: 45, offset: 19364 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web applications. The method of the request is typically ',
                  position: {
                    start: { line: 433, column: 45, offset: 19364 },
                    end: { line: 433, column: 128, offset: 19447 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 433, column: 128, offset: 19447 },
                    end: { line: 433, column: 133, offset: 19452 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 433, column: 133, offset: 19452 },
                    end: { line: 433, column: 135, offset: 19454 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 433, column: 135, offset: 19454 },
                    end: { line: 433, column: 141, offset: 19460 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 433, column: 141, offset: 19460 },
                    end: { line: 433, column: 146, offset: 19465 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 433, column: 146, offset: 19465 },
                    end: { line: 433, column: 153, offset: 19472 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 433, column: 153, offset: 19472 },
                    end: { line: 433, column: 159, offset: 19478 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 433, column: 159, offset: 19478 },
                    end: { line: 433, column: 173, offset: 19492 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 433, column: 173, offset: 19492 },
                    end: { line: 433, column: 195, offset: 19514 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 433, column: 195, offset: 19514 },
                    end: { line: 433, column: 213, offset: 19532 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 433, column: 213, offset: 19532 },
                    end: { line: 433, column: 214, offset: 19533 }
                  }
                }
              ],
              position: {
                start: { line: 433, column: 4, offset: 19323 },
                end: { line: 433, column: 214, offset: 19533 }
              }
            }
          ],
          position: {
            start: { line: 433, column: 2, offset: 19321 },
            end: { line: 433, column: 214, offset: 19533 }
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
                        start: { line: 434, column: 5, offset: 19538 },
                        end: { line: 434, column: 8, offset: 19541 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 4, offset: 19537 },
                    end: { line: 434, column: 46, offset: 19579 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for ',
                  position: {
                    start: { line: 434, column: 46, offset: 19579 },
                    end: { line: 434, column: 72, offset: 19605 }
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
                        start: { line: 434, column: 73, offset: 19606 },
                        end: { line: 434, column: 81, offset: 19614 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 72, offset: 19605 },
                    end: { line: 434, column: 161, offset: 19694 }
                  }
                },
                {
                  type: 'text',
                  value: ' or web applications. The method of the request can be ',
                  position: {
                    start: { line: 434, column: 161, offset: 19694 },
                    end: { line: 434, column: 216, offset: 19749 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 434, column: 216, offset: 19749 },
                    end: { line: 434, column: 221, offset: 19754 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 221, offset: 19754 },
                    end: { line: 434, column: 223, offset: 19756 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 434, column: 223, offset: 19756 },
                    end: { line: 434, column: 228, offset: 19761 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 228, offset: 19761 },
                    end: { line: 434, column: 230, offset: 19763 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 434, column: 230, offset: 19763 },
                    end: { line: 434, column: 236, offset: 19769 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 434, column: 236, offset: 19769 },
                    end: { line: 434, column: 241, offset: 19774 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 434, column: 241, offset: 19774 },
                    end: { line: 434, column: 248, offset: 19781 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 434, column: 248, offset: 19781 },
                    end: { line: 434, column: 254, offset: 19787 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 434, column: 254, offset: 19787 },
                    end: { line: 434, column: 268, offset: 19801 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 434, column: 268, offset: 19801 },
                    end: { line: 434, column: 289, offset: 19822 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/xml',
                  position: {
                    start: { line: 434, column: 289, offset: 19822 },
                    end: { line: 434, column: 306, offset: 19839 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 434, column: 306, offset: 19839 },
                    end: { line: 434, column: 310, offset: 19843 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/xml',
                  position: {
                    start: { line: 434, column: 310, offset: 19843 },
                    end: { line: 434, column: 320, offset: 19853 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 434, column: 320, offset: 19853 },
                    end: { line: 434, column: 321, offset: 19854 }
                  }
                }
              ],
              position: {
                start: { line: 434, column: 4, offset: 19537 },
                end: { line: 434, column: 321, offset: 19854 }
              }
            }
          ],
          position: {
            start: { line: 434, column: 2, offset: 19535 },
            end: { line: 434, column: 321, offset: 19854 }
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
                    start: { line: 435, column: 4, offset: 19858 },
                    end: { line: 435, column: 91, offset: 19945 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 435, column: 91, offset: 19945 },
                    end: { line: 435, column: 96, offset: 19950 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 435, column: 96, offset: 19950 },
                    end: { line: 435, column: 102, offset: 19956 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 435, column: 102, offset: 19956 },
                    end: { line: 435, column: 116, offset: 19970 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 435, column: 116, offset: 19970 },
                    end: { line: 435, column: 137, offset: 19991 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 435, column: 137, offset: 19991 },
                    end: { line: 435, column: 149, offset: 20003 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 149, offset: 20003 },
                    end: { line: 435, column: 151, offset: 20005 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 435, column: 151, offset: 20005 },
                    end: { line: 435, column: 162, offset: 20016 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 162, offset: 20016 },
                    end: { line: 435, column: 164, offset: 20018 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 435, column: 164, offset: 20018 },
                    end: { line: 435, column: 176, offset: 20030 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 176, offset: 20030 },
                    end: { line: 435, column: 178, offset: 20032 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 435, column: 178, offset: 20032 },
                    end: { line: 435, column: 191, offset: 20045 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 435, column: 191, offset: 20045 },
                    end: { line: 435, column: 196, offset: 20050 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 435, column: 196, offset: 20050 },
                    end: { line: 435, column: 207, offset: 20061 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 435, column: 207, offset: 20061 },
                    end: { line: 435, column: 208, offset: 20062 }
                  }
                }
              ],
              position: {
                start: { line: 435, column: 4, offset: 19858 },
                end: { line: 435, column: 208, offset: 20062 }
              }
            }
          ],
          position: {
            start: { line: 435, column: 2, offset: 19856 },
            end: { line: 435, column: 208, offset: 20062 }
          }
        }
      ],
      position: {
        start: { line: 432, column: 2, offset: 19125 },
        end: { line: 435, column: 208, offset: 20062 }
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
            start: { line: 437, column: 4, offset: 20067 },
            end: { line: 437, column: 15, offset: 20078 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 20064 },
        end: { line: 437, column: 15, offset: 20078 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 439, column: 1, offset: 20080 },
            end: { line: 439, column: 226, offset: 20305 }
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
                start: { line: 439, column: 227, offset: 20306 },
                end: { line: 439, column: 233, offset: 20312 }
              }
            }
          ],
          position: {
            start: { line: 439, column: 226, offset: 20305 },
            end: { line: 439, column: 273, offset: 20352 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 439, column: 273, offset: 20352 },
            end: { line: 439, column: 387, offset: 20466 }
          }
        }
      ],
      position: {
        start: { line: 439, column: 1, offset: 20080 },
        end: { line: 439, column: 387, offset: 20466 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 441, column: 1, offset: 20468 },
            end: { line: 441, column: 23, offset: 20490 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 441, column: 23, offset: 20490 },
            end: { line: 441, column: 29, offset: 20496 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 441, column: 29, offset: 20496 },
            end: { line: 441, column: 62, offset: 20529 }
          }
        }
      ],
      position: {
        start: { line: 441, column: 1, offset: 20468 },
        end: { line: 441, column: 62, offset: 20529 }
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
        start: { line: 443, column: 1, offset: 20531 },
        end: { line: 456, column: 4, offset: 20767 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates an HTTP server with ',
          position: {
            start: { line: 458, column: 1, offset: 20769 },
            end: { line: 458, column: 52, offset: 20820 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 458, column: 52, offset: 20820 },
            end: { line: 458, column: 71, offset: 20839 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 458, column: 71, offset: 20839 },
            end: { line: 458, column: 100, offset: 20868 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 458, column: 100, offset: 20868 },
            end: { line: 458, column: 130, offset: 20898 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 458, column: 130, offset: 20898 },
            end: { line: 458, column: 173, offset: 20941 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 458, column: 173, offset: 20941 },
            end: { line: 458, column: 179, offset: 20947 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 458, column: 179, offset: 20947 },
            end: { line: 458, column: 197, offset: 20965 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 458, column: 197, offset: 20965 },
            end: { line: 458, column: 212, offset: 20980 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 458, column: 212, offset: 20980 },
            end: { line: 458, column: 213, offset: 20981 }
          }
        }
      ],
      position: {
        start: { line: 458, column: 1, offset: 20769 },
        end: { line: 458, column: 213, offset: 20981 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 460, column: 1, offset: 20983 },
            end: { line: 460, column: 45, offset: 21027 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 20983 },
        end: { line: 460, column: 45, offset: 21027 }
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
                    start: { line: 461, column: 4, offset: 21031 },
                    end: { line: 461, column: 8, offset: 21035 }
                  }
                }
              ],
              position: {
                start: { line: 461, column: 4, offset: 21031 },
                end: { line: 461, column: 8, offset: 21035 }
              }
            }
          ],
          position: {
            start: { line: 461, column: 2, offset: 21029 },
            end: { line: 461, column: 8, offset: 21035 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 2, offset: 21029 },
        end: { line: 461, column: 8, offset: 21035 }
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
            start: { line: 463, column: 5, offset: 21041 },
            end: { line: 463, column: 21, offset: 21057 }
          }
        }
      ],
      position: {
        start: { line: 463, column: 1, offset: 21037 },
        end: { line: 463, column: 21, offset: 21057 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server port is a number that represents the network port on which the server is listening. A network port is a logical communication endpoint within a network. The value for the port can range from 0 and 65535. In the above example, we created an HTTP web server that listened on port ',
          position: {
            start: { line: 465, column: 1, offset: 21059 },
            end: { line: 465, column: 294, offset: 21352 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 465, column: 294, offset: 21352 },
            end: { line: 465, column: 300, offset: 21358 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 465, column: 300, offset: 21358 },
            end: { line: 465, column: 301, offset: 21359 }
          }
        }
      ],
      position: {
        start: { line: 465, column: 1, offset: 21059 },
        end: { line: 465, column: 301, offset: 21359 }
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
            start: { line: 467, column: 4, offset: 21364 },
            end: { line: 467, column: 16, offset: 21376 }
          }
        }
      ],
      position: {
        start: { line: 467, column: 1, offset: 21361 },
        end: { line: 467, column: 16, offset: 21376 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 469, column: 1, offset: 21378 },
            end: { line: 469, column: 109, offset: 21486 }
          }
        }
      ],
      position: {
        start: { line: 469, column: 1, offset: 21378 },
        end: { line: 469, column: 109, offset: 21486 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 471, column: 1, offset: 21488 },
            end: { line: 471, column: 61, offset: 21548 }
          }
        }
      ],
      position: {
        start: { line: 471, column: 1, offset: 21488 },
        end: { line: 471, column: 61, offset: 21548 }
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
                    start: { line: 472, column: 4, offset: 21552 },
                    end: { line: 472, column: 74, offset: 21622 }
                  }
                }
              ],
              position: {
                start: { line: 472, column: 4, offset: 21552 },
                end: { line: 472, column: 74, offset: 21622 }
              }
            }
          ],
          position: {
            start: { line: 472, column: 2, offset: 21550 },
            end: { line: 472, column: 74, offset: 21622 }
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
                    start: { line: 473, column: 4, offset: 21626 },
                    end: { line: 473, column: 52, offset: 21674 }
                  }
                }
              ],
              position: {
                start: { line: 473, column: 4, offset: 21626 },
                end: { line: 473, column: 52, offset: 21674 }
              }
            }
          ],
          position: {
            start: { line: 473, column: 2, offset: 21624 },
            end: { line: 473, column: 52, offset: 21674 }
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
                    start: { line: 474, column: 4, offset: 21678 },
                    end: { line: 474, column: 237, offset: 21911 }
                  }
                }
              ],
              position: {
                start: { line: 474, column: 4, offset: 21678 },
                end: { line: 474, column: 237, offset: 21911 }
              }
            }
          ],
          position: {
            start: { line: 474, column: 2, offset: 21676 },
            end: { line: 474, column: 237, offset: 21911 }
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
                    start: { line: 475, column: 4, offset: 21915 },
                    end: { line: 475, column: 128, offset: 22039 }
                  }
                }
              ],
              position: {
                start: { line: 475, column: 4, offset: 21915 },
                end: { line: 475, column: 128, offset: 22039 }
              }
            }
          ],
          position: {
            start: { line: 475, column: 2, offset: 21913 },
            end: { line: 475, column: 128, offset: 22039 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 2, offset: 21550 },
        end: { line: 475, column: 128, offset: 22039 }
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
            start: { line: 477, column: 5, offset: 22045 },
            end: { line: 477, column: 28, offset: 22068 }
          }
        }
      ],
      position: {
        start: { line: 477, column: 1, offset: 22041 },
        end: { line: 477, column: 28, offset: 22068 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 479, column: 1, offset: 22070 },
            end: { line: 479, column: 33, offset: 22102 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 479, column: 33, offset: 22102 },
            end: { line: 479, column: 39, offset: 22108 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 479, column: 39, offset: 22108 },
            end: { line: 479, column: 161, offset: 22230 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 479, column: 161, offset: 22230 },
            end: { line: 479, column: 176, offset: 22245 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 479, column: 176, offset: 22245 },
            end: { line: 479, column: 184, offset: 22253 }
          }
        }
      ],
      position: {
        start: { line: 479, column: 1, offset: 22070 },
        end: { line: 479, column: 184, offset: 22253 }
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
        start: { line: 481, column: 1, offset: 22255 },
        end: { line: 494, column: 4, offset: 22580 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 496, column: 1, offset: 22582 },
            end: { line: 496, column: 12, offset: 22593 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 496, column: 12, offset: 22593 },
            end: { line: 496, column: 18, offset: 22599 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 496, column: 18, offset: 22599 },
            end: { line: 496, column: 88, offset: 22669 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 496, column: 88, offset: 22669 },
            end: { line: 496, column: 104, offset: 22685 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 496, column: 104, offset: 22685 },
            end: { line: 496, column: 113, offset: 22694 }
          }
        }
      ],
      position: {
        start: { line: 496, column: 1, offset: 22582 },
        end: { line: 496, column: 113, offset: 22694 }
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
        start: { line: 498, column: 1, offset: 22696 },
        end: { line: 504, column: 4, offset: 22893 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 506, column: 1, offset: 22895 },
            end: { line: 506, column: 35, offset: 22929 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 506, column: 35, offset: 22929 },
            end: { line: 506, column: 50, offset: 22944 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 506, column: 50, offset: 22944 },
            end: { line: 506, column: 55, offset: 22949 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 506, column: 55, offset: 22949 },
            end: { line: 506, column: 71, offset: 22965 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 506, column: 71, offset: 22965 },
            end: { line: 506, column: 112, offset: 23006 }
          }
        }
      ],
      position: {
        start: { line: 506, column: 1, offset: 22895 },
        end: { line: 506, column: 112, offset: 23006 }
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
        start: { line: 508, column: 1, offset: 23008 },
        end: { line: 523, column: 4, offset: 23439 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 525, column: 1, offset: 23441 },
            end: { line: 525, column: 81, offset: 23521 }
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
                start: { line: 525, column: 82, offset: 23522 },
                end: { line: 525, column: 93, offset: 23533 }
              }
            }
          ],
          position: {
            start: { line: 525, column: 81, offset: 23521 },
            end: { line: 525, column: 108, offset: 23548 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 525, column: 108, offset: 23548 },
            end: { line: 525, column: 117, offset: 23557 }
          }
        }
      ],
      position: {
        start: { line: 525, column: 1, offset: 23441 },
        end: { line: 525, column: 117, offset: 23557 }
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
        start: { line: 527, column: 1, offset: 23559 },
        end: { line: 561, column: 4, offset: 24210 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server ',
          position: {
            start: { line: 563, column: 1, offset: 24212 },
            end: { line: 563, column: 17, offset: 24228 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server',
          position: {
            start: { line: 563, column: 17, offset: 24228 },
            end: { line: 563, column: 25, offset: 24236 }
          }
        },
        {
          type: 'text',
          value: ' created by the NodeJS ',
          position: {
            start: { line: 563, column: 25, offset: 24236 },
            end: { line: 563, column: 48, offset: 24259 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 563, column: 48, offset: 24259 },
            end: { line: 563, column: 54, offset: 24265 }
          }
        },
        {
          type: 'text',
          value: " module's ",
          position: {
            start: { line: 563, column: 54, offset: 24265 },
            end: { line: 563, column: 64, offset: 24275 }
          }
        },
        {
          type: 'inlineCode',
          value: 'createServer',
          position: {
            start: { line: 563, column: 64, offset: 24275 },
            end: { line: 563, column: 78, offset: 24289 }
          }
        },
        {
          type: 'text',
          value: ' accepts the HTTP handler ',
          position: {
            start: { line: 563, column: 78, offset: 24289 },
            end: { line: 563, column: 104, offset: 24315 }
          }
        },
        {
          type: 'inlineCode',
          value: 'handler',
          position: {
            start: { line: 563, column: 104, offset: 24315 },
            end: { line: 563, column: 113, offset: 24324 }
          }
        },
        {
          type: 'text',
          value: ' as a single argument. To start the server we only need to call ',
          position: {
            start: { line: 563, column: 113, offset: 24324 },
            end: { line: 563, column: 177, offset: 24388 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 563, column: 177, offset: 24388 },
            end: { line: 563, column: 192, offset: 24403 }
          }
        },
        {
          type: 'text',
          value: ', specifying port ',
          position: {
            start: { line: 563, column: 192, offset: 24403 },
            end: { line: 563, column: 210, offset: 24421 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 563, column: 210, offset: 24421 },
            end: { line: 563, column: 216, offset: 24427 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 563, column: 216, offset: 24427 },
            end: { line: 563, column: 217, offset: 24428 }
          }
        }
      ],
      position: {
        start: { line: 563, column: 1, offset: 24212 },
        end: { line: 563, column: 217, offset: 24428 }
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
            start: { line: 565, column: 5, offset: 24434 },
            end: { line: 565, column: 59, offset: 24488 }
          }
        }
      ],
      position: {
        start: { line: 565, column: 1, offset: 24430 },
        end: { line: 565, column: 59, offset: 24488 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In [A]synchronous Functional Programming, HTTP handlers are simple, reusable, and modular. Consider the following web server implementation with a complex HTTP handler:',
          position: {
            start: { line: 567, column: 1, offset: 24490 },
            end: { line: 567, column: 169, offset: 24658 }
          }
        }
      ],
      position: {
        start: { line: 567, column: 1, offset: 24490 },
        end: { line: 567, column: 169, offset: 24658 }
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
        start: { line: 569, column: 1, offset: 24660 },
        end: { line: 654, column: 4, offset: 26886 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above handler ',
          position: {
            start: { line: 656, column: 1, offset: 26888 },
            end: { line: 656, column: 19, offset: 26906 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 656, column: 19, offset: 26906 },
            end: { line: 656, column: 35, offset: 26922 }
          }
        },
        {
          type: 'text',
          value: ' has many responsibilities, including handling health checks, options requests, user resource lookups, and errors.',
          position: {
            start: { line: 656, column: 35, offset: 26922 },
            end: { line: 656, column: 149, offset: 27036 }
          }
        }
      ],
      position: {
        start: { line: 656, column: 1, offset: 26888 },
        end: { line: 656, column: 149, offset: 27036 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, we can break down the above complex HTTP handler into simple, modular, and reusable handlers, then use the library ',
          position: {
            start: { line: 658, column: 1, offset: 27038 },
            end: { line: 658, column: 160, offset: 27197 }
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
                start: { line: 658, column: 161, offset: 27198 },
                end: { line: 658, column: 167, offset: 27204 }
              }
            }
          ],
          position: {
            start: { line: 658, column: 160, offset: 27197 },
            end: { line: 658, column: 190, offset: 27227 }
          }
        },
        {
          type: 'text',
          value: ' to combine those handlers in a meaningful way.',
          position: {
            start: { line: 658, column: 190, offset: 27227 },
            end: { line: 658, column: 237, offset: 27274 }
          }
        }
      ],
      position: {
        start: { line: 658, column: 1, offset: 27038 },
        end: { line: 658, column: 237, offset: 27274 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "First, let's break down the complex handler.",
          position: {
            start: { line: 660, column: 1, offset: 27276 },
            end: { line: 660, column: 45, offset: 27320 }
          }
        }
      ],
      position: {
        start: { line: 660, column: 1, offset: 27276 },
        end: { line: 660, column: 45, offset: 27320 }
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
        start: { line: 662, column: 1, offset: 27322 },
        end: { line: 737, column: 4, offset: 29072 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "We've broken down the complex handler ",
          position: {
            start: { line: 739, column: 1, offset: 29074 },
            end: { line: 739, column: 39, offset: 29112 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 739, column: 39, offset: 29112 },
            end: { line: 739, column: 55, offset: 29128 }
          }
        },
        {
          type: 'text',
          value: ' into smaller, simpler handlers ',
          position: {
            start: { line: 739, column: 55, offset: 29128 },
            end: { line: 739, column: 87, offset: 29160 }
          }
        },
        {
          type: 'inlineCode',
          value: 'healthCheckHandler',
          position: {
            start: { line: 739, column: 87, offset: 29160 },
            end: { line: 739, column: 107, offset: 29180 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 739, column: 107, offset: 29180 },
            end: { line: 739, column: 109, offset: 29182 }
          }
        },
        {
          type: 'inlineCode',
          value: 'optionsHandler',
          position: {
            start: { line: 739, column: 109, offset: 29182 },
            end: { line: 739, column: 125, offset: 29198 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 739, column: 125, offset: 29198 },
            end: { line: 739, column: 127, offset: 29200 }
          }
        },
        {
          type: 'inlineCode',
          value: 'getUserHandler',
          position: {
            start: { line: 739, column: 127, offset: 29200 },
            end: { line: 739, column: 143, offset: 29216 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 739, column: 143, offset: 29216 },
            end: { line: 739, column: 145, offset: 29218 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notFoundHandler',
          position: {
            start: { line: 739, column: 145, offset: 29218 },
            end: { line: 739, column: 162, offset: 29235 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 739, column: 162, offset: 29235 },
            end: { line: 739, column: 168, offset: 29241 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 739, column: 168, offset: 29241 },
            end: { line: 739, column: 182, offset: 29255 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 739, column: 182, offset: 29255 },
            end: { line: 739, column: 183, offset: 29256 }
          }
        }
      ],
      position: {
        start: { line: 739, column: 1, offset: 29074 },
        end: { line: 739, column: 183, offset: 29256 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Now let's combine the smaller handlers using rubico's ",
          position: {
            start: { line: 741, column: 1, offset: 29258 },
            end: { line: 741, column: 55, offset: 29312 }
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
                start: { line: 741, column: 56, offset: 29313 },
                end: { line: 741, column: 64, offset: 29321 }
              }
            }
          ],
          position: {
            start: { line: 741, column: 55, offset: 29312 },
            end: { line: 741, column: 81, offset: 29338 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 741, column: 81, offset: 29338 },
            end: { line: 741, column: 86, offset: 29343 }
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
                start: { line: 741, column: 87, offset: 29344 },
                end: { line: 741, column: 97, offset: 29354 }
              }
            }
          ],
          position: {
            start: { line: 741, column: 86, offset: 29343 },
            end: { line: 741, column: 116, offset: 29373 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 741, column: 116, offset: 29373 },
            end: { line: 741, column: 117, offset: 29374 }
          }
        }
      ],
      position: {
        start: { line: 741, column: 1, offset: 29258 },
        end: { line: 741, column: 117, offset: 29374 }
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
        start: { line: 743, column: 1, offset: 29376 },
        end: { line: 762, column: 4, offset: 29805 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'combinedHandler',
          position: {
            start: { line: 764, column: 1, offset: 29807 },
            end: { line: 764, column: 18, offset: 29824 }
          }
        },
        {
          type: 'text',
          value: ' is functionally equivalent to ',
          position: {
            start: { line: 764, column: 18, offset: 29824 },
            end: { line: 764, column: 49, offset: 29855 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 764, column: 49, offset: 29855 },
            end: { line: 764, column: 65, offset: 29871 }
          }
        },
        {
          type: 'text',
          value: ', but is able to be expressed using a combination of smaller, simpler HTTP handlers. The benefits are as follows: being able to structure your application as small, simple components lends itself well to development, testing, and maintenance.',
          position: {
            start: { line: 764, column: 65, offset: 29871 },
            end: { line: 764, column: 307, offset: 30113 }
          }
        }
      ],
      position: {
        start: { line: 764, column: 1, offset: 29807 },
        end: { line: 764, column: 307, offset: 30113 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Development is quick and easy: where you once had to digest and add onto the entire complex component, now you only need to write a simple, greenfield component.',
          position: {
            start: { line: 766, column: 1, offset: 30115 },
            end: { line: 766, column: 162, offset: 30276 }
          }
        }
      ],
      position: {
        start: { line: 766, column: 1, offset: 30115 },
        end: { line: 766, column: 162, offset: 30276 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Testing is simplified: where you once had to write a complex integration test with many controls and conditions for the complex component, now you only need to write simple integration tests for the simple components.',
          position: {
            start: { line: 768, column: 1, offset: 30278 },
            end: { line: 768, column: 218, offset: 30495 }
          }
        }
      ],
      position: {
        start: { line: 768, column: 1, offset: 30278 },
        end: { line: 768, column: 218, offset: 30495 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The maintenance overhead is reduced: where you once had to concern yourself with testing changes over large areas of code with complex components, now you can reduce the burden to smaller areas of code with simple components.',
          position: {
            start: { line: 770, column: 1, offset: 30497 },
            end: { line: 770, column: 226, offset: 30722 }
          }
        }
      ],
      position: {
        start: { line: 770, column: 1, offset: 30497 },
        end: { line: 770, column: 226, offset: 30722 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Putting everything together:',
          position: {
            start: { line: 772, column: 1, offset: 30724 },
            end: { line: 772, column: 29, offset: 30752 }
          }
        }
      ],
      position: {
        start: { line: 772, column: 1, offset: 30724 },
        end: { line: 772, column: 29, offset: 30752 }
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
        start: { line: 774, column: 1, offset: 30754 },
        end: { line: 875, column: 4, offset: 32983 }
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
            start: { line: 877, column: 5, offset: 32989 },
            end: { line: 877, column: 15, offset: 32999 }
          }
        }
      ],
      position: {
        start: { line: 877, column: 1, offset: 32985 },
        end: { line: 877, column: 15, offset: 32999 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Handling HTTP in [A]synchronous Functional Programming.',
          position: {
            start: { line: 879, column: 1, offset: 33001 },
            end: { line: 879, column: 71, offset: 33071 }
          }
        }
      ],
      position: {
        start: { line: 879, column: 1, offset: 33001 },
        end: { line: 879, column: 71, offset: 33071 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about rubico and would like to get started, please visit rubico's home page: ",
          position: {
            start: { line: 881, column: 1, offset: 33073 },
            end: { line: 881, column: 97, offset: 33169 }
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
                start: { line: 881, column: 98, offset: 33170 },
                end: { line: 881, column: 109, offset: 33181 }
              }
            }
          ],
          position: {
            start: { line: 881, column: 97, offset: 33169 },
            end: { line: 881, column: 113, offset: 33185 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 881, column: 113, offset: 33185 },
            end: { line: 881, column: 114, offset: 33186 }
          }
        }
      ],
      position: {
        start: { line: 881, column: 1, offset: 33073 },
        end: { line: 881, column: 114, offset: 33186 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 882, column: 1, offset: 33187 }
  }
}