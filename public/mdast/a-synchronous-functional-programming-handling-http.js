export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Handling HTTP\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2025-06-21\n' +
        'updated: 2026-01-31\n' +
        'path: /blog/a-synchronous-functional-programming-handling-http\n' +
        'description: Handling HTTP in [A]synchronous Functional Programming\n' +
        'image: /assets/HTTP_logo.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 319 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Handling HTTP in [A]synchronous Functional Programming. In this article we will discuss how to handle HTTP in the context of the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 321 },
            end: { line: 11, column: 202, offset: 522 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 321 },
        end: { line: 11, column: 202, offset: 522 }
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
            start: { line: 13, column: 4, offset: 527 },
            end: { line: 13, column: 8, offset: 531 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 524 },
        end: { line: 13, column: 8, offset: 531 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP (Hypertext Transfer Protocol) is a ',
          position: {
            start: { line: 15, column: 1, offset: 533 },
            end: { line: 15, column: 41, offset: 573 }
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
                start: { line: 15, column: 42, offset: 574 },
                end: { line: 15, column: 50, offset: 582 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 41, offset: 573 },
            end: { line: 15, column: 122, offset: 654 }
          }
        },
        {
          type: 'text',
          value: ' by which data is transferred over the internet. The internet is just a bunch of computers (including PCs, laptops, and smartphones), and those computers communicate with each other using HTTP. When you visit a website, chances are it was served to you using HTTP. When you use a mobile app, chances are it used HTTP to serve you content.',
          position: {
            start: { line: 15, column: 122, offset: 654 },
            end: { line: 15, column: 460, offset: 992 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 533 },
        end: { line: 15, column: 460, offset: 992 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP adheres to the ',
          position: {
            start: { line: 17, column: 1, offset: 994 },
            end: { line: 17, column: 21, offset: 1014 }
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
                start: { line: 17, column: 22, offset: 1015 },
                end: { line: 17, column: 41, offset: 1034 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 21, offset: 1014 },
            end: { line: 17, column: 107, offset: 1100 }
          }
        },
        {
          type: 'text',
          value: ' where a client sends a request to a server and the server sends a response back to the client.',
          position: {
            start: { line: 17, column: 107, offset: 1100 },
            end: { line: 17, column: 202, offset: 1195 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 994 },
        end: { line: 17, column: 202, offset: 1195 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/http-diagram-2.jpg',
          alt: 'http-diagram.jpg',
          position: {
            start: { line: 19, column: 1, offset: 1197 },
            end: { line: 19, column: 48, offset: 1244 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1197 },
        end: { line: 19, column: 48, offset: 1244 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In order for clients to find the right servers to request, they need to use a URL.',
          position: {
            start: { line: 21, column: 1, offset: 1246 },
            end: { line: 21, column: 83, offset: 1328 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1246 },
        end: { line: 21, column: 83, offset: 1328 }
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
            start: { line: 23, column: 4, offset: 1333 },
            end: { line: 23, column: 7, offset: 1336 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1330 },
        end: { line: 23, column: 7, offset: 1336 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A URL (Uniform Resource Locator) is a string that uniquely identifies the web address of a resource on the internet. A resource is information or content that can be identified and accessed via a URL. A resources can be a file, an image, a document, or a record in a database.',
          position: {
            start: { line: 25, column: 1, offset: 1338 },
            end: { line: 25, column: 277, offset: 1614 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 1338 },
        end: { line: 25, column: 277, offset: 1614 }
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
            start: { line: 27, column: 1, offset: 1616 },
            end: { line: 27, column: 64, offset: 1679 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1616 },
        end: { line: 27, column: 64, offset: 1679 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The basic structure of a URL includes the following parts:',
          position: {
            start: { line: 29, column: 1, offset: 1681 },
            end: { line: 29, column: 59, offset: 1739 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 1681 },
        end: { line: 29, column: 59, offset: 1739 }
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
                  url: '#url-scheme',
                  children: [
                    {
                      type: 'text',
                      value: 'scheme',
                      position: {
                        start: { line: 30, column: 5, offset: 1744 },
                        end: { line: 30, column: 11, offset: 1750 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 1743 },
                    end: { line: 30, column: 25, offset: 1764 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 4, offset: 1743 },
                end: { line: 30, column: 25, offset: 1764 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 1741 },
            end: { line: 30, column: 25, offset: 1764 }
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
                  url: '#url-domain-name',
                  children: [
                    {
                      type: 'text',
                      value: 'domain name',
                      position: {
                        start: { line: 31, column: 5, offset: 1769 },
                        end: { line: 31, column: 16, offset: 1780 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 1768 },
                    end: { line: 31, column: 35, offset: 1799 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1768 },
                end: { line: 31, column: 35, offset: 1799 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 1766 },
            end: { line: 31, column: 35, offset: 1799 }
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
                  url: '#url-port',
                  children: [
                    {
                      type: 'text',
                      value: 'port',
                      position: {
                        start: { line: 32, column: 5, offset: 1804 },
                        end: { line: 32, column: 9, offset: 1808 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 1803 },
                    end: { line: 32, column: 21, offset: 1820 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1803 },
                end: { line: 32, column: 21, offset: 1820 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 1801 },
            end: { line: 32, column: 21, offset: 1820 }
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
                  url: '#url-authority',
                  children: [
                    {
                      type: 'text',
                      value: 'authority',
                      position: {
                        start: { line: 33, column: 5, offset: 1825 },
                        end: { line: 33, column: 14, offset: 1834 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 1824 },
                    end: { line: 33, column: 31, offset: 1851 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1824 },
                end: { line: 33, column: 31, offset: 1851 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 1822 },
            end: { line: 33, column: 31, offset: 1851 }
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
                  url: '#url-path',
                  children: [
                    {
                      type: 'text',
                      value: 'path',
                      position: {
                        start: { line: 34, column: 5, offset: 1856 },
                        end: { line: 34, column: 9, offset: 1860 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 34, column: 4, offset: 1855 },
                    end: { line: 34, column: 21, offset: 1872 }
                  }
                }
              ],
              position: {
                start: { line: 34, column: 4, offset: 1855 },
                end: { line: 34, column: 21, offset: 1872 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 2, offset: 1853 },
            end: { line: 34, column: 21, offset: 1872 }
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
                  url: '#url-query-parameters',
                  children: [
                    {
                      type: 'text',
                      value: 'query parameters',
                      position: {
                        start: { line: 35, column: 5, offset: 1877 },
                        end: { line: 35, column: 21, offset: 1893 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 35, column: 4, offset: 1876 },
                    end: { line: 35, column: 45, offset: 1917 }
                  }
                }
              ],
              position: {
                start: { line: 35, column: 4, offset: 1876 },
                end: { line: 35, column: 45, offset: 1917 }
              }
            }
          ],
          position: {
            start: { line: 35, column: 2, offset: 1874 },
            end: { line: 35, column: 45, offset: 1917 }
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
                  url: '#url-anchor',
                  children: [
                    {
                      type: 'text',
                      value: 'anchor',
                      position: {
                        start: { line: 36, column: 5, offset: 1922 },
                        end: { line: 36, column: 11, offset: 1928 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 36, column: 4, offset: 1921 },
                    end: { line: 36, column: 25, offset: 1942 }
                  }
                }
              ],
              position: {
                start: { line: 36, column: 4, offset: 1921 },
                end: { line: 36, column: 25, offset: 1942 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 2, offset: 1919 },
            end: { line: 36, column: 25, offset: 1942 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 2, offset: 1741 },
        end: { line: 36, column: 25, offset: 1942 }
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
            start: { line: 38, column: 5, offset: 1948 },
            end: { line: 38, column: 15, offset: 1958 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1944 },
        end: { line: 38, column: 15, offset: 1958 }
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
            start: { line: 40, column: 1, offset: 1960 },
            end: { line: 40, column: 78, offset: 2037 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1960 },
        end: { line: 40, column: 78, offset: 2037 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The scheme of a URL specifies the protocol that the client will use to send a request to the server. For HTTP, the scheme could be ',
          position: {
            start: { line: 42, column: 1, offset: 2039 },
            end: { line: 42, column: 132, offset: 2170 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 42, column: 132, offset: 2170 },
            end: { line: 42, column: 138, offset: 2176 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 42, column: 138, offset: 2176 },
            end: { line: 42, column: 142, offset: 2180 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https',
          position: {
            start: { line: 42, column: 142, offset: 2180 },
            end: { line: 42, column: 149, offset: 2187 }
          }
        },
        {
          type: 'text',
          value: '. Other schemes include ',
          position: {
            start: { line: 42, column: 149, offset: 2187 },
            end: { line: 42, column: 173, offset: 2211 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ws',
          position: {
            start: { line: 42, column: 173, offset: 2211 },
            end: { line: 42, column: 177, offset: 2215 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 42, column: 177, offset: 2215 },
            end: { line: 42, column: 182, offset: 2220 }
          }
        },
        {
          type: 'inlineCode',
          value: 'wss',
          position: {
            start: { line: 42, column: 182, offset: 2220 },
            end: { line: 42, column: 187, offset: 2225 }
          }
        },
        {
          type: 'text',
          value: ' for the ',
          position: {
            start: { line: 42, column: 187, offset: 2225 },
            end: { line: 42, column: 196, offset: 2234 }
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
                start: { line: 42, column: 197, offset: 2235 },
                end: { line: 42, column: 206, offset: 2244 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 196, offset: 2234 },
            end: { line: 42, column: 228, offset: 2266 }
          }
        },
        {
          type: 'text',
          value: ' protocol, ',
          position: {
            start: { line: 42, column: 228, offset: 2266 },
            end: { line: 42, column: 239, offset: 2277 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mailto',
          position: {
            start: { line: 42, column: 239, offset: 2277 },
            end: { line: 42, column: 247, offset: 2285 }
          }
        },
        {
          type: 'text',
          value: ' for the "mailto:" protocol, and ',
          position: {
            start: { line: 42, column: 247, offset: 2285 },
            end: { line: 42, column: 280, offset: 2318 }
          }
        },
        {
          type: 'inlineCode',
          value: 'file',
          position: {
            start: { line: 42, column: 280, offset: 2318 },
            end: { line: 42, column: 286, offset: 2324 }
          }
        },
        {
          type: 'text',
          value: ' for the "file:" protocol.',
          position: {
            start: { line: 42, column: 286, offset: 2324 },
            end: { line: 42, column: 312, offset: 2350 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 2039 },
        end: { line: 42, column: 312, offset: 2350 }
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
            start: { line: 44, column: 5, offset: 2356 },
            end: { line: 44, column: 20, offset: 2371 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 2352 },
        end: { line: 44, column: 20, offset: 2371 }
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
            start: { line: 46, column: 1, offset: 2373 },
            end: { line: 46, column: 88, offset: 2460 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 2373 },
        end: { line: 46, column: 88, offset: 2460 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The domain name of a URL is a unique name that translates to the address of a computer where the resource of the URL is located. Domain names are translated via the ',
          position: {
            start: { line: 48, column: 1, offset: 2462 },
            end: { line: 48, column: 166, offset: 2627 }
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
                start: { line: 48, column: 167, offset: 2628 },
                end: { line: 48, column: 191, offset: 2652 }
              }
            }
          ],
          position: {
            start: { line: 48, column: 166, offset: 2627 },
            end: { line: 48, column: 246, offset: 2707 }
          }
        },
        {
          type: 'text',
          value: ' to computer addresses running web servers to which HTTP clients can send requests.',
          position: {
            start: { line: 48, column: 246, offset: 2707 },
            end: { line: 48, column: 329, offset: 2790 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 2462 },
        end: { line: 48, column: 329, offset: 2790 }
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
            start: { line: 50, column: 5, offset: 2796 },
            end: { line: 50, column: 13, offset: 2804 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 2792 },
        end: { line: 50, column: 13, offset: 2804 }
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
            start: { line: 52, column: 1, offset: 2806 },
            end: { line: 52, column: 74, offset: 2879 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2806 },
        end: { line: 52, column: 74, offset: 2879 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The port of a URL is a number that identifies a specific process or network service running on the computer where the resource of the URL is located. When a computer starts up a process like a web server, it can assign it a numerical port between 0 and 65535. The web server would then listen on this assigned port for HTTP requests.',
          position: {
            start: { line: 54, column: 1, offset: 2881 },
            end: { line: 54, column: 334, offset: 3214 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 2881 },
        end: { line: 54, column: 334, offset: 3214 }
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
            start: { line: 56, column: 5, offset: 3220 },
            end: { line: 56, column: 18, offset: 3233 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 3216 },
        end: { line: 56, column: 18, offset: 3233 }
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
            start: { line: 58, column: 1, offset: 3235 },
            end: { line: 58, column: 84, offset: 3318 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 3235 },
        end: { line: 58, column: 84, offset: 3318 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The authority of a URL consists of the domain name and port of the URL separated by a colon.',
          position: {
            start: { line: 60, column: 1, offset: 3320 },
            end: { line: 60, column: 93, offset: 3412 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3320 },
        end: { line: 60, column: 93, offset: 3412 }
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
            start: { line: 62, column: 5, offset: 3418 },
            end: { line: 62, column: 13, offset: 3426 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3414 },
        end: { line: 62, column: 13, offset: 3426 }
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
            start: { line: 64, column: 1, offset: 3428 },
            end: { line: 64, column: 74, offset: 3501 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 3428 },
        end: { line: 64, column: 74, offset: 3501 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The path of a URL is a string that identifies the physical or abstract location of the resource within the URL's domain.",
          position: {
            start: { line: 66, column: 1, offset: 3503 },
            end: { line: 66, column: 121, offset: 3623 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3503 },
        end: { line: 66, column: 121, offset: 3623 }
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
            start: { line: 68, column: 5, offset: 3629 },
            end: { line: 68, column: 25, offset: 3649 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3625 },
        end: { line: 68, column: 25, offset: 3649 }
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
            start: { line: 70, column: 1, offset: 3651 },
            end: { line: 70, column: 98, offset: 3748 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 3651 },
        end: { line: 70, column: 98, offset: 3748 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The query parameters of a URL are a list of key-value pairs separated by the ',
          position: {
            start: { line: 72, column: 1, offset: 3750 },
            end: { line: 72, column: 78, offset: 3827 }
          }
        },
        {
          type: 'inlineCode',
          value: '&',
          position: {
            start: { line: 72, column: 78, offset: 3827 },
            end: { line: 72, column: 81, offset: 3830 }
          }
        },
        {
          type: 'text',
          value: ' symbol. The query parameters can further identify the resource of a URL.',
          position: {
            start: { line: 72, column: 81, offset: 3830 },
            end: { line: 72, column: 154, offset: 3903 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 3750 },
        end: { line: 72, column: 154, offset: 3903 }
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
            start: { line: 74, column: 5, offset: 3909 },
            end: { line: 74, column: 15, offset: 3919 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 3905 },
        end: { line: 74, column: 15, offset: 3919 }
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
            start: { line: 76, column: 1, offset: 3921 },
            end: { line: 76, column: 78, offset: 3998 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3921 },
        end: { line: 76, column: 78, offset: 3998 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `The anchor of a URL specifies a part of the URL's resource, and does not necessarily locate the resource. When a web server serves a web page as a resource, the anchor acts as a sort of "bookmark" inside the resource. Browsers will see the anchor and scroll the page down to where the section identified by the anchor is visible.`,
          position: {
            start: { line: 78, column: 1, offset: 4000 },
            end: { line: 78, column: 330, offset: 4329 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 4000 },
        end: { line: 78, column: 330, offset: 4329 }
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
            start: { line: 80, column: 4, offset: 4334 },
            end: { line: 80, column: 15, offset: 4345 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 4331 },
        end: { line: 80, column: 15, offset: 4345 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP client is a component of a ',
          position: {
            start: { line: 82, column: 1, offset: 4347 },
            end: { line: 82, column: 36, offset: 4382 }
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
                start: { line: 82, column: 37, offset: 4383 },
                end: { line: 82, column: 57, offset: 4403 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 36, offset: 4382 },
            end: { line: 82, column: 110, offset: 4456 }
          }
        },
        {
          type: 'text',
          value: ' running inside a computer that sends HTTP requests to HTTP servers. The JavaScript code below is part of a software application that runs in your web browser. The code demonstrates the use of an HTTP client ',
          position: {
            start: { line: 82, column: 110, offset: 4456 },
            end: { line: 82, column: 318, offset: 4664 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 82, column: 318, offset: 4664 },
            end: { line: 82, column: 325, offset: 4671 }
          }
        },
        {
          type: 'text',
          value: ' to send a request to an HTTP server at the url ',
          position: {
            start: { line: 82, column: 325, offset: 4671 },
            end: { line: 82, column: 373, offset: 4719 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https://jsonplaceholder.typicode.com/todos/1',
          position: {
            start: { line: 82, column: 373, offset: 4719 },
            end: { line: 82, column: 419, offset: 4765 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 82, column: 419, offset: 4765 },
            end: { line: 82, column: 420, offset: 4766 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 4347 },
        end: { line: 82, column: 420, offset: 4766 }
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
        start: { line: 84, column: 1, offset: 4768 },
        end: { line: 95, column: 4, offset: 5101 }
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
            start: { line: 97, column: 4, offset: 5106 },
            end: { line: 97, column: 16, offset: 5118 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 5103 },
        end: { line: 97, column: 16, offset: 5118 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request is a message conforming to the HTTP protocol that a client sends to a server. An HTTP request has the following properties:',
          position: {
            start: { line: 99, column: 1, offset: 5120 },
            end: { line: 99, column: 140, offset: 5259 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 5120 },
        end: { line: 99, column: 140, offset: 5259 }
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
                  url: '#http-request-method',
                  children: [
                    {
                      type: 'text',
                      value: 'method',
                      position: {
                        start: { line: 100, column: 5, offset: 5264 },
                        end: { line: 100, column: 11, offset: 5270 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 100, column: 4, offset: 5263 },
                    end: { line: 100, column: 34, offset: 5293 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 4, offset: 5263 },
                end: { line: 100, column: 34, offset: 5293 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 2, offset: 5261 },
            end: { line: 100, column: 34, offset: 5293 }
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
                  url: '#http-request-url',
                  children: [
                    {
                      type: 'text',
                      value: 'url',
                      position: {
                        start: { line: 101, column: 5, offset: 5298 },
                        end: { line: 101, column: 8, offset: 5301 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 101, column: 4, offset: 5297 },
                    end: { line: 101, column: 28, offset: 5321 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 4, offset: 5297 },
                end: { line: 101, column: 28, offset: 5321 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 2, offset: 5295 },
            end: { line: 101, column: 28, offset: 5321 }
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
                  url: '#http-request-headers',
                  children: [
                    {
                      type: 'text',
                      value: 'headers',
                      position: {
                        start: { line: 102, column: 5, offset: 5326 },
                        end: { line: 102, column: 12, offset: 5333 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 102, column: 4, offset: 5325 },
                    end: { line: 102, column: 36, offset: 5357 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 4, offset: 5325 },
                end: { line: 102, column: 36, offset: 5357 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 2, offset: 5323 },
            end: { line: 102, column: 36, offset: 5357 }
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
                  url: '#http-request-body',
                  children: [
                    {
                      type: 'text',
                      value: 'body',
                      position: {
                        start: { line: 103, column: 5, offset: 5362 },
                        end: { line: 103, column: 9, offset: 5366 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 103, column: 4, offset: 5361 },
                    end: { line: 103, column: 30, offset: 5387 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 4, offset: 5361 },
                end: { line: 103, column: 30, offset: 5387 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 2, offset: 5359 },
            end: { line: 103, column: 30, offset: 5387 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 2, offset: 5261 },
        end: { line: 103, column: 30, offset: 5387 }
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
            start: { line: 105, column: 5, offset: 5393 },
            end: { line: 105, column: 24, offset: 5412 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 5389 },
        end: { line: 105, column: 24, offset: 5412 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: ',
          position: {
            start: { line: 107, column: 1, offset: 5414 },
            end: { line: 107, column: 192, offset: 5605 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 107, column: 192, offset: 5605 },
            end: { line: 107, column: 197, offset: 5610 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 197, offset: 5610 },
            end: { line: 107, column: 199, offset: 5612 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 107, column: 199, offset: 5612 },
            end: { line: 107, column: 205, offset: 5618 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 205, offset: 5618 },
            end: { line: 107, column: 207, offset: 5620 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 107, column: 207, offset: 5620 },
            end: { line: 107, column: 213, offset: 5626 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 213, offset: 5626 },
            end: { line: 107, column: 215, offset: 5628 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 107, column: 215, offset: 5628 },
            end: { line: 107, column: 220, offset: 5633 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 220, offset: 5633 },
            end: { line: 107, column: 222, offset: 5635 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 107, column: 222, offset: 5635 },
            end: { line: 107, column: 229, offset: 5642 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 229, offset: 5642 },
            end: { line: 107, column: 231, offset: 5644 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 107, column: 231, offset: 5644 },
            end: { line: 107, column: 239, offset: 5652 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 239, offset: 5652 },
            end: { line: 107, column: 241, offset: 5654 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 107, column: 241, offset: 5654 },
            end: { line: 107, column: 250, offset: 5663 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 250, offset: 5663 },
            end: { line: 107, column: 252, offset: 5665 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 107, column: 252, offset: 5665 },
            end: { line: 107, column: 261, offset: 5674 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 107, column: 261, offset: 5674 },
            end: { line: 107, column: 267, offset: 5680 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 107, column: 267, offset: 5680 },
            end: { line: 107, column: 274, offset: 5687 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 107, column: 274, offset: 5687 },
            end: { line: 107, column: 275, offset: 5688 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 5414 },
        end: { line: 107, column: 275, offset: 5688 }
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
            start: { line: 109, column: 6, offset: 5695 },
            end: { line: 109, column: 9, offset: 5698 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 5690 },
        end: { line: 109, column: 9, offset: 5698 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 111, column: 1, offset: 5700 },
            end: { line: 111, column: 5, offset: 5704 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 5, offset: 5704 },
            end: { line: 111, column: 10, offset: 5709 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for a data representation of the resource. ',
          position: {
            start: { line: 111, column: 10, offset: 5709 },
            end: { line: 111, column: 94, offset: 5793 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 94, offset: 5793 },
            end: { line: 111, column: 99, offset: 5798 }
          }
        },
        {
          type: 'text',
          value: ' requests are ',
          position: {
            start: { line: 111, column: 99, offset: 5798 },
            end: { line: 111, column: 113, offset: 5812 }
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
                start: { line: 111, column: 114, offset: 5813 },
                end: { line: 111, column: 118, offset: 5817 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 113, offset: 5812 },
            end: { line: 111, column: 180, offset: 5879 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 111, column: 180, offset: 5879 },
            end: { line: 111, column: 182, offset: 5881 }
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
                start: { line: 111, column: 183, offset: 5882 },
                end: { line: 111, column: 193, offset: 5892 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 182, offset: 5881 },
            end: { line: 111, column: 256, offset: 5955 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 111, column: 256, offset: 5955 },
            end: { line: 111, column: 262, offset: 5961 }
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
                start: { line: 111, column: 263, offset: 5962 },
                end: { line: 111, column: 272, offset: 5971 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 262, offset: 5961 },
            end: { line: 111, column: 334, offset: 6033 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 111, column: 334, offset: 6033 },
            end: { line: 111, column: 335, offset: 6034 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 5700 },
        end: { line: 111, column: 335, offset: 6034 }
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
            start: { line: 113, column: 6, offset: 6041 },
            end: { line: 113, column: 10, offset: 6045 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 6036 },
        end: { line: 113, column: 10, offset: 6045 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 115, column: 1, offset: 6047 },
            end: { line: 115, column: 5, offset: 6051 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 5, offset: 6051 },
            end: { line: 115, column: 11, offset: 6057 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for metadata about the resource. ',
          position: {
            start: { line: 115, column: 11, offset: 6057 },
            end: { line: 115, column: 85, offset: 6131 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 85, offset: 6131 },
            end: { line: 115, column: 91, offset: 6137 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, idempotent, and cacheable.',
          position: {
            start: { line: 115, column: 91, offset: 6137 },
            end: { line: 115, column: 137, offset: 6183 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 6047 },
        end: { line: 115, column: 137, offset: 6183 }
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
            start: { line: 117, column: 6, offset: 6190 },
            end: { line: 117, column: 10, offset: 6194 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 6185 },
        end: { line: 117, column: 10, offset: 6194 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 119, column: 1, offset: 6196 },
            end: { line: 119, column: 5, offset: 6200 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 5, offset: 6200 },
            end: { line: 119, column: 11, offset: 6206 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to create the resource. ',
          position: {
            start: { line: 119, column: 11, offset: 6206 },
            end: { line: 119, column: 85, offset: 6280 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 85, offset: 6280 },
            end: { line: 119, column: 91, offset: 6286 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 119, column: 91, offset: 6286 },
            end: { line: 119, column: 185, offset: 6380 }
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
                start: { line: 119, column: 186, offset: 6381 },
                end: { line: 119, column: 195, offset: 6390 }
              }
            }
          ],
          position: {
            start: { line: 119, column: 185, offset: 6380 },
            end: { line: 119, column: 257, offset: 6452 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 119, column: 257, offset: 6452 },
            end: { line: 119, column: 278, offset: 6473 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 119, column: 278, offset: 6473 },
            end: { line: 119, column: 287, offset: 6482 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 119, column: 287, offset: 6482 },
            end: { line: 119, column: 291, offset: 6486 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 119, column: 291, offset: 6486 },
            end: { line: 119, column: 306, offset: 6501 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 119, column: 306, offset: 6501 },
            end: { line: 119, column: 328, offset: 6523 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 119, column: 328, offset: 6523 },
            end: { line: 119, column: 346, offset: 6541 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 119, column: 346, offset: 6541 },
            end: { line: 119, column: 354, offset: 6549 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6196 },
        end: { line: 119, column: 354, offset: 6549 }
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
            start: { line: 121, column: 6, offset: 6556 },
            end: { line: 121, column: 9, offset: 6559 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6551 },
        end: { line: 121, column: 9, offset: 6559 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 123, column: 1, offset: 6561 },
            end: { line: 123, column: 5, offset: 6565 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 5, offset: 6565 },
            end: { line: 123, column: 10, offset: 6570 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 123, column: 10, offset: 6570 },
            end: { line: 123, column: 135, offset: 6695 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 135, offset: 6695 },
            end: { line: 123, column: 140, offset: 6700 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 123, column: 140, offset: 6700 },
            end: { line: 123, column: 198, offset: 6758 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6561 },
        end: { line: 123, column: 198, offset: 6758 }
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
            start: { line: 125, column: 6, offset: 6765 },
            end: { line: 125, column: 11, offset: 6770 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6760 },
        end: { line: 125, column: 11, offset: 6770 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 127, column: 1, offset: 6772 },
            end: { line: 127, column: 5, offset: 6776 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 5, offset: 6776 },
            end: { line: 127, column: 12, offset: 6783 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the resource. ',
          position: {
            start: { line: 127, column: 12, offset: 6783 },
            end: { line: 127, column: 96, offset: 6867 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 96, offset: 6867 },
            end: { line: 127, column: 103, offset: 6874 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 127, column: 103, offset: 6874 },
            end: { line: 127, column: 227, offset: 6998 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 127, column: 227, offset: 6998 },
            end: { line: 127, column: 236, offset: 7007 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 127, column: 236, offset: 7007 },
            end: { line: 127, column: 240, offset: 7011 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 127, column: 240, offset: 7011 },
            end: { line: 127, column: 255, offset: 7026 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 127, column: 255, offset: 7026 },
            end: { line: 127, column: 277, offset: 7048 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 127, column: 277, offset: 7048 },
            end: { line: 127, column: 295, offset: 7066 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 127, column: 295, offset: 7066 },
            end: { line: 127, column: 303, offset: 7074 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6772 },
        end: { line: 127, column: 303, offset: 7074 }
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
            start: { line: 129, column: 6, offset: 7081 },
            end: { line: 129, column: 12, offset: 7087 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 7076 },
        end: { line: 129, column: 12, offset: 7087 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 131, column: 1, offset: 7089 },
            end: { line: 131, column: 5, offset: 7093 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 5, offset: 7093 },
            end: { line: 131, column: 13, offset: 7101 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the resource. ',
          position: {
            start: { line: 131, column: 13, offset: 7101 },
            end: { line: 131, column: 78, offset: 7166 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 78, offset: 7166 },
            end: { line: 131, column: 86, offset: 7174 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 131, column: 86, offset: 7174 },
            end: { line: 131, column: 148, offset: 7236 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 7089 },
        end: { line: 131, column: 148, offset: 7236 }
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
            start: { line: 133, column: 6, offset: 7243 },
            end: { line: 133, column: 13, offset: 7250 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 7238 },
        end: { line: 133, column: 13, offset: 7250 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 135, column: 1, offset: 7252 },
            end: { line: 135, column: 5, offset: 7256 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 5, offset: 7256 },
            end: { line: 135, column: 14, offset: 7265 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the resource. ',
          position: {
            start: { line: 135, column: 14, offset: 7265 },
            end: { line: 135, column: 119, offset: 7370 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 119, offset: 7370 },
            end: { line: 135, column: 128, offset: 7379 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 135, column: 128, offset: 7379 },
            end: { line: 135, column: 194, offset: 7445 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 7252 },
        end: { line: 135, column: 194, offset: 7445 }
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
            start: { line: 137, column: 6, offset: 7452 },
            end: { line: 137, column: 13, offset: 7459 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 7447 },
        end: { line: 137, column: 13, offset: 7459 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 139, column: 1, offset: 7461 },
            end: { line: 139, column: 5, offset: 7465 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 5, offset: 7465 },
            end: { line: 139, column: 14, offset: 7474 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options of the resource. ',
          position: {
            start: { line: 139, column: 14, offset: 7474 },
            end: { line: 139, column: 110, offset: 7570 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 110, offset: 7570 },
            end: { line: 139, column: 119, offset: 7579 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 139, column: 119, offset: 7579 },
            end: { line: 139, column: 177, offset: 7637 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7461 },
        end: { line: 139, column: 177, offset: 7637 }
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
            start: { line: 141, column: 6, offset: 7644 },
            end: { line: 141, column: 11, offset: 7649 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7639 },
        end: { line: 141, column: 11, offset: 7649 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 143, column: 1, offset: 7651 },
            end: { line: 143, column: 5, offset: 7655 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 5, offset: 7655 },
            end: { line: 143, column: 12, offset: 7662 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 143, column: 12, offset: 7662 },
            end: { line: 143, column: 66, offset: 7716 }
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
                start: { line: 143, column: 67, offset: 7717 },
                end: { line: 143, column: 81, offset: 7731 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 66, offset: 7716 },
            end: { line: 143, column: 134, offset: 7784 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the URL. ',
          position: {
            start: { line: 143, column: 134, offset: 7784 },
            end: { line: 143, column: 162, offset: 7812 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 162, offset: 7812 },
            end: { line: 143, column: 169, offset: 7819 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 143, column: 169, offset: 7819 },
            end: { line: 143, column: 227, offset: 7877 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7651 },
        end: { line: 143, column: 227, offset: 7877 }
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
            start: { line: 145, column: 5, offset: 7883 },
            end: { line: 145, column: 21, offset: 7899 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7879 },
        end: { line: 145, column: 21, offset: 7899 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request URL is the ',
          position: {
            start: { line: 147, column: 1, offset: 7901 },
            end: { line: 147, column: 29, offset: 7929 }
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
                start: { line: 147, column: 30, offset: 7930 },
                end: { line: 147, column: 33, offset: 7933 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 29, offset: 7929 },
            end: { line: 147, column: 40, offset: 7940 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 147, column: 40, offset: 7940 },
            end: { line: 147, column: 137, offset: 8037 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7901 },
        end: { line: 147, column: 137, offset: 8037 }
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
            start: { line: 149, column: 5, offset: 8043 },
            end: { line: 149, column: 25, offset: 8063 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 8039 },
        end: { line: 149, column: 25, offset: 8063 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request.',
          position: {
            start: { line: 151, column: 1, offset: 8065 },
            end: { line: 151, column: 144, offset: 8208 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 8065 },
        end: { line: 151, column: 144, offset: 8208 }
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
            start: { line: 153, column: 5, offset: 8214 },
            end: { line: 153, column: 22, offset: 8231 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 8210 },
        end: { line: 153, column: 22, offset: 8231 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP request body is the part of the request that carries the bulk of the data sent to the server. The content type of the request body should be specified in the request's ",
          position: {
            start: { line: 155, column: 1, offset: 8233 },
            end: { line: 155, column: 178, offset: 8410 }
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
                start: { line: 155, column: 179, offset: 8411 },
                end: { line: 155, column: 191, offset: 8423 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 178, offset: 8410 },
            end: { line: 155, column: 274, offset: 8506 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 155, column: 274, offset: 8506 },
            end: { line: 155, column: 282, offset: 8514 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 8233 },
        end: { line: 155, column: 282, offset: 8514 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP request bodies:',
          position: {
            start: { line: 157, column: 1, offset: 8516 },
            end: { line: 157, column: 38, offset: 8553 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 8516 },
        end: { line: 157, column: 38, offset: 8553 }
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
                        start: { line: 158, column: 5, offset: 8558 },
                        end: { line: 158, column: 9, offset: 8562 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 8557 },
                    end: { line: 158, column: 45, offset: 8598 }
                  }
                },
                {
                  type: 'text',
                  value: ' - request body used for web applications. The request method is typically ',
                  position: {
                    start: { line: 158, column: 45, offset: 8598 },
                    end: { line: 158, column: 120, offset: 8673 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 158, column: 120, offset: 8673 },
                    end: { line: 158, column: 125, offset: 8678 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 158, column: 125, offset: 8678 },
                    end: { line: 158, column: 127, offset: 8680 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 158, column: 127, offset: 8680 },
                    end: { line: 158, column: 133, offset: 8686 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 158, column: 133, offset: 8686 },
                    end: { line: 158, column: 138, offset: 8691 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 158, column: 138, offset: 8691 },
                    end: { line: 158, column: 145, offset: 8698 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 158, column: 145, offset: 8698 },
                    end: { line: 158, column: 151, offset: 8704 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 158, column: 151, offset: 8704 },
                    end: { line: 158, column: 165, offset: 8718 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 158, column: 165, offset: 8718 },
                    end: { line: 158, column: 187, offset: 8740 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 158, column: 187, offset: 8740 },
                    end: { line: 158, column: 205, offset: 8758 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 158, column: 205, offset: 8758 },
                    end: { line: 158, column: 206, offset: 8759 }
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 8557 },
                end: { line: 158, column: 206, offset: 8759 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 2, offset: 8555 },
            end: { line: 158, column: 206, offset: 8759 }
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
                    start: { line: 159, column: 4, offset: 8763 },
                    end: { line: 159, column: 83, offset: 8842 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 159, column: 83, offset: 8842 },
                    end: { line: 159, column: 88, offset: 8847 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 159, column: 88, offset: 8847 },
                    end: { line: 159, column: 92, offset: 8851 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 159, column: 92, offset: 8851 },
                    end: { line: 159, column: 98, offset: 8857 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 159, column: 98, offset: 8857 },
                    end: { line: 159, column: 104, offset: 8863 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 159, column: 104, offset: 8863 },
                    end: { line: 159, column: 118, offset: 8877 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 159, column: 118, offset: 8877 },
                    end: { line: 159, column: 139, offset: 8898 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 159, column: 139, offset: 8898 },
                    end: { line: 159, column: 151, offset: 8910 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 151, offset: 8910 },
                    end: { line: 159, column: 153, offset: 8912 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 159, column: 153, offset: 8912 },
                    end: { line: 159, column: 164, offset: 8923 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 164, offset: 8923 },
                    end: { line: 159, column: 166, offset: 8925 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 159, column: 166, offset: 8925 },
                    end: { line: 159, column: 178, offset: 8937 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 178, offset: 8937 },
                    end: { line: 159, column: 180, offset: 8939 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 159, column: 180, offset: 8939 },
                    end: { line: 159, column: 193, offset: 8952 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 159, column: 193, offset: 8952 },
                    end: { line: 159, column: 198, offset: 8957 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 159, column: 198, offset: 8957 },
                    end: { line: 159, column: 209, offset: 8968 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 159, column: 209, offset: 8968 },
                    end: { line: 159, column: 210, offset: 8969 }
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 8763 },
                end: { line: 159, column: 210, offset: 8969 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 2, offset: 8761 },
            end: { line: 159, column: 210, offset: 8969 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 2, offset: 8555 },
        end: { line: 159, column: 210, offset: 8969 }
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
            start: { line: 161, column: 4, offset: 8974 },
            end: { line: 161, column: 17, offset: 8987 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8971 },
        end: { line: 161, column: 17, offset: 8987 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client. An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8989 },
            end: { line: 163, column: 149, offset: 9137 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8989 },
        end: { line: 163, column: 149, offset: 9137 }
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
                  url: '#http-response-status-code',
                  children: [
                    {
                      type: 'text',
                      value: 'status code',
                      position: {
                        start: { line: 164, column: 5, offset: 9142 },
                        end: { line: 164, column: 16, offset: 9153 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 164, column: 4, offset: 9141 },
                    end: { line: 164, column: 45, offset: 9182 }
                  }
                }
              ],
              position: {
                start: { line: 164, column: 4, offset: 9141 },
                end: { line: 164, column: 45, offset: 9182 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 2, offset: 9139 },
            end: { line: 164, column: 45, offset: 9182 }
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
                  url: '#http-response-headers',
                  children: [
                    {
                      type: 'text',
                      value: 'headers',
                      position: {
                        start: { line: 165, column: 5, offset: 9187 },
                        end: { line: 165, column: 12, offset: 9194 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 165, column: 4, offset: 9186 },
                    end: { line: 165, column: 37, offset: 9219 }
                  }
                }
              ],
              position: {
                start: { line: 165, column: 4, offset: 9186 },
                end: { line: 165, column: 37, offset: 9219 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 2, offset: 9184 },
            end: { line: 165, column: 37, offset: 9219 }
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
                  url: '#http-response-body',
                  children: [
                    {
                      type: 'text',
                      value: 'body',
                      position: {
                        start: { line: 166, column: 5, offset: 9224 },
                        end: { line: 166, column: 9, offset: 9228 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 166, column: 4, offset: 9223 },
                    end: { line: 166, column: 31, offset: 9250 }
                  }
                }
              ],
              position: {
                start: { line: 166, column: 4, offset: 9223 },
                end: { line: 166, column: 31, offset: 9250 }
              }
            }
          ],
          position: {
            start: { line: 166, column: 2, offset: 9221 },
            end: { line: 166, column: 31, offset: 9250 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 2, offset: 9139 },
        end: { line: 166, column: 31, offset: 9250 }
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
            start: { line: 168, column: 5, offset: 9256 },
            end: { line: 168, column: 30, offset: 9281 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 9252 },
        end: { line: 168, column: 30, offset: 9281 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response status code is a three-digit code that indicates the status of the server's processing of the request.",
          position: {
            start: { line: 170, column: 1, offset: 9283 },
            end: { line: 170, column: 121, offset: 9403 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 9283 },
        end: { line: 170, column: 121, offset: 9403 }
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
            start: { line: 172, column: 6, offset: 9410 },
            end: { line: 172, column: 42, offset: 9446 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 9405 },
        end: { line: 172, column: 42, offset: 9446 }
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
            start: { line: 174, column: 7, offset: 9454 },
            end: { line: 174, column: 19, offset: 9466 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 9448 },
        end: { line: 174, column: 19, offset: 9466 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received the request headers and is ready for the client to send the request body.',
          position: {
            start: { line: 176, column: 1, offset: 9468 },
            end: { line: 176, column: 98, offset: 9565 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 9468 },
        end: { line: 176, column: 98, offset: 9565 }
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
            start: { line: 178, column: 7, offset: 9573 },
            end: { line: 178, column: 30, offset: 9596 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 9567 },
        end: { line: 178, column: 30, offset: 9596 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is switching to a different protocol, specified in the ',
          position: {
            start: { line: 180, column: 1, offset: 9598 },
            end: { line: 180, column: 67, offset: 9664 }
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
                start: { line: 180, column: 68, offset: 9665 },
                end: { line: 180, column: 75, offset: 9672 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 67, offset: 9664 },
            end: { line: 180, column: 153, offset: 9750 }
          }
        },
        {
          type: 'text',
          value: " header, at the client's request. ",
          position: {
            start: { line: 180, column: 153, offset: 9750 },
            end: { line: 180, column: 187, offset: 9784 }
          }
        },
        {
          type: 'inlineCode',
          value: '101 Switching Protocols',
          position: {
            start: { line: 180, column: 187, offset: 9784 },
            end: { line: 180, column: 212, offset: 9809 }
          }
        },
        {
          type: 'text',
          value: ' is used by the ',
          position: {
            start: { line: 180, column: 212, offset: 9809 },
            end: { line: 180, column: 228, offset: 9825 }
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
                start: { line: 180, column: 229, offset: 9826 },
                end: { line: 180, column: 238, offset: 9835 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 228, offset: 9825 },
            end: { line: 180, column: 260, offset: 9857 }
          }
        },
        {
          type: 'text',
          value: ' protocol when switching from HTTP.',
          position: {
            start: { line: 180, column: 260, offset: 9857 },
            end: { line: 180, column: 295, offset: 9892 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 9598 },
        end: { line: 180, column: 295, offset: 9892 }
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
            start: { line: 182, column: 7, offset: 9900 },
            end: { line: 182, column: 21, offset: 9914 }
          }
        }
      ],
      position: {
        start: { line: 182, column: 1, offset: 9894 },
        end: { line: 182, column: 21, offset: 9914 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received and is processing the request but no response is available yet.',
          position: {
            start: { line: 184, column: 1, offset: 9916 },
            end: { line: 184, column: 88, offset: 10003 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 9916 },
        end: { line: 184, column: 88, offset: 10003 }
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
            start: { line: 186, column: 7, offset: 10011 },
            end: { line: 186, column: 22, offset: 10026 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 10005 },
        end: { line: 186, column: 22, offset: 10026 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.',
          position: {
            start: { line: 188, column: 1, offset: 10028 },
            end: { line: 188, column: 139, offset: 10166 }
          }
        }
      ],
      position: {
        start: { line: 188, column: 1, offset: 10028 },
        end: { line: 188, column: 139, offset: 10166 }
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
            start: { line: 190, column: 6, offset: 10173 },
            end: { line: 190, column: 39, offset: 10206 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 10168 },
        end: { line: 190, column: 39, offset: 10206 }
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
            start: { line: 192, column: 7, offset: 10214 },
            end: { line: 192, column: 13, offset: 10220 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 10208 },
        end: { line: 192, column: 13, offset: 10220 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server successfully processed the request. The meaning of success depends on the request method:',
          position: {
            start: { line: 194, column: 1, offset: 10222 },
            end: { line: 194, column: 101, offset: 10322 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 10222 },
        end: { line: 194, column: 101, offset: 10322 }
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
                    start: { line: 195, column: 4, offset: 10326 },
                    end: { line: 195, column: 9, offset: 10331 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource has been successfully retrieved and transmitted in the response message body.',
                  position: {
                    start: { line: 195, column: 9, offset: 10331 },
                    end: { line: 195, column: 102, offset: 10424 }
                  }
                }
              ],
              position: {
                start: { line: 195, column: 4, offset: 10326 },
                end: { line: 195, column: 102, offset: 10424 }
              }
            }
          ],
          position: {
            start: { line: 195, column: 2, offset: 10324 },
            end: { line: 195, column: 102, offset: 10424 }
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
                    start: { line: 196, column: 4, offset: 10428 },
                    end: { line: 196, column: 10, offset: 10434 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The requested metadata about the resource is available in the response headers.',
                  position: {
                    start: { line: 196, column: 10, offset: 10434 },
                    end: { line: 196, column: 92, offset: 10516 }
                  }
                }
              ],
              position: {
                start: { line: 196, column: 4, offset: 10428 },
                end: { line: 196, column: 92, offset: 10516 }
              }
            }
          ],
          position: {
            start: { line: 196, column: 2, offset: 10426 },
            end: { line: 196, column: 92, offset: 10516 }
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
                    start: { line: 197, column: 4, offset: 10520 },
                    end: { line: 197, column: 10, offset: 10526 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created successfully.',
                  position: {
                    start: { line: 197, column: 10, offset: 10526 },
                    end: { line: 197, column: 51, offset: 10567 }
                  }
                }
              ],
              position: {
                start: { line: 197, column: 4, offset: 10520 },
                end: { line: 197, column: 51, offset: 10567 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 2, offset: 10518 },
            end: { line: 197, column: 51, offset: 10567 }
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
                    start: { line: 198, column: 4, offset: 10571 },
                    end: { line: 198, column: 9, offset: 10576 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created or updated successfully.',
                  position: {
                    start: { line: 198, column: 9, offset: 10576 },
                    end: { line: 198, column: 61, offset: 10628 }
                  }
                }
              ],
              position: {
                start: { line: 198, column: 4, offset: 10571 },
                end: { line: 198, column: 61, offset: 10628 }
              }
            }
          ],
          position: {
            start: { line: 198, column: 2, offset: 10569 },
            end: { line: 198, column: 61, offset: 10628 }
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
                    start: { line: 199, column: 4, offset: 10632 },
                    end: { line: 199, column: 11, offset: 10639 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was updated successfully.',
                  position: {
                    start: { line: 199, column: 11, offset: 10639 },
                    end: { line: 199, column: 52, offset: 10680 }
                  }
                }
              ],
              position: {
                start: { line: 199, column: 4, offset: 10632 },
                end: { line: 199, column: 52, offset: 10680 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 2, offset: 10630 },
            end: { line: 199, column: 52, offset: 10680 }
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
                    start: { line: 200, column: 4, offset: 10684 },
                    end: { line: 200, column: 12, offset: 10692 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was deleted successfully.',
                  position: {
                    start: { line: 200, column: 12, offset: 10692 },
                    end: { line: 200, column: 53, offset: 10733 }
                  }
                }
              ],
              position: {
                start: { line: 200, column: 4, offset: 10684 },
                end: { line: 200, column: 53, offset: 10733 }
              }
            }
          ],
          position: {
            start: { line: 200, column: 2, offset: 10682 },
            end: { line: 200, column: 53, offset: 10733 }
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
                    start: { line: 201, column: 4, offset: 10737 },
                    end: { line: 201, column: 13, offset: 10746 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The connection was established successfully.',
                  position: {
                    start: { line: 201, column: 13, offset: 10746 },
                    end: { line: 201, column: 60, offset: 10793 }
                  }
                }
              ],
              position: {
                start: { line: 201, column: 4, offset: 10737 },
                end: { line: 201, column: 60, offset: 10793 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 2, offset: 10735 },
            end: { line: 201, column: 60, offset: 10793 }
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
                    start: { line: 202, column: 4, offset: 10797 },
                    end: { line: 202, column: 13, offset: 10806 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The communication options are available in the ',
                  position: {
                    start: { line: 202, column: 13, offset: 10806 },
                    end: { line: 202, column: 63, offset: 10856 }
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
                        start: { line: 202, column: 64, offset: 10857 },
                        end: { line: 202, column: 69, offset: 10862 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 202, column: 63, offset: 10856 },
                    end: { line: 202, column: 145, offset: 10938 }
                  }
                },
                {
                  type: 'text',
                  value: ' header.',
                  position: {
                    start: { line: 202, column: 145, offset: 10938 },
                    end: { line: 202, column: 153, offset: 10946 }
                  }
                }
              ],
              position: {
                start: { line: 202, column: 4, offset: 10797 },
                end: { line: 202, column: 153, offset: 10946 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 2, offset: 10795 },
            end: { line: 202, column: 153, offset: 10946 }
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
                    start: { line: 203, column: 4, offset: 10950 },
                    end: { line: 203, column: 11, offset: 10957 }
                  }
                },
                {
                  type: 'text',
                  value: " - The server successfully received and echoed back the client's request.",
                  position: {
                    start: { line: 203, column: 11, offset: 10957 },
                    end: { line: 203, column: 84, offset: 11030 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10950 },
                end: { line: 203, column: 84, offset: 11030 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10948 },
            end: { line: 203, column: 84, offset: 11030 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 2, offset: 10324 },
        end: { line: 203, column: 84, offset: 11030 }
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
            start: { line: 205, column: 7, offset: 11038 },
            end: { line: 205, column: 18, offset: 11049 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 11032 },
        end: { line: 205, column: 18, offset: 11049 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded and a new resource was created.',
          position: {
            start: { line: 207, column: 1, offset: 11051 },
            end: { line: 207, column: 54, offset: 11104 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 11051 },
        end: { line: 207, column: 54, offset: 11104 }
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
            start: { line: 209, column: 7, offset: 11112 },
            end: { line: 209, column: 19, offset: 11124 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 11106 },
        end: { line: 209, column: 19, offset: 11124 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request has been received but has not yet been processed.',
          position: {
            start: { line: 211, column: 1, offset: 11126 },
            end: { line: 211, column: 62, offset: 11187 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 11126 },
        end: { line: 211, column: 62, offset: 11187 }
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
            start: { line: 213, column: 7, offset: 11195 },
            end: { line: 213, column: 40, offset: 11228 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 11189 },
        end: { line: 213, column: 40, offset: 11228 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded but the response headers or body were modified by a proxy server before being sent to the client.',
          position: {
            start: { line: 215, column: 1, offset: 11230 },
            end: { line: 215, column: 120, offset: 11349 }
          }
        }
      ],
      position: {
        start: { line: 215, column: 1, offset: 11230 },
        end: { line: 215, column: 120, offset: 11349 }
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
            start: { line: 217, column: 7, offset: 11357 },
            end: { line: 217, column: 21, offset: 11371 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 11351 },
        end: { line: 217, column: 21, offset: 11371 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, but there is no content available for this request. The client may update its cached headers for the requested resource with the response headers from this request.',
          position: {
            start: { line: 219, column: 1, offset: 11373 },
            end: { line: 219, column: 216, offset: 11588 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 11373 },
        end: { line: 219, column: 216, offset: 11588 }
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
            start: { line: 221, column: 7, offset: 11596 },
            end: { line: 221, column: 24, offset: 11613 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 11590 },
        end: { line: 221, column: 24, offset: 11613 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and asks the client to reset the document to its original state.',
          position: {
            start: { line: 223, column: 1, offset: 11615 },
            end: { line: 223, column: 116, offset: 11730 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 11615 },
        end: { line: 223, column: 116, offset: 11730 }
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
            start: { line: 225, column: 7, offset: 11738 },
            end: { line: 225, column: 26, offset: 11757 }
          }
        }
      ],
      position: {
        start: { line: 225, column: 1, offset: 11732 },
        end: { line: 225, column: 26, offset: 11757 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and is delivering only part of the requested resource. ',
          position: {
            start: { line: 227, column: 1, offset: 11759 },
            end: { line: 227, column: 107, offset: 11865 }
          }
        },
        {
          type: 'inlineCode',
          value: '206 Partial Content',
          position: {
            start: { line: 227, column: 107, offset: 11865 },
            end: { line: 227, column: 128, offset: 11886 }
          }
        },
        {
          type: 'text',
          value: ' is commonly used in ',
          position: {
            start: { line: 227, column: 128, offset: 11886 },
            end: { line: 227, column: 149, offset: 11907 }
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
                start: { line: 227, column: 150, offset: 11908 },
                end: { line: 227, column: 164, offset: 11922 }
              }
            }
          ],
          position: {
            start: { line: 227, column: 149, offset: 11907 },
            end: { line: 227, column: 238, offset: 11996 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 227, column: 238, offset: 11996 },
            end: { line: 227, column: 239, offset: 11997 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 11759 },
        end: { line: 227, column: 239, offset: 11997 }
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
            start: { line: 229, column: 6, offset: 12004 },
            end: { line: 229, column: 40, offset: 12038 }
          }
        }
      ],
      position: {
        start: { line: 229, column: 1, offset: 11999 },
        end: { line: 229, column: 40, offset: 12038 }
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
            start: { line: 231, column: 7, offset: 12046 },
            end: { line: 231, column: 27, offset: 12066 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 1, offset: 12040 },
        end: { line: 231, column: 27, offset: 12066 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has multiple representations, and the client needs to choose which one to access.',
          position: {
            start: { line: 233, column: 1, offset: 12068 },
            end: { line: 233, column: 95, offset: 12162 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 12068 },
        end: { line: 233, column: 95, offset: 12162 }
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
            start: { line: 235, column: 7, offset: 12170 },
            end: { line: 235, column: 28, offset: 12191 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 12164 },
        end: { line: 235, column: 28, offset: 12191 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 237, column: 1, offset: 12193 },
            end: { line: 237, column: 118, offset: 12310 }
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
                start: { line: 237, column: 119, offset: 12311 },
                end: { line: 237, column: 127, offset: 12319 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 118, offset: 12310 },
            end: { line: 237, column: 206, offset: 12398 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 237, column: 206, offset: 12398 },
            end: { line: 237, column: 230, offset: 12422 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 12193 },
        end: { line: 237, column: 230, offset: 12422 }
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
            start: { line: 239, column: 7, offset: 12430 },
            end: { line: 239, column: 16, offset: 12439 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 12424 },
        end: { line: 239, column: 16, offset: 12439 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 241, column: 1, offset: 12441 },
            end: { line: 241, column: 118, offset: 12558 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 241, column: 118, offset: 12558 },
            end: { line: 241, column: 128, offset: 12568 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 241, column: 128, offset: 12568 },
            end: { line: 241, column: 152, offset: 12592 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 12441 },
        end: { line: 241, column: 152, offset: 12592 }
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
            start: { line: 243, column: 7, offset: 12600 },
            end: { line: 243, column: 20, offset: 12613 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 12594 },
        end: { line: 243, column: 20, offset: 12613 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is redirecting the client's request for the resource to a different resource. The URL of the redirected resource is available in the ",
          position: {
            start: { line: 245, column: 1, offset: 12615 },
            end: { line: 245, column: 145, offset: 12759 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 245, column: 145, offset: 12759 },
            end: { line: 245, column: 155, offset: 12769 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the HTTP ',
          position: {
            start: { line: 245, column: 155, offset: 12769 },
            end: { line: 245, column: 211, offset: 12825 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 245, column: 211, offset: 12825 },
            end: { line: 245, column: 216, offset: 12830 }
          }
        },
        {
          type: 'text',
          value: ' method to request the redirected resource.',
          position: {
            start: { line: 245, column: 216, offset: 12830 },
            end: { line: 245, column: 259, offset: 12873 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 12615 },
        end: { line: 245, column: 259, offset: 12873 }
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
            start: { line: 247, column: 7, offset: 12881 },
            end: { line: 247, column: 23, offset: 12897 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 12875 },
        end: { line: 247, column: 23, offset: 12897 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has not been modified since the last access, so the client can continue to use the same cached version of the resource.',
          position: {
            start: { line: 249, column: 1, offset: 12899 },
            end: { line: 249, column: 133, offset: 13031 }
          }
        }
      ],
      position: {
        start: { line: 249, column: 1, offset: 12899 },
        end: { line: 249, column: 133, offset: 13031 }
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
            start: { line: 251, column: 7, offset: 13039 },
            end: { line: 251, column: 29, offset: 13061 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 13033 },
        end: { line: 251, column: 29, offset: 13061 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 253, column: 1, offset: 13063 },
            end: { line: 253, column: 118, offset: 13180 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 253, column: 118, offset: 13180 },
            end: { line: 253, column: 128, offset: 13190 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 253, column: 128, offset: 13190 },
            end: { line: 253, column: 235, offset: 13297 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 13063 },
        end: { line: 253, column: 235, offset: 13297 }
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
            start: { line: 255, column: 7, offset: 13305 },
            end: { line: 255, column: 29, offset: 13327 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 13299 },
        end: { line: 255, column: 29, offset: 13327 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 257, column: 1, offset: 13329 },
            end: { line: 257, column: 118, offset: 13446 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 257, column: 118, offset: 13446 },
            end: { line: 257, column: 128, offset: 13456 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 257, column: 128, offset: 13456 },
            end: { line: 257, column: 235, offset: 13563 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 13329 },
        end: { line: 257, column: 235, offset: 13563 }
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
            start: { line: 259, column: 6, offset: 13570 },
            end: { line: 259, column: 41, offset: 13605 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 13565 },
        end: { line: 259, column: 41, offset: 13605 }
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
            start: { line: 261, column: 7, offset: 13613 },
            end: { line: 261, column: 22, offset: 13628 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 13607 },
        end: { line: 261, column: 22, offset: 13628 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot process the request due to client error, e.g. invalid syntax.',
          position: {
            start: { line: 263, column: 1, offset: 13630 },
            end: { line: 263, column: 80, offset: 13709 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 13630 },
        end: { line: 263, column: 80, offset: 13709 }
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
            start: { line: 265, column: 7, offset: 13717 },
            end: { line: 265, column: 23, offset: 13733 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 13711 },
        end: { line: 265, column: 23, offset: 13733 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials.',
          position: {
            start: { line: 267, column: 1, offset: 13735 },
            end: { line: 267, column: 52, offset: 13786 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 13735 },
        end: { line: 267, column: 52, offset: 13786 }
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
            start: { line: 269, column: 7, offset: 13794 },
            end: { line: 269, column: 27, offset: 13814 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 13788 },
        end: { line: 269, column: 27, offset: 13814 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested content is not available until the client makes a payment.',
          position: {
            start: { line: 271, column: 1, offset: 13816 },
            end: { line: 271, column: 73, offset: 13888 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 13816 },
        end: { line: 271, column: 73, offset: 13888 }
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
            start: { line: 273, column: 7, offset: 13896 },
            end: { line: 273, column: 20, offset: 13909 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 13890 },
        end: { line: 273, column: 20, offset: 13909 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is refusing the client access to the requested resource.',
          position: {
            start: { line: 275, column: 1, offset: 13911 },
            end: { line: 275, column: 68, offset: 13978 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 13911 },
        end: { line: 275, column: 68, offset: 13978 }
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
            start: { line: 277, column: 7, offset: 13986 },
            end: { line: 277, column: 20, offset: 13999 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 13980 },
        end: { line: 277, column: 20, offset: 13999 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot find the requested resource. Either the URL is not recognized, or the URL is recognized but the requested resource does not exist.',
          position: {
            start: { line: 279, column: 1, offset: 14001 },
            end: { line: 279, column: 149, offset: 14149 }
          }
        }
      ],
      position: {
        start: { line: 279, column: 1, offset: 14001 },
        end: { line: 279, column: 149, offset: 14149 }
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
            start: { line: 281, column: 7, offset: 14157 },
            end: { line: 281, column: 29, offset: 14179 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 14151 },
        end: { line: 281, column: 29, offset: 14179 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is known by the server but it is not supported for the requested resource.',
          position: {
            start: { line: 283, column: 1, offset: 14181 },
            end: { line: 283, column: 94, offset: 14274 }
          }
        }
      ],
      position: {
        start: { line: 283, column: 1, offset: 14181 },
        end: { line: 283, column: 94, offset: 14274 }
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
            start: { line: 285, column: 7, offset: 14282 },
            end: { line: 285, column: 25, offset: 14300 }
          }
        }
      ],
      position: {
        start: { line: 285, column: 1, offset: 14276 },
        end: { line: 285, column: 25, offset: 14300 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is unable to provide a response that matches the client's requested format, typically specified in the ",
          position: {
            start: { line: 287, column: 1, offset: 14302 },
            end: { line: 287, column: 115, offset: 14416 }
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
                start: { line: 287, column: 116, offset: 14417 },
                end: { line: 287, column: 122, offset: 14423 }
              }
            }
          ],
          position: {
            start: { line: 287, column: 115, offset: 14416 },
            end: { line: 287, column: 199, offset: 14500 }
          }
        },
        {
          type: 'text',
          value: ' header of the request.',
          position: {
            start: { line: 287, column: 199, offset: 14500 },
            end: { line: 287, column: 222, offset: 14523 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 14302 },
        end: { line: 287, column: 222, offset: 14523 }
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
            start: { line: 289, column: 7, offset: 14531 },
            end: { line: 289, column: 40, offset: 14564 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 14525 },
        end: { line: 289, column: 40, offset: 14564 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials for the ',
          position: {
            start: { line: 291, column: 1, offset: 14566 },
            end: { line: 291, column: 60, offset: 14625 }
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
                start: { line: 291, column: 61, offset: 14626 },
                end: { line: 291, column: 73, offset: 14638 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 60, offset: 14625 },
            end: { line: 291, column: 118, offset: 14683 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 291, column: 118, offset: 14683 },
            end: { line: 291, column: 119, offset: 14684 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 14566 },
        end: { line: 291, column: 120, offset: 14685 }
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
            start: { line: 293, column: 7, offset: 14693 },
            end: { line: 293, column: 26, offset: 14712 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 14687 },
        end: { line: 293, column: 26, offset: 14712 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server would like to shut down the unused connection.',
          position: {
            start: { line: 295, column: 1, offset: 14714 },
            end: { line: 295, column: 58, offset: 14771 }
          }
        }
      ],
      position: {
        start: { line: 295, column: 1, offset: 14714 },
        end: { line: 295, column: 58, offset: 14771 }
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
            start: { line: 297, column: 7, offset: 14779 },
            end: { line: 297, column: 19, offset: 14791 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 14773 },
        end: { line: 297, column: 19, offset: 14791 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request conflicts with the current state of the resource, e.g. when trying to create a resource that already exists.',
          position: {
            start: { line: 299, column: 1, offset: 14793 },
            end: { line: 299, column: 121, offset: 14913 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 14793 },
        end: { line: 299, column: 121, offset: 14913 }
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
            start: { line: 301, column: 7, offset: 14921 },
            end: { line: 301, column: 15, offset: 14929 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 14915 },
        end: { line: 301, column: 15, offset: 14929 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has been permanently removed from the server.',
          position: {
            start: { line: 303, column: 1, offset: 14931 },
            end: { line: 303, column: 59, offset: 14989 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 14931 },
        end: { line: 303, column: 59, offset: 14989 }
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
            start: { line: 305, column: 7, offset: 14997 },
            end: { line: 305, column: 26, offset: 15016 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 14991 },
        end: { line: 305, column: 26, offset: 15016 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 307, column: 1, offset: 15018 },
            end: { line: 307, column: 5, offset: 15022 }
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
                start: { line: 307, column: 6, offset: 15023 },
                end: { line: 307, column: 20, offset: 15037 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 5, offset: 15022 },
            end: { line: 307, column: 105, offset: 15122 }
          }
        },
        {
          type: 'text',
          value: ' request header is required but not present.',
          position: {
            start: { line: 307, column: 105, offset: 15122 },
            end: { line: 307, column: 149, offset: 15166 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 15018 },
        end: { line: 307, column: 149, offset: 15166 }
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
            start: { line: 309, column: 7, offset: 15174 },
            end: { line: 309, column: 30, offset: 15197 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 1, offset: 15168 },
        end: { line: 309, column: 30, offset: 15197 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request headers have indicated preconditions that the server does not meet.',
          position: {
            start: { line: 311, column: 1, offset: 15199 },
            end: { line: 311, column: 80, offset: 15278 }
          }
        }
      ],
      position: {
        start: { line: 311, column: 1, offset: 15199 },
        end: { line: 311, column: 80, offset: 15278 }
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
            start: { line: 313, column: 7, offset: 15286 },
            end: { line: 313, column: 28, offset: 15307 }
          }
        }
      ],
      position: {
        start: { line: 313, column: 1, offset: 15280 },
        end: { line: 313, column: 28, offset: 15307 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request body is larger than the limits defined by the server. The server might close the connection or respond with a ',
          position: {
            start: { line: 315, column: 1, offset: 15309 },
            end: { line: 315, column: 123, offset: 15431 }
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
                start: { line: 315, column: 124, offset: 15432 },
                end: { line: 315, column: 135, offset: 15443 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 123, offset: 15431 },
            end: { line: 315, column: 217, offset: 15525 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 315, column: 217, offset: 15525 },
            end: { line: 315, column: 225, offset: 15533 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 15309 },
        end: { line: 315, column: 225, offset: 15533 }
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
            start: { line: 317, column: 7, offset: 15541 },
            end: { line: 317, column: 23, offset: 15557 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 15535 },
        end: { line: 317, column: 23, offset: 15557 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource is too long.',
          position: {
            start: { line: 319, column: 1, offset: 15559 },
            end: { line: 319, column: 47, offset: 15605 }
          }
        }
      ],
      position: {
        start: { line: 319, column: 1, offset: 15559 },
        end: { line: 319, column: 47, offset: 15605 }
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
            start: { line: 321, column: 7, offset: 15613 },
            end: { line: 321, column: 33, offset: 15639 }
          }
        }
      ],
      position: {
        start: { line: 321, column: 1, offset: 15607 },
        end: { line: 321, column: 33, offset: 15639 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The media format of the requested resource is not supported by the server.',
          position: {
            start: { line: 323, column: 1, offset: 15641 },
            end: { line: 323, column: 75, offset: 15715 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 15641 },
        end: { line: 323, column: 75, offset: 15715 }
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
            start: { line: 325, column: 7, offset: 15723 },
            end: { line: 325, column: 32, offset: 15748 }
          }
        }
      ],
      position: {
        start: { line: 325, column: 1, offset: 15717 },
        end: { line: 325, column: 32, offset: 15748 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The ranges specified in the request's ",
          position: {
            start: { line: 327, column: 1, offset: 15750 },
            end: { line: 327, column: 39, offset: 15788 }
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
                start: { line: 327, column: 40, offset: 15789 },
                end: { line: 327, column: 45, offset: 15794 }
              }
            }
          ],
          position: {
            start: { line: 327, column: 39, offset: 15788 },
            end: { line: 327, column: 121, offset: 15870 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be fulfilled by the server.',
          position: {
            start: { line: 327, column: 121, offset: 15870 },
            end: { line: 327, column: 163, offset: 15912 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 15750 },
        end: { line: 327, column: 163, offset: 15912 }
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
            start: { line: 329, column: 7, offset: 15920 },
            end: { line: 329, column: 29, offset: 15942 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 15914 },
        end: { line: 329, column: 29, offset: 15942 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The expectation indicated by the request's ",
          position: {
            start: { line: 331, column: 1, offset: 15944 },
            end: { line: 331, column: 44, offset: 15987 }
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
                start: { line: 331, column: 45, offset: 15988 },
                end: { line: 331, column: 51, offset: 15994 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 44, offset: 15987 },
            end: { line: 331, column: 128, offset: 16071 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be met by the server.',
          position: {
            start: { line: 331, column: 128, offset: 16071 },
            end: { line: 331, column: 164, offset: 16107 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 15944 },
        end: { line: 331, column: 164, offset: 16107 }
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
            start: { line: 333, column: 7, offset: 16115 },
            end: { line: 333, column: 23, offset: 16131 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 16109 },
        end: { line: 333, column: 23, offset: 16131 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses the attempt to brew coffee with a teapot.',
          position: {
            start: { line: 335, column: 1, offset: 16133 },
            end: { line: 335, column: 61, offset: 16193 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 16133 },
        end: { line: 335, column: 61, offset: 16193 }
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
            start: { line: 337, column: 7, offset: 16201 },
            end: { line: 337, column: 30, offset: 16224 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 16195 },
        end: { line: 337, column: 30, offset: 16224 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The request was directed at a server that is not configured to produce a response for the request URL's scheme and authority.",
          position: {
            start: { line: 339, column: 1, offset: 16226 },
            end: { line: 339, column: 126, offset: 16351 }
          }
        }
      ],
      position: {
        start: { line: 339, column: 1, offset: 16226 },
        end: { line: 339, column: 126, offset: 16351 }
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
            start: { line: 341, column: 7, offset: 16359 },
            end: { line: 341, column: 32, offset: 16384 }
          }
        }
      ],
      position: {
        start: { line: 341, column: 1, offset: 16353 },
        end: { line: 341, column: 32, offset: 16384 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request was well-formed but was unable to be processed due to semantic errors.',
          position: {
            start: { line: 343, column: 1, offset: 16386 },
            end: { line: 343, column: 83, offset: 16468 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 16386 },
        end: { line: 343, column: 83, offset: 16468 }
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
            start: { line: 345, column: 7, offset: 16476 },
            end: { line: 345, column: 17, offset: 16486 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 16470 },
        end: { line: 345, column: 17, offset: 16486 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is locked.',
          position: {
            start: { line: 347, column: 1, offset: 16488 },
            end: { line: 347, column: 34, offset: 16521 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 16488 },
        end: { line: 347, column: 34, offset: 16521 }
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
            start: { line: 349, column: 7, offset: 16529 },
            end: { line: 349, column: 28, offset: 16550 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 16523 },
        end: { line: 349, column: 28, offset: 16550 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request failed due to the failure of a previous request.',
          position: {
            start: { line: 351, column: 1, offset: 16552 },
            end: { line: 351, column: 61, offset: 16612 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 16552 },
        end: { line: 351, column: 61, offset: 16612 }
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
            start: { line: 353, column: 7, offset: 16620 },
            end: { line: 353, column: 20, offset: 16633 }
          }
        }
      ],
      position: {
        start: { line: 353, column: 1, offset: 16614 },
        end: { line: 353, column: 20, offset: 16633 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is unwilling to risk processing a request that might be replayed.',
          position: {
            start: { line: 355, column: 1, offset: 16635 },
            end: { line: 355, column: 77, offset: 16711 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 16635 },
        end: { line: 355, column: 77, offset: 16711 }
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
            start: { line: 357, column: 7, offset: 16719 },
            end: { line: 357, column: 27, offset: 16739 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 16713 },
        end: { line: 357, column: 27, offset: 16739 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses to process the request under the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an ',
          position: {
            start: { line: 359, column: 1, offset: 16741 },
            end: { line: 359, column: 171, offset: 16911 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Upgrade',
          position: {
            start: { line: 359, column: 171, offset: 16911 },
            end: { line: 359, column: 180, offset: 16920 }
          }
        },
        {
          type: 'text',
          value: ' header in the response to indicate the required protocol(s).',
          position: {
            start: { line: 359, column: 180, offset: 16920 },
            end: { line: 359, column: 241, offset: 16981 }
          }
        }
      ],
      position: {
        start: { line: 359, column: 1, offset: 16741 },
        end: { line: 359, column: 241, offset: 16981 }
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
            start: { line: 361, column: 7, offset: 16989 },
            end: { line: 361, column: 32, offset: 17014 }
          }
        }
      ],
      position: {
        start: { line: 361, column: 1, offset: 16983 },
        end: { line: 361, column: 32, offset: 17014 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The origin server requires the request to be ',
          position: {
            start: { line: 363, column: 1, offset: 17016 },
            end: { line: 363, column: 46, offset: 17061 }
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
                start: { line: 363, column: 47, offset: 17062 },
                end: { line: 363, column: 58, offset: 17073 }
              }
            }
          ],
          position: {
            start: { line: 363, column: 46, offset: 17061 },
            end: { line: 363, column: 138, offset: 17153 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 363, column: 138, offset: 17153 },
            end: { line: 363, column: 139, offset: 17154 }
          }
        }
      ],
      position: {
        start: { line: 363, column: 1, offset: 17016 },
        end: { line: 363, column: 139, offset: 17154 }
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
            start: { line: 365, column: 7, offset: 17162 },
            end: { line: 365, column: 28, offset: 17183 }
          }
        }
      ],
      position: {
        start: { line: 365, column: 1, offset: 17156 },
        end: { line: 365, column: 28, offset: 17183 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client has sent too many requests in a given time period. See ',
          position: {
            start: { line: 367, column: 1, offset: 17185 },
            end: { line: 367, column: 67, offset: 17251 }
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
                start: { line: 367, column: 68, offset: 17252 },
                end: { line: 367, column: 81, offset: 17265 }
              }
            }
          ],
          position: {
            start: { line: 367, column: 67, offset: 17251 },
            end: { line: 367, column: 144, offset: 17328 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 367, column: 144, offset: 17328 },
            end: { line: 367, column: 145, offset: 17329 }
          }
        }
      ],
      position: {
        start: { line: 367, column: 1, offset: 17185 },
        end: { line: 367, column: 145, offset: 17329 }
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
            start: { line: 369, column: 7, offset: 17337 },
            end: { line: 369, column: 42, offset: 17372 }
          }
        }
      ],
      position: {
        start: { line: 369, column: 1, offset: 17331 },
        end: { line: 369, column: 42, offset: 17372 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request header fields are too large.',
          position: {
            start: { line: 371, column: 1, offset: 17374 },
            end: { line: 371, column: 41, offset: 17414 }
          }
        }
      ],
      position: {
        start: { line: 371, column: 1, offset: 17374 },
        end: { line: 371, column: 41, offset: 17414 }
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
            start: { line: 373, column: 7, offset: 17422 },
            end: { line: 373, column: 40, offset: 17455 }
          }
        }
      ],
      position: {
        start: { line: 373, column: 1, offset: 17416 },
        end: { line: 373, column: 40, offset: 17455 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is unavailable due to legal reasons.',
          position: {
            start: { line: 375, column: 1, offset: 17457 },
            end: { line: 375, column: 60, offset: 17516 }
          }
        }
      ],
      position: {
        start: { line: 375, column: 1, offset: 17457 },
        end: { line: 375, column: 60, offset: 17516 }
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
            start: { line: 377, column: 6, offset: 17523 },
            end: { line: 377, column: 41, offset: 17558 }
          }
        }
      ],
      position: {
        start: { line: 377, column: 1, offset: 17518 },
        end: { line: 377, column: 41, offset: 17558 }
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
            start: { line: 379, column: 7, offset: 17566 },
            end: { line: 379, column: 32, offset: 17591 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 17560 },
        end: { line: 379, column: 32, offset: 17591 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has encountered a situation it does not know how to handle.',
          position: {
            start: { line: 381, column: 1, offset: 17593 },
            end: { line: 381, column: 71, offset: 17663 }
          }
        }
      ],
      position: {
        start: { line: 381, column: 1, offset: 17593 },
        end: { line: 381, column: 71, offset: 17663 }
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
            start: { line: 383, column: 7, offset: 17671 },
            end: { line: 383, column: 26, offset: 17690 }
          }
        }
      ],
      position: {
        start: { line: 383, column: 1, offset: 17665 },
        end: { line: 383, column: 26, offset: 17690 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is not supported by the server and cannot be handled.',
          position: {
            start: { line: 385, column: 1, offset: 17692 },
            end: { line: 385, column: 73, offset: 17764 }
          }
        }
      ],
      position: {
        start: { line: 385, column: 1, offset: 17692 },
        end: { line: 385, column: 73, offset: 17764 }
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
            start: { line: 387, column: 7, offset: 17772 },
            end: { line: 387, column: 22, offset: 17787 }
          }
        }
      ],
      position: {
        start: { line: 387, column: 1, offset: 17766 },
        end: { line: 387, column: 22, offset: 17787 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The gateway server received an invalid response from an upstream server or origin server.',
          position: {
            start: { line: 389, column: 1, offset: 17789 },
            end: { line: 389, column: 90, offset: 17878 }
          }
        }
      ],
      position: {
        start: { line: 389, column: 1, offset: 17789 },
        end: { line: 389, column: 90, offset: 17878 }
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
            start: { line: 391, column: 7, offset: 17886 },
            end: { line: 391, column: 30, offset: 17909 }
          }
        }
      ],
      position: {
        start: { line: 391, column: 1, offset: 17880 },
        end: { line: 391, column: 30, offset: 17909 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is not ready to handle the request.',
          position: {
            start: { line: 393, column: 1, offset: 17911 },
            end: { line: 393, column: 47, offset: 17957 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 17911 },
        end: { line: 393, column: 47, offset: 17957 }
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
            start: { line: 395, column: 7, offset: 17965 },
            end: { line: 395, column: 26, offset: 17984 }
          }
        }
      ],
      position: {
        start: { line: 395, column: 1, offset: 17959 },
        end: { line: 395, column: 26, offset: 17984 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The gateway server's request to an upstream server or origin server timed out.",
          position: {
            start: { line: 397, column: 1, offset: 17986 },
            end: { line: 397, column: 79, offset: 18064 }
          }
        }
      ],
      position: {
        start: { line: 397, column: 1, offset: 17986 },
        end: { line: 397, column: 79, offset: 18064 }
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
            start: { line: 399, column: 7, offset: 18072 },
            end: { line: 399, column: 37, offset: 18102 }
          }
        }
      ],
      position: {
        start: { line: 399, column: 1, offset: 18066 },
        end: { line: 399, column: 37, offset: 18102 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP version used in the request is not supported by the server.',
          position: {
            start: { line: 401, column: 1, offset: 18104 },
            end: { line: 401, column: 69, offset: 18172 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 18104 },
        end: { line: 401, column: 69, offset: 18172 }
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
            start: { line: 403, column: 7, offset: 18180 },
            end: { line: 403, column: 34, offset: 18207 }
          }
        }
      ],
      position: {
        start: { line: 403, column: 1, offset: 18174 },
        end: { line: 403, column: 34, offset: 18207 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has an internal configuration error related to content negotiation.',
          position: {
            start: { line: 405, column: 1, offset: 18209 },
            end: { line: 405, column: 79, offset: 18287 }
          }
        }
      ],
      position: {
        start: { line: 405, column: 1, offset: 18209 },
        end: { line: 405, column: 79, offset: 18287 }
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
            start: { line: 407, column: 7, offset: 18295 },
            end: { line: 407, column: 31, offset: 18319 }
          }
        }
      ],
      position: {
        start: { line: 407, column: 1, offset: 18289 },
        end: { line: 407, column: 31, offset: 18319 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server does not have enough available storage to successfully process the request.',
          position: {
            start: { line: 409, column: 1, offset: 18321 },
            end: { line: 409, column: 87, offset: 18407 }
          }
        }
      ],
      position: {
        start: { line: 409, column: 1, offset: 18321 },
        end: { line: 409, column: 87, offset: 18407 }
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
            start: { line: 411, column: 7, offset: 18415 },
            end: { line: 411, column: 24, offset: 18432 }
          }
        }
      ],
      position: {
        start: { line: 411, column: 1, offset: 18409 },
        end: { line: 411, column: 24, offset: 18432 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server detected an infinite loop while processing the request.',
          position: {
            start: { line: 413, column: 1, offset: 18434 },
            end: { line: 413, column: 67, offset: 18500 }
          }
        }
      ],
      position: {
        start: { line: 413, column: 1, offset: 18434 },
        end: { line: 413, column: 67, offset: 18500 }
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
            start: { line: 415, column: 7, offset: 18508 },
            end: { line: 415, column: 23, offset: 18524 }
          }
        }
      ],
      position: {
        start: { line: 415, column: 1, offset: 18502 },
        end: { line: 415, column: 23, offset: 18524 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client declares an HTTP Extension (',
          position: {
            start: { line: 417, column: 1, offset: 18526 },
            end: { line: 417, column: 40, offset: 18565 }
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
                start: { line: 417, column: 41, offset: 18566 },
                end: { line: 417, column: 49, offset: 18574 }
              }
            }
          ],
          position: {
            start: { line: 417, column: 40, offset: 18565 },
            end: { line: 417, column: 97, offset: 18622 }
          }
        },
        {
          type: 'text',
          value: ') that should be used to process the request, but the extension is not supported by the server.',
          position: {
            start: { line: 417, column: 97, offset: 18622 },
            end: { line: 417, column: 192, offset: 18717 }
          }
        }
      ],
      position: {
        start: { line: 417, column: 1, offset: 18526 },
        end: { line: 417, column: 192, offset: 18717 }
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
            start: { line: 419, column: 7, offset: 18725 },
            end: { line: 419, column: 42, offset: 18760 }
          }
        }
      ],
      position: {
        start: { line: 419, column: 1, offset: 18719 },
        end: { line: 419, column: 42, offset: 18760 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client needs to authenticate to gain network access.',
          position: {
            start: { line: 421, column: 1, offset: 18762 },
            end: { line: 421, column: 57, offset: 18818 }
          }
        }
      ],
      position: {
        start: { line: 421, column: 1, offset: 18762 },
        end: { line: 421, column: 57, offset: 18818 }
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
            start: { line: 423, column: 5, offset: 18824 },
            end: { line: 423, column: 26, offset: 18845 }
          }
        }
      ],
      position: {
        start: { line: 423, column: 1, offset: 18820 },
        end: { line: 423, column: 26, offset: 18845 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP response headers are key-value pairs assigned to each response. HTTP response headers pass additional context and metadata about the response.',
          position: {
            start: { line: 425, column: 1, offset: 18847 },
            end: { line: 425, column: 148, offset: 18994 }
          }
        }
      ],
      position: {
        start: { line: 425, column: 1, offset: 18847 },
        end: { line: 425, column: 148, offset: 18994 }
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
            start: { line: 427, column: 5, offset: 19000 },
            end: { line: 427, column: 23, offset: 19018 }
          }
        }
      ],
      position: {
        start: { line: 427, column: 1, offset: 18996 },
        end: { line: 427, column: 23, offset: 19018 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response body is the part of the response that carries the bulk of the data sent back to the client. The content type of the response body should be specified in the response's ",
          position: {
            start: { line: 429, column: 1, offset: 19020 },
            end: { line: 429, column: 187, offset: 19206 }
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
                start: { line: 429, column: 188, offset: 19207 },
                end: { line: 429, column: 200, offset: 19219 }
              }
            }
          ],
          position: {
            start: { line: 429, column: 187, offset: 19206 },
            end: { line: 429, column: 283, offset: 19302 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 429, column: 283, offset: 19302 },
            end: { line: 429, column: 291, offset: 19310 }
          }
        }
      ],
      position: {
        start: { line: 429, column: 1, offset: 19020 },
        end: { line: 429, column: 291, offset: 19310 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP response bodies:',
          position: {
            start: { line: 431, column: 1, offset: 19312 },
            end: { line: 431, column: 39, offset: 19350 }
          }
        }
      ],
      position: {
        start: { line: 431, column: 1, offset: 19312 },
        end: { line: 431, column: 39, offset: 19350 }
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
                        start: { line: 432, column: 5, offset: 19355 },
                        end: { line: 432, column: 9, offset: 19359 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 432, column: 4, offset: 19354 },
                    end: { line: 432, column: 61, offset: 19411 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web pages. The method of the request is typically ',
                  position: {
                    start: { line: 432, column: 61, offset: 19411 },
                    end: { line: 432, column: 137, offset: 19487 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 432, column: 137, offset: 19487 },
                    end: { line: 432, column: 142, offset: 19492 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 432, column: 142, offset: 19492 },
                    end: { line: 432, column: 148, offset: 19498 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 432, column: 148, offset: 19498 },
                    end: { line: 432, column: 162, offset: 19512 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 432, column: 162, offset: 19512 },
                    end: { line: 432, column: 184, offset: 19534 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/html',
                  position: {
                    start: { line: 432, column: 184, offset: 19534 },
                    end: { line: 432, column: 195, offset: 19545 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 432, column: 195, offset: 19545 },
                    end: { line: 432, column: 196, offset: 19546 }
                  }
                }
              ],
              position: {
                start: { line: 432, column: 4, offset: 19354 },
                end: { line: 432, column: 196, offset: 19546 }
              }
            }
          ],
          position: {
            start: { line: 432, column: 2, offset: 19352 },
            end: { line: 432, column: 196, offset: 19546 }
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
                        start: { line: 433, column: 5, offset: 19551 },
                        end: { line: 433, column: 9, offset: 19555 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 433, column: 4, offset: 19550 },
                    end: { line: 433, column: 45, offset: 19591 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web applications. The method of the request is typically ',
                  position: {
                    start: { line: 433, column: 45, offset: 19591 },
                    end: { line: 433, column: 128, offset: 19674 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 433, column: 128, offset: 19674 },
                    end: { line: 433, column: 133, offset: 19679 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 433, column: 133, offset: 19679 },
                    end: { line: 433, column: 135, offset: 19681 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 433, column: 135, offset: 19681 },
                    end: { line: 433, column: 141, offset: 19687 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 433, column: 141, offset: 19687 },
                    end: { line: 433, column: 146, offset: 19692 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 433, column: 146, offset: 19692 },
                    end: { line: 433, column: 153, offset: 19699 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 433, column: 153, offset: 19699 },
                    end: { line: 433, column: 159, offset: 19705 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 433, column: 159, offset: 19705 },
                    end: { line: 433, column: 173, offset: 19719 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 433, column: 173, offset: 19719 },
                    end: { line: 433, column: 195, offset: 19741 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 433, column: 195, offset: 19741 },
                    end: { line: 433, column: 213, offset: 19759 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 433, column: 213, offset: 19759 },
                    end: { line: 433, column: 214, offset: 19760 }
                  }
                }
              ],
              position: {
                start: { line: 433, column: 4, offset: 19550 },
                end: { line: 433, column: 214, offset: 19760 }
              }
            }
          ],
          position: {
            start: { line: 433, column: 2, offset: 19548 },
            end: { line: 433, column: 214, offset: 19760 }
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
                        start: { line: 434, column: 5, offset: 19765 },
                        end: { line: 434, column: 8, offset: 19768 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 4, offset: 19764 },
                    end: { line: 434, column: 46, offset: 19806 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for ',
                  position: {
                    start: { line: 434, column: 46, offset: 19806 },
                    end: { line: 434, column: 72, offset: 19832 }
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
                        start: { line: 434, column: 73, offset: 19833 },
                        end: { line: 434, column: 81, offset: 19841 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 72, offset: 19832 },
                    end: { line: 434, column: 161, offset: 19921 }
                  }
                },
                {
                  type: 'text',
                  value: ' or web applications. The method of the request can be ',
                  position: {
                    start: { line: 434, column: 161, offset: 19921 },
                    end: { line: 434, column: 216, offset: 19976 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 434, column: 216, offset: 19976 },
                    end: { line: 434, column: 221, offset: 19981 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 221, offset: 19981 },
                    end: { line: 434, column: 223, offset: 19983 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 434, column: 223, offset: 19983 },
                    end: { line: 434, column: 228, offset: 19988 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 228, offset: 19988 },
                    end: { line: 434, column: 230, offset: 19990 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 434, column: 230, offset: 19990 },
                    end: { line: 434, column: 236, offset: 19996 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 434, column: 236, offset: 19996 },
                    end: { line: 434, column: 241, offset: 20001 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 434, column: 241, offset: 20001 },
                    end: { line: 434, column: 248, offset: 20008 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 434, column: 248, offset: 20008 },
                    end: { line: 434, column: 254, offset: 20014 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 434, column: 254, offset: 20014 },
                    end: { line: 434, column: 268, offset: 20028 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 434, column: 268, offset: 20028 },
                    end: { line: 434, column: 289, offset: 20049 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/xml',
                  position: {
                    start: { line: 434, column: 289, offset: 20049 },
                    end: { line: 434, column: 306, offset: 20066 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 434, column: 306, offset: 20066 },
                    end: { line: 434, column: 310, offset: 20070 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/xml',
                  position: {
                    start: { line: 434, column: 310, offset: 20070 },
                    end: { line: 434, column: 320, offset: 20080 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 434, column: 320, offset: 20080 },
                    end: { line: 434, column: 321, offset: 20081 }
                  }
                }
              ],
              position: {
                start: { line: 434, column: 4, offset: 19764 },
                end: { line: 434, column: 321, offset: 20081 }
              }
            }
          ],
          position: {
            start: { line: 434, column: 2, offset: 19762 },
            end: { line: 434, column: 321, offset: 20081 }
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
                    start: { line: 435, column: 4, offset: 20085 },
                    end: { line: 435, column: 91, offset: 20172 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 435, column: 91, offset: 20172 },
                    end: { line: 435, column: 96, offset: 20177 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 435, column: 96, offset: 20177 },
                    end: { line: 435, column: 102, offset: 20183 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 435, column: 102, offset: 20183 },
                    end: { line: 435, column: 116, offset: 20197 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 435, column: 116, offset: 20197 },
                    end: { line: 435, column: 137, offset: 20218 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 435, column: 137, offset: 20218 },
                    end: { line: 435, column: 149, offset: 20230 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 149, offset: 20230 },
                    end: { line: 435, column: 151, offset: 20232 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 435, column: 151, offset: 20232 },
                    end: { line: 435, column: 162, offset: 20243 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 162, offset: 20243 },
                    end: { line: 435, column: 164, offset: 20245 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 435, column: 164, offset: 20245 },
                    end: { line: 435, column: 176, offset: 20257 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 176, offset: 20257 },
                    end: { line: 435, column: 178, offset: 20259 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 435, column: 178, offset: 20259 },
                    end: { line: 435, column: 191, offset: 20272 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 435, column: 191, offset: 20272 },
                    end: { line: 435, column: 196, offset: 20277 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 435, column: 196, offset: 20277 },
                    end: { line: 435, column: 207, offset: 20288 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 435, column: 207, offset: 20288 },
                    end: { line: 435, column: 208, offset: 20289 }
                  }
                }
              ],
              position: {
                start: { line: 435, column: 4, offset: 20085 },
                end: { line: 435, column: 208, offset: 20289 }
              }
            }
          ],
          position: {
            start: { line: 435, column: 2, offset: 20083 },
            end: { line: 435, column: 208, offset: 20289 }
          }
        }
      ],
      position: {
        start: { line: 432, column: 2, offset: 19352 },
        end: { line: 435, column: 208, offset: 20289 }
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
            start: { line: 437, column: 4, offset: 20294 },
            end: { line: 437, column: 15, offset: 20305 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 20291 },
        end: { line: 437, column: 15, offset: 20305 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 439, column: 1, offset: 20307 },
            end: { line: 439, column: 226, offset: 20532 }
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
                start: { line: 439, column: 227, offset: 20533 },
                end: { line: 439, column: 233, offset: 20539 }
              }
            }
          ],
          position: {
            start: { line: 439, column: 226, offset: 20532 },
            end: { line: 439, column: 257, offset: 20563 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 439, column: 257, offset: 20563 },
            end: { line: 439, column: 371, offset: 20677 }
          }
        }
      ],
      position: {
        start: { line: 439, column: 1, offset: 20307 },
        end: { line: 439, column: 371, offset: 20677 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 441, column: 1, offset: 20679 },
            end: { line: 441, column: 23, offset: 20701 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 441, column: 23, offset: 20701 },
            end: { line: 441, column: 29, offset: 20707 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 441, column: 29, offset: 20707 },
            end: { line: 441, column: 62, offset: 20740 }
          }
        }
      ],
      position: {
        start: { line: 441, column: 1, offset: 20679 },
        end: { line: 441, column: 62, offset: 20740 }
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
        start: { line: 443, column: 1, offset: 20742 },
        end: { line: 456, column: 4, offset: 20978 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates a NodeJS HTTP server with ',
          position: {
            start: { line: 458, column: 1, offset: 20980 },
            end: { line: 458, column: 58, offset: 21037 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 458, column: 58, offset: 21037 },
            end: { line: 458, column: 77, offset: 21056 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 458, column: 77, offset: 21056 },
            end: { line: 458, column: 106, offset: 21085 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 458, column: 106, offset: 21085 },
            end: { line: 458, column: 136, offset: 21115 }
          }
        },
        {
          type: 'text',
          value: ' that only responds with status ',
          position: {
            start: { line: 458, column: 136, offset: 21115 },
            end: { line: 458, column: 168, offset: 21147 }
          }
        },
        {
          type: 'inlineCode',
          value: '200',
          position: {
            start: { line: 458, column: 168, offset: 21147 },
            end: { line: 458, column: 173, offset: 21152 }
          }
        },
        {
          type: 'text',
          value: ' and body ',
          position: {
            start: { line: 458, column: 173, offset: 21152 },
            end: { line: 458, column: 183, offset: 21162 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ok',
          position: {
            start: { line: 458, column: 183, offset: 21162 },
            end: { line: 458, column: 187, offset: 21166 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 458, column: 187, offset: 21166 },
            end: { line: 458, column: 230, offset: 21209 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 458, column: 230, offset: 21209 },
            end: { line: 458, column: 236, offset: 21215 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 458, column: 236, offset: 21215 },
            end: { line: 458, column: 254, offset: 21233 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 458, column: 254, offset: 21233 },
            end: { line: 458, column: 269, offset: 21248 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 458, column: 269, offset: 21248 },
            end: { line: 458, column: 270, offset: 21249 }
          }
        }
      ],
      position: {
        start: { line: 458, column: 1, offset: 20980 },
        end: { line: 458, column: 270, offset: 21249 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 460, column: 1, offset: 21251 },
            end: { line: 460, column: 45, offset: 21295 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 21251 },
        end: { line: 460, column: 45, offset: 21295 }
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
                  url: '#http-server-port',
                  children: [
                    {
                      type: 'text',
                      value: 'port',
                      position: {
                        start: { line: 461, column: 5, offset: 21300 },
                        end: { line: 461, column: 9, offset: 21304 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 461, column: 4, offset: 21299 },
                    end: { line: 461, column: 29, offset: 21324 }
                  }
                }
              ],
              position: {
                start: { line: 461, column: 4, offset: 21299 },
                end: { line: 461, column: 29, offset: 21324 }
              }
            }
          ],
          position: {
            start: { line: 461, column: 2, offset: 21297 },
            end: { line: 461, column: 29, offset: 21324 }
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
                  url: '#http-server-host',
                  children: [
                    {
                      type: 'text',
                      value: 'host',
                      position: {
                        start: { line: 462, column: 5, offset: 21329 },
                        end: { line: 462, column: 9, offset: 21333 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 462, column: 4, offset: 21328 },
                    end: { line: 462, column: 29, offset: 21353 }
                  }
                }
              ],
              position: {
                start: { line: 462, column: 4, offset: 21328 },
                end: { line: 462, column: 29, offset: 21353 }
              }
            }
          ],
          position: {
            start: { line: 462, column: 2, offset: 21326 },
            end: { line: 462, column: 29, offset: 21353 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 2, offset: 21297 },
        end: { line: 462, column: 29, offset: 21353 }
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
            start: { line: 464, column: 5, offset: 21359 },
            end: { line: 464, column: 21, offset: 21375 }
          }
        }
      ],
      position: {
        start: { line: 464, column: 1, offset: 21355 },
        end: { line: 464, column: 21, offset: 21375 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server port is a number that represents the network port on which the server is listening. A network port is a logical communication endpoint within a network. The value for the port can range from 0 and 65535. In the above example, we created an HTTP web server that listened on port ',
          position: {
            start: { line: 466, column: 1, offset: 21377 },
            end: { line: 466, column: 295, offset: 21671 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 466, column: 295, offset: 21671 },
            end: { line: 466, column: 301, offset: 21677 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 466, column: 301, offset: 21677 },
            end: { line: 466, column: 302, offset: 21678 }
          }
        }
      ],
      position: {
        start: { line: 466, column: 1, offset: 21377 },
        end: { line: 466, column: 302, offset: 21678 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Server Host',
          position: {
            start: { line: 468, column: 5, offset: 21684 },
            end: { line: 468, column: 21, offset: 21700 }
          }
        }
      ],
      position: {
        start: { line: 468, column: 1, offset: 21680 },
        end: { line: 468, column: 21, offset: 21700 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server host is the IP address of the ',
          position: {
            start: { line: 470, column: 1, offset: 21702 },
            end: { line: 470, column: 47, offset: 21748 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.lepide.com/blog/the-most-common-types-of-network-devices/',
          children: [
            {
              type: 'text',
              value: 'network device',
              position: {
                start: { line: 470, column: 48, offset: 21749 },
                end: { line: 470, column: 62, offset: 21763 }
              }
            }
          ],
          position: {
            start: { line: 470, column: 47, offset: 21748 },
            end: { line: 470, column: 134, offset: 21835 }
          }
        },
        {
          type: 'text',
          value: ' on which the server is running.',
          position: {
            start: { line: 470, column: 134, offset: 21835 },
            end: { line: 470, column: 166, offset: 21867 }
          }
        }
      ],
      position: {
        start: { line: 470, column: 1, offset: 21702 },
        end: { line: 470, column: 166, offset: 21867 }
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
            start: { line: 472, column: 4, offset: 21872 },
            end: { line: 472, column: 16, offset: 21884 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 21869 },
        end: { line: 472, column: 16, offset: 21884 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 474, column: 1, offset: 21886 },
            end: { line: 474, column: 109, offset: 21994 }
          }
        }
      ],
      position: {
        start: { line: 474, column: 1, offset: 21886 },
        end: { line: 474, column: 109, offset: 21994 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 476, column: 1, offset: 21996 },
            end: { line: 476, column: 61, offset: 22056 }
          }
        }
      ],
      position: {
        start: { line: 476, column: 1, offset: 21996 },
        end: { line: 476, column: 61, offset: 22056 }
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
                    start: { line: 477, column: 4, offset: 22060 },
                    end: { line: 477, column: 74, offset: 22130 }
                  }
                }
              ],
              position: {
                start: { line: 477, column: 4, offset: 22060 },
                end: { line: 477, column: 74, offset: 22130 }
              }
            }
          ],
          position: {
            start: { line: 477, column: 2, offset: 22058 },
            end: { line: 477, column: 74, offset: 22130 }
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
                    start: { line: 478, column: 4, offset: 22134 },
                    end: { line: 478, column: 52, offset: 22182 }
                  }
                }
              ],
              position: {
                start: { line: 478, column: 4, offset: 22134 },
                end: { line: 478, column: 52, offset: 22182 }
              }
            }
          ],
          position: {
            start: { line: 478, column: 2, offset: 22132 },
            end: { line: 478, column: 52, offset: 22182 }
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
                    start: { line: 479, column: 4, offset: 22186 },
                    end: { line: 479, column: 237, offset: 22419 }
                  }
                }
              ],
              position: {
                start: { line: 479, column: 4, offset: 22186 },
                end: { line: 479, column: 237, offset: 22419 }
              }
            }
          ],
          position: {
            start: { line: 479, column: 2, offset: 22184 },
            end: { line: 479, column: 237, offset: 22419 }
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
                    start: { line: 480, column: 4, offset: 22423 },
                    end: { line: 480, column: 128, offset: 22547 }
                  }
                }
              ],
              position: {
                start: { line: 480, column: 4, offset: 22423 },
                end: { line: 480, column: 128, offset: 22547 }
              }
            }
          ],
          position: {
            start: { line: 480, column: 2, offset: 22421 },
            end: { line: 480, column: 128, offset: 22547 }
          }
        }
      ],
      position: {
        start: { line: 477, column: 2, offset: 22058 },
        end: { line: 480, column: 128, offset: 22547 }
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
            start: { line: 482, column: 5, offset: 22553 },
            end: { line: 482, column: 28, offset: 22576 }
          }
        }
      ],
      position: {
        start: { line: 482, column: 1, offset: 22549 },
        end: { line: 482, column: 28, offset: 22576 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 484, column: 1, offset: 22578 },
            end: { line: 484, column: 33, offset: 22610 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 484, column: 33, offset: 22610 },
            end: { line: 484, column: 39, offset: 22616 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 484, column: 39, offset: 22616 },
            end: { line: 484, column: 161, offset: 22738 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 484, column: 161, offset: 22738 },
            end: { line: 484, column: 176, offset: 22753 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 484, column: 176, offset: 22753 },
            end: { line: 484, column: 184, offset: 22761 }
          }
        }
      ],
      position: {
        start: { line: 484, column: 1, offset: 22578 },
        end: { line: 484, column: 184, offset: 22761 }
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
        start: { line: 486, column: 1, offset: 22763 },
        end: { line: 499, column: 4, offset: 23088 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 501, column: 1, offset: 23090 },
            end: { line: 501, column: 12, offset: 23101 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 501, column: 12, offset: 23101 },
            end: { line: 501, column: 18, offset: 23107 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 501, column: 18, offset: 23107 },
            end: { line: 501, column: 88, offset: 23177 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 501, column: 88, offset: 23177 },
            end: { line: 501, column: 104, offset: 23193 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 501, column: 104, offset: 23193 },
            end: { line: 501, column: 113, offset: 23202 }
          }
        }
      ],
      position: {
        start: { line: 501, column: 1, offset: 23090 },
        end: { line: 501, column: 113, offset: 23202 }
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
        start: { line: 503, column: 1, offset: 23204 },
        end: { line: 509, column: 4, offset: 23401 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 511, column: 1, offset: 23403 },
            end: { line: 511, column: 35, offset: 23437 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 511, column: 35, offset: 23437 },
            end: { line: 511, column: 50, offset: 23452 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 511, column: 50, offset: 23452 },
            end: { line: 511, column: 55, offset: 23457 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 511, column: 55, offset: 23457 },
            end: { line: 511, column: 71, offset: 23473 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 511, column: 71, offset: 23473 },
            end: { line: 511, column: 112, offset: 23514 }
          }
        }
      ],
      position: {
        start: { line: 511, column: 1, offset: 23403 },
        end: { line: 511, column: 112, offset: 23514 }
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
        start: { line: 513, column: 1, offset: 23516 },
        end: { line: 528, column: 4, offset: 23947 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 530, column: 1, offset: 23949 },
            end: { line: 530, column: 81, offset: 24029 }
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
                start: { line: 530, column: 82, offset: 24030 },
                end: { line: 530, column: 93, offset: 24041 }
              }
            }
          ],
          position: {
            start: { line: 530, column: 81, offset: 24029 },
            end: { line: 530, column: 108, offset: 24056 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 530, column: 108, offset: 24056 },
            end: { line: 530, column: 117, offset: 24065 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 23949 },
        end: { line: 530, column: 117, offset: 24065 }
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
        start: { line: 532, column: 1, offset: 24067 },
        end: { line: 566, column: 4, offset: 24718 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server ',
          position: {
            start: { line: 568, column: 1, offset: 24720 },
            end: { line: 568, column: 17, offset: 24736 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server',
          position: {
            start: { line: 568, column: 17, offset: 24736 },
            end: { line: 568, column: 25, offset: 24744 }
          }
        },
        {
          type: 'text',
          value: ' created by the NodeJS ',
          position: {
            start: { line: 568, column: 25, offset: 24744 },
            end: { line: 568, column: 48, offset: 24767 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 568, column: 48, offset: 24767 },
            end: { line: 568, column: 54, offset: 24773 }
          }
        },
        {
          type: 'text',
          value: " module's ",
          position: {
            start: { line: 568, column: 54, offset: 24773 },
            end: { line: 568, column: 64, offset: 24783 }
          }
        },
        {
          type: 'inlineCode',
          value: 'createServer',
          position: {
            start: { line: 568, column: 64, offset: 24783 },
            end: { line: 568, column: 78, offset: 24797 }
          }
        },
        {
          type: 'text',
          value: ' accepts the HTTP handler ',
          position: {
            start: { line: 568, column: 78, offset: 24797 },
            end: { line: 568, column: 104, offset: 24823 }
          }
        },
        {
          type: 'inlineCode',
          value: 'handler',
          position: {
            start: { line: 568, column: 104, offset: 24823 },
            end: { line: 568, column: 113, offset: 24832 }
          }
        },
        {
          type: 'text',
          value: ' as a single argument. To start the server we only need to call ',
          position: {
            start: { line: 568, column: 113, offset: 24832 },
            end: { line: 568, column: 177, offset: 24896 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 568, column: 177, offset: 24896 },
            end: { line: 568, column: 192, offset: 24911 }
          }
        },
        {
          type: 'text',
          value: ', specifying port ',
          position: {
            start: { line: 568, column: 192, offset: 24911 },
            end: { line: 568, column: 210, offset: 24929 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 568, column: 210, offset: 24929 },
            end: { line: 568, column: 216, offset: 24935 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 568, column: 216, offset: 24935 },
            end: { line: 568, column: 217, offset: 24936 }
          }
        }
      ],
      position: {
        start: { line: 568, column: 1, offset: 24720 },
        end: { line: 568, column: 217, offset: 24936 }
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
            start: { line: 570, column: 5, offset: 24942 },
            end: { line: 570, column: 59, offset: 24996 }
          }
        }
      ],
      position: {
        start: { line: 570, column: 1, offset: 24938 },
        end: { line: 570, column: 59, offset: 24996 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In [A]synchronous Functional Programming, HTTP handlers are simple, reusable, and modular. Consider the following web server implementation with a complex HTTP handler:',
          position: {
            start: { line: 572, column: 1, offset: 24998 },
            end: { line: 572, column: 169, offset: 25166 }
          }
        }
      ],
      position: {
        start: { line: 572, column: 1, offset: 24998 },
        end: { line: 572, column: 169, offset: 25166 }
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
        start: { line: 574, column: 1, offset: 25168 },
        end: { line: 734, column: 4, offset: 29514 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above handler ',
          position: {
            start: { line: 736, column: 1, offset: 29516 },
            end: { line: 736, column: 19, offset: 29534 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 736, column: 19, offset: 29534 },
            end: { line: 736, column: 35, offset: 29550 }
          }
        },
        {
          type: 'text',
          value: ' has many responsibilities, including handling health checks, handling options requests, retrieving user resources, updating or creating user resources, and handling application errors.',
          position: {
            start: { line: 736, column: 35, offset: 29550 },
            end: { line: 736, column: 220, offset: 29735 }
          }
        }
      ],
      position: {
        start: { line: 736, column: 1, offset: 29516 },
        end: { line: 736, column: 220, offset: 29735 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, we can break down the above complex HTTP handler into simple, modular, and reusable handlers, then use the library ',
          position: {
            start: { line: 738, column: 1, offset: 29737 },
            end: { line: 738, column: 160, offset: 29896 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/',
          children: [
            {
              type: 'text',
              value: 'Rubico',
              position: {
                start: { line: 738, column: 161, offset: 29897 },
                end: { line: 738, column: 167, offset: 29903 }
              }
            }
          ],
          position: {
            start: { line: 738, column: 160, offset: 29896 },
            end: { line: 738, column: 190, offset: 29926 }
          }
        },
        {
          type: 'text',
          value: ' to combine those handlers in a meaningful way.',
          position: {
            start: { line: 738, column: 190, offset: 29926 },
            end: { line: 738, column: 237, offset: 29973 }
          }
        }
      ],
      position: {
        start: { line: 738, column: 1, offset: 29737 },
        end: { line: 738, column: 237, offset: 29973 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "First, let's break down the complex handler.",
          position: {
            start: { line: 740, column: 1, offset: 29975 },
            end: { line: 740, column: 45, offset: 30019 }
          }
        }
      ],
      position: {
        start: { line: 740, column: 1, offset: 29975 },
        end: { line: 740, column: 45, offset: 30019 }
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
        start: { line: 742, column: 1, offset: 30021 },
        end: { line: 890, column: 4, offset: 33677 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "We've broken down the complex handler ",
          position: {
            start: { line: 892, column: 1, offset: 33679 },
            end: { line: 892, column: 39, offset: 33717 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 892, column: 39, offset: 33717 },
            end: { line: 892, column: 55, offset: 33733 }
          }
        },
        {
          type: 'text',
          value: ' into smaller, simpler handlers ',
          position: {
            start: { line: 892, column: 55, offset: 33733 },
            end: { line: 892, column: 87, offset: 33765 }
          }
        },
        {
          type: 'inlineCode',
          value: 'healthCheckHandler',
          position: {
            start: { line: 892, column: 87, offset: 33765 },
            end: { line: 892, column: 107, offset: 33785 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 107, offset: 33785 },
            end: { line: 892, column: 109, offset: 33787 }
          }
        },
        {
          type: 'inlineCode',
          value: 'optionsHandler',
          position: {
            start: { line: 892, column: 109, offset: 33787 },
            end: { line: 892, column: 125, offset: 33803 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 125, offset: 33803 },
            end: { line: 892, column: 127, offset: 33805 }
          }
        },
        {
          type: 'inlineCode',
          value: 'getUserHandler',
          position: {
            start: { line: 892, column: 127, offset: 33805 },
            end: { line: 892, column: 143, offset: 33821 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 143, offset: 33821 },
            end: { line: 892, column: 145, offset: 33823 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notFoundHandler',
          position: {
            start: { line: 892, column: 145, offset: 33823 },
            end: { line: 892, column: 162, offset: 33840 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 892, column: 162, offset: 33840 },
            end: { line: 892, column: 168, offset: 33846 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 892, column: 168, offset: 33846 },
            end: { line: 892, column: 182, offset: 33860 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 892, column: 182, offset: 33860 },
            end: { line: 892, column: 183, offset: 33861 }
          }
        }
      ],
      position: {
        start: { line: 892, column: 1, offset: 33679 },
        end: { line: 892, column: 183, offset: 33861 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Now let's combine the smaller handlers using Rubico's ",
          position: {
            start: { line: 894, column: 1, offset: 33863 },
            end: { line: 894, column: 55, offset: 33917 }
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
                start: { line: 894, column: 56, offset: 33918 },
                end: { line: 894, column: 64, offset: 33926 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 55, offset: 33917 },
            end: { line: 894, column: 81, offset: 33943 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 894, column: 81, offset: 33943 },
            end: { line: 894, column: 86, offset: 33948 }
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
                start: { line: 894, column: 87, offset: 33949 },
                end: { line: 894, column: 97, offset: 33959 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 86, offset: 33948 },
            end: { line: 894, column: 116, offset: 33978 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 894, column: 116, offset: 33978 },
            end: { line: 894, column: 117, offset: 33979 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 33863 },
        end: { line: 894, column: 117, offset: 33979 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "require('rubico/global') // imports Rubico's tryCatch and switchCase operators\n" +
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
        start: { line: 896, column: 1, offset: 33981 },
        end: { line: 918, column: 4, offset: 34508 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'combinedHandler',
          position: {
            start: { line: 920, column: 1, offset: 34510 },
            end: { line: 920, column: 18, offset: 34527 }
          }
        },
        {
          type: 'text',
          value: ' is functionally equivalent to ',
          position: {
            start: { line: 920, column: 18, offset: 34527 },
            end: { line: 920, column: 49, offset: 34558 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 920, column: 49, offset: 34558 },
            end: { line: 920, column: 65, offset: 34574 }
          }
        },
        {
          type: 'text',
          value: ', but is able to be expressed using a combination of smaller, simpler HTTP handlers. The benefits are as follows: being able to structure your application as small, simple components lends itself well to development, testing, and maintenance.',
          position: {
            start: { line: 920, column: 65, offset: 34574 },
            end: { line: 920, column: 307, offset: 34816 }
          }
        }
      ],
      position: {
        start: { line: 920, column: 1, offset: 34510 },
        end: { line: 920, column: 307, offset: 34816 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Development is quick and easy: where you once had to digest and add onto the entire complex component, now you only need to write a simple, greenfield component.',
          position: {
            start: { line: 922, column: 1, offset: 34818 },
            end: { line: 922, column: 162, offset: 34979 }
          }
        }
      ],
      position: {
        start: { line: 922, column: 1, offset: 34818 },
        end: { line: 922, column: 162, offset: 34979 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Testing is simplified: where you once had to write a complex integration test with many controls and conditions for the complex component, now you only need to write simple integration tests for the simple components.',
          position: {
            start: { line: 924, column: 1, offset: 34981 },
            end: { line: 924, column: 218, offset: 35198 }
          }
        }
      ],
      position: {
        start: { line: 924, column: 1, offset: 34981 },
        end: { line: 924, column: 218, offset: 35198 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The maintenance overhead is reduced: where you once had to concern yourself with testing changes over large areas of code with complex components, now you can reduce the burden to smaller areas of code with simple components.',
          position: {
            start: { line: 926, column: 1, offset: 35200 },
            end: { line: 926, column: 226, offset: 35425 }
          }
        }
      ],
      position: {
        start: { line: 926, column: 1, offset: 35200 },
        end: { line: 926, column: 226, offset: 35425 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Putting everything together:',
          position: {
            start: { line: 928, column: 1, offset: 35427 },
            end: { line: 928, column: 29, offset: 35455 }
          }
        }
      ],
      position: {
        start: { line: 928, column: 1, offset: 35427 },
        end: { line: 928, column: 29, offset: 35455 }
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
        start: { line: 930, column: 1, offset: 35457 },
        end: { line: 1107, column: 4, offset: 39690 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can find a working example of the above HTTP server code at ',
          position: {
            start: { line: 1109, column: 1, offset: 39692 },
            end: { line: 1109, column: 65, offset: 39756 }
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
                start: { line: 1109, column: 66, offset: 39757 },
                end: { line: 1109, column: 84, offset: 39775 }
              }
            }
          ],
          position: {
            start: { line: 1109, column: 65, offset: 39756 },
            end: { line: 1109, column: 166, offset: 39857 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1109, column: 166, offset: 39857 },
            end: { line: 1109, column: 167, offset: 39858 }
          }
        }
      ],
      position: {
        start: { line: 1109, column: 1, offset: 39692 },
        end: { line: 1109, column: 167, offset: 39858 }
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
            start: { line: 1111, column: 5, offset: 39864 },
            end: { line: 1111, column: 15, offset: 39874 }
          }
        }
      ],
      position: {
        start: { line: 1111, column: 1, offset: 39860 },
        end: { line: 1111, column: 15, offset: 39874 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Handling HTTP in [A]synchronous Functional Programming.',
          position: {
            start: { line: 1113, column: 1, offset: 39876 },
            end: { line: 1113, column: 71, offset: 39946 }
          }
        }
      ],
      position: {
        start: { line: 1113, column: 1, offset: 39876 },
        end: { line: 1113, column: 71, offset: 39946 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about Rubico and would like to get started, please visit Rubico's home page: ",
          position: {
            start: { line: 1115, column: 1, offset: 39948 },
            end: { line: 1115, column: 97, offset: 40044 }
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
                start: { line: 1115, column: 98, offset: 40045 },
                end: { line: 1115, column: 109, offset: 40056 }
              }
            }
          ],
          position: {
            start: { line: 1115, column: 97, offset: 40044 },
            end: { line: 1115, column: 113, offset: 40060 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1115, column: 113, offset: 40060 },
            end: { line: 1115, column: 114, offset: 40061 }
          }
        }
      ],
      position: {
        start: { line: 1115, column: 1, offset: 39948 },
        end: { line: 1115, column: 114, offset: 40061 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1116, column: 1, offset: 40062 }
  }
}