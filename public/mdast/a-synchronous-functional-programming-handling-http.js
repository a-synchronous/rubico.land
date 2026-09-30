export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Handling HTTP\n' +
        'author: Richard Tong, King of Software at CLOUT\n' +
        'date: 2025-06-21\n' +
        'updated: 2026-01-31\n' +
        'path: /blog/a-synchronous-functional-programming-handling-http\n' +
        'description: Handling HTTP in [A]synchronous Functional Programming.\n' +
        'image: /assets/HTTP_logo.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 314 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Handling HTTP in [A]synchronous Functional Programming. In this article we will discuss how to handle HTTP in the context of the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 316 },
            end: { line: 11, column: 202, offset: 517 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 316 },
        end: { line: 11, column: 202, offset: 517 }
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
            start: { line: 13, column: 4, offset: 522 },
            end: { line: 13, column: 8, offset: 526 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 519 },
        end: { line: 13, column: 8, offset: 526 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP (Hypertext Transfer Protocol) is a ',
          position: {
            start: { line: 15, column: 1, offset: 528 },
            end: { line: 15, column: 41, offset: 568 }
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
                start: { line: 15, column: 42, offset: 569 },
                end: { line: 15, column: 50, offset: 577 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 41, offset: 568 },
            end: { line: 15, column: 122, offset: 649 }
          }
        },
        {
          type: 'text',
          value: ' by which data is transferred over the internet. The internet is just a bunch of computers (including PCs, laptops, and smartphones), and those computers communicate with each other using HTTP. When you visit a website, chances are it was served to you using HTTP. When you use a mobile app, chances are it used HTTP to serve you content.',
          position: {
            start: { line: 15, column: 122, offset: 649 },
            end: { line: 15, column: 460, offset: 987 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 528 },
        end: { line: 15, column: 460, offset: 987 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP adheres to the ',
          position: {
            start: { line: 17, column: 1, offset: 989 },
            end: { line: 17, column: 21, offset: 1009 }
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
                start: { line: 17, column: 22, offset: 1010 },
                end: { line: 17, column: 41, offset: 1029 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 21, offset: 1009 },
            end: { line: 17, column: 107, offset: 1095 }
          }
        },
        {
          type: 'text',
          value: ' where a client sends a request to a server and the server sends a response back to the client.',
          position: {
            start: { line: 17, column: 107, offset: 1095 },
            end: { line: 17, column: 202, offset: 1190 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 989 },
        end: { line: 17, column: 202, offset: 1190 }
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
            start: { line: 19, column: 1, offset: 1192 },
            end: { line: 19, column: 48, offset: 1239 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1192 },
        end: { line: 19, column: 48, offset: 1239 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In order for clients to find the right servers to request, they need to use a URL.',
          position: {
            start: { line: 21, column: 1, offset: 1241 },
            end: { line: 21, column: 83, offset: 1323 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1241 },
        end: { line: 21, column: 83, offset: 1323 }
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
            start: { line: 23, column: 4, offset: 1328 },
            end: { line: 23, column: 7, offset: 1331 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1325 },
        end: { line: 23, column: 7, offset: 1331 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A URL (Uniform Resource Locator) is a string that uniquely identifies the web address of a resource on the internet. A resource is information or content that can be identified and accessed via a URL. A resources can be a file, an image, a document, or a record in a database.',
          position: {
            start: { line: 25, column: 1, offset: 1333 },
            end: { line: 25, column: 277, offset: 1609 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 1333 },
        end: { line: 25, column: 277, offset: 1609 }
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
            start: { line: 27, column: 1, offset: 1611 },
            end: { line: 27, column: 64, offset: 1674 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1611 },
        end: { line: 27, column: 64, offset: 1674 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The basic structure of a URL includes the following parts:',
          position: {
            start: { line: 29, column: 1, offset: 1676 },
            end: { line: 29, column: 59, offset: 1734 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 1676 },
        end: { line: 29, column: 59, offset: 1734 }
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
                        start: { line: 30, column: 5, offset: 1739 },
                        end: { line: 30, column: 11, offset: 1745 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 1738 },
                    end: { line: 30, column: 25, offset: 1759 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 4, offset: 1738 },
                end: { line: 30, column: 25, offset: 1759 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 1736 },
            end: { line: 30, column: 25, offset: 1759 }
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
                        start: { line: 31, column: 5, offset: 1764 },
                        end: { line: 31, column: 16, offset: 1775 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 1763 },
                    end: { line: 31, column: 35, offset: 1794 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1763 },
                end: { line: 31, column: 35, offset: 1794 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 1761 },
            end: { line: 31, column: 35, offset: 1794 }
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
                        start: { line: 32, column: 5, offset: 1799 },
                        end: { line: 32, column: 9, offset: 1803 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 1798 },
                    end: { line: 32, column: 21, offset: 1815 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1798 },
                end: { line: 32, column: 21, offset: 1815 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 1796 },
            end: { line: 32, column: 21, offset: 1815 }
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
                        start: { line: 33, column: 5, offset: 1820 },
                        end: { line: 33, column: 14, offset: 1829 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 1819 },
                    end: { line: 33, column: 31, offset: 1846 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1819 },
                end: { line: 33, column: 31, offset: 1846 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 1817 },
            end: { line: 33, column: 31, offset: 1846 }
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
                        start: { line: 34, column: 5, offset: 1851 },
                        end: { line: 34, column: 9, offset: 1855 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 34, column: 4, offset: 1850 },
                    end: { line: 34, column: 21, offset: 1867 }
                  }
                }
              ],
              position: {
                start: { line: 34, column: 4, offset: 1850 },
                end: { line: 34, column: 21, offset: 1867 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 2, offset: 1848 },
            end: { line: 34, column: 21, offset: 1867 }
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
                        start: { line: 35, column: 5, offset: 1872 },
                        end: { line: 35, column: 21, offset: 1888 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 35, column: 4, offset: 1871 },
                    end: { line: 35, column: 45, offset: 1912 }
                  }
                }
              ],
              position: {
                start: { line: 35, column: 4, offset: 1871 },
                end: { line: 35, column: 45, offset: 1912 }
              }
            }
          ],
          position: {
            start: { line: 35, column: 2, offset: 1869 },
            end: { line: 35, column: 45, offset: 1912 }
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
                        start: { line: 36, column: 5, offset: 1917 },
                        end: { line: 36, column: 11, offset: 1923 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 36, column: 4, offset: 1916 },
                    end: { line: 36, column: 25, offset: 1937 }
                  }
                }
              ],
              position: {
                start: { line: 36, column: 4, offset: 1916 },
                end: { line: 36, column: 25, offset: 1937 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 2, offset: 1914 },
            end: { line: 36, column: 25, offset: 1937 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 2, offset: 1736 },
        end: { line: 36, column: 25, offset: 1937 }
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
            start: { line: 38, column: 5, offset: 1943 },
            end: { line: 38, column: 15, offset: 1953 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1939 },
        end: { line: 38, column: 15, offset: 1953 }
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
            start: { line: 40, column: 1, offset: 1955 },
            end: { line: 40, column: 78, offset: 2032 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1955 },
        end: { line: 40, column: 78, offset: 2032 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The scheme of a URL specifies the protocol that the client will use to send a request to the server. For HTTP, the scheme could be ',
          position: {
            start: { line: 42, column: 1, offset: 2034 },
            end: { line: 42, column: 132, offset: 2165 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 42, column: 132, offset: 2165 },
            end: { line: 42, column: 138, offset: 2171 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 42, column: 138, offset: 2171 },
            end: { line: 42, column: 142, offset: 2175 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https',
          position: {
            start: { line: 42, column: 142, offset: 2175 },
            end: { line: 42, column: 149, offset: 2182 }
          }
        },
        {
          type: 'text',
          value: '. Other schemes include ',
          position: {
            start: { line: 42, column: 149, offset: 2182 },
            end: { line: 42, column: 173, offset: 2206 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ws',
          position: {
            start: { line: 42, column: 173, offset: 2206 },
            end: { line: 42, column: 177, offset: 2210 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 42, column: 177, offset: 2210 },
            end: { line: 42, column: 182, offset: 2215 }
          }
        },
        {
          type: 'inlineCode',
          value: 'wss',
          position: {
            start: { line: 42, column: 182, offset: 2215 },
            end: { line: 42, column: 187, offset: 2220 }
          }
        },
        {
          type: 'text',
          value: ' for the ',
          position: {
            start: { line: 42, column: 187, offset: 2220 },
            end: { line: 42, column: 196, offset: 2229 }
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
                start: { line: 42, column: 197, offset: 2230 },
                end: { line: 42, column: 206, offset: 2239 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 196, offset: 2229 },
            end: { line: 42, column: 228, offset: 2261 }
          }
        },
        {
          type: 'text',
          value: ' protocol, ',
          position: {
            start: { line: 42, column: 228, offset: 2261 },
            end: { line: 42, column: 239, offset: 2272 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mailto',
          position: {
            start: { line: 42, column: 239, offset: 2272 },
            end: { line: 42, column: 247, offset: 2280 }
          }
        },
        {
          type: 'text',
          value: ' for the "mailto:" protocol, and ',
          position: {
            start: { line: 42, column: 247, offset: 2280 },
            end: { line: 42, column: 280, offset: 2313 }
          }
        },
        {
          type: 'inlineCode',
          value: 'file',
          position: {
            start: { line: 42, column: 280, offset: 2313 },
            end: { line: 42, column: 286, offset: 2319 }
          }
        },
        {
          type: 'text',
          value: ' for the "file:" protocol.',
          position: {
            start: { line: 42, column: 286, offset: 2319 },
            end: { line: 42, column: 312, offset: 2345 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 2034 },
        end: { line: 42, column: 312, offset: 2345 }
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
            start: { line: 44, column: 5, offset: 2351 },
            end: { line: 44, column: 20, offset: 2366 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 2347 },
        end: { line: 44, column: 20, offset: 2366 }
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
            start: { line: 46, column: 1, offset: 2368 },
            end: { line: 46, column: 88, offset: 2455 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 2368 },
        end: { line: 46, column: 88, offset: 2455 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The domain name of a URL is a unique name that translates to the address of a computer where the resource of the URL is located. Domain names are translated via the ',
          position: {
            start: { line: 48, column: 1, offset: 2457 },
            end: { line: 48, column: 166, offset: 2622 }
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
                start: { line: 48, column: 167, offset: 2623 },
                end: { line: 48, column: 191, offset: 2647 }
              }
            }
          ],
          position: {
            start: { line: 48, column: 166, offset: 2622 },
            end: { line: 48, column: 246, offset: 2702 }
          }
        },
        {
          type: 'text',
          value: ' to computer addresses running web servers to which HTTP clients can send requests.',
          position: {
            start: { line: 48, column: 246, offset: 2702 },
            end: { line: 48, column: 329, offset: 2785 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 2457 },
        end: { line: 48, column: 329, offset: 2785 }
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
            start: { line: 50, column: 5, offset: 2791 },
            end: { line: 50, column: 13, offset: 2799 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 2787 },
        end: { line: 50, column: 13, offset: 2799 }
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
            start: { line: 52, column: 1, offset: 2801 },
            end: { line: 52, column: 74, offset: 2874 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2801 },
        end: { line: 52, column: 74, offset: 2874 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The port of a URL is a number that identifies a specific process or network service running on the computer where the resource of the URL is located. When a computer starts up a process like a web server, it can assign it a numerical port between 0 and 65535. The web server would then listen on this assigned port for HTTP requests.',
          position: {
            start: { line: 54, column: 1, offset: 2876 },
            end: { line: 54, column: 334, offset: 3209 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 2876 },
        end: { line: 54, column: 334, offset: 3209 }
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
            start: { line: 56, column: 5, offset: 3215 },
            end: { line: 56, column: 18, offset: 3228 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 3211 },
        end: { line: 56, column: 18, offset: 3228 }
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
            start: { line: 58, column: 1, offset: 3230 },
            end: { line: 58, column: 84, offset: 3313 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 3230 },
        end: { line: 58, column: 84, offset: 3313 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The authority of a URL consists of the domain name and port of the URL separated by a colon.',
          position: {
            start: { line: 60, column: 1, offset: 3315 },
            end: { line: 60, column: 93, offset: 3407 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3315 },
        end: { line: 60, column: 93, offset: 3407 }
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
            start: { line: 62, column: 5, offset: 3413 },
            end: { line: 62, column: 13, offset: 3421 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3409 },
        end: { line: 62, column: 13, offset: 3421 }
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
            start: { line: 64, column: 1, offset: 3423 },
            end: { line: 64, column: 74, offset: 3496 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 3423 },
        end: { line: 64, column: 74, offset: 3496 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The path of a URL is a string that identifies the physical or abstract location of the resource within the URL's domain.",
          position: {
            start: { line: 66, column: 1, offset: 3498 },
            end: { line: 66, column: 121, offset: 3618 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3498 },
        end: { line: 66, column: 121, offset: 3618 }
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
            start: { line: 68, column: 5, offset: 3624 },
            end: { line: 68, column: 25, offset: 3644 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3620 },
        end: { line: 68, column: 25, offset: 3644 }
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
            start: { line: 70, column: 1, offset: 3646 },
            end: { line: 70, column: 98, offset: 3743 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 3646 },
        end: { line: 70, column: 98, offset: 3743 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The query parameters of a URL are a list of key-value pairs separated by the ',
          position: {
            start: { line: 72, column: 1, offset: 3745 },
            end: { line: 72, column: 78, offset: 3822 }
          }
        },
        {
          type: 'inlineCode',
          value: '&',
          position: {
            start: { line: 72, column: 78, offset: 3822 },
            end: { line: 72, column: 81, offset: 3825 }
          }
        },
        {
          type: 'text',
          value: ' symbol. The query parameters can further identify the resource of a URL.',
          position: {
            start: { line: 72, column: 81, offset: 3825 },
            end: { line: 72, column: 154, offset: 3898 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 3745 },
        end: { line: 72, column: 154, offset: 3898 }
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
            start: { line: 74, column: 5, offset: 3904 },
            end: { line: 74, column: 15, offset: 3914 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 3900 },
        end: { line: 74, column: 15, offset: 3914 }
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
            start: { line: 76, column: 1, offset: 3916 },
            end: { line: 76, column: 78, offset: 3993 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3916 },
        end: { line: 76, column: 78, offset: 3993 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `The anchor of a URL specifies a part of the URL's resource, and does not necessarily locate the resource. When a web server serves a web page as a resource, the anchor acts as a sort of "bookmark" inside the resource. Browsers will see the anchor and scroll the page down to where the section identified by the anchor is visible.`,
          position: {
            start: { line: 78, column: 1, offset: 3995 },
            end: { line: 78, column: 330, offset: 4324 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3995 },
        end: { line: 78, column: 330, offset: 4324 }
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
            start: { line: 80, column: 4, offset: 4329 },
            end: { line: 80, column: 15, offset: 4340 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 4326 },
        end: { line: 80, column: 15, offset: 4340 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP client is a component of a ',
          position: {
            start: { line: 82, column: 1, offset: 4342 },
            end: { line: 82, column: 36, offset: 4377 }
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
                start: { line: 82, column: 37, offset: 4378 },
                end: { line: 82, column: 57, offset: 4398 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 36, offset: 4377 },
            end: { line: 82, column: 110, offset: 4451 }
          }
        },
        {
          type: 'text',
          value: ' running inside a computer that sends HTTP requests to HTTP servers. The JavaScript code below is part of a software application that runs in your web browser. The code demonstrates the use of an HTTP client ',
          position: {
            start: { line: 82, column: 110, offset: 4451 },
            end: { line: 82, column: 318, offset: 4659 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 82, column: 318, offset: 4659 },
            end: { line: 82, column: 325, offset: 4666 }
          }
        },
        {
          type: 'text',
          value: ' to send a request to an HTTP server at the url ',
          position: {
            start: { line: 82, column: 325, offset: 4666 },
            end: { line: 82, column: 373, offset: 4714 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https://jsonplaceholder.typicode.com/todos/1',
          position: {
            start: { line: 82, column: 373, offset: 4714 },
            end: { line: 82, column: 419, offset: 4760 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 82, column: 419, offset: 4760 },
            end: { line: 82, column: 420, offset: 4761 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 4342 },
        end: { line: 82, column: 420, offset: 4761 }
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
        start: { line: 84, column: 1, offset: 4763 },
        end: { line: 95, column: 4, offset: 5096 }
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
            start: { line: 97, column: 4, offset: 5101 },
            end: { line: 97, column: 16, offset: 5113 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 5098 },
        end: { line: 97, column: 16, offset: 5113 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request is a message conforming to the HTTP protocol that a client sends to a server. An HTTP request has the following properties:',
          position: {
            start: { line: 99, column: 1, offset: 5115 },
            end: { line: 99, column: 140, offset: 5254 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 5115 },
        end: { line: 99, column: 140, offset: 5254 }
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
                        start: { line: 100, column: 5, offset: 5259 },
                        end: { line: 100, column: 11, offset: 5265 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 100, column: 4, offset: 5258 },
                    end: { line: 100, column: 34, offset: 5288 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 4, offset: 5258 },
                end: { line: 100, column: 34, offset: 5288 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 2, offset: 5256 },
            end: { line: 100, column: 34, offset: 5288 }
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
                        start: { line: 101, column: 5, offset: 5293 },
                        end: { line: 101, column: 8, offset: 5296 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 101, column: 4, offset: 5292 },
                    end: { line: 101, column: 28, offset: 5316 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 4, offset: 5292 },
                end: { line: 101, column: 28, offset: 5316 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 2, offset: 5290 },
            end: { line: 101, column: 28, offset: 5316 }
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
                        start: { line: 102, column: 5, offset: 5321 },
                        end: { line: 102, column: 12, offset: 5328 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 102, column: 4, offset: 5320 },
                    end: { line: 102, column: 36, offset: 5352 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 4, offset: 5320 },
                end: { line: 102, column: 36, offset: 5352 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 2, offset: 5318 },
            end: { line: 102, column: 36, offset: 5352 }
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
                        start: { line: 103, column: 5, offset: 5357 },
                        end: { line: 103, column: 9, offset: 5361 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 103, column: 4, offset: 5356 },
                    end: { line: 103, column: 30, offset: 5382 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 4, offset: 5356 },
                end: { line: 103, column: 30, offset: 5382 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 2, offset: 5354 },
            end: { line: 103, column: 30, offset: 5382 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 2, offset: 5256 },
        end: { line: 103, column: 30, offset: 5382 }
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
            start: { line: 105, column: 5, offset: 5388 },
            end: { line: 105, column: 24, offset: 5407 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 5384 },
        end: { line: 105, column: 24, offset: 5407 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: ',
          position: {
            start: { line: 107, column: 1, offset: 5409 },
            end: { line: 107, column: 192, offset: 5600 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 107, column: 192, offset: 5600 },
            end: { line: 107, column: 197, offset: 5605 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 197, offset: 5605 },
            end: { line: 107, column: 199, offset: 5607 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 107, column: 199, offset: 5607 },
            end: { line: 107, column: 205, offset: 5613 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 205, offset: 5613 },
            end: { line: 107, column: 207, offset: 5615 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 107, column: 207, offset: 5615 },
            end: { line: 107, column: 213, offset: 5621 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 213, offset: 5621 },
            end: { line: 107, column: 215, offset: 5623 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 107, column: 215, offset: 5623 },
            end: { line: 107, column: 220, offset: 5628 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 220, offset: 5628 },
            end: { line: 107, column: 222, offset: 5630 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 107, column: 222, offset: 5630 },
            end: { line: 107, column: 229, offset: 5637 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 229, offset: 5637 },
            end: { line: 107, column: 231, offset: 5639 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 107, column: 231, offset: 5639 },
            end: { line: 107, column: 239, offset: 5647 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 239, offset: 5647 },
            end: { line: 107, column: 241, offset: 5649 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 107, column: 241, offset: 5649 },
            end: { line: 107, column: 250, offset: 5658 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 250, offset: 5658 },
            end: { line: 107, column: 252, offset: 5660 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 107, column: 252, offset: 5660 },
            end: { line: 107, column: 261, offset: 5669 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 107, column: 261, offset: 5669 },
            end: { line: 107, column: 267, offset: 5675 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 107, column: 267, offset: 5675 },
            end: { line: 107, column: 274, offset: 5682 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 107, column: 274, offset: 5682 },
            end: { line: 107, column: 275, offset: 5683 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 5409 },
        end: { line: 107, column: 275, offset: 5683 }
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
            start: { line: 109, column: 6, offset: 5690 },
            end: { line: 109, column: 9, offset: 5693 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 5685 },
        end: { line: 109, column: 9, offset: 5693 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 111, column: 1, offset: 5695 },
            end: { line: 111, column: 5, offset: 5699 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 5, offset: 5699 },
            end: { line: 111, column: 10, offset: 5704 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for a data representation of the resource. ',
          position: {
            start: { line: 111, column: 10, offset: 5704 },
            end: { line: 111, column: 94, offset: 5788 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 94, offset: 5788 },
            end: { line: 111, column: 99, offset: 5793 }
          }
        },
        {
          type: 'text',
          value: ' requests are ',
          position: {
            start: { line: 111, column: 99, offset: 5793 },
            end: { line: 111, column: 113, offset: 5807 }
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
                start: { line: 111, column: 114, offset: 5808 },
                end: { line: 111, column: 118, offset: 5812 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 113, offset: 5807 },
            end: { line: 111, column: 180, offset: 5874 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 111, column: 180, offset: 5874 },
            end: { line: 111, column: 182, offset: 5876 }
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
                start: { line: 111, column: 183, offset: 5877 },
                end: { line: 111, column: 193, offset: 5887 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 182, offset: 5876 },
            end: { line: 111, column: 256, offset: 5950 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 111, column: 256, offset: 5950 },
            end: { line: 111, column: 262, offset: 5956 }
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
                start: { line: 111, column: 263, offset: 5957 },
                end: { line: 111, column: 272, offset: 5966 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 262, offset: 5956 },
            end: { line: 111, column: 334, offset: 6028 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 111, column: 334, offset: 6028 },
            end: { line: 111, column: 335, offset: 6029 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 5695 },
        end: { line: 111, column: 335, offset: 6029 }
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
            start: { line: 113, column: 6, offset: 6036 },
            end: { line: 113, column: 10, offset: 6040 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 6031 },
        end: { line: 113, column: 10, offset: 6040 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 115, column: 1, offset: 6042 },
            end: { line: 115, column: 5, offset: 6046 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 5, offset: 6046 },
            end: { line: 115, column: 11, offset: 6052 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for metadata about the resource. ',
          position: {
            start: { line: 115, column: 11, offset: 6052 },
            end: { line: 115, column: 85, offset: 6126 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 85, offset: 6126 },
            end: { line: 115, column: 91, offset: 6132 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, idempotent, and cacheable.',
          position: {
            start: { line: 115, column: 91, offset: 6132 },
            end: { line: 115, column: 137, offset: 6178 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 6042 },
        end: { line: 115, column: 137, offset: 6178 }
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
            start: { line: 117, column: 6, offset: 6185 },
            end: { line: 117, column: 10, offset: 6189 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 6180 },
        end: { line: 117, column: 10, offset: 6189 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 119, column: 1, offset: 6191 },
            end: { line: 119, column: 5, offset: 6195 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 5, offset: 6195 },
            end: { line: 119, column: 11, offset: 6201 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to create the resource. ',
          position: {
            start: { line: 119, column: 11, offset: 6201 },
            end: { line: 119, column: 85, offset: 6275 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 85, offset: 6275 },
            end: { line: 119, column: 91, offset: 6281 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 119, column: 91, offset: 6281 },
            end: { line: 119, column: 185, offset: 6375 }
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
                start: { line: 119, column: 186, offset: 6376 },
                end: { line: 119, column: 195, offset: 6385 }
              }
            }
          ],
          position: {
            start: { line: 119, column: 185, offset: 6375 },
            end: { line: 119, column: 257, offset: 6447 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 119, column: 257, offset: 6447 },
            end: { line: 119, column: 278, offset: 6468 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 119, column: 278, offset: 6468 },
            end: { line: 119, column: 287, offset: 6477 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 119, column: 287, offset: 6477 },
            end: { line: 119, column: 291, offset: 6481 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 119, column: 291, offset: 6481 },
            end: { line: 119, column: 306, offset: 6496 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 119, column: 306, offset: 6496 },
            end: { line: 119, column: 328, offset: 6518 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 119, column: 328, offset: 6518 },
            end: { line: 119, column: 346, offset: 6536 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 119, column: 346, offset: 6536 },
            end: { line: 119, column: 354, offset: 6544 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6191 },
        end: { line: 119, column: 354, offset: 6544 }
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
            start: { line: 121, column: 6, offset: 6551 },
            end: { line: 121, column: 9, offset: 6554 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6546 },
        end: { line: 121, column: 9, offset: 6554 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 123, column: 1, offset: 6556 },
            end: { line: 123, column: 5, offset: 6560 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 5, offset: 6560 },
            end: { line: 123, column: 10, offset: 6565 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 123, column: 10, offset: 6565 },
            end: { line: 123, column: 135, offset: 6690 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 135, offset: 6690 },
            end: { line: 123, column: 140, offset: 6695 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 123, column: 140, offset: 6695 },
            end: { line: 123, column: 198, offset: 6753 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6556 },
        end: { line: 123, column: 198, offset: 6753 }
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
            start: { line: 125, column: 6, offset: 6760 },
            end: { line: 125, column: 11, offset: 6765 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6755 },
        end: { line: 125, column: 11, offset: 6765 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 127, column: 1, offset: 6767 },
            end: { line: 127, column: 5, offset: 6771 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 5, offset: 6771 },
            end: { line: 127, column: 12, offset: 6778 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the resource. ',
          position: {
            start: { line: 127, column: 12, offset: 6778 },
            end: { line: 127, column: 96, offset: 6862 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 96, offset: 6862 },
            end: { line: 127, column: 103, offset: 6869 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 127, column: 103, offset: 6869 },
            end: { line: 127, column: 227, offset: 6993 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 127, column: 227, offset: 6993 },
            end: { line: 127, column: 236, offset: 7002 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 127, column: 236, offset: 7002 },
            end: { line: 127, column: 240, offset: 7006 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 127, column: 240, offset: 7006 },
            end: { line: 127, column: 255, offset: 7021 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 127, column: 255, offset: 7021 },
            end: { line: 127, column: 277, offset: 7043 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 127, column: 277, offset: 7043 },
            end: { line: 127, column: 295, offset: 7061 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 127, column: 295, offset: 7061 },
            end: { line: 127, column: 303, offset: 7069 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6767 },
        end: { line: 127, column: 303, offset: 7069 }
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
            start: { line: 129, column: 6, offset: 7076 },
            end: { line: 129, column: 12, offset: 7082 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 7071 },
        end: { line: 129, column: 12, offset: 7082 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 131, column: 1, offset: 7084 },
            end: { line: 131, column: 5, offset: 7088 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 5, offset: 7088 },
            end: { line: 131, column: 13, offset: 7096 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the resource. ',
          position: {
            start: { line: 131, column: 13, offset: 7096 },
            end: { line: 131, column: 78, offset: 7161 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 78, offset: 7161 },
            end: { line: 131, column: 86, offset: 7169 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 131, column: 86, offset: 7169 },
            end: { line: 131, column: 148, offset: 7231 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 7084 },
        end: { line: 131, column: 148, offset: 7231 }
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
            start: { line: 133, column: 6, offset: 7238 },
            end: { line: 133, column: 13, offset: 7245 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 7233 },
        end: { line: 133, column: 13, offset: 7245 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 135, column: 1, offset: 7247 },
            end: { line: 135, column: 5, offset: 7251 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 5, offset: 7251 },
            end: { line: 135, column: 14, offset: 7260 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the resource. ',
          position: {
            start: { line: 135, column: 14, offset: 7260 },
            end: { line: 135, column: 119, offset: 7365 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 119, offset: 7365 },
            end: { line: 135, column: 128, offset: 7374 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 135, column: 128, offset: 7374 },
            end: { line: 135, column: 194, offset: 7440 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 7247 },
        end: { line: 135, column: 194, offset: 7440 }
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
            start: { line: 137, column: 6, offset: 7447 },
            end: { line: 137, column: 13, offset: 7454 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 7442 },
        end: { line: 137, column: 13, offset: 7454 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 139, column: 1, offset: 7456 },
            end: { line: 139, column: 5, offset: 7460 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 5, offset: 7460 },
            end: { line: 139, column: 14, offset: 7469 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options of the resource. ',
          position: {
            start: { line: 139, column: 14, offset: 7469 },
            end: { line: 139, column: 110, offset: 7565 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 110, offset: 7565 },
            end: { line: 139, column: 119, offset: 7574 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 139, column: 119, offset: 7574 },
            end: { line: 139, column: 177, offset: 7632 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7456 },
        end: { line: 139, column: 177, offset: 7632 }
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
            start: { line: 141, column: 6, offset: 7639 },
            end: { line: 141, column: 11, offset: 7644 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7634 },
        end: { line: 141, column: 11, offset: 7644 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 143, column: 1, offset: 7646 },
            end: { line: 143, column: 5, offset: 7650 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 5, offset: 7650 },
            end: { line: 143, column: 12, offset: 7657 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 143, column: 12, offset: 7657 },
            end: { line: 143, column: 66, offset: 7711 }
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
                start: { line: 143, column: 67, offset: 7712 },
                end: { line: 143, column: 81, offset: 7726 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 66, offset: 7711 },
            end: { line: 143, column: 134, offset: 7779 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the URL. ',
          position: {
            start: { line: 143, column: 134, offset: 7779 },
            end: { line: 143, column: 162, offset: 7807 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 162, offset: 7807 },
            end: { line: 143, column: 169, offset: 7814 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 143, column: 169, offset: 7814 },
            end: { line: 143, column: 227, offset: 7872 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7646 },
        end: { line: 143, column: 227, offset: 7872 }
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
            start: { line: 145, column: 5, offset: 7878 },
            end: { line: 145, column: 21, offset: 7894 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7874 },
        end: { line: 145, column: 21, offset: 7894 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request URL is the ',
          position: {
            start: { line: 147, column: 1, offset: 7896 },
            end: { line: 147, column: 29, offset: 7924 }
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
                start: { line: 147, column: 30, offset: 7925 },
                end: { line: 147, column: 33, offset: 7928 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 29, offset: 7924 },
            end: { line: 147, column: 40, offset: 7935 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 147, column: 40, offset: 7935 },
            end: { line: 147, column: 137, offset: 8032 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7896 },
        end: { line: 147, column: 137, offset: 8032 }
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
            start: { line: 149, column: 5, offset: 8038 },
            end: { line: 149, column: 25, offset: 8058 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 8034 },
        end: { line: 149, column: 25, offset: 8058 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request.',
          position: {
            start: { line: 151, column: 1, offset: 8060 },
            end: { line: 151, column: 144, offset: 8203 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 8060 },
        end: { line: 151, column: 144, offset: 8203 }
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
            start: { line: 153, column: 5, offset: 8209 },
            end: { line: 153, column: 22, offset: 8226 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 8205 },
        end: { line: 153, column: 22, offset: 8226 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP request body is the part of the request that carries the bulk of the data sent to the server. The content type of the request body should be specified in the request's ",
          position: {
            start: { line: 155, column: 1, offset: 8228 },
            end: { line: 155, column: 178, offset: 8405 }
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
                start: { line: 155, column: 179, offset: 8406 },
                end: { line: 155, column: 191, offset: 8418 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 178, offset: 8405 },
            end: { line: 155, column: 274, offset: 8501 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 155, column: 274, offset: 8501 },
            end: { line: 155, column: 282, offset: 8509 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 8228 },
        end: { line: 155, column: 282, offset: 8509 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP request bodies:',
          position: {
            start: { line: 157, column: 1, offset: 8511 },
            end: { line: 157, column: 38, offset: 8548 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 8511 },
        end: { line: 157, column: 38, offset: 8548 }
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
                        start: { line: 158, column: 5, offset: 8553 },
                        end: { line: 158, column: 9, offset: 8557 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 8552 },
                    end: { line: 158, column: 45, offset: 8593 }
                  }
                },
                {
                  type: 'text',
                  value: ' - request body used for web applications. The request method is typically ',
                  position: {
                    start: { line: 158, column: 45, offset: 8593 },
                    end: { line: 158, column: 120, offset: 8668 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 158, column: 120, offset: 8668 },
                    end: { line: 158, column: 125, offset: 8673 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 158, column: 125, offset: 8673 },
                    end: { line: 158, column: 127, offset: 8675 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 158, column: 127, offset: 8675 },
                    end: { line: 158, column: 133, offset: 8681 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 158, column: 133, offset: 8681 },
                    end: { line: 158, column: 138, offset: 8686 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 158, column: 138, offset: 8686 },
                    end: { line: 158, column: 145, offset: 8693 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 158, column: 145, offset: 8693 },
                    end: { line: 158, column: 151, offset: 8699 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 158, column: 151, offset: 8699 },
                    end: { line: 158, column: 165, offset: 8713 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 158, column: 165, offset: 8713 },
                    end: { line: 158, column: 187, offset: 8735 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 158, column: 187, offset: 8735 },
                    end: { line: 158, column: 205, offset: 8753 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 158, column: 205, offset: 8753 },
                    end: { line: 158, column: 206, offset: 8754 }
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 8552 },
                end: { line: 158, column: 206, offset: 8754 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 2, offset: 8550 },
            end: { line: 158, column: 206, offset: 8754 }
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
                    start: { line: 159, column: 4, offset: 8758 },
                    end: { line: 159, column: 83, offset: 8837 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 159, column: 83, offset: 8837 },
                    end: { line: 159, column: 88, offset: 8842 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 159, column: 88, offset: 8842 },
                    end: { line: 159, column: 92, offset: 8846 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 159, column: 92, offset: 8846 },
                    end: { line: 159, column: 98, offset: 8852 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 159, column: 98, offset: 8852 },
                    end: { line: 159, column: 104, offset: 8858 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 159, column: 104, offset: 8858 },
                    end: { line: 159, column: 118, offset: 8872 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 159, column: 118, offset: 8872 },
                    end: { line: 159, column: 139, offset: 8893 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 159, column: 139, offset: 8893 },
                    end: { line: 159, column: 151, offset: 8905 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 151, offset: 8905 },
                    end: { line: 159, column: 153, offset: 8907 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 159, column: 153, offset: 8907 },
                    end: { line: 159, column: 164, offset: 8918 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 164, offset: 8918 },
                    end: { line: 159, column: 166, offset: 8920 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 159, column: 166, offset: 8920 },
                    end: { line: 159, column: 178, offset: 8932 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 178, offset: 8932 },
                    end: { line: 159, column: 180, offset: 8934 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 159, column: 180, offset: 8934 },
                    end: { line: 159, column: 193, offset: 8947 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 159, column: 193, offset: 8947 },
                    end: { line: 159, column: 198, offset: 8952 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 159, column: 198, offset: 8952 },
                    end: { line: 159, column: 209, offset: 8963 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 159, column: 209, offset: 8963 },
                    end: { line: 159, column: 210, offset: 8964 }
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 8758 },
                end: { line: 159, column: 210, offset: 8964 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 2, offset: 8756 },
            end: { line: 159, column: 210, offset: 8964 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 2, offset: 8550 },
        end: { line: 159, column: 210, offset: 8964 }
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
            start: { line: 161, column: 4, offset: 8969 },
            end: { line: 161, column: 17, offset: 8982 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8966 },
        end: { line: 161, column: 17, offset: 8982 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client. An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8984 },
            end: { line: 163, column: 149, offset: 9132 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8984 },
        end: { line: 163, column: 149, offset: 9132 }
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
                        start: { line: 164, column: 5, offset: 9137 },
                        end: { line: 164, column: 16, offset: 9148 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 164, column: 4, offset: 9136 },
                    end: { line: 164, column: 45, offset: 9177 }
                  }
                }
              ],
              position: {
                start: { line: 164, column: 4, offset: 9136 },
                end: { line: 164, column: 45, offset: 9177 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 2, offset: 9134 },
            end: { line: 164, column: 45, offset: 9177 }
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
                        start: { line: 165, column: 5, offset: 9182 },
                        end: { line: 165, column: 12, offset: 9189 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 165, column: 4, offset: 9181 },
                    end: { line: 165, column: 37, offset: 9214 }
                  }
                }
              ],
              position: {
                start: { line: 165, column: 4, offset: 9181 },
                end: { line: 165, column: 37, offset: 9214 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 2, offset: 9179 },
            end: { line: 165, column: 37, offset: 9214 }
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
                        start: { line: 166, column: 5, offset: 9219 },
                        end: { line: 166, column: 9, offset: 9223 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 166, column: 4, offset: 9218 },
                    end: { line: 166, column: 31, offset: 9245 }
                  }
                }
              ],
              position: {
                start: { line: 166, column: 4, offset: 9218 },
                end: { line: 166, column: 31, offset: 9245 }
              }
            }
          ],
          position: {
            start: { line: 166, column: 2, offset: 9216 },
            end: { line: 166, column: 31, offset: 9245 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 2, offset: 9134 },
        end: { line: 166, column: 31, offset: 9245 }
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
            start: { line: 168, column: 5, offset: 9251 },
            end: { line: 168, column: 30, offset: 9276 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 9247 },
        end: { line: 168, column: 30, offset: 9276 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response status code is a three-digit code that indicates the status of the server's processing of the request.",
          position: {
            start: { line: 170, column: 1, offset: 9278 },
            end: { line: 170, column: 121, offset: 9398 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 9278 },
        end: { line: 170, column: 121, offset: 9398 }
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
            start: { line: 172, column: 6, offset: 9405 },
            end: { line: 172, column: 42, offset: 9441 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 9400 },
        end: { line: 172, column: 42, offset: 9441 }
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
            start: { line: 174, column: 7, offset: 9449 },
            end: { line: 174, column: 19, offset: 9461 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 9443 },
        end: { line: 174, column: 19, offset: 9461 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received the request headers and is ready for the client to send the request body.',
          position: {
            start: { line: 176, column: 1, offset: 9463 },
            end: { line: 176, column: 98, offset: 9560 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 9463 },
        end: { line: 176, column: 98, offset: 9560 }
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
            start: { line: 178, column: 7, offset: 9568 },
            end: { line: 178, column: 30, offset: 9591 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 9562 },
        end: { line: 178, column: 30, offset: 9591 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is switching to a different protocol, specified in the ',
          position: {
            start: { line: 180, column: 1, offset: 9593 },
            end: { line: 180, column: 67, offset: 9659 }
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
                start: { line: 180, column: 68, offset: 9660 },
                end: { line: 180, column: 75, offset: 9667 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 67, offset: 9659 },
            end: { line: 180, column: 153, offset: 9745 }
          }
        },
        {
          type: 'text',
          value: " header, at the client's request. ",
          position: {
            start: { line: 180, column: 153, offset: 9745 },
            end: { line: 180, column: 187, offset: 9779 }
          }
        },
        {
          type: 'inlineCode',
          value: '101 Switching Protocols',
          position: {
            start: { line: 180, column: 187, offset: 9779 },
            end: { line: 180, column: 212, offset: 9804 }
          }
        },
        {
          type: 'text',
          value: ' is used by the ',
          position: {
            start: { line: 180, column: 212, offset: 9804 },
            end: { line: 180, column: 228, offset: 9820 }
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
                start: { line: 180, column: 229, offset: 9821 },
                end: { line: 180, column: 238, offset: 9830 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 228, offset: 9820 },
            end: { line: 180, column: 260, offset: 9852 }
          }
        },
        {
          type: 'text',
          value: ' protocol when switching from HTTP.',
          position: {
            start: { line: 180, column: 260, offset: 9852 },
            end: { line: 180, column: 295, offset: 9887 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 9593 },
        end: { line: 180, column: 295, offset: 9887 }
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
            start: { line: 182, column: 7, offset: 9895 },
            end: { line: 182, column: 21, offset: 9909 }
          }
        }
      ],
      position: {
        start: { line: 182, column: 1, offset: 9889 },
        end: { line: 182, column: 21, offset: 9909 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received and is processing the request but no response is available yet.',
          position: {
            start: { line: 184, column: 1, offset: 9911 },
            end: { line: 184, column: 88, offset: 9998 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 9911 },
        end: { line: 184, column: 88, offset: 9998 }
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
            start: { line: 186, column: 7, offset: 10006 },
            end: { line: 186, column: 22, offset: 10021 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 10000 },
        end: { line: 186, column: 22, offset: 10021 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.',
          position: {
            start: { line: 188, column: 1, offset: 10023 },
            end: { line: 188, column: 139, offset: 10161 }
          }
        }
      ],
      position: {
        start: { line: 188, column: 1, offset: 10023 },
        end: { line: 188, column: 139, offset: 10161 }
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
            start: { line: 190, column: 6, offset: 10168 },
            end: { line: 190, column: 39, offset: 10201 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 10163 },
        end: { line: 190, column: 39, offset: 10201 }
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
            start: { line: 192, column: 7, offset: 10209 },
            end: { line: 192, column: 13, offset: 10215 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 10203 },
        end: { line: 192, column: 13, offset: 10215 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server successfully processed the request. The meaning of success depends on the request method:',
          position: {
            start: { line: 194, column: 1, offset: 10217 },
            end: { line: 194, column: 101, offset: 10317 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 10217 },
        end: { line: 194, column: 101, offset: 10317 }
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
                    start: { line: 195, column: 4, offset: 10321 },
                    end: { line: 195, column: 9, offset: 10326 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource has been successfully retrieved and transmitted in the response message body.',
                  position: {
                    start: { line: 195, column: 9, offset: 10326 },
                    end: { line: 195, column: 102, offset: 10419 }
                  }
                }
              ],
              position: {
                start: { line: 195, column: 4, offset: 10321 },
                end: { line: 195, column: 102, offset: 10419 }
              }
            }
          ],
          position: {
            start: { line: 195, column: 2, offset: 10319 },
            end: { line: 195, column: 102, offset: 10419 }
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
                    start: { line: 196, column: 4, offset: 10423 },
                    end: { line: 196, column: 10, offset: 10429 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The requested metadata about the resource is available in the response headers.',
                  position: {
                    start: { line: 196, column: 10, offset: 10429 },
                    end: { line: 196, column: 92, offset: 10511 }
                  }
                }
              ],
              position: {
                start: { line: 196, column: 4, offset: 10423 },
                end: { line: 196, column: 92, offset: 10511 }
              }
            }
          ],
          position: {
            start: { line: 196, column: 2, offset: 10421 },
            end: { line: 196, column: 92, offset: 10511 }
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
                    start: { line: 197, column: 4, offset: 10515 },
                    end: { line: 197, column: 10, offset: 10521 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created successfully.',
                  position: {
                    start: { line: 197, column: 10, offset: 10521 },
                    end: { line: 197, column: 51, offset: 10562 }
                  }
                }
              ],
              position: {
                start: { line: 197, column: 4, offset: 10515 },
                end: { line: 197, column: 51, offset: 10562 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 2, offset: 10513 },
            end: { line: 197, column: 51, offset: 10562 }
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
                    start: { line: 198, column: 4, offset: 10566 },
                    end: { line: 198, column: 9, offset: 10571 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created or updated successfully.',
                  position: {
                    start: { line: 198, column: 9, offset: 10571 },
                    end: { line: 198, column: 61, offset: 10623 }
                  }
                }
              ],
              position: {
                start: { line: 198, column: 4, offset: 10566 },
                end: { line: 198, column: 61, offset: 10623 }
              }
            }
          ],
          position: {
            start: { line: 198, column: 2, offset: 10564 },
            end: { line: 198, column: 61, offset: 10623 }
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
                    start: { line: 199, column: 4, offset: 10627 },
                    end: { line: 199, column: 11, offset: 10634 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was updated successfully.',
                  position: {
                    start: { line: 199, column: 11, offset: 10634 },
                    end: { line: 199, column: 52, offset: 10675 }
                  }
                }
              ],
              position: {
                start: { line: 199, column: 4, offset: 10627 },
                end: { line: 199, column: 52, offset: 10675 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 2, offset: 10625 },
            end: { line: 199, column: 52, offset: 10675 }
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
                    start: { line: 200, column: 4, offset: 10679 },
                    end: { line: 200, column: 12, offset: 10687 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was deleted successfully.',
                  position: {
                    start: { line: 200, column: 12, offset: 10687 },
                    end: { line: 200, column: 53, offset: 10728 }
                  }
                }
              ],
              position: {
                start: { line: 200, column: 4, offset: 10679 },
                end: { line: 200, column: 53, offset: 10728 }
              }
            }
          ],
          position: {
            start: { line: 200, column: 2, offset: 10677 },
            end: { line: 200, column: 53, offset: 10728 }
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
                    start: { line: 201, column: 4, offset: 10732 },
                    end: { line: 201, column: 13, offset: 10741 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The connection was established successfully.',
                  position: {
                    start: { line: 201, column: 13, offset: 10741 },
                    end: { line: 201, column: 60, offset: 10788 }
                  }
                }
              ],
              position: {
                start: { line: 201, column: 4, offset: 10732 },
                end: { line: 201, column: 60, offset: 10788 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 2, offset: 10730 },
            end: { line: 201, column: 60, offset: 10788 }
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
                    start: { line: 202, column: 4, offset: 10792 },
                    end: { line: 202, column: 13, offset: 10801 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The communication options are available in the ',
                  position: {
                    start: { line: 202, column: 13, offset: 10801 },
                    end: { line: 202, column: 63, offset: 10851 }
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
                        start: { line: 202, column: 64, offset: 10852 },
                        end: { line: 202, column: 69, offset: 10857 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 202, column: 63, offset: 10851 },
                    end: { line: 202, column: 145, offset: 10933 }
                  }
                },
                {
                  type: 'text',
                  value: ' header.',
                  position: {
                    start: { line: 202, column: 145, offset: 10933 },
                    end: { line: 202, column: 153, offset: 10941 }
                  }
                }
              ],
              position: {
                start: { line: 202, column: 4, offset: 10792 },
                end: { line: 202, column: 153, offset: 10941 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 2, offset: 10790 },
            end: { line: 202, column: 153, offset: 10941 }
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
                    start: { line: 203, column: 4, offset: 10945 },
                    end: { line: 203, column: 11, offset: 10952 }
                  }
                },
                {
                  type: 'text',
                  value: " - The server successfully received and echoed back the client's request.",
                  position: {
                    start: { line: 203, column: 11, offset: 10952 },
                    end: { line: 203, column: 84, offset: 11025 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10945 },
                end: { line: 203, column: 84, offset: 11025 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10943 },
            end: { line: 203, column: 84, offset: 11025 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 2, offset: 10319 },
        end: { line: 203, column: 84, offset: 11025 }
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
            start: { line: 205, column: 7, offset: 11033 },
            end: { line: 205, column: 18, offset: 11044 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 11027 },
        end: { line: 205, column: 18, offset: 11044 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded and a new resource was created.',
          position: {
            start: { line: 207, column: 1, offset: 11046 },
            end: { line: 207, column: 54, offset: 11099 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 11046 },
        end: { line: 207, column: 54, offset: 11099 }
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
            start: { line: 209, column: 7, offset: 11107 },
            end: { line: 209, column: 19, offset: 11119 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 11101 },
        end: { line: 209, column: 19, offset: 11119 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request has been received but has not yet been processed.',
          position: {
            start: { line: 211, column: 1, offset: 11121 },
            end: { line: 211, column: 62, offset: 11182 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 11121 },
        end: { line: 211, column: 62, offset: 11182 }
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
            start: { line: 213, column: 7, offset: 11190 },
            end: { line: 213, column: 40, offset: 11223 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 11184 },
        end: { line: 213, column: 40, offset: 11223 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded but the response headers or body were modified by a proxy server before being sent to the client.',
          position: {
            start: { line: 215, column: 1, offset: 11225 },
            end: { line: 215, column: 120, offset: 11344 }
          }
        }
      ],
      position: {
        start: { line: 215, column: 1, offset: 11225 },
        end: { line: 215, column: 120, offset: 11344 }
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
            start: { line: 217, column: 7, offset: 11352 },
            end: { line: 217, column: 21, offset: 11366 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 11346 },
        end: { line: 217, column: 21, offset: 11366 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, but there is no content available for this request. The client may update its cached headers for the requested resource with the response headers from this request.',
          position: {
            start: { line: 219, column: 1, offset: 11368 },
            end: { line: 219, column: 216, offset: 11583 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 11368 },
        end: { line: 219, column: 216, offset: 11583 }
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
            start: { line: 221, column: 7, offset: 11591 },
            end: { line: 221, column: 24, offset: 11608 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 11585 },
        end: { line: 221, column: 24, offset: 11608 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and asks the client to reset the document to its original state.',
          position: {
            start: { line: 223, column: 1, offset: 11610 },
            end: { line: 223, column: 116, offset: 11725 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 11610 },
        end: { line: 223, column: 116, offset: 11725 }
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
            start: { line: 225, column: 7, offset: 11733 },
            end: { line: 225, column: 26, offset: 11752 }
          }
        }
      ],
      position: {
        start: { line: 225, column: 1, offset: 11727 },
        end: { line: 225, column: 26, offset: 11752 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and is delivering only part of the requested resource. ',
          position: {
            start: { line: 227, column: 1, offset: 11754 },
            end: { line: 227, column: 107, offset: 11860 }
          }
        },
        {
          type: 'inlineCode',
          value: '206 Partial Content',
          position: {
            start: { line: 227, column: 107, offset: 11860 },
            end: { line: 227, column: 128, offset: 11881 }
          }
        },
        {
          type: 'text',
          value: ' is commonly used in ',
          position: {
            start: { line: 227, column: 128, offset: 11881 },
            end: { line: 227, column: 149, offset: 11902 }
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
                start: { line: 227, column: 150, offset: 11903 },
                end: { line: 227, column: 164, offset: 11917 }
              }
            }
          ],
          position: {
            start: { line: 227, column: 149, offset: 11902 },
            end: { line: 227, column: 238, offset: 11991 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 227, column: 238, offset: 11991 },
            end: { line: 227, column: 239, offset: 11992 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 11754 },
        end: { line: 227, column: 239, offset: 11992 }
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
            start: { line: 229, column: 6, offset: 11999 },
            end: { line: 229, column: 40, offset: 12033 }
          }
        }
      ],
      position: {
        start: { line: 229, column: 1, offset: 11994 },
        end: { line: 229, column: 40, offset: 12033 }
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
            start: { line: 231, column: 7, offset: 12041 },
            end: { line: 231, column: 27, offset: 12061 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 1, offset: 12035 },
        end: { line: 231, column: 27, offset: 12061 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has multiple representations, and the client needs to choose which one to access.',
          position: {
            start: { line: 233, column: 1, offset: 12063 },
            end: { line: 233, column: 95, offset: 12157 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 12063 },
        end: { line: 233, column: 95, offset: 12157 }
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
            start: { line: 235, column: 7, offset: 12165 },
            end: { line: 235, column: 28, offset: 12186 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 12159 },
        end: { line: 235, column: 28, offset: 12186 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 237, column: 1, offset: 12188 },
            end: { line: 237, column: 118, offset: 12305 }
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
                start: { line: 237, column: 119, offset: 12306 },
                end: { line: 237, column: 127, offset: 12314 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 118, offset: 12305 },
            end: { line: 237, column: 206, offset: 12393 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 237, column: 206, offset: 12393 },
            end: { line: 237, column: 230, offset: 12417 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 12188 },
        end: { line: 237, column: 230, offset: 12417 }
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
            start: { line: 239, column: 7, offset: 12425 },
            end: { line: 239, column: 16, offset: 12434 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 12419 },
        end: { line: 239, column: 16, offset: 12434 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 241, column: 1, offset: 12436 },
            end: { line: 241, column: 118, offset: 12553 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 241, column: 118, offset: 12553 },
            end: { line: 241, column: 128, offset: 12563 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 241, column: 128, offset: 12563 },
            end: { line: 241, column: 152, offset: 12587 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 12436 },
        end: { line: 241, column: 152, offset: 12587 }
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
            start: { line: 243, column: 7, offset: 12595 },
            end: { line: 243, column: 20, offset: 12608 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 12589 },
        end: { line: 243, column: 20, offset: 12608 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is redirecting the client's request for the resource to a different resource. The URL of the redirected resource is available in the ",
          position: {
            start: { line: 245, column: 1, offset: 12610 },
            end: { line: 245, column: 145, offset: 12754 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 245, column: 145, offset: 12754 },
            end: { line: 245, column: 155, offset: 12764 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the HTTP ',
          position: {
            start: { line: 245, column: 155, offset: 12764 },
            end: { line: 245, column: 211, offset: 12820 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 245, column: 211, offset: 12820 },
            end: { line: 245, column: 216, offset: 12825 }
          }
        },
        {
          type: 'text',
          value: ' method to request the redirected resource.',
          position: {
            start: { line: 245, column: 216, offset: 12825 },
            end: { line: 245, column: 259, offset: 12868 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 12610 },
        end: { line: 245, column: 259, offset: 12868 }
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
            start: { line: 247, column: 7, offset: 12876 },
            end: { line: 247, column: 23, offset: 12892 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 12870 },
        end: { line: 247, column: 23, offset: 12892 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has not been modified since the last access, so the client can continue to use the same cached version of the resource.',
          position: {
            start: { line: 249, column: 1, offset: 12894 },
            end: { line: 249, column: 133, offset: 13026 }
          }
        }
      ],
      position: {
        start: { line: 249, column: 1, offset: 12894 },
        end: { line: 249, column: 133, offset: 13026 }
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
            start: { line: 251, column: 7, offset: 13034 },
            end: { line: 251, column: 29, offset: 13056 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 13028 },
        end: { line: 251, column: 29, offset: 13056 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 253, column: 1, offset: 13058 },
            end: { line: 253, column: 118, offset: 13175 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 253, column: 118, offset: 13175 },
            end: { line: 253, column: 128, offset: 13185 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 253, column: 128, offset: 13185 },
            end: { line: 253, column: 235, offset: 13292 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 13058 },
        end: { line: 253, column: 235, offset: 13292 }
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
            start: { line: 255, column: 7, offset: 13300 },
            end: { line: 255, column: 29, offset: 13322 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 13294 },
        end: { line: 255, column: 29, offset: 13322 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 257, column: 1, offset: 13324 },
            end: { line: 257, column: 118, offset: 13441 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 257, column: 118, offset: 13441 },
            end: { line: 257, column: 128, offset: 13451 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 257, column: 128, offset: 13451 },
            end: { line: 257, column: 235, offset: 13558 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 13324 },
        end: { line: 257, column: 235, offset: 13558 }
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
            start: { line: 259, column: 6, offset: 13565 },
            end: { line: 259, column: 41, offset: 13600 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 13560 },
        end: { line: 259, column: 41, offset: 13600 }
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
            start: { line: 261, column: 7, offset: 13608 },
            end: { line: 261, column: 22, offset: 13623 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 13602 },
        end: { line: 261, column: 22, offset: 13623 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot process the request due to client error, e.g. invalid syntax.',
          position: {
            start: { line: 263, column: 1, offset: 13625 },
            end: { line: 263, column: 80, offset: 13704 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 13625 },
        end: { line: 263, column: 80, offset: 13704 }
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
            start: { line: 265, column: 7, offset: 13712 },
            end: { line: 265, column: 23, offset: 13728 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 13706 },
        end: { line: 265, column: 23, offset: 13728 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials.',
          position: {
            start: { line: 267, column: 1, offset: 13730 },
            end: { line: 267, column: 52, offset: 13781 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 13730 },
        end: { line: 267, column: 52, offset: 13781 }
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
            start: { line: 269, column: 7, offset: 13789 },
            end: { line: 269, column: 27, offset: 13809 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 13783 },
        end: { line: 269, column: 27, offset: 13809 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested content is not available until the client makes a payment.',
          position: {
            start: { line: 271, column: 1, offset: 13811 },
            end: { line: 271, column: 73, offset: 13883 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 13811 },
        end: { line: 271, column: 73, offset: 13883 }
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
            start: { line: 273, column: 7, offset: 13891 },
            end: { line: 273, column: 20, offset: 13904 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 13885 },
        end: { line: 273, column: 20, offset: 13904 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is refusing the client access to the requested resource.',
          position: {
            start: { line: 275, column: 1, offset: 13906 },
            end: { line: 275, column: 68, offset: 13973 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 13906 },
        end: { line: 275, column: 68, offset: 13973 }
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
            start: { line: 277, column: 7, offset: 13981 },
            end: { line: 277, column: 20, offset: 13994 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 13975 },
        end: { line: 277, column: 20, offset: 13994 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot find the requested resource. Either the URL is not recognized, or the URL is recognized but the requested resource does not exist.',
          position: {
            start: { line: 279, column: 1, offset: 13996 },
            end: { line: 279, column: 149, offset: 14144 }
          }
        }
      ],
      position: {
        start: { line: 279, column: 1, offset: 13996 },
        end: { line: 279, column: 149, offset: 14144 }
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
            start: { line: 281, column: 7, offset: 14152 },
            end: { line: 281, column: 29, offset: 14174 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 14146 },
        end: { line: 281, column: 29, offset: 14174 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is known by the server but it is not supported for the requested resource.',
          position: {
            start: { line: 283, column: 1, offset: 14176 },
            end: { line: 283, column: 94, offset: 14269 }
          }
        }
      ],
      position: {
        start: { line: 283, column: 1, offset: 14176 },
        end: { line: 283, column: 94, offset: 14269 }
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
            start: { line: 285, column: 7, offset: 14277 },
            end: { line: 285, column: 25, offset: 14295 }
          }
        }
      ],
      position: {
        start: { line: 285, column: 1, offset: 14271 },
        end: { line: 285, column: 25, offset: 14295 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is unable to provide a response that matches the client's requested format, typically specified in the ",
          position: {
            start: { line: 287, column: 1, offset: 14297 },
            end: { line: 287, column: 115, offset: 14411 }
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
                start: { line: 287, column: 116, offset: 14412 },
                end: { line: 287, column: 122, offset: 14418 }
              }
            }
          ],
          position: {
            start: { line: 287, column: 115, offset: 14411 },
            end: { line: 287, column: 199, offset: 14495 }
          }
        },
        {
          type: 'text',
          value: ' header of the request.',
          position: {
            start: { line: 287, column: 199, offset: 14495 },
            end: { line: 287, column: 222, offset: 14518 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 14297 },
        end: { line: 287, column: 222, offset: 14518 }
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
            start: { line: 289, column: 7, offset: 14526 },
            end: { line: 289, column: 40, offset: 14559 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 14520 },
        end: { line: 289, column: 40, offset: 14559 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials for the ',
          position: {
            start: { line: 291, column: 1, offset: 14561 },
            end: { line: 291, column: 60, offset: 14620 }
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
                start: { line: 291, column: 61, offset: 14621 },
                end: { line: 291, column: 73, offset: 14633 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 60, offset: 14620 },
            end: { line: 291, column: 118, offset: 14678 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 291, column: 118, offset: 14678 },
            end: { line: 291, column: 119, offset: 14679 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 14561 },
        end: { line: 291, column: 120, offset: 14680 }
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
            start: { line: 293, column: 7, offset: 14688 },
            end: { line: 293, column: 26, offset: 14707 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 14682 },
        end: { line: 293, column: 26, offset: 14707 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server would like to shut down the unused connection.',
          position: {
            start: { line: 295, column: 1, offset: 14709 },
            end: { line: 295, column: 58, offset: 14766 }
          }
        }
      ],
      position: {
        start: { line: 295, column: 1, offset: 14709 },
        end: { line: 295, column: 58, offset: 14766 }
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
            start: { line: 297, column: 7, offset: 14774 },
            end: { line: 297, column: 19, offset: 14786 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 14768 },
        end: { line: 297, column: 19, offset: 14786 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request conflicts with the current state of the resource, e.g. when trying to create a resource that already exists.',
          position: {
            start: { line: 299, column: 1, offset: 14788 },
            end: { line: 299, column: 121, offset: 14908 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 14788 },
        end: { line: 299, column: 121, offset: 14908 }
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
            start: { line: 301, column: 7, offset: 14916 },
            end: { line: 301, column: 15, offset: 14924 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 14910 },
        end: { line: 301, column: 15, offset: 14924 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has been permanently removed from the server.',
          position: {
            start: { line: 303, column: 1, offset: 14926 },
            end: { line: 303, column: 59, offset: 14984 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 14926 },
        end: { line: 303, column: 59, offset: 14984 }
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
            start: { line: 305, column: 7, offset: 14992 },
            end: { line: 305, column: 26, offset: 15011 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 14986 },
        end: { line: 305, column: 26, offset: 15011 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 307, column: 1, offset: 15013 },
            end: { line: 307, column: 5, offset: 15017 }
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
                start: { line: 307, column: 6, offset: 15018 },
                end: { line: 307, column: 20, offset: 15032 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 5, offset: 15017 },
            end: { line: 307, column: 105, offset: 15117 }
          }
        },
        {
          type: 'text',
          value: ' request header is required but not present.',
          position: {
            start: { line: 307, column: 105, offset: 15117 },
            end: { line: 307, column: 149, offset: 15161 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 15013 },
        end: { line: 307, column: 149, offset: 15161 }
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
            start: { line: 309, column: 7, offset: 15169 },
            end: { line: 309, column: 30, offset: 15192 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 1, offset: 15163 },
        end: { line: 309, column: 30, offset: 15192 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request headers have indicated preconditions that the server does not meet.',
          position: {
            start: { line: 311, column: 1, offset: 15194 },
            end: { line: 311, column: 80, offset: 15273 }
          }
        }
      ],
      position: {
        start: { line: 311, column: 1, offset: 15194 },
        end: { line: 311, column: 80, offset: 15273 }
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
            start: { line: 313, column: 7, offset: 15281 },
            end: { line: 313, column: 28, offset: 15302 }
          }
        }
      ],
      position: {
        start: { line: 313, column: 1, offset: 15275 },
        end: { line: 313, column: 28, offset: 15302 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request body is larger than the limits defined by the server. The server might close the connection or respond with a ',
          position: {
            start: { line: 315, column: 1, offset: 15304 },
            end: { line: 315, column: 123, offset: 15426 }
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
                start: { line: 315, column: 124, offset: 15427 },
                end: { line: 315, column: 135, offset: 15438 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 123, offset: 15426 },
            end: { line: 315, column: 217, offset: 15520 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 315, column: 217, offset: 15520 },
            end: { line: 315, column: 225, offset: 15528 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 15304 },
        end: { line: 315, column: 225, offset: 15528 }
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
            start: { line: 317, column: 7, offset: 15536 },
            end: { line: 317, column: 23, offset: 15552 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 15530 },
        end: { line: 317, column: 23, offset: 15552 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource is too long.',
          position: {
            start: { line: 319, column: 1, offset: 15554 },
            end: { line: 319, column: 47, offset: 15600 }
          }
        }
      ],
      position: {
        start: { line: 319, column: 1, offset: 15554 },
        end: { line: 319, column: 47, offset: 15600 }
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
            start: { line: 321, column: 7, offset: 15608 },
            end: { line: 321, column: 33, offset: 15634 }
          }
        }
      ],
      position: {
        start: { line: 321, column: 1, offset: 15602 },
        end: { line: 321, column: 33, offset: 15634 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The media format of the requested resource is not supported by the server.',
          position: {
            start: { line: 323, column: 1, offset: 15636 },
            end: { line: 323, column: 75, offset: 15710 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 15636 },
        end: { line: 323, column: 75, offset: 15710 }
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
            start: { line: 325, column: 7, offset: 15718 },
            end: { line: 325, column: 32, offset: 15743 }
          }
        }
      ],
      position: {
        start: { line: 325, column: 1, offset: 15712 },
        end: { line: 325, column: 32, offset: 15743 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The ranges specified in the request's ",
          position: {
            start: { line: 327, column: 1, offset: 15745 },
            end: { line: 327, column: 39, offset: 15783 }
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
                start: { line: 327, column: 40, offset: 15784 },
                end: { line: 327, column: 45, offset: 15789 }
              }
            }
          ],
          position: {
            start: { line: 327, column: 39, offset: 15783 },
            end: { line: 327, column: 121, offset: 15865 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be fulfilled by the server.',
          position: {
            start: { line: 327, column: 121, offset: 15865 },
            end: { line: 327, column: 163, offset: 15907 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 15745 },
        end: { line: 327, column: 163, offset: 15907 }
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
            start: { line: 329, column: 7, offset: 15915 },
            end: { line: 329, column: 29, offset: 15937 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 15909 },
        end: { line: 329, column: 29, offset: 15937 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The expectation indicated by the request's ",
          position: {
            start: { line: 331, column: 1, offset: 15939 },
            end: { line: 331, column: 44, offset: 15982 }
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
                start: { line: 331, column: 45, offset: 15983 },
                end: { line: 331, column: 51, offset: 15989 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 44, offset: 15982 },
            end: { line: 331, column: 128, offset: 16066 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be met by the server.',
          position: {
            start: { line: 331, column: 128, offset: 16066 },
            end: { line: 331, column: 164, offset: 16102 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 15939 },
        end: { line: 331, column: 164, offset: 16102 }
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
            start: { line: 333, column: 7, offset: 16110 },
            end: { line: 333, column: 23, offset: 16126 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 16104 },
        end: { line: 333, column: 23, offset: 16126 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses the attempt to brew coffee with a teapot.',
          position: {
            start: { line: 335, column: 1, offset: 16128 },
            end: { line: 335, column: 61, offset: 16188 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 16128 },
        end: { line: 335, column: 61, offset: 16188 }
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
            start: { line: 337, column: 7, offset: 16196 },
            end: { line: 337, column: 30, offset: 16219 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 16190 },
        end: { line: 337, column: 30, offset: 16219 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The request was directed at a server that is not configured to produce a response for the request URL's scheme and authority.",
          position: {
            start: { line: 339, column: 1, offset: 16221 },
            end: { line: 339, column: 126, offset: 16346 }
          }
        }
      ],
      position: {
        start: { line: 339, column: 1, offset: 16221 },
        end: { line: 339, column: 126, offset: 16346 }
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
            start: { line: 341, column: 7, offset: 16354 },
            end: { line: 341, column: 32, offset: 16379 }
          }
        }
      ],
      position: {
        start: { line: 341, column: 1, offset: 16348 },
        end: { line: 341, column: 32, offset: 16379 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request was well-formed but was unable to be processed due to semantic errors.',
          position: {
            start: { line: 343, column: 1, offset: 16381 },
            end: { line: 343, column: 83, offset: 16463 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 16381 },
        end: { line: 343, column: 83, offset: 16463 }
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
            start: { line: 345, column: 7, offset: 16471 },
            end: { line: 345, column: 17, offset: 16481 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 16465 },
        end: { line: 345, column: 17, offset: 16481 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is locked.',
          position: {
            start: { line: 347, column: 1, offset: 16483 },
            end: { line: 347, column: 34, offset: 16516 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 16483 },
        end: { line: 347, column: 34, offset: 16516 }
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
            start: { line: 349, column: 7, offset: 16524 },
            end: { line: 349, column: 28, offset: 16545 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 16518 },
        end: { line: 349, column: 28, offset: 16545 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request failed due to the failure of a previous request.',
          position: {
            start: { line: 351, column: 1, offset: 16547 },
            end: { line: 351, column: 61, offset: 16607 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 16547 },
        end: { line: 351, column: 61, offset: 16607 }
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
            start: { line: 353, column: 7, offset: 16615 },
            end: { line: 353, column: 20, offset: 16628 }
          }
        }
      ],
      position: {
        start: { line: 353, column: 1, offset: 16609 },
        end: { line: 353, column: 20, offset: 16628 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is unwilling to risk processing a request that might be replayed.',
          position: {
            start: { line: 355, column: 1, offset: 16630 },
            end: { line: 355, column: 77, offset: 16706 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 16630 },
        end: { line: 355, column: 77, offset: 16706 }
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
            start: { line: 357, column: 7, offset: 16714 },
            end: { line: 357, column: 27, offset: 16734 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 16708 },
        end: { line: 357, column: 27, offset: 16734 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses to process the request under the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an ',
          position: {
            start: { line: 359, column: 1, offset: 16736 },
            end: { line: 359, column: 171, offset: 16906 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Upgrade',
          position: {
            start: { line: 359, column: 171, offset: 16906 },
            end: { line: 359, column: 180, offset: 16915 }
          }
        },
        {
          type: 'text',
          value: ' header in the response to indicate the required protocol(s).',
          position: {
            start: { line: 359, column: 180, offset: 16915 },
            end: { line: 359, column: 241, offset: 16976 }
          }
        }
      ],
      position: {
        start: { line: 359, column: 1, offset: 16736 },
        end: { line: 359, column: 241, offset: 16976 }
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
            start: { line: 361, column: 7, offset: 16984 },
            end: { line: 361, column: 32, offset: 17009 }
          }
        }
      ],
      position: {
        start: { line: 361, column: 1, offset: 16978 },
        end: { line: 361, column: 32, offset: 17009 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The origin server requires the request to be ',
          position: {
            start: { line: 363, column: 1, offset: 17011 },
            end: { line: 363, column: 46, offset: 17056 }
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
                start: { line: 363, column: 47, offset: 17057 },
                end: { line: 363, column: 58, offset: 17068 }
              }
            }
          ],
          position: {
            start: { line: 363, column: 46, offset: 17056 },
            end: { line: 363, column: 138, offset: 17148 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 363, column: 138, offset: 17148 },
            end: { line: 363, column: 139, offset: 17149 }
          }
        }
      ],
      position: {
        start: { line: 363, column: 1, offset: 17011 },
        end: { line: 363, column: 139, offset: 17149 }
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
            start: { line: 365, column: 7, offset: 17157 },
            end: { line: 365, column: 28, offset: 17178 }
          }
        }
      ],
      position: {
        start: { line: 365, column: 1, offset: 17151 },
        end: { line: 365, column: 28, offset: 17178 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client has sent too many requests in a given time period. See ',
          position: {
            start: { line: 367, column: 1, offset: 17180 },
            end: { line: 367, column: 67, offset: 17246 }
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
                start: { line: 367, column: 68, offset: 17247 },
                end: { line: 367, column: 81, offset: 17260 }
              }
            }
          ],
          position: {
            start: { line: 367, column: 67, offset: 17246 },
            end: { line: 367, column: 144, offset: 17323 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 367, column: 144, offset: 17323 },
            end: { line: 367, column: 145, offset: 17324 }
          }
        }
      ],
      position: {
        start: { line: 367, column: 1, offset: 17180 },
        end: { line: 367, column: 145, offset: 17324 }
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
            start: { line: 369, column: 7, offset: 17332 },
            end: { line: 369, column: 42, offset: 17367 }
          }
        }
      ],
      position: {
        start: { line: 369, column: 1, offset: 17326 },
        end: { line: 369, column: 42, offset: 17367 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request header fields are too large.',
          position: {
            start: { line: 371, column: 1, offset: 17369 },
            end: { line: 371, column: 41, offset: 17409 }
          }
        }
      ],
      position: {
        start: { line: 371, column: 1, offset: 17369 },
        end: { line: 371, column: 41, offset: 17409 }
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
            start: { line: 373, column: 7, offset: 17417 },
            end: { line: 373, column: 40, offset: 17450 }
          }
        }
      ],
      position: {
        start: { line: 373, column: 1, offset: 17411 },
        end: { line: 373, column: 40, offset: 17450 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is unavailable due to legal reasons.',
          position: {
            start: { line: 375, column: 1, offset: 17452 },
            end: { line: 375, column: 60, offset: 17511 }
          }
        }
      ],
      position: {
        start: { line: 375, column: 1, offset: 17452 },
        end: { line: 375, column: 60, offset: 17511 }
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
            start: { line: 377, column: 6, offset: 17518 },
            end: { line: 377, column: 41, offset: 17553 }
          }
        }
      ],
      position: {
        start: { line: 377, column: 1, offset: 17513 },
        end: { line: 377, column: 41, offset: 17553 }
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
            start: { line: 379, column: 7, offset: 17561 },
            end: { line: 379, column: 32, offset: 17586 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 17555 },
        end: { line: 379, column: 32, offset: 17586 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has encountered a situation it does not know how to handle.',
          position: {
            start: { line: 381, column: 1, offset: 17588 },
            end: { line: 381, column: 71, offset: 17658 }
          }
        }
      ],
      position: {
        start: { line: 381, column: 1, offset: 17588 },
        end: { line: 381, column: 71, offset: 17658 }
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
            start: { line: 383, column: 7, offset: 17666 },
            end: { line: 383, column: 26, offset: 17685 }
          }
        }
      ],
      position: {
        start: { line: 383, column: 1, offset: 17660 },
        end: { line: 383, column: 26, offset: 17685 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is not supported by the server and cannot be handled.',
          position: {
            start: { line: 385, column: 1, offset: 17687 },
            end: { line: 385, column: 73, offset: 17759 }
          }
        }
      ],
      position: {
        start: { line: 385, column: 1, offset: 17687 },
        end: { line: 385, column: 73, offset: 17759 }
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
            start: { line: 387, column: 7, offset: 17767 },
            end: { line: 387, column: 22, offset: 17782 }
          }
        }
      ],
      position: {
        start: { line: 387, column: 1, offset: 17761 },
        end: { line: 387, column: 22, offset: 17782 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The gateway server received an invalid response from an upstream server or origin server.',
          position: {
            start: { line: 389, column: 1, offset: 17784 },
            end: { line: 389, column: 90, offset: 17873 }
          }
        }
      ],
      position: {
        start: { line: 389, column: 1, offset: 17784 },
        end: { line: 389, column: 90, offset: 17873 }
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
            start: { line: 391, column: 7, offset: 17881 },
            end: { line: 391, column: 30, offset: 17904 }
          }
        }
      ],
      position: {
        start: { line: 391, column: 1, offset: 17875 },
        end: { line: 391, column: 30, offset: 17904 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is not ready to handle the request.',
          position: {
            start: { line: 393, column: 1, offset: 17906 },
            end: { line: 393, column: 47, offset: 17952 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 17906 },
        end: { line: 393, column: 47, offset: 17952 }
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
            start: { line: 395, column: 7, offset: 17960 },
            end: { line: 395, column: 26, offset: 17979 }
          }
        }
      ],
      position: {
        start: { line: 395, column: 1, offset: 17954 },
        end: { line: 395, column: 26, offset: 17979 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The gateway server's request to an upstream server or origin server timed out.",
          position: {
            start: { line: 397, column: 1, offset: 17981 },
            end: { line: 397, column: 79, offset: 18059 }
          }
        }
      ],
      position: {
        start: { line: 397, column: 1, offset: 17981 },
        end: { line: 397, column: 79, offset: 18059 }
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
            start: { line: 399, column: 7, offset: 18067 },
            end: { line: 399, column: 37, offset: 18097 }
          }
        }
      ],
      position: {
        start: { line: 399, column: 1, offset: 18061 },
        end: { line: 399, column: 37, offset: 18097 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP version used in the request is not supported by the server.',
          position: {
            start: { line: 401, column: 1, offset: 18099 },
            end: { line: 401, column: 69, offset: 18167 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 18099 },
        end: { line: 401, column: 69, offset: 18167 }
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
            start: { line: 403, column: 7, offset: 18175 },
            end: { line: 403, column: 34, offset: 18202 }
          }
        }
      ],
      position: {
        start: { line: 403, column: 1, offset: 18169 },
        end: { line: 403, column: 34, offset: 18202 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has an internal configuration error related to content negotiation.',
          position: {
            start: { line: 405, column: 1, offset: 18204 },
            end: { line: 405, column: 79, offset: 18282 }
          }
        }
      ],
      position: {
        start: { line: 405, column: 1, offset: 18204 },
        end: { line: 405, column: 79, offset: 18282 }
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
            start: { line: 407, column: 7, offset: 18290 },
            end: { line: 407, column: 31, offset: 18314 }
          }
        }
      ],
      position: {
        start: { line: 407, column: 1, offset: 18284 },
        end: { line: 407, column: 31, offset: 18314 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server does not have enough available storage to successfully process the request.',
          position: {
            start: { line: 409, column: 1, offset: 18316 },
            end: { line: 409, column: 87, offset: 18402 }
          }
        }
      ],
      position: {
        start: { line: 409, column: 1, offset: 18316 },
        end: { line: 409, column: 87, offset: 18402 }
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
            start: { line: 411, column: 7, offset: 18410 },
            end: { line: 411, column: 24, offset: 18427 }
          }
        }
      ],
      position: {
        start: { line: 411, column: 1, offset: 18404 },
        end: { line: 411, column: 24, offset: 18427 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server detected an infinite loop while processing the request.',
          position: {
            start: { line: 413, column: 1, offset: 18429 },
            end: { line: 413, column: 67, offset: 18495 }
          }
        }
      ],
      position: {
        start: { line: 413, column: 1, offset: 18429 },
        end: { line: 413, column: 67, offset: 18495 }
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
            start: { line: 415, column: 7, offset: 18503 },
            end: { line: 415, column: 23, offset: 18519 }
          }
        }
      ],
      position: {
        start: { line: 415, column: 1, offset: 18497 },
        end: { line: 415, column: 23, offset: 18519 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client declares an HTTP Extension (',
          position: {
            start: { line: 417, column: 1, offset: 18521 },
            end: { line: 417, column: 40, offset: 18560 }
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
                start: { line: 417, column: 41, offset: 18561 },
                end: { line: 417, column: 49, offset: 18569 }
              }
            }
          ],
          position: {
            start: { line: 417, column: 40, offset: 18560 },
            end: { line: 417, column: 97, offset: 18617 }
          }
        },
        {
          type: 'text',
          value: ') that should be used to process the request, but the extension is not supported by the server.',
          position: {
            start: { line: 417, column: 97, offset: 18617 },
            end: { line: 417, column: 192, offset: 18712 }
          }
        }
      ],
      position: {
        start: { line: 417, column: 1, offset: 18521 },
        end: { line: 417, column: 192, offset: 18712 }
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
            start: { line: 419, column: 7, offset: 18720 },
            end: { line: 419, column: 42, offset: 18755 }
          }
        }
      ],
      position: {
        start: { line: 419, column: 1, offset: 18714 },
        end: { line: 419, column: 42, offset: 18755 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client needs to authenticate to gain network access.',
          position: {
            start: { line: 421, column: 1, offset: 18757 },
            end: { line: 421, column: 57, offset: 18813 }
          }
        }
      ],
      position: {
        start: { line: 421, column: 1, offset: 18757 },
        end: { line: 421, column: 57, offset: 18813 }
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
            start: { line: 423, column: 5, offset: 18819 },
            end: { line: 423, column: 26, offset: 18840 }
          }
        }
      ],
      position: {
        start: { line: 423, column: 1, offset: 18815 },
        end: { line: 423, column: 26, offset: 18840 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP response headers are key-value pairs assigned to each response. HTTP response headers pass additional context and metadata about the response.',
          position: {
            start: { line: 425, column: 1, offset: 18842 },
            end: { line: 425, column: 148, offset: 18989 }
          }
        }
      ],
      position: {
        start: { line: 425, column: 1, offset: 18842 },
        end: { line: 425, column: 148, offset: 18989 }
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
            start: { line: 427, column: 5, offset: 18995 },
            end: { line: 427, column: 23, offset: 19013 }
          }
        }
      ],
      position: {
        start: { line: 427, column: 1, offset: 18991 },
        end: { line: 427, column: 23, offset: 19013 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response body is the part of the response that carries the bulk of the data sent back to the client. The content type of the response body should be specified in the response's ",
          position: {
            start: { line: 429, column: 1, offset: 19015 },
            end: { line: 429, column: 187, offset: 19201 }
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
                start: { line: 429, column: 188, offset: 19202 },
                end: { line: 429, column: 200, offset: 19214 }
              }
            }
          ],
          position: {
            start: { line: 429, column: 187, offset: 19201 },
            end: { line: 429, column: 283, offset: 19297 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 429, column: 283, offset: 19297 },
            end: { line: 429, column: 291, offset: 19305 }
          }
        }
      ],
      position: {
        start: { line: 429, column: 1, offset: 19015 },
        end: { line: 429, column: 291, offset: 19305 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP response bodies:',
          position: {
            start: { line: 431, column: 1, offset: 19307 },
            end: { line: 431, column: 39, offset: 19345 }
          }
        }
      ],
      position: {
        start: { line: 431, column: 1, offset: 19307 },
        end: { line: 431, column: 39, offset: 19345 }
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
                        start: { line: 432, column: 5, offset: 19350 },
                        end: { line: 432, column: 9, offset: 19354 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 432, column: 4, offset: 19349 },
                    end: { line: 432, column: 61, offset: 19406 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web pages. The method of the request is typically ',
                  position: {
                    start: { line: 432, column: 61, offset: 19406 },
                    end: { line: 432, column: 137, offset: 19482 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 432, column: 137, offset: 19482 },
                    end: { line: 432, column: 142, offset: 19487 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 432, column: 142, offset: 19487 },
                    end: { line: 432, column: 148, offset: 19493 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 432, column: 148, offset: 19493 },
                    end: { line: 432, column: 162, offset: 19507 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 432, column: 162, offset: 19507 },
                    end: { line: 432, column: 184, offset: 19529 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/html',
                  position: {
                    start: { line: 432, column: 184, offset: 19529 },
                    end: { line: 432, column: 195, offset: 19540 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 432, column: 195, offset: 19540 },
                    end: { line: 432, column: 196, offset: 19541 }
                  }
                }
              ],
              position: {
                start: { line: 432, column: 4, offset: 19349 },
                end: { line: 432, column: 196, offset: 19541 }
              }
            }
          ],
          position: {
            start: { line: 432, column: 2, offset: 19347 },
            end: { line: 432, column: 196, offset: 19541 }
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
                        start: { line: 433, column: 5, offset: 19546 },
                        end: { line: 433, column: 9, offset: 19550 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 433, column: 4, offset: 19545 },
                    end: { line: 433, column: 45, offset: 19586 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web applications. The method of the request is typically ',
                  position: {
                    start: { line: 433, column: 45, offset: 19586 },
                    end: { line: 433, column: 128, offset: 19669 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 433, column: 128, offset: 19669 },
                    end: { line: 433, column: 133, offset: 19674 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 433, column: 133, offset: 19674 },
                    end: { line: 433, column: 135, offset: 19676 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 433, column: 135, offset: 19676 },
                    end: { line: 433, column: 141, offset: 19682 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 433, column: 141, offset: 19682 },
                    end: { line: 433, column: 146, offset: 19687 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 433, column: 146, offset: 19687 },
                    end: { line: 433, column: 153, offset: 19694 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 433, column: 153, offset: 19694 },
                    end: { line: 433, column: 159, offset: 19700 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 433, column: 159, offset: 19700 },
                    end: { line: 433, column: 173, offset: 19714 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 433, column: 173, offset: 19714 },
                    end: { line: 433, column: 195, offset: 19736 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 433, column: 195, offset: 19736 },
                    end: { line: 433, column: 213, offset: 19754 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 433, column: 213, offset: 19754 },
                    end: { line: 433, column: 214, offset: 19755 }
                  }
                }
              ],
              position: {
                start: { line: 433, column: 4, offset: 19545 },
                end: { line: 433, column: 214, offset: 19755 }
              }
            }
          ],
          position: {
            start: { line: 433, column: 2, offset: 19543 },
            end: { line: 433, column: 214, offset: 19755 }
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
                        start: { line: 434, column: 5, offset: 19760 },
                        end: { line: 434, column: 8, offset: 19763 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 4, offset: 19759 },
                    end: { line: 434, column: 46, offset: 19801 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for ',
                  position: {
                    start: { line: 434, column: 46, offset: 19801 },
                    end: { line: 434, column: 72, offset: 19827 }
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
                        start: { line: 434, column: 73, offset: 19828 },
                        end: { line: 434, column: 81, offset: 19836 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 72, offset: 19827 },
                    end: { line: 434, column: 161, offset: 19916 }
                  }
                },
                {
                  type: 'text',
                  value: ' or web applications. The method of the request can be ',
                  position: {
                    start: { line: 434, column: 161, offset: 19916 },
                    end: { line: 434, column: 216, offset: 19971 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 434, column: 216, offset: 19971 },
                    end: { line: 434, column: 221, offset: 19976 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 221, offset: 19976 },
                    end: { line: 434, column: 223, offset: 19978 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 434, column: 223, offset: 19978 },
                    end: { line: 434, column: 228, offset: 19983 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 228, offset: 19983 },
                    end: { line: 434, column: 230, offset: 19985 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 434, column: 230, offset: 19985 },
                    end: { line: 434, column: 236, offset: 19991 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 434, column: 236, offset: 19991 },
                    end: { line: 434, column: 241, offset: 19996 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 434, column: 241, offset: 19996 },
                    end: { line: 434, column: 248, offset: 20003 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 434, column: 248, offset: 20003 },
                    end: { line: 434, column: 254, offset: 20009 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 434, column: 254, offset: 20009 },
                    end: { line: 434, column: 268, offset: 20023 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 434, column: 268, offset: 20023 },
                    end: { line: 434, column: 289, offset: 20044 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/xml',
                  position: {
                    start: { line: 434, column: 289, offset: 20044 },
                    end: { line: 434, column: 306, offset: 20061 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 434, column: 306, offset: 20061 },
                    end: { line: 434, column: 310, offset: 20065 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/xml',
                  position: {
                    start: { line: 434, column: 310, offset: 20065 },
                    end: { line: 434, column: 320, offset: 20075 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 434, column: 320, offset: 20075 },
                    end: { line: 434, column: 321, offset: 20076 }
                  }
                }
              ],
              position: {
                start: { line: 434, column: 4, offset: 19759 },
                end: { line: 434, column: 321, offset: 20076 }
              }
            }
          ],
          position: {
            start: { line: 434, column: 2, offset: 19757 },
            end: { line: 434, column: 321, offset: 20076 }
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
                    start: { line: 435, column: 4, offset: 20080 },
                    end: { line: 435, column: 91, offset: 20167 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 435, column: 91, offset: 20167 },
                    end: { line: 435, column: 96, offset: 20172 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 435, column: 96, offset: 20172 },
                    end: { line: 435, column: 102, offset: 20178 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 435, column: 102, offset: 20178 },
                    end: { line: 435, column: 116, offset: 20192 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 435, column: 116, offset: 20192 },
                    end: { line: 435, column: 137, offset: 20213 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 435, column: 137, offset: 20213 },
                    end: { line: 435, column: 149, offset: 20225 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 149, offset: 20225 },
                    end: { line: 435, column: 151, offset: 20227 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 435, column: 151, offset: 20227 },
                    end: { line: 435, column: 162, offset: 20238 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 162, offset: 20238 },
                    end: { line: 435, column: 164, offset: 20240 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 435, column: 164, offset: 20240 },
                    end: { line: 435, column: 176, offset: 20252 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 176, offset: 20252 },
                    end: { line: 435, column: 178, offset: 20254 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 435, column: 178, offset: 20254 },
                    end: { line: 435, column: 191, offset: 20267 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 435, column: 191, offset: 20267 },
                    end: { line: 435, column: 196, offset: 20272 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 435, column: 196, offset: 20272 },
                    end: { line: 435, column: 207, offset: 20283 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 435, column: 207, offset: 20283 },
                    end: { line: 435, column: 208, offset: 20284 }
                  }
                }
              ],
              position: {
                start: { line: 435, column: 4, offset: 20080 },
                end: { line: 435, column: 208, offset: 20284 }
              }
            }
          ],
          position: {
            start: { line: 435, column: 2, offset: 20078 },
            end: { line: 435, column: 208, offset: 20284 }
          }
        }
      ],
      position: {
        start: { line: 432, column: 2, offset: 19347 },
        end: { line: 435, column: 208, offset: 20284 }
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
            start: { line: 437, column: 4, offset: 20289 },
            end: { line: 437, column: 15, offset: 20300 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 20286 },
        end: { line: 437, column: 15, offset: 20300 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 439, column: 1, offset: 20302 },
            end: { line: 439, column: 226, offset: 20527 }
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
                start: { line: 439, column: 227, offset: 20528 },
                end: { line: 439, column: 233, offset: 20534 }
              }
            }
          ],
          position: {
            start: { line: 439, column: 226, offset: 20527 },
            end: { line: 439, column: 257, offset: 20558 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 439, column: 257, offset: 20558 },
            end: { line: 439, column: 371, offset: 20672 }
          }
        }
      ],
      position: {
        start: { line: 439, column: 1, offset: 20302 },
        end: { line: 439, column: 371, offset: 20672 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 441, column: 1, offset: 20674 },
            end: { line: 441, column: 23, offset: 20696 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 441, column: 23, offset: 20696 },
            end: { line: 441, column: 29, offset: 20702 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 441, column: 29, offset: 20702 },
            end: { line: 441, column: 62, offset: 20735 }
          }
        }
      ],
      position: {
        start: { line: 441, column: 1, offset: 20674 },
        end: { line: 441, column: 62, offset: 20735 }
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
        start: { line: 443, column: 1, offset: 20737 },
        end: { line: 456, column: 4, offset: 20973 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates a NodeJS HTTP server with ',
          position: {
            start: { line: 458, column: 1, offset: 20975 },
            end: { line: 458, column: 58, offset: 21032 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 458, column: 58, offset: 21032 },
            end: { line: 458, column: 77, offset: 21051 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 458, column: 77, offset: 21051 },
            end: { line: 458, column: 106, offset: 21080 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 458, column: 106, offset: 21080 },
            end: { line: 458, column: 136, offset: 21110 }
          }
        },
        {
          type: 'text',
          value: ' that only responds with status ',
          position: {
            start: { line: 458, column: 136, offset: 21110 },
            end: { line: 458, column: 168, offset: 21142 }
          }
        },
        {
          type: 'inlineCode',
          value: '200',
          position: {
            start: { line: 458, column: 168, offset: 21142 },
            end: { line: 458, column: 173, offset: 21147 }
          }
        },
        {
          type: 'text',
          value: ' and body ',
          position: {
            start: { line: 458, column: 173, offset: 21147 },
            end: { line: 458, column: 183, offset: 21157 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ok',
          position: {
            start: { line: 458, column: 183, offset: 21157 },
            end: { line: 458, column: 187, offset: 21161 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 458, column: 187, offset: 21161 },
            end: { line: 458, column: 230, offset: 21204 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 458, column: 230, offset: 21204 },
            end: { line: 458, column: 236, offset: 21210 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 458, column: 236, offset: 21210 },
            end: { line: 458, column: 254, offset: 21228 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 458, column: 254, offset: 21228 },
            end: { line: 458, column: 269, offset: 21243 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 458, column: 269, offset: 21243 },
            end: { line: 458, column: 270, offset: 21244 }
          }
        }
      ],
      position: {
        start: { line: 458, column: 1, offset: 20975 },
        end: { line: 458, column: 270, offset: 21244 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 460, column: 1, offset: 21246 },
            end: { line: 460, column: 45, offset: 21290 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 21246 },
        end: { line: 460, column: 45, offset: 21290 }
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
                        start: { line: 461, column: 5, offset: 21295 },
                        end: { line: 461, column: 9, offset: 21299 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 461, column: 4, offset: 21294 },
                    end: { line: 461, column: 29, offset: 21319 }
                  }
                }
              ],
              position: {
                start: { line: 461, column: 4, offset: 21294 },
                end: { line: 461, column: 29, offset: 21319 }
              }
            }
          ],
          position: {
            start: { line: 461, column: 2, offset: 21292 },
            end: { line: 461, column: 29, offset: 21319 }
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
                        start: { line: 462, column: 5, offset: 21324 },
                        end: { line: 462, column: 9, offset: 21328 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 462, column: 4, offset: 21323 },
                    end: { line: 462, column: 29, offset: 21348 }
                  }
                }
              ],
              position: {
                start: { line: 462, column: 4, offset: 21323 },
                end: { line: 462, column: 29, offset: 21348 }
              }
            }
          ],
          position: {
            start: { line: 462, column: 2, offset: 21321 },
            end: { line: 462, column: 29, offset: 21348 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 2, offset: 21292 },
        end: { line: 462, column: 29, offset: 21348 }
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
            start: { line: 464, column: 5, offset: 21354 },
            end: { line: 464, column: 21, offset: 21370 }
          }
        }
      ],
      position: {
        start: { line: 464, column: 1, offset: 21350 },
        end: { line: 464, column: 21, offset: 21370 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server port is a number that represents the network port on which the server is listening. A network port is a logical communication endpoint within a network. The value for the port can range from 0 and 65535. In the above example, we created an HTTP web server that listened on port ',
          position: {
            start: { line: 466, column: 1, offset: 21372 },
            end: { line: 466, column: 295, offset: 21666 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 466, column: 295, offset: 21666 },
            end: { line: 466, column: 301, offset: 21672 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 466, column: 301, offset: 21672 },
            end: { line: 466, column: 302, offset: 21673 }
          }
        }
      ],
      position: {
        start: { line: 466, column: 1, offset: 21372 },
        end: { line: 466, column: 302, offset: 21673 }
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
            start: { line: 468, column: 5, offset: 21679 },
            end: { line: 468, column: 21, offset: 21695 }
          }
        }
      ],
      position: {
        start: { line: 468, column: 1, offset: 21675 },
        end: { line: 468, column: 21, offset: 21695 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server host is the IP address of the ',
          position: {
            start: { line: 470, column: 1, offset: 21697 },
            end: { line: 470, column: 47, offset: 21743 }
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
                start: { line: 470, column: 48, offset: 21744 },
                end: { line: 470, column: 62, offset: 21758 }
              }
            }
          ],
          position: {
            start: { line: 470, column: 47, offset: 21743 },
            end: { line: 470, column: 134, offset: 21830 }
          }
        },
        {
          type: 'text',
          value: ' on which the server is running.',
          position: {
            start: { line: 470, column: 134, offset: 21830 },
            end: { line: 470, column: 166, offset: 21862 }
          }
        }
      ],
      position: {
        start: { line: 470, column: 1, offset: 21697 },
        end: { line: 470, column: 166, offset: 21862 }
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
            start: { line: 472, column: 4, offset: 21867 },
            end: { line: 472, column: 16, offset: 21879 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 21864 },
        end: { line: 472, column: 16, offset: 21879 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 474, column: 1, offset: 21881 },
            end: { line: 474, column: 109, offset: 21989 }
          }
        }
      ],
      position: {
        start: { line: 474, column: 1, offset: 21881 },
        end: { line: 474, column: 109, offset: 21989 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 476, column: 1, offset: 21991 },
            end: { line: 476, column: 61, offset: 22051 }
          }
        }
      ],
      position: {
        start: { line: 476, column: 1, offset: 21991 },
        end: { line: 476, column: 61, offset: 22051 }
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
                    start: { line: 477, column: 4, offset: 22055 },
                    end: { line: 477, column: 74, offset: 22125 }
                  }
                }
              ],
              position: {
                start: { line: 477, column: 4, offset: 22055 },
                end: { line: 477, column: 74, offset: 22125 }
              }
            }
          ],
          position: {
            start: { line: 477, column: 2, offset: 22053 },
            end: { line: 477, column: 74, offset: 22125 }
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
                    start: { line: 478, column: 4, offset: 22129 },
                    end: { line: 478, column: 52, offset: 22177 }
                  }
                }
              ],
              position: {
                start: { line: 478, column: 4, offset: 22129 },
                end: { line: 478, column: 52, offset: 22177 }
              }
            }
          ],
          position: {
            start: { line: 478, column: 2, offset: 22127 },
            end: { line: 478, column: 52, offset: 22177 }
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
                    start: { line: 479, column: 4, offset: 22181 },
                    end: { line: 479, column: 237, offset: 22414 }
                  }
                }
              ],
              position: {
                start: { line: 479, column: 4, offset: 22181 },
                end: { line: 479, column: 237, offset: 22414 }
              }
            }
          ],
          position: {
            start: { line: 479, column: 2, offset: 22179 },
            end: { line: 479, column: 237, offset: 22414 }
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
                    start: { line: 480, column: 4, offset: 22418 },
                    end: { line: 480, column: 128, offset: 22542 }
                  }
                }
              ],
              position: {
                start: { line: 480, column: 4, offset: 22418 },
                end: { line: 480, column: 128, offset: 22542 }
              }
            }
          ],
          position: {
            start: { line: 480, column: 2, offset: 22416 },
            end: { line: 480, column: 128, offset: 22542 }
          }
        }
      ],
      position: {
        start: { line: 477, column: 2, offset: 22053 },
        end: { line: 480, column: 128, offset: 22542 }
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
            start: { line: 482, column: 5, offset: 22548 },
            end: { line: 482, column: 28, offset: 22571 }
          }
        }
      ],
      position: {
        start: { line: 482, column: 1, offset: 22544 },
        end: { line: 482, column: 28, offset: 22571 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 484, column: 1, offset: 22573 },
            end: { line: 484, column: 33, offset: 22605 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 484, column: 33, offset: 22605 },
            end: { line: 484, column: 39, offset: 22611 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 484, column: 39, offset: 22611 },
            end: { line: 484, column: 161, offset: 22733 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 484, column: 161, offset: 22733 },
            end: { line: 484, column: 176, offset: 22748 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 484, column: 176, offset: 22748 },
            end: { line: 484, column: 184, offset: 22756 }
          }
        }
      ],
      position: {
        start: { line: 484, column: 1, offset: 22573 },
        end: { line: 484, column: 184, offset: 22756 }
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
        start: { line: 486, column: 1, offset: 22758 },
        end: { line: 499, column: 4, offset: 23083 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 501, column: 1, offset: 23085 },
            end: { line: 501, column: 12, offset: 23096 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 501, column: 12, offset: 23096 },
            end: { line: 501, column: 18, offset: 23102 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 501, column: 18, offset: 23102 },
            end: { line: 501, column: 88, offset: 23172 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 501, column: 88, offset: 23172 },
            end: { line: 501, column: 104, offset: 23188 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 501, column: 104, offset: 23188 },
            end: { line: 501, column: 113, offset: 23197 }
          }
        }
      ],
      position: {
        start: { line: 501, column: 1, offset: 23085 },
        end: { line: 501, column: 113, offset: 23197 }
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
        start: { line: 503, column: 1, offset: 23199 },
        end: { line: 509, column: 4, offset: 23396 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 511, column: 1, offset: 23398 },
            end: { line: 511, column: 35, offset: 23432 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 511, column: 35, offset: 23432 },
            end: { line: 511, column: 50, offset: 23447 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 511, column: 50, offset: 23447 },
            end: { line: 511, column: 55, offset: 23452 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 511, column: 55, offset: 23452 },
            end: { line: 511, column: 71, offset: 23468 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 511, column: 71, offset: 23468 },
            end: { line: 511, column: 112, offset: 23509 }
          }
        }
      ],
      position: {
        start: { line: 511, column: 1, offset: 23398 },
        end: { line: 511, column: 112, offset: 23509 }
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
        start: { line: 513, column: 1, offset: 23511 },
        end: { line: 528, column: 4, offset: 23942 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 530, column: 1, offset: 23944 },
            end: { line: 530, column: 81, offset: 24024 }
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
                start: { line: 530, column: 82, offset: 24025 },
                end: { line: 530, column: 93, offset: 24036 }
              }
            }
          ],
          position: {
            start: { line: 530, column: 81, offset: 24024 },
            end: { line: 530, column: 108, offset: 24051 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 530, column: 108, offset: 24051 },
            end: { line: 530, column: 117, offset: 24060 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 23944 },
        end: { line: 530, column: 117, offset: 24060 }
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
        start: { line: 532, column: 1, offset: 24062 },
        end: { line: 566, column: 4, offset: 24713 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server ',
          position: {
            start: { line: 568, column: 1, offset: 24715 },
            end: { line: 568, column: 17, offset: 24731 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server',
          position: {
            start: { line: 568, column: 17, offset: 24731 },
            end: { line: 568, column: 25, offset: 24739 }
          }
        },
        {
          type: 'text',
          value: ' created by the NodeJS ',
          position: {
            start: { line: 568, column: 25, offset: 24739 },
            end: { line: 568, column: 48, offset: 24762 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 568, column: 48, offset: 24762 },
            end: { line: 568, column: 54, offset: 24768 }
          }
        },
        {
          type: 'text',
          value: " module's ",
          position: {
            start: { line: 568, column: 54, offset: 24768 },
            end: { line: 568, column: 64, offset: 24778 }
          }
        },
        {
          type: 'inlineCode',
          value: 'createServer',
          position: {
            start: { line: 568, column: 64, offset: 24778 },
            end: { line: 568, column: 78, offset: 24792 }
          }
        },
        {
          type: 'text',
          value: ' accepts the HTTP handler ',
          position: {
            start: { line: 568, column: 78, offset: 24792 },
            end: { line: 568, column: 104, offset: 24818 }
          }
        },
        {
          type: 'inlineCode',
          value: 'handler',
          position: {
            start: { line: 568, column: 104, offset: 24818 },
            end: { line: 568, column: 113, offset: 24827 }
          }
        },
        {
          type: 'text',
          value: ' as a single argument. To start the server we only need to call ',
          position: {
            start: { line: 568, column: 113, offset: 24827 },
            end: { line: 568, column: 177, offset: 24891 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 568, column: 177, offset: 24891 },
            end: { line: 568, column: 192, offset: 24906 }
          }
        },
        {
          type: 'text',
          value: ', specifying port ',
          position: {
            start: { line: 568, column: 192, offset: 24906 },
            end: { line: 568, column: 210, offset: 24924 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 568, column: 210, offset: 24924 },
            end: { line: 568, column: 216, offset: 24930 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 568, column: 216, offset: 24930 },
            end: { line: 568, column: 217, offset: 24931 }
          }
        }
      ],
      position: {
        start: { line: 568, column: 1, offset: 24715 },
        end: { line: 568, column: 217, offset: 24931 }
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
            start: { line: 570, column: 5, offset: 24937 },
            end: { line: 570, column: 59, offset: 24991 }
          }
        }
      ],
      position: {
        start: { line: 570, column: 1, offset: 24933 },
        end: { line: 570, column: 59, offset: 24991 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In [A]synchronous Functional Programming, HTTP handlers are simple, reusable, and modular. Consider the following web server implementation with a complex HTTP handler:',
          position: {
            start: { line: 572, column: 1, offset: 24993 },
            end: { line: 572, column: 169, offset: 25161 }
          }
        }
      ],
      position: {
        start: { line: 572, column: 1, offset: 24993 },
        end: { line: 572, column: 169, offset: 25161 }
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
        start: { line: 574, column: 1, offset: 25163 },
        end: { line: 734, column: 4, offset: 29509 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above handler ',
          position: {
            start: { line: 736, column: 1, offset: 29511 },
            end: { line: 736, column: 19, offset: 29529 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 736, column: 19, offset: 29529 },
            end: { line: 736, column: 35, offset: 29545 }
          }
        },
        {
          type: 'text',
          value: ' has many responsibilities, including handling health checks, handling options requests, retrieving user resources, updating or creating user resources, and handling application errors.',
          position: {
            start: { line: 736, column: 35, offset: 29545 },
            end: { line: 736, column: 220, offset: 29730 }
          }
        }
      ],
      position: {
        start: { line: 736, column: 1, offset: 29511 },
        end: { line: 736, column: 220, offset: 29730 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, we can break down the above complex HTTP handler into simple, modular, and reusable handlers, then use the library ',
          position: {
            start: { line: 738, column: 1, offset: 29732 },
            end: { line: 738, column: 160, offset: 29891 }
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
                start: { line: 738, column: 161, offset: 29892 },
                end: { line: 738, column: 167, offset: 29898 }
              }
            }
          ],
          position: {
            start: { line: 738, column: 160, offset: 29891 },
            end: { line: 738, column: 190, offset: 29921 }
          }
        },
        {
          type: 'text',
          value: ' to combine those handlers in a meaningful way.',
          position: {
            start: { line: 738, column: 190, offset: 29921 },
            end: { line: 738, column: 237, offset: 29968 }
          }
        }
      ],
      position: {
        start: { line: 738, column: 1, offset: 29732 },
        end: { line: 738, column: 237, offset: 29968 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "First, let's break down the complex handler.",
          position: {
            start: { line: 740, column: 1, offset: 29970 },
            end: { line: 740, column: 45, offset: 30014 }
          }
        }
      ],
      position: {
        start: { line: 740, column: 1, offset: 29970 },
        end: { line: 740, column: 45, offset: 30014 }
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
        start: { line: 742, column: 1, offset: 30016 },
        end: { line: 890, column: 4, offset: 33672 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "We've broken down the complex handler ",
          position: {
            start: { line: 892, column: 1, offset: 33674 },
            end: { line: 892, column: 39, offset: 33712 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 892, column: 39, offset: 33712 },
            end: { line: 892, column: 55, offset: 33728 }
          }
        },
        {
          type: 'text',
          value: ' into smaller, simpler handlers ',
          position: {
            start: { line: 892, column: 55, offset: 33728 },
            end: { line: 892, column: 87, offset: 33760 }
          }
        },
        {
          type: 'inlineCode',
          value: 'healthCheckHandler',
          position: {
            start: { line: 892, column: 87, offset: 33760 },
            end: { line: 892, column: 107, offset: 33780 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 107, offset: 33780 },
            end: { line: 892, column: 109, offset: 33782 }
          }
        },
        {
          type: 'inlineCode',
          value: 'optionsHandler',
          position: {
            start: { line: 892, column: 109, offset: 33782 },
            end: { line: 892, column: 125, offset: 33798 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 125, offset: 33798 },
            end: { line: 892, column: 127, offset: 33800 }
          }
        },
        {
          type: 'inlineCode',
          value: 'getUserHandler',
          position: {
            start: { line: 892, column: 127, offset: 33800 },
            end: { line: 892, column: 143, offset: 33816 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 143, offset: 33816 },
            end: { line: 892, column: 145, offset: 33818 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notFoundHandler',
          position: {
            start: { line: 892, column: 145, offset: 33818 },
            end: { line: 892, column: 162, offset: 33835 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 892, column: 162, offset: 33835 },
            end: { line: 892, column: 168, offset: 33841 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 892, column: 168, offset: 33841 },
            end: { line: 892, column: 182, offset: 33855 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 892, column: 182, offset: 33855 },
            end: { line: 892, column: 183, offset: 33856 }
          }
        }
      ],
      position: {
        start: { line: 892, column: 1, offset: 33674 },
        end: { line: 892, column: 183, offset: 33856 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Now let's combine the smaller handlers using Rubico's ",
          position: {
            start: { line: 894, column: 1, offset: 33858 },
            end: { line: 894, column: 55, offset: 33912 }
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
                start: { line: 894, column: 56, offset: 33913 },
                end: { line: 894, column: 64, offset: 33921 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 55, offset: 33912 },
            end: { line: 894, column: 81, offset: 33938 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 894, column: 81, offset: 33938 },
            end: { line: 894, column: 86, offset: 33943 }
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
                start: { line: 894, column: 87, offset: 33944 },
                end: { line: 894, column: 97, offset: 33954 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 86, offset: 33943 },
            end: { line: 894, column: 116, offset: 33973 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 894, column: 116, offset: 33973 },
            end: { line: 894, column: 117, offset: 33974 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 33858 },
        end: { line: 894, column: 117, offset: 33974 }
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
        start: { line: 896, column: 1, offset: 33976 },
        end: { line: 918, column: 4, offset: 34503 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'combinedHandler',
          position: {
            start: { line: 920, column: 1, offset: 34505 },
            end: { line: 920, column: 18, offset: 34522 }
          }
        },
        {
          type: 'text',
          value: ' is functionally equivalent to ',
          position: {
            start: { line: 920, column: 18, offset: 34522 },
            end: { line: 920, column: 49, offset: 34553 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 920, column: 49, offset: 34553 },
            end: { line: 920, column: 65, offset: 34569 }
          }
        },
        {
          type: 'text',
          value: ', but is able to be expressed using a combination of smaller, simpler HTTP handlers. The benefits are as follows: being able to structure your application as small, simple components lends itself well to development, testing, and maintenance.',
          position: {
            start: { line: 920, column: 65, offset: 34569 },
            end: { line: 920, column: 307, offset: 34811 }
          }
        }
      ],
      position: {
        start: { line: 920, column: 1, offset: 34505 },
        end: { line: 920, column: 307, offset: 34811 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Development is quick and easy: where you once had to digest and add onto the entire complex component, now you only need to write a simple, greenfield component.',
          position: {
            start: { line: 922, column: 1, offset: 34813 },
            end: { line: 922, column: 162, offset: 34974 }
          }
        }
      ],
      position: {
        start: { line: 922, column: 1, offset: 34813 },
        end: { line: 922, column: 162, offset: 34974 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Testing is simplified: where you once had to write a complex integration test with many controls and conditions for the complex component, now you only need to write simple integration tests for the simple components.',
          position: {
            start: { line: 924, column: 1, offset: 34976 },
            end: { line: 924, column: 218, offset: 35193 }
          }
        }
      ],
      position: {
        start: { line: 924, column: 1, offset: 34976 },
        end: { line: 924, column: 218, offset: 35193 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The maintenance overhead is reduced: where you once had to concern yourself with testing changes over large areas of code with complex components, now you can reduce the burden to smaller areas of code with simple components.',
          position: {
            start: { line: 926, column: 1, offset: 35195 },
            end: { line: 926, column: 226, offset: 35420 }
          }
        }
      ],
      position: {
        start: { line: 926, column: 1, offset: 35195 },
        end: { line: 926, column: 226, offset: 35420 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Putting everything together:',
          position: {
            start: { line: 928, column: 1, offset: 35422 },
            end: { line: 928, column: 29, offset: 35450 }
          }
        }
      ],
      position: {
        start: { line: 928, column: 1, offset: 35422 },
        end: { line: 928, column: 29, offset: 35450 }
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
        start: { line: 930, column: 1, offset: 35452 },
        end: { line: 1107, column: 4, offset: 39685 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can find a working example of the above HTTP server code at ',
          position: {
            start: { line: 1109, column: 1, offset: 39687 },
            end: { line: 1109, column: 65, offset: 39751 }
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
                start: { line: 1109, column: 66, offset: 39752 },
                end: { line: 1109, column: 84, offset: 39770 }
              }
            }
          ],
          position: {
            start: { line: 1109, column: 65, offset: 39751 },
            end: { line: 1109, column: 166, offset: 39852 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1109, column: 166, offset: 39852 },
            end: { line: 1109, column: 167, offset: 39853 }
          }
        }
      ],
      position: {
        start: { line: 1109, column: 1, offset: 39687 },
        end: { line: 1109, column: 167, offset: 39853 }
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
            start: { line: 1111, column: 5, offset: 39859 },
            end: { line: 1111, column: 15, offset: 39869 }
          }
        }
      ],
      position: {
        start: { line: 1111, column: 1, offset: 39855 },
        end: { line: 1111, column: 15, offset: 39869 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Handling HTTP in [A]synchronous Functional Programming.',
          position: {
            start: { line: 1113, column: 1, offset: 39871 },
            end: { line: 1113, column: 71, offset: 39941 }
          }
        }
      ],
      position: {
        start: { line: 1113, column: 1, offset: 39871 },
        end: { line: 1113, column: 71, offset: 39941 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about Rubico and would like to get started, please visit Rubico's home page: ",
          position: {
            start: { line: 1115, column: 1, offset: 39943 },
            end: { line: 1115, column: 97, offset: 40039 }
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
                start: { line: 1115, column: 98, offset: 40040 },
                end: { line: 1115, column: 109, offset: 40051 }
              }
            }
          ],
          position: {
            start: { line: 1115, column: 97, offset: 40039 },
            end: { line: 1115, column: 113, offset: 40055 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1115, column: 113, offset: 40055 },
            end: { line: 1115, column: 114, offset: 40056 }
          }
        }
      ],
      position: {
        start: { line: 1115, column: 1, offset: 39943 },
        end: { line: 1115, column: 114, offset: 40056 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1116, column: 1, offset: 40057 }
  }
}