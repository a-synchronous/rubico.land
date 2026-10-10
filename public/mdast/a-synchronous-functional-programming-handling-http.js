export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Handling HTTP\n' +
        'author: Richard Tong, King of Technology at CLOUŢ\n' +
        'date: 2025-06-21\n' +
        'updated: 2026-10-09\n' +
        'path: /blog/a-synchronous-functional-programming-handling-http\n' +
        'description: Handling HTTP in [A]synchronous Functional Programming.\n' +
        'image: /assets/HTTP_logo.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 316 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Handling HTTP in [A]synchronous Functional Programming. In this article we will discuss how to handle HTTP in the context of the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 318 },
            end: { line: 11, column: 202, offset: 519 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 318 },
        end: { line: 11, column: 202, offset: 519 }
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
            start: { line: 13, column: 4, offset: 524 },
            end: { line: 13, column: 8, offset: 528 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 521 },
        end: { line: 13, column: 8, offset: 528 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP (Hypertext Transfer Protocol) is a ',
          position: {
            start: { line: 15, column: 1, offset: 530 },
            end: { line: 15, column: 41, offset: 570 }
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
                start: { line: 15, column: 42, offset: 571 },
                end: { line: 15, column: 50, offset: 579 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 41, offset: 570 },
            end: { line: 15, column: 122, offset: 651 }
          }
        },
        {
          type: 'text',
          value: ' by which data is transferred over the internet. The internet is just a bunch of computers (including PCs, laptops, and smartphones), and those computers communicate with each other using HTTP. When you visit a website, chances are it was served to you using HTTP. When you use a mobile app, chances are it used HTTP to serve you content.',
          position: {
            start: { line: 15, column: 122, offset: 651 },
            end: { line: 15, column: 460, offset: 989 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 530 },
        end: { line: 15, column: 460, offset: 989 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP adheres to the ',
          position: {
            start: { line: 17, column: 1, offset: 991 },
            end: { line: 17, column: 21, offset: 1011 }
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
                start: { line: 17, column: 22, offset: 1012 },
                end: { line: 17, column: 41, offset: 1031 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 21, offset: 1011 },
            end: { line: 17, column: 107, offset: 1097 }
          }
        },
        {
          type: 'text',
          value: ' where a client sends a request to a server and the server sends a response back to the client.',
          position: {
            start: { line: 17, column: 107, offset: 1097 },
            end: { line: 17, column: 202, offset: 1192 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 991 },
        end: { line: 17, column: 202, offset: 1192 }
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
            start: { line: 19, column: 1, offset: 1194 },
            end: { line: 19, column: 48, offset: 1241 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1194 },
        end: { line: 19, column: 48, offset: 1241 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In order for clients to find the right servers to request, they need to use a URL.',
          position: {
            start: { line: 21, column: 1, offset: 1243 },
            end: { line: 21, column: 83, offset: 1325 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1243 },
        end: { line: 21, column: 83, offset: 1325 }
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
            start: { line: 23, column: 4, offset: 1330 },
            end: { line: 23, column: 7, offset: 1333 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1327 },
        end: { line: 23, column: 7, offset: 1333 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A URL (Uniform Resource Locator) is a string that uniquely identifies the web address of a resource on the internet. A resource is information or content that can be identified and accessed via a URL. A resources can be a file, an image, a document, or a record in a database.',
          position: {
            start: { line: 25, column: 1, offset: 1335 },
            end: { line: 25, column: 277, offset: 1611 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 1335 },
        end: { line: 25, column: 277, offset: 1611 }
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
            start: { line: 27, column: 1, offset: 1613 },
            end: { line: 27, column: 64, offset: 1676 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1613 },
        end: { line: 27, column: 64, offset: 1676 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The basic structure of a URL includes the following parts:',
          position: {
            start: { line: 29, column: 1, offset: 1678 },
            end: { line: 29, column: 59, offset: 1736 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 1678 },
        end: { line: 29, column: 59, offset: 1736 }
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
                        start: { line: 30, column: 5, offset: 1741 },
                        end: { line: 30, column: 11, offset: 1747 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 1740 },
                    end: { line: 30, column: 25, offset: 1761 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 4, offset: 1740 },
                end: { line: 30, column: 25, offset: 1761 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 1738 },
            end: { line: 30, column: 25, offset: 1761 }
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
                        start: { line: 31, column: 5, offset: 1766 },
                        end: { line: 31, column: 16, offset: 1777 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 1765 },
                    end: { line: 31, column: 35, offset: 1796 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1765 },
                end: { line: 31, column: 35, offset: 1796 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 1763 },
            end: { line: 31, column: 35, offset: 1796 }
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
                        start: { line: 32, column: 5, offset: 1801 },
                        end: { line: 32, column: 9, offset: 1805 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 1800 },
                    end: { line: 32, column: 21, offset: 1817 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1800 },
                end: { line: 32, column: 21, offset: 1817 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 1798 },
            end: { line: 32, column: 21, offset: 1817 }
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
                        start: { line: 33, column: 5, offset: 1822 },
                        end: { line: 33, column: 14, offset: 1831 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 1821 },
                    end: { line: 33, column: 31, offset: 1848 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1821 },
                end: { line: 33, column: 31, offset: 1848 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 1819 },
            end: { line: 33, column: 31, offset: 1848 }
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
                        start: { line: 34, column: 5, offset: 1853 },
                        end: { line: 34, column: 9, offset: 1857 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 34, column: 4, offset: 1852 },
                    end: { line: 34, column: 21, offset: 1869 }
                  }
                }
              ],
              position: {
                start: { line: 34, column: 4, offset: 1852 },
                end: { line: 34, column: 21, offset: 1869 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 2, offset: 1850 },
            end: { line: 34, column: 21, offset: 1869 }
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
                        start: { line: 35, column: 5, offset: 1874 },
                        end: { line: 35, column: 21, offset: 1890 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 35, column: 4, offset: 1873 },
                    end: { line: 35, column: 45, offset: 1914 }
                  }
                }
              ],
              position: {
                start: { line: 35, column: 4, offset: 1873 },
                end: { line: 35, column: 45, offset: 1914 }
              }
            }
          ],
          position: {
            start: { line: 35, column: 2, offset: 1871 },
            end: { line: 35, column: 45, offset: 1914 }
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
                        start: { line: 36, column: 5, offset: 1919 },
                        end: { line: 36, column: 11, offset: 1925 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 36, column: 4, offset: 1918 },
                    end: { line: 36, column: 25, offset: 1939 }
                  }
                }
              ],
              position: {
                start: { line: 36, column: 4, offset: 1918 },
                end: { line: 36, column: 25, offset: 1939 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 2, offset: 1916 },
            end: { line: 36, column: 25, offset: 1939 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 2, offset: 1738 },
        end: { line: 36, column: 25, offset: 1939 }
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
            start: { line: 38, column: 5, offset: 1945 },
            end: { line: 38, column: 15, offset: 1955 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1941 },
        end: { line: 38, column: 15, offset: 1955 }
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
            start: { line: 40, column: 1, offset: 1957 },
            end: { line: 40, column: 78, offset: 2034 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1957 },
        end: { line: 40, column: 78, offset: 2034 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The scheme of a URL specifies the protocol that the client will use to send a request to the server. For HTTP, the scheme could be ',
          position: {
            start: { line: 42, column: 1, offset: 2036 },
            end: { line: 42, column: 132, offset: 2167 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 42, column: 132, offset: 2167 },
            end: { line: 42, column: 138, offset: 2173 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 42, column: 138, offset: 2173 },
            end: { line: 42, column: 142, offset: 2177 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https',
          position: {
            start: { line: 42, column: 142, offset: 2177 },
            end: { line: 42, column: 149, offset: 2184 }
          }
        },
        {
          type: 'text',
          value: '. Other schemes include ',
          position: {
            start: { line: 42, column: 149, offset: 2184 },
            end: { line: 42, column: 173, offset: 2208 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ws',
          position: {
            start: { line: 42, column: 173, offset: 2208 },
            end: { line: 42, column: 177, offset: 2212 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 42, column: 177, offset: 2212 },
            end: { line: 42, column: 182, offset: 2217 }
          }
        },
        {
          type: 'inlineCode',
          value: 'wss',
          position: {
            start: { line: 42, column: 182, offset: 2217 },
            end: { line: 42, column: 187, offset: 2222 }
          }
        },
        {
          type: 'text',
          value: ' for the ',
          position: {
            start: { line: 42, column: 187, offset: 2222 },
            end: { line: 42, column: 196, offset: 2231 }
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
                start: { line: 42, column: 197, offset: 2232 },
                end: { line: 42, column: 206, offset: 2241 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 196, offset: 2231 },
            end: { line: 42, column: 228, offset: 2263 }
          }
        },
        {
          type: 'text',
          value: ' protocol, ',
          position: {
            start: { line: 42, column: 228, offset: 2263 },
            end: { line: 42, column: 239, offset: 2274 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mailto',
          position: {
            start: { line: 42, column: 239, offset: 2274 },
            end: { line: 42, column: 247, offset: 2282 }
          }
        },
        {
          type: 'text',
          value: ' for the "mailto:" protocol, and ',
          position: {
            start: { line: 42, column: 247, offset: 2282 },
            end: { line: 42, column: 280, offset: 2315 }
          }
        },
        {
          type: 'inlineCode',
          value: 'file',
          position: {
            start: { line: 42, column: 280, offset: 2315 },
            end: { line: 42, column: 286, offset: 2321 }
          }
        },
        {
          type: 'text',
          value: ' for the "file:" protocol.',
          position: {
            start: { line: 42, column: 286, offset: 2321 },
            end: { line: 42, column: 312, offset: 2347 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 2036 },
        end: { line: 42, column: 312, offset: 2347 }
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
            start: { line: 44, column: 5, offset: 2353 },
            end: { line: 44, column: 20, offset: 2368 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 2349 },
        end: { line: 44, column: 20, offset: 2368 }
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
            start: { line: 46, column: 1, offset: 2370 },
            end: { line: 46, column: 88, offset: 2457 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 2370 },
        end: { line: 46, column: 88, offset: 2457 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The domain name of a URL is a unique name that translates to the address of a computer where the resource of the URL is located. Domain names are translated via the ',
          position: {
            start: { line: 48, column: 1, offset: 2459 },
            end: { line: 48, column: 166, offset: 2624 }
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
                start: { line: 48, column: 167, offset: 2625 },
                end: { line: 48, column: 191, offset: 2649 }
              }
            }
          ],
          position: {
            start: { line: 48, column: 166, offset: 2624 },
            end: { line: 48, column: 246, offset: 2704 }
          }
        },
        {
          type: 'text',
          value: ' to computer addresses running web servers to which HTTP clients can send requests.',
          position: {
            start: { line: 48, column: 246, offset: 2704 },
            end: { line: 48, column: 329, offset: 2787 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 2459 },
        end: { line: 48, column: 329, offset: 2787 }
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
            start: { line: 50, column: 5, offset: 2793 },
            end: { line: 50, column: 13, offset: 2801 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 2789 },
        end: { line: 50, column: 13, offset: 2801 }
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
            start: { line: 52, column: 1, offset: 2803 },
            end: { line: 52, column: 74, offset: 2876 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2803 },
        end: { line: 52, column: 74, offset: 2876 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The port of a URL is a number that identifies a specific process or network service running on the computer where the resource of the URL is located. When a computer starts up a process like a web server, it can assign it a numerical port between 0 and 65535. The web server would then listen on this assigned port for HTTP requests.',
          position: {
            start: { line: 54, column: 1, offset: 2878 },
            end: { line: 54, column: 334, offset: 3211 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 2878 },
        end: { line: 54, column: 334, offset: 3211 }
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
            start: { line: 56, column: 5, offset: 3217 },
            end: { line: 56, column: 18, offset: 3230 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 3213 },
        end: { line: 56, column: 18, offset: 3230 }
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
            start: { line: 58, column: 1, offset: 3232 },
            end: { line: 58, column: 84, offset: 3315 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 3232 },
        end: { line: 58, column: 84, offset: 3315 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The authority of a URL consists of the domain name and port of the URL separated by a colon.',
          position: {
            start: { line: 60, column: 1, offset: 3317 },
            end: { line: 60, column: 93, offset: 3409 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3317 },
        end: { line: 60, column: 93, offset: 3409 }
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
            start: { line: 62, column: 5, offset: 3415 },
            end: { line: 62, column: 13, offset: 3423 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3411 },
        end: { line: 62, column: 13, offset: 3423 }
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
            start: { line: 64, column: 1, offset: 3425 },
            end: { line: 64, column: 74, offset: 3498 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 3425 },
        end: { line: 64, column: 74, offset: 3498 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The path of a URL is a string that identifies the physical or abstract location of the resource within the URL's domain.",
          position: {
            start: { line: 66, column: 1, offset: 3500 },
            end: { line: 66, column: 121, offset: 3620 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3500 },
        end: { line: 66, column: 121, offset: 3620 }
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
            start: { line: 68, column: 5, offset: 3626 },
            end: { line: 68, column: 25, offset: 3646 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3622 },
        end: { line: 68, column: 25, offset: 3646 }
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
            start: { line: 70, column: 1, offset: 3648 },
            end: { line: 70, column: 98, offset: 3745 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 3648 },
        end: { line: 70, column: 98, offset: 3745 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The query parameters of a URL are a list of key-value pairs separated by the ',
          position: {
            start: { line: 72, column: 1, offset: 3747 },
            end: { line: 72, column: 78, offset: 3824 }
          }
        },
        {
          type: 'inlineCode',
          value: '&',
          position: {
            start: { line: 72, column: 78, offset: 3824 },
            end: { line: 72, column: 81, offset: 3827 }
          }
        },
        {
          type: 'text',
          value: ' symbol. The query parameters can further identify the resource of a URL.',
          position: {
            start: { line: 72, column: 81, offset: 3827 },
            end: { line: 72, column: 154, offset: 3900 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 3747 },
        end: { line: 72, column: 154, offset: 3900 }
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
            start: { line: 74, column: 5, offset: 3906 },
            end: { line: 74, column: 15, offset: 3916 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 3902 },
        end: { line: 74, column: 15, offset: 3916 }
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
            start: { line: 76, column: 1, offset: 3918 },
            end: { line: 76, column: 78, offset: 3995 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3918 },
        end: { line: 76, column: 78, offset: 3995 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `The anchor of a URL specifies a part of the URL's resource, and does not necessarily locate the resource. When a web server serves a web page as a resource, the anchor acts as a sort of "bookmark" inside the resource. Browsers will see the anchor and scroll the page down to where the section identified by the anchor is visible.`,
          position: {
            start: { line: 78, column: 1, offset: 3997 },
            end: { line: 78, column: 330, offset: 4326 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3997 },
        end: { line: 78, column: 330, offset: 4326 }
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
            start: { line: 80, column: 4, offset: 4331 },
            end: { line: 80, column: 15, offset: 4342 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 4328 },
        end: { line: 80, column: 15, offset: 4342 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP client is a component of a ',
          position: {
            start: { line: 82, column: 1, offset: 4344 },
            end: { line: 82, column: 36, offset: 4379 }
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
                start: { line: 82, column: 37, offset: 4380 },
                end: { line: 82, column: 57, offset: 4400 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 36, offset: 4379 },
            end: { line: 82, column: 110, offset: 4453 }
          }
        },
        {
          type: 'text',
          value: ' running inside a computer that sends HTTP requests to HTTP servers. The JavaScript code below is part of a software application that runs in your web browser. The code demonstrates the use of an HTTP client ',
          position: {
            start: { line: 82, column: 110, offset: 4453 },
            end: { line: 82, column: 318, offset: 4661 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 82, column: 318, offset: 4661 },
            end: { line: 82, column: 325, offset: 4668 }
          }
        },
        {
          type: 'text',
          value: ' to send a request to an HTTP server at the url ',
          position: {
            start: { line: 82, column: 325, offset: 4668 },
            end: { line: 82, column: 373, offset: 4716 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https://jsonplaceholder.typicode.com/todos/1',
          position: {
            start: { line: 82, column: 373, offset: 4716 },
            end: { line: 82, column: 419, offset: 4762 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 82, column: 419, offset: 4762 },
            end: { line: 82, column: 420, offset: 4763 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 4344 },
        end: { line: 82, column: 420, offset: 4763 }
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
        start: { line: 84, column: 1, offset: 4765 },
        end: { line: 95, column: 4, offset: 5098 }
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
            start: { line: 97, column: 4, offset: 5103 },
            end: { line: 97, column: 16, offset: 5115 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 5100 },
        end: { line: 97, column: 16, offset: 5115 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request is a message conforming to the HTTP protocol that a client sends to a server. An HTTP request has the following properties:',
          position: {
            start: { line: 99, column: 1, offset: 5117 },
            end: { line: 99, column: 140, offset: 5256 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 5117 },
        end: { line: 99, column: 140, offset: 5256 }
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
                        start: { line: 100, column: 5, offset: 5261 },
                        end: { line: 100, column: 11, offset: 5267 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 100, column: 4, offset: 5260 },
                    end: { line: 100, column: 34, offset: 5290 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 4, offset: 5260 },
                end: { line: 100, column: 34, offset: 5290 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 2, offset: 5258 },
            end: { line: 100, column: 34, offset: 5290 }
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
                        start: { line: 101, column: 5, offset: 5295 },
                        end: { line: 101, column: 8, offset: 5298 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 101, column: 4, offset: 5294 },
                    end: { line: 101, column: 28, offset: 5318 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 4, offset: 5294 },
                end: { line: 101, column: 28, offset: 5318 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 2, offset: 5292 },
            end: { line: 101, column: 28, offset: 5318 }
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
                        start: { line: 102, column: 5, offset: 5323 },
                        end: { line: 102, column: 12, offset: 5330 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 102, column: 4, offset: 5322 },
                    end: { line: 102, column: 36, offset: 5354 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 4, offset: 5322 },
                end: { line: 102, column: 36, offset: 5354 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 2, offset: 5320 },
            end: { line: 102, column: 36, offset: 5354 }
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
                        start: { line: 103, column: 5, offset: 5359 },
                        end: { line: 103, column: 9, offset: 5363 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 103, column: 4, offset: 5358 },
                    end: { line: 103, column: 30, offset: 5384 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 4, offset: 5358 },
                end: { line: 103, column: 30, offset: 5384 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 2, offset: 5356 },
            end: { line: 103, column: 30, offset: 5384 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 2, offset: 5258 },
        end: { line: 103, column: 30, offset: 5384 }
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
            start: { line: 105, column: 5, offset: 5390 },
            end: { line: 105, column: 24, offset: 5409 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 5386 },
        end: { line: 105, column: 24, offset: 5409 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: ',
          position: {
            start: { line: 107, column: 1, offset: 5411 },
            end: { line: 107, column: 192, offset: 5602 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 107, column: 192, offset: 5602 },
            end: { line: 107, column: 197, offset: 5607 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 197, offset: 5607 },
            end: { line: 107, column: 199, offset: 5609 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 107, column: 199, offset: 5609 },
            end: { line: 107, column: 205, offset: 5615 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 205, offset: 5615 },
            end: { line: 107, column: 207, offset: 5617 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 107, column: 207, offset: 5617 },
            end: { line: 107, column: 213, offset: 5623 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 213, offset: 5623 },
            end: { line: 107, column: 215, offset: 5625 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 107, column: 215, offset: 5625 },
            end: { line: 107, column: 220, offset: 5630 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 220, offset: 5630 },
            end: { line: 107, column: 222, offset: 5632 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 107, column: 222, offset: 5632 },
            end: { line: 107, column: 229, offset: 5639 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 229, offset: 5639 },
            end: { line: 107, column: 231, offset: 5641 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 107, column: 231, offset: 5641 },
            end: { line: 107, column: 239, offset: 5649 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 239, offset: 5649 },
            end: { line: 107, column: 241, offset: 5651 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 107, column: 241, offset: 5651 },
            end: { line: 107, column: 250, offset: 5660 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 250, offset: 5660 },
            end: { line: 107, column: 252, offset: 5662 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 107, column: 252, offset: 5662 },
            end: { line: 107, column: 261, offset: 5671 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 107, column: 261, offset: 5671 },
            end: { line: 107, column: 267, offset: 5677 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 107, column: 267, offset: 5677 },
            end: { line: 107, column: 274, offset: 5684 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 107, column: 274, offset: 5684 },
            end: { line: 107, column: 275, offset: 5685 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 5411 },
        end: { line: 107, column: 275, offset: 5685 }
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
            start: { line: 109, column: 6, offset: 5692 },
            end: { line: 109, column: 9, offset: 5695 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 5687 },
        end: { line: 109, column: 9, offset: 5695 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 111, column: 1, offset: 5697 },
            end: { line: 111, column: 5, offset: 5701 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 5, offset: 5701 },
            end: { line: 111, column: 10, offset: 5706 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for a data representation of the resource. ',
          position: {
            start: { line: 111, column: 10, offset: 5706 },
            end: { line: 111, column: 94, offset: 5790 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 94, offset: 5790 },
            end: { line: 111, column: 99, offset: 5795 }
          }
        },
        {
          type: 'text',
          value: ' requests are ',
          position: {
            start: { line: 111, column: 99, offset: 5795 },
            end: { line: 111, column: 113, offset: 5809 }
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
                start: { line: 111, column: 114, offset: 5810 },
                end: { line: 111, column: 118, offset: 5814 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 113, offset: 5809 },
            end: { line: 111, column: 180, offset: 5876 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 111, column: 180, offset: 5876 },
            end: { line: 111, column: 182, offset: 5878 }
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
                start: { line: 111, column: 183, offset: 5879 },
                end: { line: 111, column: 193, offset: 5889 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 182, offset: 5878 },
            end: { line: 111, column: 256, offset: 5952 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 111, column: 256, offset: 5952 },
            end: { line: 111, column: 262, offset: 5958 }
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
                start: { line: 111, column: 263, offset: 5959 },
                end: { line: 111, column: 272, offset: 5968 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 262, offset: 5958 },
            end: { line: 111, column: 334, offset: 6030 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 111, column: 334, offset: 6030 },
            end: { line: 111, column: 335, offset: 6031 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 5697 },
        end: { line: 111, column: 335, offset: 6031 }
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
            start: { line: 113, column: 6, offset: 6038 },
            end: { line: 113, column: 10, offset: 6042 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 6033 },
        end: { line: 113, column: 10, offset: 6042 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 115, column: 1, offset: 6044 },
            end: { line: 115, column: 5, offset: 6048 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 5, offset: 6048 },
            end: { line: 115, column: 11, offset: 6054 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for metadata about the resource. ',
          position: {
            start: { line: 115, column: 11, offset: 6054 },
            end: { line: 115, column: 85, offset: 6128 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 85, offset: 6128 },
            end: { line: 115, column: 91, offset: 6134 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, idempotent, and cacheable.',
          position: {
            start: { line: 115, column: 91, offset: 6134 },
            end: { line: 115, column: 137, offset: 6180 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 6044 },
        end: { line: 115, column: 137, offset: 6180 }
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
            start: { line: 117, column: 6, offset: 6187 },
            end: { line: 117, column: 10, offset: 6191 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 6182 },
        end: { line: 117, column: 10, offset: 6191 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 119, column: 1, offset: 6193 },
            end: { line: 119, column: 5, offset: 6197 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 5, offset: 6197 },
            end: { line: 119, column: 11, offset: 6203 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to create the resource. ',
          position: {
            start: { line: 119, column: 11, offset: 6203 },
            end: { line: 119, column: 85, offset: 6277 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 85, offset: 6277 },
            end: { line: 119, column: 91, offset: 6283 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 119, column: 91, offset: 6283 },
            end: { line: 119, column: 185, offset: 6377 }
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
                start: { line: 119, column: 186, offset: 6378 },
                end: { line: 119, column: 195, offset: 6387 }
              }
            }
          ],
          position: {
            start: { line: 119, column: 185, offset: 6377 },
            end: { line: 119, column: 257, offset: 6449 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 119, column: 257, offset: 6449 },
            end: { line: 119, column: 278, offset: 6470 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 119, column: 278, offset: 6470 },
            end: { line: 119, column: 287, offset: 6479 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 119, column: 287, offset: 6479 },
            end: { line: 119, column: 291, offset: 6483 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 119, column: 291, offset: 6483 },
            end: { line: 119, column: 306, offset: 6498 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 119, column: 306, offset: 6498 },
            end: { line: 119, column: 328, offset: 6520 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 119, column: 328, offset: 6520 },
            end: { line: 119, column: 346, offset: 6538 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 119, column: 346, offset: 6538 },
            end: { line: 119, column: 354, offset: 6546 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6193 },
        end: { line: 119, column: 354, offset: 6546 }
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
            start: { line: 121, column: 6, offset: 6553 },
            end: { line: 121, column: 9, offset: 6556 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6548 },
        end: { line: 121, column: 9, offset: 6556 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 123, column: 1, offset: 6558 },
            end: { line: 123, column: 5, offset: 6562 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 5, offset: 6562 },
            end: { line: 123, column: 10, offset: 6567 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 123, column: 10, offset: 6567 },
            end: { line: 123, column: 135, offset: 6692 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 135, offset: 6692 },
            end: { line: 123, column: 140, offset: 6697 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 123, column: 140, offset: 6697 },
            end: { line: 123, column: 198, offset: 6755 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6558 },
        end: { line: 123, column: 198, offset: 6755 }
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
            start: { line: 125, column: 6, offset: 6762 },
            end: { line: 125, column: 11, offset: 6767 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6757 },
        end: { line: 125, column: 11, offset: 6767 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 127, column: 1, offset: 6769 },
            end: { line: 127, column: 5, offset: 6773 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 5, offset: 6773 },
            end: { line: 127, column: 12, offset: 6780 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the resource. ',
          position: {
            start: { line: 127, column: 12, offset: 6780 },
            end: { line: 127, column: 96, offset: 6864 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 96, offset: 6864 },
            end: { line: 127, column: 103, offset: 6871 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 127, column: 103, offset: 6871 },
            end: { line: 127, column: 227, offset: 6995 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 127, column: 227, offset: 6995 },
            end: { line: 127, column: 236, offset: 7004 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 127, column: 236, offset: 7004 },
            end: { line: 127, column: 240, offset: 7008 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 127, column: 240, offset: 7008 },
            end: { line: 127, column: 255, offset: 7023 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 127, column: 255, offset: 7023 },
            end: { line: 127, column: 277, offset: 7045 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 127, column: 277, offset: 7045 },
            end: { line: 127, column: 295, offset: 7063 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 127, column: 295, offset: 7063 },
            end: { line: 127, column: 303, offset: 7071 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6769 },
        end: { line: 127, column: 303, offset: 7071 }
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
            start: { line: 129, column: 6, offset: 7078 },
            end: { line: 129, column: 12, offset: 7084 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 7073 },
        end: { line: 129, column: 12, offset: 7084 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 131, column: 1, offset: 7086 },
            end: { line: 131, column: 5, offset: 7090 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 5, offset: 7090 },
            end: { line: 131, column: 13, offset: 7098 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the resource. ',
          position: {
            start: { line: 131, column: 13, offset: 7098 },
            end: { line: 131, column: 78, offset: 7163 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 78, offset: 7163 },
            end: { line: 131, column: 86, offset: 7171 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 131, column: 86, offset: 7171 },
            end: { line: 131, column: 148, offset: 7233 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 7086 },
        end: { line: 131, column: 148, offset: 7233 }
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
            start: { line: 133, column: 6, offset: 7240 },
            end: { line: 133, column: 13, offset: 7247 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 7235 },
        end: { line: 133, column: 13, offset: 7247 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 135, column: 1, offset: 7249 },
            end: { line: 135, column: 5, offset: 7253 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 5, offset: 7253 },
            end: { line: 135, column: 14, offset: 7262 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the resource. ',
          position: {
            start: { line: 135, column: 14, offset: 7262 },
            end: { line: 135, column: 119, offset: 7367 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 119, offset: 7367 },
            end: { line: 135, column: 128, offset: 7376 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 135, column: 128, offset: 7376 },
            end: { line: 135, column: 194, offset: 7442 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 7249 },
        end: { line: 135, column: 194, offset: 7442 }
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
            start: { line: 137, column: 6, offset: 7449 },
            end: { line: 137, column: 13, offset: 7456 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 7444 },
        end: { line: 137, column: 13, offset: 7456 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 139, column: 1, offset: 7458 },
            end: { line: 139, column: 5, offset: 7462 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 5, offset: 7462 },
            end: { line: 139, column: 14, offset: 7471 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options of the resource. ',
          position: {
            start: { line: 139, column: 14, offset: 7471 },
            end: { line: 139, column: 110, offset: 7567 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 110, offset: 7567 },
            end: { line: 139, column: 119, offset: 7576 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 139, column: 119, offset: 7576 },
            end: { line: 139, column: 177, offset: 7634 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7458 },
        end: { line: 139, column: 177, offset: 7634 }
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
            start: { line: 141, column: 6, offset: 7641 },
            end: { line: 141, column: 11, offset: 7646 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7636 },
        end: { line: 141, column: 11, offset: 7646 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 143, column: 1, offset: 7648 },
            end: { line: 143, column: 5, offset: 7652 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 5, offset: 7652 },
            end: { line: 143, column: 12, offset: 7659 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 143, column: 12, offset: 7659 },
            end: { line: 143, column: 66, offset: 7713 }
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
                start: { line: 143, column: 67, offset: 7714 },
                end: { line: 143, column: 81, offset: 7728 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 66, offset: 7713 },
            end: { line: 143, column: 134, offset: 7781 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the URL. ',
          position: {
            start: { line: 143, column: 134, offset: 7781 },
            end: { line: 143, column: 162, offset: 7809 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 162, offset: 7809 },
            end: { line: 143, column: 169, offset: 7816 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 143, column: 169, offset: 7816 },
            end: { line: 143, column: 227, offset: 7874 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7648 },
        end: { line: 143, column: 227, offset: 7874 }
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
            start: { line: 145, column: 5, offset: 7880 },
            end: { line: 145, column: 21, offset: 7896 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7876 },
        end: { line: 145, column: 21, offset: 7896 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request URL is the ',
          position: {
            start: { line: 147, column: 1, offset: 7898 },
            end: { line: 147, column: 29, offset: 7926 }
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
                start: { line: 147, column: 30, offset: 7927 },
                end: { line: 147, column: 33, offset: 7930 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 29, offset: 7926 },
            end: { line: 147, column: 40, offset: 7937 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 147, column: 40, offset: 7937 },
            end: { line: 147, column: 137, offset: 8034 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7898 },
        end: { line: 147, column: 137, offset: 8034 }
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
            start: { line: 149, column: 5, offset: 8040 },
            end: { line: 149, column: 25, offset: 8060 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 8036 },
        end: { line: 149, column: 25, offset: 8060 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request.',
          position: {
            start: { line: 151, column: 1, offset: 8062 },
            end: { line: 151, column: 144, offset: 8205 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 8062 },
        end: { line: 151, column: 144, offset: 8205 }
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
            start: { line: 153, column: 5, offset: 8211 },
            end: { line: 153, column: 22, offset: 8228 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 8207 },
        end: { line: 153, column: 22, offset: 8228 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP request body is the part of the request that carries the bulk of the data sent to the server. The content type of the request body should be specified in the request's ",
          position: {
            start: { line: 155, column: 1, offset: 8230 },
            end: { line: 155, column: 178, offset: 8407 }
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
                start: { line: 155, column: 179, offset: 8408 },
                end: { line: 155, column: 191, offset: 8420 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 178, offset: 8407 },
            end: { line: 155, column: 274, offset: 8503 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 155, column: 274, offset: 8503 },
            end: { line: 155, column: 282, offset: 8511 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 8230 },
        end: { line: 155, column: 282, offset: 8511 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP request bodies:',
          position: {
            start: { line: 157, column: 1, offset: 8513 },
            end: { line: 157, column: 38, offset: 8550 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 8513 },
        end: { line: 157, column: 38, offset: 8550 }
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
                        start: { line: 158, column: 5, offset: 8555 },
                        end: { line: 158, column: 9, offset: 8559 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 8554 },
                    end: { line: 158, column: 45, offset: 8595 }
                  }
                },
                {
                  type: 'text',
                  value: ' - request body used for web applications. The request method is typically ',
                  position: {
                    start: { line: 158, column: 45, offset: 8595 },
                    end: { line: 158, column: 120, offset: 8670 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 158, column: 120, offset: 8670 },
                    end: { line: 158, column: 125, offset: 8675 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 158, column: 125, offset: 8675 },
                    end: { line: 158, column: 127, offset: 8677 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 158, column: 127, offset: 8677 },
                    end: { line: 158, column: 133, offset: 8683 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 158, column: 133, offset: 8683 },
                    end: { line: 158, column: 138, offset: 8688 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 158, column: 138, offset: 8688 },
                    end: { line: 158, column: 145, offset: 8695 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 158, column: 145, offset: 8695 },
                    end: { line: 158, column: 151, offset: 8701 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 158, column: 151, offset: 8701 },
                    end: { line: 158, column: 165, offset: 8715 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 158, column: 165, offset: 8715 },
                    end: { line: 158, column: 187, offset: 8737 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 158, column: 187, offset: 8737 },
                    end: { line: 158, column: 205, offset: 8755 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 158, column: 205, offset: 8755 },
                    end: { line: 158, column: 206, offset: 8756 }
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 8554 },
                end: { line: 158, column: 206, offset: 8756 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 2, offset: 8552 },
            end: { line: 158, column: 206, offset: 8756 }
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
                    start: { line: 159, column: 4, offset: 8760 },
                    end: { line: 159, column: 83, offset: 8839 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 159, column: 83, offset: 8839 },
                    end: { line: 159, column: 88, offset: 8844 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 159, column: 88, offset: 8844 },
                    end: { line: 159, column: 92, offset: 8848 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 159, column: 92, offset: 8848 },
                    end: { line: 159, column: 98, offset: 8854 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 159, column: 98, offset: 8854 },
                    end: { line: 159, column: 104, offset: 8860 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 159, column: 104, offset: 8860 },
                    end: { line: 159, column: 118, offset: 8874 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 159, column: 118, offset: 8874 },
                    end: { line: 159, column: 139, offset: 8895 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 159, column: 139, offset: 8895 },
                    end: { line: 159, column: 151, offset: 8907 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 151, offset: 8907 },
                    end: { line: 159, column: 153, offset: 8909 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 159, column: 153, offset: 8909 },
                    end: { line: 159, column: 164, offset: 8920 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 164, offset: 8920 },
                    end: { line: 159, column: 166, offset: 8922 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 159, column: 166, offset: 8922 },
                    end: { line: 159, column: 178, offset: 8934 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 178, offset: 8934 },
                    end: { line: 159, column: 180, offset: 8936 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 159, column: 180, offset: 8936 },
                    end: { line: 159, column: 193, offset: 8949 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 159, column: 193, offset: 8949 },
                    end: { line: 159, column: 198, offset: 8954 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 159, column: 198, offset: 8954 },
                    end: { line: 159, column: 209, offset: 8965 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 159, column: 209, offset: 8965 },
                    end: { line: 159, column: 210, offset: 8966 }
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 8760 },
                end: { line: 159, column: 210, offset: 8966 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 2, offset: 8758 },
            end: { line: 159, column: 210, offset: 8966 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 2, offset: 8552 },
        end: { line: 159, column: 210, offset: 8966 }
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
            start: { line: 161, column: 4, offset: 8971 },
            end: { line: 161, column: 17, offset: 8984 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8968 },
        end: { line: 161, column: 17, offset: 8984 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client. An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8986 },
            end: { line: 163, column: 149, offset: 9134 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8986 },
        end: { line: 163, column: 149, offset: 9134 }
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
                        start: { line: 164, column: 5, offset: 9139 },
                        end: { line: 164, column: 16, offset: 9150 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 164, column: 4, offset: 9138 },
                    end: { line: 164, column: 45, offset: 9179 }
                  }
                }
              ],
              position: {
                start: { line: 164, column: 4, offset: 9138 },
                end: { line: 164, column: 45, offset: 9179 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 2, offset: 9136 },
            end: { line: 164, column: 45, offset: 9179 }
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
                        start: { line: 165, column: 5, offset: 9184 },
                        end: { line: 165, column: 12, offset: 9191 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 165, column: 4, offset: 9183 },
                    end: { line: 165, column: 37, offset: 9216 }
                  }
                }
              ],
              position: {
                start: { line: 165, column: 4, offset: 9183 },
                end: { line: 165, column: 37, offset: 9216 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 2, offset: 9181 },
            end: { line: 165, column: 37, offset: 9216 }
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
                        start: { line: 166, column: 5, offset: 9221 },
                        end: { line: 166, column: 9, offset: 9225 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 166, column: 4, offset: 9220 },
                    end: { line: 166, column: 31, offset: 9247 }
                  }
                }
              ],
              position: {
                start: { line: 166, column: 4, offset: 9220 },
                end: { line: 166, column: 31, offset: 9247 }
              }
            }
          ],
          position: {
            start: { line: 166, column: 2, offset: 9218 },
            end: { line: 166, column: 31, offset: 9247 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 2, offset: 9136 },
        end: { line: 166, column: 31, offset: 9247 }
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
            start: { line: 168, column: 5, offset: 9253 },
            end: { line: 168, column: 30, offset: 9278 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 9249 },
        end: { line: 168, column: 30, offset: 9278 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response status code is a three-digit code that indicates the status of the server's processing of the request.",
          position: {
            start: { line: 170, column: 1, offset: 9280 },
            end: { line: 170, column: 121, offset: 9400 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 9280 },
        end: { line: 170, column: 121, offset: 9400 }
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
            start: { line: 172, column: 6, offset: 9407 },
            end: { line: 172, column: 42, offset: 9443 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 9402 },
        end: { line: 172, column: 42, offset: 9443 }
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
            start: { line: 174, column: 7, offset: 9451 },
            end: { line: 174, column: 19, offset: 9463 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 9445 },
        end: { line: 174, column: 19, offset: 9463 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received the request headers and is ready for the client to send the request body.',
          position: {
            start: { line: 176, column: 1, offset: 9465 },
            end: { line: 176, column: 98, offset: 9562 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 9465 },
        end: { line: 176, column: 98, offset: 9562 }
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
            start: { line: 178, column: 7, offset: 9570 },
            end: { line: 178, column: 30, offset: 9593 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 9564 },
        end: { line: 178, column: 30, offset: 9593 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is switching to a different protocol, specified in the ',
          position: {
            start: { line: 180, column: 1, offset: 9595 },
            end: { line: 180, column: 67, offset: 9661 }
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
                start: { line: 180, column: 68, offset: 9662 },
                end: { line: 180, column: 75, offset: 9669 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 67, offset: 9661 },
            end: { line: 180, column: 153, offset: 9747 }
          }
        },
        {
          type: 'text',
          value: " header, at the client's request. ",
          position: {
            start: { line: 180, column: 153, offset: 9747 },
            end: { line: 180, column: 187, offset: 9781 }
          }
        },
        {
          type: 'inlineCode',
          value: '101 Switching Protocols',
          position: {
            start: { line: 180, column: 187, offset: 9781 },
            end: { line: 180, column: 212, offset: 9806 }
          }
        },
        {
          type: 'text',
          value: ' is used by the ',
          position: {
            start: { line: 180, column: 212, offset: 9806 },
            end: { line: 180, column: 228, offset: 9822 }
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
                start: { line: 180, column: 229, offset: 9823 },
                end: { line: 180, column: 238, offset: 9832 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 228, offset: 9822 },
            end: { line: 180, column: 260, offset: 9854 }
          }
        },
        {
          type: 'text',
          value: ' protocol when switching from HTTP.',
          position: {
            start: { line: 180, column: 260, offset: 9854 },
            end: { line: 180, column: 295, offset: 9889 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 9595 },
        end: { line: 180, column: 295, offset: 9889 }
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
            start: { line: 182, column: 7, offset: 9897 },
            end: { line: 182, column: 21, offset: 9911 }
          }
        }
      ],
      position: {
        start: { line: 182, column: 1, offset: 9891 },
        end: { line: 182, column: 21, offset: 9911 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received and is processing the request but no response is available yet.',
          position: {
            start: { line: 184, column: 1, offset: 9913 },
            end: { line: 184, column: 88, offset: 10000 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 9913 },
        end: { line: 184, column: 88, offset: 10000 }
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
            start: { line: 186, column: 7, offset: 10008 },
            end: { line: 186, column: 22, offset: 10023 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 10002 },
        end: { line: 186, column: 22, offset: 10023 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.',
          position: {
            start: { line: 188, column: 1, offset: 10025 },
            end: { line: 188, column: 139, offset: 10163 }
          }
        }
      ],
      position: {
        start: { line: 188, column: 1, offset: 10025 },
        end: { line: 188, column: 139, offset: 10163 }
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
            start: { line: 190, column: 6, offset: 10170 },
            end: { line: 190, column: 39, offset: 10203 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 10165 },
        end: { line: 190, column: 39, offset: 10203 }
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
            start: { line: 192, column: 7, offset: 10211 },
            end: { line: 192, column: 13, offset: 10217 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 10205 },
        end: { line: 192, column: 13, offset: 10217 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server successfully processed the request. The meaning of success depends on the request method:',
          position: {
            start: { line: 194, column: 1, offset: 10219 },
            end: { line: 194, column: 101, offset: 10319 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 10219 },
        end: { line: 194, column: 101, offset: 10319 }
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
                    start: { line: 195, column: 4, offset: 10323 },
                    end: { line: 195, column: 9, offset: 10328 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource has been successfully retrieved and transmitted in the response message body.',
                  position: {
                    start: { line: 195, column: 9, offset: 10328 },
                    end: { line: 195, column: 102, offset: 10421 }
                  }
                }
              ],
              position: {
                start: { line: 195, column: 4, offset: 10323 },
                end: { line: 195, column: 102, offset: 10421 }
              }
            }
          ],
          position: {
            start: { line: 195, column: 2, offset: 10321 },
            end: { line: 195, column: 102, offset: 10421 }
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
                    start: { line: 196, column: 4, offset: 10425 },
                    end: { line: 196, column: 10, offset: 10431 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The requested metadata about the resource is available in the response headers.',
                  position: {
                    start: { line: 196, column: 10, offset: 10431 },
                    end: { line: 196, column: 92, offset: 10513 }
                  }
                }
              ],
              position: {
                start: { line: 196, column: 4, offset: 10425 },
                end: { line: 196, column: 92, offset: 10513 }
              }
            }
          ],
          position: {
            start: { line: 196, column: 2, offset: 10423 },
            end: { line: 196, column: 92, offset: 10513 }
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
                    start: { line: 197, column: 4, offset: 10517 },
                    end: { line: 197, column: 10, offset: 10523 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created successfully.',
                  position: {
                    start: { line: 197, column: 10, offset: 10523 },
                    end: { line: 197, column: 51, offset: 10564 }
                  }
                }
              ],
              position: {
                start: { line: 197, column: 4, offset: 10517 },
                end: { line: 197, column: 51, offset: 10564 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 2, offset: 10515 },
            end: { line: 197, column: 51, offset: 10564 }
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
                    start: { line: 198, column: 4, offset: 10568 },
                    end: { line: 198, column: 9, offset: 10573 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created or updated successfully.',
                  position: {
                    start: { line: 198, column: 9, offset: 10573 },
                    end: { line: 198, column: 61, offset: 10625 }
                  }
                }
              ],
              position: {
                start: { line: 198, column: 4, offset: 10568 },
                end: { line: 198, column: 61, offset: 10625 }
              }
            }
          ],
          position: {
            start: { line: 198, column: 2, offset: 10566 },
            end: { line: 198, column: 61, offset: 10625 }
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
                    start: { line: 199, column: 4, offset: 10629 },
                    end: { line: 199, column: 11, offset: 10636 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was updated successfully.',
                  position: {
                    start: { line: 199, column: 11, offset: 10636 },
                    end: { line: 199, column: 52, offset: 10677 }
                  }
                }
              ],
              position: {
                start: { line: 199, column: 4, offset: 10629 },
                end: { line: 199, column: 52, offset: 10677 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 2, offset: 10627 },
            end: { line: 199, column: 52, offset: 10677 }
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
                    start: { line: 200, column: 4, offset: 10681 },
                    end: { line: 200, column: 12, offset: 10689 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was deleted successfully.',
                  position: {
                    start: { line: 200, column: 12, offset: 10689 },
                    end: { line: 200, column: 53, offset: 10730 }
                  }
                }
              ],
              position: {
                start: { line: 200, column: 4, offset: 10681 },
                end: { line: 200, column: 53, offset: 10730 }
              }
            }
          ],
          position: {
            start: { line: 200, column: 2, offset: 10679 },
            end: { line: 200, column: 53, offset: 10730 }
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
                    start: { line: 201, column: 4, offset: 10734 },
                    end: { line: 201, column: 13, offset: 10743 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The connection was established successfully.',
                  position: {
                    start: { line: 201, column: 13, offset: 10743 },
                    end: { line: 201, column: 60, offset: 10790 }
                  }
                }
              ],
              position: {
                start: { line: 201, column: 4, offset: 10734 },
                end: { line: 201, column: 60, offset: 10790 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 2, offset: 10732 },
            end: { line: 201, column: 60, offset: 10790 }
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
                    start: { line: 202, column: 4, offset: 10794 },
                    end: { line: 202, column: 13, offset: 10803 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The communication options are available in the ',
                  position: {
                    start: { line: 202, column: 13, offset: 10803 },
                    end: { line: 202, column: 63, offset: 10853 }
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
                        start: { line: 202, column: 64, offset: 10854 },
                        end: { line: 202, column: 69, offset: 10859 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 202, column: 63, offset: 10853 },
                    end: { line: 202, column: 145, offset: 10935 }
                  }
                },
                {
                  type: 'text',
                  value: ' header.',
                  position: {
                    start: { line: 202, column: 145, offset: 10935 },
                    end: { line: 202, column: 153, offset: 10943 }
                  }
                }
              ],
              position: {
                start: { line: 202, column: 4, offset: 10794 },
                end: { line: 202, column: 153, offset: 10943 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 2, offset: 10792 },
            end: { line: 202, column: 153, offset: 10943 }
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
                    start: { line: 203, column: 4, offset: 10947 },
                    end: { line: 203, column: 11, offset: 10954 }
                  }
                },
                {
                  type: 'text',
                  value: " - The server successfully received and echoed back the client's request.",
                  position: {
                    start: { line: 203, column: 11, offset: 10954 },
                    end: { line: 203, column: 84, offset: 11027 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10947 },
                end: { line: 203, column: 84, offset: 11027 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10945 },
            end: { line: 203, column: 84, offset: 11027 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 2, offset: 10321 },
        end: { line: 203, column: 84, offset: 11027 }
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
            start: { line: 205, column: 7, offset: 11035 },
            end: { line: 205, column: 18, offset: 11046 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 11029 },
        end: { line: 205, column: 18, offset: 11046 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded and a new resource was created.',
          position: {
            start: { line: 207, column: 1, offset: 11048 },
            end: { line: 207, column: 54, offset: 11101 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 11048 },
        end: { line: 207, column: 54, offset: 11101 }
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
            start: { line: 209, column: 7, offset: 11109 },
            end: { line: 209, column: 19, offset: 11121 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 11103 },
        end: { line: 209, column: 19, offset: 11121 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request has been received but has not yet been processed.',
          position: {
            start: { line: 211, column: 1, offset: 11123 },
            end: { line: 211, column: 62, offset: 11184 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 11123 },
        end: { line: 211, column: 62, offset: 11184 }
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
            start: { line: 213, column: 7, offset: 11192 },
            end: { line: 213, column: 40, offset: 11225 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 11186 },
        end: { line: 213, column: 40, offset: 11225 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded but the response headers or body were modified by a proxy server before being sent to the client.',
          position: {
            start: { line: 215, column: 1, offset: 11227 },
            end: { line: 215, column: 120, offset: 11346 }
          }
        }
      ],
      position: {
        start: { line: 215, column: 1, offset: 11227 },
        end: { line: 215, column: 120, offset: 11346 }
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
            start: { line: 217, column: 7, offset: 11354 },
            end: { line: 217, column: 21, offset: 11368 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 11348 },
        end: { line: 217, column: 21, offset: 11368 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, but there is no content available for this request. The client may update its cached headers for the requested resource with the response headers from this request.',
          position: {
            start: { line: 219, column: 1, offset: 11370 },
            end: { line: 219, column: 216, offset: 11585 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 11370 },
        end: { line: 219, column: 216, offset: 11585 }
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
            start: { line: 221, column: 7, offset: 11593 },
            end: { line: 221, column: 24, offset: 11610 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 11587 },
        end: { line: 221, column: 24, offset: 11610 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and asks the client to reset the document to its original state.',
          position: {
            start: { line: 223, column: 1, offset: 11612 },
            end: { line: 223, column: 116, offset: 11727 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 11612 },
        end: { line: 223, column: 116, offset: 11727 }
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
            start: { line: 225, column: 7, offset: 11735 },
            end: { line: 225, column: 26, offset: 11754 }
          }
        }
      ],
      position: {
        start: { line: 225, column: 1, offset: 11729 },
        end: { line: 225, column: 26, offset: 11754 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and is delivering only part of the requested resource. ',
          position: {
            start: { line: 227, column: 1, offset: 11756 },
            end: { line: 227, column: 107, offset: 11862 }
          }
        },
        {
          type: 'inlineCode',
          value: '206 Partial Content',
          position: {
            start: { line: 227, column: 107, offset: 11862 },
            end: { line: 227, column: 128, offset: 11883 }
          }
        },
        {
          type: 'text',
          value: ' is commonly used in ',
          position: {
            start: { line: 227, column: 128, offset: 11883 },
            end: { line: 227, column: 149, offset: 11904 }
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
                start: { line: 227, column: 150, offset: 11905 },
                end: { line: 227, column: 164, offset: 11919 }
              }
            }
          ],
          position: {
            start: { line: 227, column: 149, offset: 11904 },
            end: { line: 227, column: 238, offset: 11993 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 227, column: 238, offset: 11993 },
            end: { line: 227, column: 239, offset: 11994 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 11756 },
        end: { line: 227, column: 239, offset: 11994 }
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
            start: { line: 229, column: 6, offset: 12001 },
            end: { line: 229, column: 40, offset: 12035 }
          }
        }
      ],
      position: {
        start: { line: 229, column: 1, offset: 11996 },
        end: { line: 229, column: 40, offset: 12035 }
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
            start: { line: 231, column: 7, offset: 12043 },
            end: { line: 231, column: 27, offset: 12063 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 1, offset: 12037 },
        end: { line: 231, column: 27, offset: 12063 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has multiple representations, and the client needs to choose which one to access.',
          position: {
            start: { line: 233, column: 1, offset: 12065 },
            end: { line: 233, column: 95, offset: 12159 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 12065 },
        end: { line: 233, column: 95, offset: 12159 }
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
            start: { line: 235, column: 7, offset: 12167 },
            end: { line: 235, column: 28, offset: 12188 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 12161 },
        end: { line: 235, column: 28, offset: 12188 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 237, column: 1, offset: 12190 },
            end: { line: 237, column: 118, offset: 12307 }
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
                start: { line: 237, column: 119, offset: 12308 },
                end: { line: 237, column: 127, offset: 12316 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 118, offset: 12307 },
            end: { line: 237, column: 206, offset: 12395 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 237, column: 206, offset: 12395 },
            end: { line: 237, column: 230, offset: 12419 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 12190 },
        end: { line: 237, column: 230, offset: 12419 }
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
            start: { line: 239, column: 7, offset: 12427 },
            end: { line: 239, column: 16, offset: 12436 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 12421 },
        end: { line: 239, column: 16, offset: 12436 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 241, column: 1, offset: 12438 },
            end: { line: 241, column: 118, offset: 12555 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 241, column: 118, offset: 12555 },
            end: { line: 241, column: 128, offset: 12565 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 241, column: 128, offset: 12565 },
            end: { line: 241, column: 152, offset: 12589 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 12438 },
        end: { line: 241, column: 152, offset: 12589 }
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
            start: { line: 243, column: 7, offset: 12597 },
            end: { line: 243, column: 20, offset: 12610 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 12591 },
        end: { line: 243, column: 20, offset: 12610 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is redirecting the client's request for the resource to a different resource. The URL of the redirected resource is available in the ",
          position: {
            start: { line: 245, column: 1, offset: 12612 },
            end: { line: 245, column: 145, offset: 12756 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 245, column: 145, offset: 12756 },
            end: { line: 245, column: 155, offset: 12766 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the HTTP ',
          position: {
            start: { line: 245, column: 155, offset: 12766 },
            end: { line: 245, column: 211, offset: 12822 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 245, column: 211, offset: 12822 },
            end: { line: 245, column: 216, offset: 12827 }
          }
        },
        {
          type: 'text',
          value: ' method to request the redirected resource.',
          position: {
            start: { line: 245, column: 216, offset: 12827 },
            end: { line: 245, column: 259, offset: 12870 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 12612 },
        end: { line: 245, column: 259, offset: 12870 }
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
            start: { line: 247, column: 7, offset: 12878 },
            end: { line: 247, column: 23, offset: 12894 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 12872 },
        end: { line: 247, column: 23, offset: 12894 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has not been modified since the last access, so the client can continue to use the same cached version of the resource.',
          position: {
            start: { line: 249, column: 1, offset: 12896 },
            end: { line: 249, column: 133, offset: 13028 }
          }
        }
      ],
      position: {
        start: { line: 249, column: 1, offset: 12896 },
        end: { line: 249, column: 133, offset: 13028 }
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
            start: { line: 251, column: 7, offset: 13036 },
            end: { line: 251, column: 29, offset: 13058 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 13030 },
        end: { line: 251, column: 29, offset: 13058 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 253, column: 1, offset: 13060 },
            end: { line: 253, column: 118, offset: 13177 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 253, column: 118, offset: 13177 },
            end: { line: 253, column: 128, offset: 13187 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 253, column: 128, offset: 13187 },
            end: { line: 253, column: 235, offset: 13294 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 13060 },
        end: { line: 253, column: 235, offset: 13294 }
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
            start: { line: 255, column: 7, offset: 13302 },
            end: { line: 255, column: 29, offset: 13324 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 13296 },
        end: { line: 255, column: 29, offset: 13324 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 257, column: 1, offset: 13326 },
            end: { line: 257, column: 118, offset: 13443 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 257, column: 118, offset: 13443 },
            end: { line: 257, column: 128, offset: 13453 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 257, column: 128, offset: 13453 },
            end: { line: 257, column: 235, offset: 13560 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 13326 },
        end: { line: 257, column: 235, offset: 13560 }
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
            start: { line: 259, column: 6, offset: 13567 },
            end: { line: 259, column: 41, offset: 13602 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 13562 },
        end: { line: 259, column: 41, offset: 13602 }
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
            start: { line: 261, column: 7, offset: 13610 },
            end: { line: 261, column: 22, offset: 13625 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 13604 },
        end: { line: 261, column: 22, offset: 13625 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot process the request due to client error, e.g. invalid syntax.',
          position: {
            start: { line: 263, column: 1, offset: 13627 },
            end: { line: 263, column: 80, offset: 13706 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 13627 },
        end: { line: 263, column: 80, offset: 13706 }
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
            start: { line: 265, column: 7, offset: 13714 },
            end: { line: 265, column: 23, offset: 13730 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 13708 },
        end: { line: 265, column: 23, offset: 13730 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials.',
          position: {
            start: { line: 267, column: 1, offset: 13732 },
            end: { line: 267, column: 52, offset: 13783 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 13732 },
        end: { line: 267, column: 52, offset: 13783 }
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
            start: { line: 269, column: 7, offset: 13791 },
            end: { line: 269, column: 27, offset: 13811 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 13785 },
        end: { line: 269, column: 27, offset: 13811 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested content is not available until the client makes a payment.',
          position: {
            start: { line: 271, column: 1, offset: 13813 },
            end: { line: 271, column: 73, offset: 13885 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 13813 },
        end: { line: 271, column: 73, offset: 13885 }
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
            start: { line: 273, column: 7, offset: 13893 },
            end: { line: 273, column: 20, offset: 13906 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 13887 },
        end: { line: 273, column: 20, offset: 13906 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is refusing the client access to the requested resource.',
          position: {
            start: { line: 275, column: 1, offset: 13908 },
            end: { line: 275, column: 68, offset: 13975 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 13908 },
        end: { line: 275, column: 68, offset: 13975 }
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
            start: { line: 277, column: 7, offset: 13983 },
            end: { line: 277, column: 20, offset: 13996 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 13977 },
        end: { line: 277, column: 20, offset: 13996 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot find the requested resource. Either the URL is not recognized, or the URL is recognized but the requested resource does not exist.',
          position: {
            start: { line: 279, column: 1, offset: 13998 },
            end: { line: 279, column: 149, offset: 14146 }
          }
        }
      ],
      position: {
        start: { line: 279, column: 1, offset: 13998 },
        end: { line: 279, column: 149, offset: 14146 }
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
            start: { line: 281, column: 7, offset: 14154 },
            end: { line: 281, column: 29, offset: 14176 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 14148 },
        end: { line: 281, column: 29, offset: 14176 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is known by the server but it is not supported for the requested resource.',
          position: {
            start: { line: 283, column: 1, offset: 14178 },
            end: { line: 283, column: 94, offset: 14271 }
          }
        }
      ],
      position: {
        start: { line: 283, column: 1, offset: 14178 },
        end: { line: 283, column: 94, offset: 14271 }
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
            start: { line: 285, column: 7, offset: 14279 },
            end: { line: 285, column: 25, offset: 14297 }
          }
        }
      ],
      position: {
        start: { line: 285, column: 1, offset: 14273 },
        end: { line: 285, column: 25, offset: 14297 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is unable to provide a response that matches the client's requested format, typically specified in the ",
          position: {
            start: { line: 287, column: 1, offset: 14299 },
            end: { line: 287, column: 115, offset: 14413 }
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
                start: { line: 287, column: 116, offset: 14414 },
                end: { line: 287, column: 122, offset: 14420 }
              }
            }
          ],
          position: {
            start: { line: 287, column: 115, offset: 14413 },
            end: { line: 287, column: 199, offset: 14497 }
          }
        },
        {
          type: 'text',
          value: ' header of the request.',
          position: {
            start: { line: 287, column: 199, offset: 14497 },
            end: { line: 287, column: 222, offset: 14520 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 14299 },
        end: { line: 287, column: 222, offset: 14520 }
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
            start: { line: 289, column: 7, offset: 14528 },
            end: { line: 289, column: 40, offset: 14561 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 14522 },
        end: { line: 289, column: 40, offset: 14561 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials for the ',
          position: {
            start: { line: 291, column: 1, offset: 14563 },
            end: { line: 291, column: 60, offset: 14622 }
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
                start: { line: 291, column: 61, offset: 14623 },
                end: { line: 291, column: 73, offset: 14635 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 60, offset: 14622 },
            end: { line: 291, column: 118, offset: 14680 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 291, column: 118, offset: 14680 },
            end: { line: 291, column: 119, offset: 14681 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 14563 },
        end: { line: 291, column: 120, offset: 14682 }
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
            start: { line: 293, column: 7, offset: 14690 },
            end: { line: 293, column: 26, offset: 14709 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 14684 },
        end: { line: 293, column: 26, offset: 14709 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server would like to shut down the unused connection.',
          position: {
            start: { line: 295, column: 1, offset: 14711 },
            end: { line: 295, column: 58, offset: 14768 }
          }
        }
      ],
      position: {
        start: { line: 295, column: 1, offset: 14711 },
        end: { line: 295, column: 58, offset: 14768 }
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
            start: { line: 297, column: 7, offset: 14776 },
            end: { line: 297, column: 19, offset: 14788 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 14770 },
        end: { line: 297, column: 19, offset: 14788 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request conflicts with the current state of the resource, e.g. when trying to create a resource that already exists.',
          position: {
            start: { line: 299, column: 1, offset: 14790 },
            end: { line: 299, column: 121, offset: 14910 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 14790 },
        end: { line: 299, column: 121, offset: 14910 }
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
            start: { line: 301, column: 7, offset: 14918 },
            end: { line: 301, column: 15, offset: 14926 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 14912 },
        end: { line: 301, column: 15, offset: 14926 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has been permanently removed from the server.',
          position: {
            start: { line: 303, column: 1, offset: 14928 },
            end: { line: 303, column: 59, offset: 14986 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 14928 },
        end: { line: 303, column: 59, offset: 14986 }
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
            start: { line: 305, column: 7, offset: 14994 },
            end: { line: 305, column: 26, offset: 15013 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 14988 },
        end: { line: 305, column: 26, offset: 15013 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 307, column: 1, offset: 15015 },
            end: { line: 307, column: 5, offset: 15019 }
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
                start: { line: 307, column: 6, offset: 15020 },
                end: { line: 307, column: 20, offset: 15034 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 5, offset: 15019 },
            end: { line: 307, column: 105, offset: 15119 }
          }
        },
        {
          type: 'text',
          value: ' request header is required but not present.',
          position: {
            start: { line: 307, column: 105, offset: 15119 },
            end: { line: 307, column: 149, offset: 15163 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 15015 },
        end: { line: 307, column: 149, offset: 15163 }
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
            start: { line: 309, column: 7, offset: 15171 },
            end: { line: 309, column: 30, offset: 15194 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 1, offset: 15165 },
        end: { line: 309, column: 30, offset: 15194 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request headers have indicated preconditions that the server does not meet.',
          position: {
            start: { line: 311, column: 1, offset: 15196 },
            end: { line: 311, column: 80, offset: 15275 }
          }
        }
      ],
      position: {
        start: { line: 311, column: 1, offset: 15196 },
        end: { line: 311, column: 80, offset: 15275 }
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
            start: { line: 313, column: 7, offset: 15283 },
            end: { line: 313, column: 28, offset: 15304 }
          }
        }
      ],
      position: {
        start: { line: 313, column: 1, offset: 15277 },
        end: { line: 313, column: 28, offset: 15304 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request body is larger than the limits defined by the server. The server might close the connection or respond with a ',
          position: {
            start: { line: 315, column: 1, offset: 15306 },
            end: { line: 315, column: 123, offset: 15428 }
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
                start: { line: 315, column: 124, offset: 15429 },
                end: { line: 315, column: 135, offset: 15440 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 123, offset: 15428 },
            end: { line: 315, column: 217, offset: 15522 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 315, column: 217, offset: 15522 },
            end: { line: 315, column: 225, offset: 15530 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 15306 },
        end: { line: 315, column: 225, offset: 15530 }
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
            start: { line: 317, column: 7, offset: 15538 },
            end: { line: 317, column: 23, offset: 15554 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 15532 },
        end: { line: 317, column: 23, offset: 15554 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource is too long.',
          position: {
            start: { line: 319, column: 1, offset: 15556 },
            end: { line: 319, column: 47, offset: 15602 }
          }
        }
      ],
      position: {
        start: { line: 319, column: 1, offset: 15556 },
        end: { line: 319, column: 47, offset: 15602 }
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
            start: { line: 321, column: 7, offset: 15610 },
            end: { line: 321, column: 33, offset: 15636 }
          }
        }
      ],
      position: {
        start: { line: 321, column: 1, offset: 15604 },
        end: { line: 321, column: 33, offset: 15636 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The media format of the requested resource is not supported by the server.',
          position: {
            start: { line: 323, column: 1, offset: 15638 },
            end: { line: 323, column: 75, offset: 15712 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 15638 },
        end: { line: 323, column: 75, offset: 15712 }
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
            start: { line: 325, column: 7, offset: 15720 },
            end: { line: 325, column: 32, offset: 15745 }
          }
        }
      ],
      position: {
        start: { line: 325, column: 1, offset: 15714 },
        end: { line: 325, column: 32, offset: 15745 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The ranges specified in the request's ",
          position: {
            start: { line: 327, column: 1, offset: 15747 },
            end: { line: 327, column: 39, offset: 15785 }
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
                start: { line: 327, column: 40, offset: 15786 },
                end: { line: 327, column: 45, offset: 15791 }
              }
            }
          ],
          position: {
            start: { line: 327, column: 39, offset: 15785 },
            end: { line: 327, column: 121, offset: 15867 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be fulfilled by the server.',
          position: {
            start: { line: 327, column: 121, offset: 15867 },
            end: { line: 327, column: 163, offset: 15909 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 15747 },
        end: { line: 327, column: 163, offset: 15909 }
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
            start: { line: 329, column: 7, offset: 15917 },
            end: { line: 329, column: 29, offset: 15939 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 15911 },
        end: { line: 329, column: 29, offset: 15939 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The expectation indicated by the request's ",
          position: {
            start: { line: 331, column: 1, offset: 15941 },
            end: { line: 331, column: 44, offset: 15984 }
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
                start: { line: 331, column: 45, offset: 15985 },
                end: { line: 331, column: 51, offset: 15991 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 44, offset: 15984 },
            end: { line: 331, column: 128, offset: 16068 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be met by the server.',
          position: {
            start: { line: 331, column: 128, offset: 16068 },
            end: { line: 331, column: 164, offset: 16104 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 15941 },
        end: { line: 331, column: 164, offset: 16104 }
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
            start: { line: 333, column: 7, offset: 16112 },
            end: { line: 333, column: 23, offset: 16128 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 16106 },
        end: { line: 333, column: 23, offset: 16128 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses the attempt to brew coffee with a teapot.',
          position: {
            start: { line: 335, column: 1, offset: 16130 },
            end: { line: 335, column: 61, offset: 16190 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 16130 },
        end: { line: 335, column: 61, offset: 16190 }
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
            start: { line: 337, column: 7, offset: 16198 },
            end: { line: 337, column: 30, offset: 16221 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 16192 },
        end: { line: 337, column: 30, offset: 16221 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The request was directed at a server that is not configured to produce a response for the request URL's scheme and authority.",
          position: {
            start: { line: 339, column: 1, offset: 16223 },
            end: { line: 339, column: 126, offset: 16348 }
          }
        }
      ],
      position: {
        start: { line: 339, column: 1, offset: 16223 },
        end: { line: 339, column: 126, offset: 16348 }
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
            start: { line: 341, column: 7, offset: 16356 },
            end: { line: 341, column: 32, offset: 16381 }
          }
        }
      ],
      position: {
        start: { line: 341, column: 1, offset: 16350 },
        end: { line: 341, column: 32, offset: 16381 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request was well-formed but was unable to be processed due to semantic errors.',
          position: {
            start: { line: 343, column: 1, offset: 16383 },
            end: { line: 343, column: 83, offset: 16465 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 16383 },
        end: { line: 343, column: 83, offset: 16465 }
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
            start: { line: 345, column: 7, offset: 16473 },
            end: { line: 345, column: 17, offset: 16483 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 16467 },
        end: { line: 345, column: 17, offset: 16483 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is locked.',
          position: {
            start: { line: 347, column: 1, offset: 16485 },
            end: { line: 347, column: 34, offset: 16518 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 16485 },
        end: { line: 347, column: 34, offset: 16518 }
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
            start: { line: 349, column: 7, offset: 16526 },
            end: { line: 349, column: 28, offset: 16547 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 16520 },
        end: { line: 349, column: 28, offset: 16547 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request failed due to the failure of a previous request.',
          position: {
            start: { line: 351, column: 1, offset: 16549 },
            end: { line: 351, column: 61, offset: 16609 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 16549 },
        end: { line: 351, column: 61, offset: 16609 }
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
            start: { line: 353, column: 7, offset: 16617 },
            end: { line: 353, column: 20, offset: 16630 }
          }
        }
      ],
      position: {
        start: { line: 353, column: 1, offset: 16611 },
        end: { line: 353, column: 20, offset: 16630 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is unwilling to risk processing a request that might be replayed.',
          position: {
            start: { line: 355, column: 1, offset: 16632 },
            end: { line: 355, column: 77, offset: 16708 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 16632 },
        end: { line: 355, column: 77, offset: 16708 }
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
            start: { line: 357, column: 7, offset: 16716 },
            end: { line: 357, column: 27, offset: 16736 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 16710 },
        end: { line: 357, column: 27, offset: 16736 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses to process the request under the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an ',
          position: {
            start: { line: 359, column: 1, offset: 16738 },
            end: { line: 359, column: 171, offset: 16908 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Upgrade',
          position: {
            start: { line: 359, column: 171, offset: 16908 },
            end: { line: 359, column: 180, offset: 16917 }
          }
        },
        {
          type: 'text',
          value: ' header in the response to indicate the required protocol(s).',
          position: {
            start: { line: 359, column: 180, offset: 16917 },
            end: { line: 359, column: 241, offset: 16978 }
          }
        }
      ],
      position: {
        start: { line: 359, column: 1, offset: 16738 },
        end: { line: 359, column: 241, offset: 16978 }
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
            start: { line: 361, column: 7, offset: 16986 },
            end: { line: 361, column: 32, offset: 17011 }
          }
        }
      ],
      position: {
        start: { line: 361, column: 1, offset: 16980 },
        end: { line: 361, column: 32, offset: 17011 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The origin server requires the request to be ',
          position: {
            start: { line: 363, column: 1, offset: 17013 },
            end: { line: 363, column: 46, offset: 17058 }
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
                start: { line: 363, column: 47, offset: 17059 },
                end: { line: 363, column: 58, offset: 17070 }
              }
            }
          ],
          position: {
            start: { line: 363, column: 46, offset: 17058 },
            end: { line: 363, column: 138, offset: 17150 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 363, column: 138, offset: 17150 },
            end: { line: 363, column: 139, offset: 17151 }
          }
        }
      ],
      position: {
        start: { line: 363, column: 1, offset: 17013 },
        end: { line: 363, column: 139, offset: 17151 }
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
            start: { line: 365, column: 7, offset: 17159 },
            end: { line: 365, column: 28, offset: 17180 }
          }
        }
      ],
      position: {
        start: { line: 365, column: 1, offset: 17153 },
        end: { line: 365, column: 28, offset: 17180 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client has sent too many requests in a given time period. See ',
          position: {
            start: { line: 367, column: 1, offset: 17182 },
            end: { line: 367, column: 67, offset: 17248 }
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
                start: { line: 367, column: 68, offset: 17249 },
                end: { line: 367, column: 81, offset: 17262 }
              }
            }
          ],
          position: {
            start: { line: 367, column: 67, offset: 17248 },
            end: { line: 367, column: 144, offset: 17325 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 367, column: 144, offset: 17325 },
            end: { line: 367, column: 145, offset: 17326 }
          }
        }
      ],
      position: {
        start: { line: 367, column: 1, offset: 17182 },
        end: { line: 367, column: 145, offset: 17326 }
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
            start: { line: 369, column: 7, offset: 17334 },
            end: { line: 369, column: 42, offset: 17369 }
          }
        }
      ],
      position: {
        start: { line: 369, column: 1, offset: 17328 },
        end: { line: 369, column: 42, offset: 17369 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request header fields are too large.',
          position: {
            start: { line: 371, column: 1, offset: 17371 },
            end: { line: 371, column: 41, offset: 17411 }
          }
        }
      ],
      position: {
        start: { line: 371, column: 1, offset: 17371 },
        end: { line: 371, column: 41, offset: 17411 }
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
            start: { line: 373, column: 7, offset: 17419 },
            end: { line: 373, column: 40, offset: 17452 }
          }
        }
      ],
      position: {
        start: { line: 373, column: 1, offset: 17413 },
        end: { line: 373, column: 40, offset: 17452 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is unavailable due to legal reasons.',
          position: {
            start: { line: 375, column: 1, offset: 17454 },
            end: { line: 375, column: 60, offset: 17513 }
          }
        }
      ],
      position: {
        start: { line: 375, column: 1, offset: 17454 },
        end: { line: 375, column: 60, offset: 17513 }
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
            start: { line: 377, column: 6, offset: 17520 },
            end: { line: 377, column: 41, offset: 17555 }
          }
        }
      ],
      position: {
        start: { line: 377, column: 1, offset: 17515 },
        end: { line: 377, column: 41, offset: 17555 }
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
            start: { line: 379, column: 7, offset: 17563 },
            end: { line: 379, column: 32, offset: 17588 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 17557 },
        end: { line: 379, column: 32, offset: 17588 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has encountered a situation it does not know how to handle.',
          position: {
            start: { line: 381, column: 1, offset: 17590 },
            end: { line: 381, column: 71, offset: 17660 }
          }
        }
      ],
      position: {
        start: { line: 381, column: 1, offset: 17590 },
        end: { line: 381, column: 71, offset: 17660 }
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
            start: { line: 383, column: 7, offset: 17668 },
            end: { line: 383, column: 26, offset: 17687 }
          }
        }
      ],
      position: {
        start: { line: 383, column: 1, offset: 17662 },
        end: { line: 383, column: 26, offset: 17687 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is not supported by the server and cannot be handled.',
          position: {
            start: { line: 385, column: 1, offset: 17689 },
            end: { line: 385, column: 73, offset: 17761 }
          }
        }
      ],
      position: {
        start: { line: 385, column: 1, offset: 17689 },
        end: { line: 385, column: 73, offset: 17761 }
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
            start: { line: 387, column: 7, offset: 17769 },
            end: { line: 387, column: 22, offset: 17784 }
          }
        }
      ],
      position: {
        start: { line: 387, column: 1, offset: 17763 },
        end: { line: 387, column: 22, offset: 17784 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The gateway server received an invalid response from an upstream server or origin server.',
          position: {
            start: { line: 389, column: 1, offset: 17786 },
            end: { line: 389, column: 90, offset: 17875 }
          }
        }
      ],
      position: {
        start: { line: 389, column: 1, offset: 17786 },
        end: { line: 389, column: 90, offset: 17875 }
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
            start: { line: 391, column: 7, offset: 17883 },
            end: { line: 391, column: 30, offset: 17906 }
          }
        }
      ],
      position: {
        start: { line: 391, column: 1, offset: 17877 },
        end: { line: 391, column: 30, offset: 17906 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is not ready to handle the request.',
          position: {
            start: { line: 393, column: 1, offset: 17908 },
            end: { line: 393, column: 47, offset: 17954 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 17908 },
        end: { line: 393, column: 47, offset: 17954 }
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
            start: { line: 395, column: 7, offset: 17962 },
            end: { line: 395, column: 26, offset: 17981 }
          }
        }
      ],
      position: {
        start: { line: 395, column: 1, offset: 17956 },
        end: { line: 395, column: 26, offset: 17981 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The gateway server's request to an upstream server or origin server timed out.",
          position: {
            start: { line: 397, column: 1, offset: 17983 },
            end: { line: 397, column: 79, offset: 18061 }
          }
        }
      ],
      position: {
        start: { line: 397, column: 1, offset: 17983 },
        end: { line: 397, column: 79, offset: 18061 }
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
            start: { line: 399, column: 7, offset: 18069 },
            end: { line: 399, column: 37, offset: 18099 }
          }
        }
      ],
      position: {
        start: { line: 399, column: 1, offset: 18063 },
        end: { line: 399, column: 37, offset: 18099 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP version used in the request is not supported by the server.',
          position: {
            start: { line: 401, column: 1, offset: 18101 },
            end: { line: 401, column: 69, offset: 18169 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 18101 },
        end: { line: 401, column: 69, offset: 18169 }
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
            start: { line: 403, column: 7, offset: 18177 },
            end: { line: 403, column: 34, offset: 18204 }
          }
        }
      ],
      position: {
        start: { line: 403, column: 1, offset: 18171 },
        end: { line: 403, column: 34, offset: 18204 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has an internal configuration error related to content negotiation.',
          position: {
            start: { line: 405, column: 1, offset: 18206 },
            end: { line: 405, column: 79, offset: 18284 }
          }
        }
      ],
      position: {
        start: { line: 405, column: 1, offset: 18206 },
        end: { line: 405, column: 79, offset: 18284 }
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
            start: { line: 407, column: 7, offset: 18292 },
            end: { line: 407, column: 31, offset: 18316 }
          }
        }
      ],
      position: {
        start: { line: 407, column: 1, offset: 18286 },
        end: { line: 407, column: 31, offset: 18316 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server does not have enough available storage to successfully process the request.',
          position: {
            start: { line: 409, column: 1, offset: 18318 },
            end: { line: 409, column: 87, offset: 18404 }
          }
        }
      ],
      position: {
        start: { line: 409, column: 1, offset: 18318 },
        end: { line: 409, column: 87, offset: 18404 }
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
            start: { line: 411, column: 7, offset: 18412 },
            end: { line: 411, column: 24, offset: 18429 }
          }
        }
      ],
      position: {
        start: { line: 411, column: 1, offset: 18406 },
        end: { line: 411, column: 24, offset: 18429 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server detected an infinite loop while processing the request.',
          position: {
            start: { line: 413, column: 1, offset: 18431 },
            end: { line: 413, column: 67, offset: 18497 }
          }
        }
      ],
      position: {
        start: { line: 413, column: 1, offset: 18431 },
        end: { line: 413, column: 67, offset: 18497 }
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
            start: { line: 415, column: 7, offset: 18505 },
            end: { line: 415, column: 23, offset: 18521 }
          }
        }
      ],
      position: {
        start: { line: 415, column: 1, offset: 18499 },
        end: { line: 415, column: 23, offset: 18521 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client declares an HTTP Extension (',
          position: {
            start: { line: 417, column: 1, offset: 18523 },
            end: { line: 417, column: 40, offset: 18562 }
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
                start: { line: 417, column: 41, offset: 18563 },
                end: { line: 417, column: 49, offset: 18571 }
              }
            }
          ],
          position: {
            start: { line: 417, column: 40, offset: 18562 },
            end: { line: 417, column: 97, offset: 18619 }
          }
        },
        {
          type: 'text',
          value: ') that should be used to process the request, but the extension is not supported by the server.',
          position: {
            start: { line: 417, column: 97, offset: 18619 },
            end: { line: 417, column: 192, offset: 18714 }
          }
        }
      ],
      position: {
        start: { line: 417, column: 1, offset: 18523 },
        end: { line: 417, column: 192, offset: 18714 }
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
            start: { line: 419, column: 7, offset: 18722 },
            end: { line: 419, column: 42, offset: 18757 }
          }
        }
      ],
      position: {
        start: { line: 419, column: 1, offset: 18716 },
        end: { line: 419, column: 42, offset: 18757 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client needs to authenticate to gain network access.',
          position: {
            start: { line: 421, column: 1, offset: 18759 },
            end: { line: 421, column: 57, offset: 18815 }
          }
        }
      ],
      position: {
        start: { line: 421, column: 1, offset: 18759 },
        end: { line: 421, column: 57, offset: 18815 }
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
            start: { line: 423, column: 5, offset: 18821 },
            end: { line: 423, column: 26, offset: 18842 }
          }
        }
      ],
      position: {
        start: { line: 423, column: 1, offset: 18817 },
        end: { line: 423, column: 26, offset: 18842 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP response headers are key-value pairs assigned to each response. HTTP response headers pass additional context and metadata about the response.',
          position: {
            start: { line: 425, column: 1, offset: 18844 },
            end: { line: 425, column: 148, offset: 18991 }
          }
        }
      ],
      position: {
        start: { line: 425, column: 1, offset: 18844 },
        end: { line: 425, column: 148, offset: 18991 }
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
            start: { line: 427, column: 5, offset: 18997 },
            end: { line: 427, column: 23, offset: 19015 }
          }
        }
      ],
      position: {
        start: { line: 427, column: 1, offset: 18993 },
        end: { line: 427, column: 23, offset: 19015 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response body is the part of the response that carries the bulk of the data sent back to the client. The content type of the response body should be specified in the response's ",
          position: {
            start: { line: 429, column: 1, offset: 19017 },
            end: { line: 429, column: 187, offset: 19203 }
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
                start: { line: 429, column: 188, offset: 19204 },
                end: { line: 429, column: 200, offset: 19216 }
              }
            }
          ],
          position: {
            start: { line: 429, column: 187, offset: 19203 },
            end: { line: 429, column: 283, offset: 19299 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 429, column: 283, offset: 19299 },
            end: { line: 429, column: 291, offset: 19307 }
          }
        }
      ],
      position: {
        start: { line: 429, column: 1, offset: 19017 },
        end: { line: 429, column: 291, offset: 19307 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP response bodies:',
          position: {
            start: { line: 431, column: 1, offset: 19309 },
            end: { line: 431, column: 39, offset: 19347 }
          }
        }
      ],
      position: {
        start: { line: 431, column: 1, offset: 19309 },
        end: { line: 431, column: 39, offset: 19347 }
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
                        start: { line: 432, column: 5, offset: 19352 },
                        end: { line: 432, column: 9, offset: 19356 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 432, column: 4, offset: 19351 },
                    end: { line: 432, column: 61, offset: 19408 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web pages. The method of the request is typically ',
                  position: {
                    start: { line: 432, column: 61, offset: 19408 },
                    end: { line: 432, column: 137, offset: 19484 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 432, column: 137, offset: 19484 },
                    end: { line: 432, column: 142, offset: 19489 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 432, column: 142, offset: 19489 },
                    end: { line: 432, column: 148, offset: 19495 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 432, column: 148, offset: 19495 },
                    end: { line: 432, column: 162, offset: 19509 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 432, column: 162, offset: 19509 },
                    end: { line: 432, column: 184, offset: 19531 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/html',
                  position: {
                    start: { line: 432, column: 184, offset: 19531 },
                    end: { line: 432, column: 195, offset: 19542 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 432, column: 195, offset: 19542 },
                    end: { line: 432, column: 196, offset: 19543 }
                  }
                }
              ],
              position: {
                start: { line: 432, column: 4, offset: 19351 },
                end: { line: 432, column: 196, offset: 19543 }
              }
            }
          ],
          position: {
            start: { line: 432, column: 2, offset: 19349 },
            end: { line: 432, column: 196, offset: 19543 }
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
                        start: { line: 433, column: 5, offset: 19548 },
                        end: { line: 433, column: 9, offset: 19552 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 433, column: 4, offset: 19547 },
                    end: { line: 433, column: 45, offset: 19588 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web applications. The method of the request is typically ',
                  position: {
                    start: { line: 433, column: 45, offset: 19588 },
                    end: { line: 433, column: 128, offset: 19671 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 433, column: 128, offset: 19671 },
                    end: { line: 433, column: 133, offset: 19676 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 433, column: 133, offset: 19676 },
                    end: { line: 433, column: 135, offset: 19678 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 433, column: 135, offset: 19678 },
                    end: { line: 433, column: 141, offset: 19684 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 433, column: 141, offset: 19684 },
                    end: { line: 433, column: 146, offset: 19689 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 433, column: 146, offset: 19689 },
                    end: { line: 433, column: 153, offset: 19696 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 433, column: 153, offset: 19696 },
                    end: { line: 433, column: 159, offset: 19702 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 433, column: 159, offset: 19702 },
                    end: { line: 433, column: 173, offset: 19716 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 433, column: 173, offset: 19716 },
                    end: { line: 433, column: 195, offset: 19738 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 433, column: 195, offset: 19738 },
                    end: { line: 433, column: 213, offset: 19756 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 433, column: 213, offset: 19756 },
                    end: { line: 433, column: 214, offset: 19757 }
                  }
                }
              ],
              position: {
                start: { line: 433, column: 4, offset: 19547 },
                end: { line: 433, column: 214, offset: 19757 }
              }
            }
          ],
          position: {
            start: { line: 433, column: 2, offset: 19545 },
            end: { line: 433, column: 214, offset: 19757 }
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
                        start: { line: 434, column: 5, offset: 19762 },
                        end: { line: 434, column: 8, offset: 19765 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 4, offset: 19761 },
                    end: { line: 434, column: 46, offset: 19803 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for ',
                  position: {
                    start: { line: 434, column: 46, offset: 19803 },
                    end: { line: 434, column: 72, offset: 19829 }
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
                        start: { line: 434, column: 73, offset: 19830 },
                        end: { line: 434, column: 81, offset: 19838 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 72, offset: 19829 },
                    end: { line: 434, column: 161, offset: 19918 }
                  }
                },
                {
                  type: 'text',
                  value: ' or web applications. The method of the request can be ',
                  position: {
                    start: { line: 434, column: 161, offset: 19918 },
                    end: { line: 434, column: 216, offset: 19973 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 434, column: 216, offset: 19973 },
                    end: { line: 434, column: 221, offset: 19978 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 221, offset: 19978 },
                    end: { line: 434, column: 223, offset: 19980 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 434, column: 223, offset: 19980 },
                    end: { line: 434, column: 228, offset: 19985 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 228, offset: 19985 },
                    end: { line: 434, column: 230, offset: 19987 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 434, column: 230, offset: 19987 },
                    end: { line: 434, column: 236, offset: 19993 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 434, column: 236, offset: 19993 },
                    end: { line: 434, column: 241, offset: 19998 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 434, column: 241, offset: 19998 },
                    end: { line: 434, column: 248, offset: 20005 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 434, column: 248, offset: 20005 },
                    end: { line: 434, column: 254, offset: 20011 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 434, column: 254, offset: 20011 },
                    end: { line: 434, column: 268, offset: 20025 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 434, column: 268, offset: 20025 },
                    end: { line: 434, column: 289, offset: 20046 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/xml',
                  position: {
                    start: { line: 434, column: 289, offset: 20046 },
                    end: { line: 434, column: 306, offset: 20063 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 434, column: 306, offset: 20063 },
                    end: { line: 434, column: 310, offset: 20067 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/xml',
                  position: {
                    start: { line: 434, column: 310, offset: 20067 },
                    end: { line: 434, column: 320, offset: 20077 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 434, column: 320, offset: 20077 },
                    end: { line: 434, column: 321, offset: 20078 }
                  }
                }
              ],
              position: {
                start: { line: 434, column: 4, offset: 19761 },
                end: { line: 434, column: 321, offset: 20078 }
              }
            }
          ],
          position: {
            start: { line: 434, column: 2, offset: 19759 },
            end: { line: 434, column: 321, offset: 20078 }
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
                    start: { line: 435, column: 4, offset: 20082 },
                    end: { line: 435, column: 91, offset: 20169 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 435, column: 91, offset: 20169 },
                    end: { line: 435, column: 96, offset: 20174 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 435, column: 96, offset: 20174 },
                    end: { line: 435, column: 102, offset: 20180 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 435, column: 102, offset: 20180 },
                    end: { line: 435, column: 116, offset: 20194 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 435, column: 116, offset: 20194 },
                    end: { line: 435, column: 137, offset: 20215 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 435, column: 137, offset: 20215 },
                    end: { line: 435, column: 149, offset: 20227 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 149, offset: 20227 },
                    end: { line: 435, column: 151, offset: 20229 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 435, column: 151, offset: 20229 },
                    end: { line: 435, column: 162, offset: 20240 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 162, offset: 20240 },
                    end: { line: 435, column: 164, offset: 20242 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 435, column: 164, offset: 20242 },
                    end: { line: 435, column: 176, offset: 20254 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 176, offset: 20254 },
                    end: { line: 435, column: 178, offset: 20256 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 435, column: 178, offset: 20256 },
                    end: { line: 435, column: 191, offset: 20269 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 435, column: 191, offset: 20269 },
                    end: { line: 435, column: 196, offset: 20274 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 435, column: 196, offset: 20274 },
                    end: { line: 435, column: 207, offset: 20285 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 435, column: 207, offset: 20285 },
                    end: { line: 435, column: 208, offset: 20286 }
                  }
                }
              ],
              position: {
                start: { line: 435, column: 4, offset: 20082 },
                end: { line: 435, column: 208, offset: 20286 }
              }
            }
          ],
          position: {
            start: { line: 435, column: 2, offset: 20080 },
            end: { line: 435, column: 208, offset: 20286 }
          }
        }
      ],
      position: {
        start: { line: 432, column: 2, offset: 19349 },
        end: { line: 435, column: 208, offset: 20286 }
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
            start: { line: 437, column: 4, offset: 20291 },
            end: { line: 437, column: 15, offset: 20302 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 20288 },
        end: { line: 437, column: 15, offset: 20302 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 439, column: 1, offset: 20304 },
            end: { line: 439, column: 226, offset: 20529 }
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
                start: { line: 439, column: 227, offset: 20530 },
                end: { line: 439, column: 233, offset: 20536 }
              }
            }
          ],
          position: {
            start: { line: 439, column: 226, offset: 20529 },
            end: { line: 439, column: 257, offset: 20560 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 439, column: 257, offset: 20560 },
            end: { line: 439, column: 371, offset: 20674 }
          }
        }
      ],
      position: {
        start: { line: 439, column: 1, offset: 20304 },
        end: { line: 439, column: 371, offset: 20674 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 441, column: 1, offset: 20676 },
            end: { line: 441, column: 23, offset: 20698 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 441, column: 23, offset: 20698 },
            end: { line: 441, column: 29, offset: 20704 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 441, column: 29, offset: 20704 },
            end: { line: 441, column: 62, offset: 20737 }
          }
        }
      ],
      position: {
        start: { line: 441, column: 1, offset: 20676 },
        end: { line: 441, column: 62, offset: 20737 }
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
        start: { line: 443, column: 1, offset: 20739 },
        end: { line: 456, column: 4, offset: 20975 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates a NodeJS HTTP server with ',
          position: {
            start: { line: 458, column: 1, offset: 20977 },
            end: { line: 458, column: 58, offset: 21034 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 458, column: 58, offset: 21034 },
            end: { line: 458, column: 77, offset: 21053 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 458, column: 77, offset: 21053 },
            end: { line: 458, column: 106, offset: 21082 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 458, column: 106, offset: 21082 },
            end: { line: 458, column: 136, offset: 21112 }
          }
        },
        {
          type: 'text',
          value: ' that only responds with status ',
          position: {
            start: { line: 458, column: 136, offset: 21112 },
            end: { line: 458, column: 168, offset: 21144 }
          }
        },
        {
          type: 'inlineCode',
          value: '200',
          position: {
            start: { line: 458, column: 168, offset: 21144 },
            end: { line: 458, column: 173, offset: 21149 }
          }
        },
        {
          type: 'text',
          value: ' and body ',
          position: {
            start: { line: 458, column: 173, offset: 21149 },
            end: { line: 458, column: 183, offset: 21159 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ok',
          position: {
            start: { line: 458, column: 183, offset: 21159 },
            end: { line: 458, column: 187, offset: 21163 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 458, column: 187, offset: 21163 },
            end: { line: 458, column: 230, offset: 21206 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 458, column: 230, offset: 21206 },
            end: { line: 458, column: 236, offset: 21212 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 458, column: 236, offset: 21212 },
            end: { line: 458, column: 254, offset: 21230 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 458, column: 254, offset: 21230 },
            end: { line: 458, column: 269, offset: 21245 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 458, column: 269, offset: 21245 },
            end: { line: 458, column: 270, offset: 21246 }
          }
        }
      ],
      position: {
        start: { line: 458, column: 1, offset: 20977 },
        end: { line: 458, column: 270, offset: 21246 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 460, column: 1, offset: 21248 },
            end: { line: 460, column: 45, offset: 21292 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 21248 },
        end: { line: 460, column: 45, offset: 21292 }
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
                        start: { line: 461, column: 5, offset: 21297 },
                        end: { line: 461, column: 9, offset: 21301 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 461, column: 4, offset: 21296 },
                    end: { line: 461, column: 29, offset: 21321 }
                  }
                }
              ],
              position: {
                start: { line: 461, column: 4, offset: 21296 },
                end: { line: 461, column: 29, offset: 21321 }
              }
            }
          ],
          position: {
            start: { line: 461, column: 2, offset: 21294 },
            end: { line: 461, column: 29, offset: 21321 }
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
                        start: { line: 462, column: 5, offset: 21326 },
                        end: { line: 462, column: 9, offset: 21330 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 462, column: 4, offset: 21325 },
                    end: { line: 462, column: 29, offset: 21350 }
                  }
                }
              ],
              position: {
                start: { line: 462, column: 4, offset: 21325 },
                end: { line: 462, column: 29, offset: 21350 }
              }
            }
          ],
          position: {
            start: { line: 462, column: 2, offset: 21323 },
            end: { line: 462, column: 29, offset: 21350 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 2, offset: 21294 },
        end: { line: 462, column: 29, offset: 21350 }
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
            start: { line: 464, column: 5, offset: 21356 },
            end: { line: 464, column: 21, offset: 21372 }
          }
        }
      ],
      position: {
        start: { line: 464, column: 1, offset: 21352 },
        end: { line: 464, column: 21, offset: 21372 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server port is a number that represents the network port on which the server is listening. A network port is a logical communication endpoint within a network. The value for the port can range from 0 and 65535. In the above example, we created an HTTP web server that listened on port ',
          position: {
            start: { line: 466, column: 1, offset: 21374 },
            end: { line: 466, column: 295, offset: 21668 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 466, column: 295, offset: 21668 },
            end: { line: 466, column: 301, offset: 21674 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 466, column: 301, offset: 21674 },
            end: { line: 466, column: 302, offset: 21675 }
          }
        }
      ],
      position: {
        start: { line: 466, column: 1, offset: 21374 },
        end: { line: 466, column: 302, offset: 21675 }
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
            start: { line: 468, column: 5, offset: 21681 },
            end: { line: 468, column: 21, offset: 21697 }
          }
        }
      ],
      position: {
        start: { line: 468, column: 1, offset: 21677 },
        end: { line: 468, column: 21, offset: 21697 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server host is the IP address of the ',
          position: {
            start: { line: 470, column: 1, offset: 21699 },
            end: { line: 470, column: 47, offset: 21745 }
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
                start: { line: 470, column: 48, offset: 21746 },
                end: { line: 470, column: 62, offset: 21760 }
              }
            }
          ],
          position: {
            start: { line: 470, column: 47, offset: 21745 },
            end: { line: 470, column: 134, offset: 21832 }
          }
        },
        {
          type: 'text',
          value: ' on which the server is running.',
          position: {
            start: { line: 470, column: 134, offset: 21832 },
            end: { line: 470, column: 166, offset: 21864 }
          }
        }
      ],
      position: {
        start: { line: 470, column: 1, offset: 21699 },
        end: { line: 470, column: 166, offset: 21864 }
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
            start: { line: 472, column: 4, offset: 21869 },
            end: { line: 472, column: 16, offset: 21881 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 21866 },
        end: { line: 472, column: 16, offset: 21881 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 474, column: 1, offset: 21883 },
            end: { line: 474, column: 109, offset: 21991 }
          }
        }
      ],
      position: {
        start: { line: 474, column: 1, offset: 21883 },
        end: { line: 474, column: 109, offset: 21991 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 476, column: 1, offset: 21993 },
            end: { line: 476, column: 61, offset: 22053 }
          }
        }
      ],
      position: {
        start: { line: 476, column: 1, offset: 21993 },
        end: { line: 476, column: 61, offset: 22053 }
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
                    start: { line: 477, column: 4, offset: 22057 },
                    end: { line: 477, column: 74, offset: 22127 }
                  }
                }
              ],
              position: {
                start: { line: 477, column: 4, offset: 22057 },
                end: { line: 477, column: 74, offset: 22127 }
              }
            }
          ],
          position: {
            start: { line: 477, column: 2, offset: 22055 },
            end: { line: 477, column: 74, offset: 22127 }
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
                    start: { line: 478, column: 4, offset: 22131 },
                    end: { line: 478, column: 52, offset: 22179 }
                  }
                }
              ],
              position: {
                start: { line: 478, column: 4, offset: 22131 },
                end: { line: 478, column: 52, offset: 22179 }
              }
            }
          ],
          position: {
            start: { line: 478, column: 2, offset: 22129 },
            end: { line: 478, column: 52, offset: 22179 }
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
                    start: { line: 479, column: 4, offset: 22183 },
                    end: { line: 479, column: 237, offset: 22416 }
                  }
                }
              ],
              position: {
                start: { line: 479, column: 4, offset: 22183 },
                end: { line: 479, column: 237, offset: 22416 }
              }
            }
          ],
          position: {
            start: { line: 479, column: 2, offset: 22181 },
            end: { line: 479, column: 237, offset: 22416 }
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
                    start: { line: 480, column: 4, offset: 22420 },
                    end: { line: 480, column: 128, offset: 22544 }
                  }
                }
              ],
              position: {
                start: { line: 480, column: 4, offset: 22420 },
                end: { line: 480, column: 128, offset: 22544 }
              }
            }
          ],
          position: {
            start: { line: 480, column: 2, offset: 22418 },
            end: { line: 480, column: 128, offset: 22544 }
          }
        }
      ],
      position: {
        start: { line: 477, column: 2, offset: 22055 },
        end: { line: 480, column: 128, offset: 22544 }
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
            start: { line: 482, column: 5, offset: 22550 },
            end: { line: 482, column: 28, offset: 22573 }
          }
        }
      ],
      position: {
        start: { line: 482, column: 1, offset: 22546 },
        end: { line: 482, column: 28, offset: 22573 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 484, column: 1, offset: 22575 },
            end: { line: 484, column: 33, offset: 22607 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 484, column: 33, offset: 22607 },
            end: { line: 484, column: 39, offset: 22613 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 484, column: 39, offset: 22613 },
            end: { line: 484, column: 161, offset: 22735 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 484, column: 161, offset: 22735 },
            end: { line: 484, column: 176, offset: 22750 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 484, column: 176, offset: 22750 },
            end: { line: 484, column: 184, offset: 22758 }
          }
        }
      ],
      position: {
        start: { line: 484, column: 1, offset: 22575 },
        end: { line: 484, column: 184, offset: 22758 }
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
        start: { line: 486, column: 1, offset: 22760 },
        end: { line: 499, column: 4, offset: 23085 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 501, column: 1, offset: 23087 },
            end: { line: 501, column: 12, offset: 23098 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 501, column: 12, offset: 23098 },
            end: { line: 501, column: 18, offset: 23104 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 501, column: 18, offset: 23104 },
            end: { line: 501, column: 88, offset: 23174 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 501, column: 88, offset: 23174 },
            end: { line: 501, column: 104, offset: 23190 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 501, column: 104, offset: 23190 },
            end: { line: 501, column: 113, offset: 23199 }
          }
        }
      ],
      position: {
        start: { line: 501, column: 1, offset: 23087 },
        end: { line: 501, column: 113, offset: 23199 }
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
        start: { line: 503, column: 1, offset: 23201 },
        end: { line: 509, column: 4, offset: 23398 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 511, column: 1, offset: 23400 },
            end: { line: 511, column: 35, offset: 23434 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 511, column: 35, offset: 23434 },
            end: { line: 511, column: 50, offset: 23449 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 511, column: 50, offset: 23449 },
            end: { line: 511, column: 55, offset: 23454 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 511, column: 55, offset: 23454 },
            end: { line: 511, column: 71, offset: 23470 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 511, column: 71, offset: 23470 },
            end: { line: 511, column: 112, offset: 23511 }
          }
        }
      ],
      position: {
        start: { line: 511, column: 1, offset: 23400 },
        end: { line: 511, column: 112, offset: 23511 }
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
        start: { line: 513, column: 1, offset: 23513 },
        end: { line: 528, column: 4, offset: 23944 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 530, column: 1, offset: 23946 },
            end: { line: 530, column: 81, offset: 24026 }
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
                start: { line: 530, column: 82, offset: 24027 },
                end: { line: 530, column: 93, offset: 24038 }
              }
            }
          ],
          position: {
            start: { line: 530, column: 81, offset: 24026 },
            end: { line: 530, column: 108, offset: 24053 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 530, column: 108, offset: 24053 },
            end: { line: 530, column: 117, offset: 24062 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 23946 },
        end: { line: 530, column: 117, offset: 24062 }
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
        start: { line: 532, column: 1, offset: 24064 },
        end: { line: 566, column: 4, offset: 24715 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server ',
          position: {
            start: { line: 568, column: 1, offset: 24717 },
            end: { line: 568, column: 17, offset: 24733 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server',
          position: {
            start: { line: 568, column: 17, offset: 24733 },
            end: { line: 568, column: 25, offset: 24741 }
          }
        },
        {
          type: 'text',
          value: ' created by the NodeJS ',
          position: {
            start: { line: 568, column: 25, offset: 24741 },
            end: { line: 568, column: 48, offset: 24764 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 568, column: 48, offset: 24764 },
            end: { line: 568, column: 54, offset: 24770 }
          }
        },
        {
          type: 'text',
          value: " module's ",
          position: {
            start: { line: 568, column: 54, offset: 24770 },
            end: { line: 568, column: 64, offset: 24780 }
          }
        },
        {
          type: 'inlineCode',
          value: 'createServer',
          position: {
            start: { line: 568, column: 64, offset: 24780 },
            end: { line: 568, column: 78, offset: 24794 }
          }
        },
        {
          type: 'text',
          value: ' accepts the HTTP handler ',
          position: {
            start: { line: 568, column: 78, offset: 24794 },
            end: { line: 568, column: 104, offset: 24820 }
          }
        },
        {
          type: 'inlineCode',
          value: 'handler',
          position: {
            start: { line: 568, column: 104, offset: 24820 },
            end: { line: 568, column: 113, offset: 24829 }
          }
        },
        {
          type: 'text',
          value: ' as a single argument. To start the server we only need to call ',
          position: {
            start: { line: 568, column: 113, offset: 24829 },
            end: { line: 568, column: 177, offset: 24893 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 568, column: 177, offset: 24893 },
            end: { line: 568, column: 192, offset: 24908 }
          }
        },
        {
          type: 'text',
          value: ', specifying port ',
          position: {
            start: { line: 568, column: 192, offset: 24908 },
            end: { line: 568, column: 210, offset: 24926 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 568, column: 210, offset: 24926 },
            end: { line: 568, column: 216, offset: 24932 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 568, column: 216, offset: 24932 },
            end: { line: 568, column: 217, offset: 24933 }
          }
        }
      ],
      position: {
        start: { line: 568, column: 1, offset: 24717 },
        end: { line: 568, column: 217, offset: 24933 }
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
            start: { line: 570, column: 5, offset: 24939 },
            end: { line: 570, column: 59, offset: 24993 }
          }
        }
      ],
      position: {
        start: { line: 570, column: 1, offset: 24935 },
        end: { line: 570, column: 59, offset: 24993 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In [A]synchronous Functional Programming, HTTP handlers are simple, reusable, and modular. Consider the following web server implementation with a complex HTTP handler:',
          position: {
            start: { line: 572, column: 1, offset: 24995 },
            end: { line: 572, column: 169, offset: 25163 }
          }
        }
      ],
      position: {
        start: { line: 572, column: 1, offset: 24995 },
        end: { line: 572, column: 169, offset: 25163 }
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
        start: { line: 574, column: 1, offset: 25165 },
        end: { line: 734, column: 4, offset: 29511 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above handler ',
          position: {
            start: { line: 736, column: 1, offset: 29513 },
            end: { line: 736, column: 19, offset: 29531 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 736, column: 19, offset: 29531 },
            end: { line: 736, column: 35, offset: 29547 }
          }
        },
        {
          type: 'text',
          value: ' has many responsibilities, including handling health checks, handling options requests, retrieving user resources, updating or creating user resources, and handling application errors.',
          position: {
            start: { line: 736, column: 35, offset: 29547 },
            end: { line: 736, column: 220, offset: 29732 }
          }
        }
      ],
      position: {
        start: { line: 736, column: 1, offset: 29513 },
        end: { line: 736, column: 220, offset: 29732 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, we can break down the above complex HTTP handler into simple, modular, and reusable handlers, then use the library ',
          position: {
            start: { line: 738, column: 1, offset: 29734 },
            end: { line: 738, column: 160, offset: 29893 }
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
                start: { line: 738, column: 161, offset: 29894 },
                end: { line: 738, column: 167, offset: 29900 }
              }
            }
          ],
          position: {
            start: { line: 738, column: 160, offset: 29893 },
            end: { line: 738, column: 190, offset: 29923 }
          }
        },
        {
          type: 'text',
          value: ' to combine those handlers in a meaningful way.',
          position: {
            start: { line: 738, column: 190, offset: 29923 },
            end: { line: 738, column: 237, offset: 29970 }
          }
        }
      ],
      position: {
        start: { line: 738, column: 1, offset: 29734 },
        end: { line: 738, column: 237, offset: 29970 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "First, let's break down the complex handler.",
          position: {
            start: { line: 740, column: 1, offset: 29972 },
            end: { line: 740, column: 45, offset: 30016 }
          }
        }
      ],
      position: {
        start: { line: 740, column: 1, offset: 29972 },
        end: { line: 740, column: 45, offset: 30016 }
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
        start: { line: 742, column: 1, offset: 30018 },
        end: { line: 890, column: 4, offset: 33674 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "We've broken down the complex handler ",
          position: {
            start: { line: 892, column: 1, offset: 33676 },
            end: { line: 892, column: 39, offset: 33714 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 892, column: 39, offset: 33714 },
            end: { line: 892, column: 55, offset: 33730 }
          }
        },
        {
          type: 'text',
          value: ' into smaller, simpler handlers ',
          position: {
            start: { line: 892, column: 55, offset: 33730 },
            end: { line: 892, column: 87, offset: 33762 }
          }
        },
        {
          type: 'inlineCode',
          value: 'healthCheckHandler',
          position: {
            start: { line: 892, column: 87, offset: 33762 },
            end: { line: 892, column: 107, offset: 33782 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 107, offset: 33782 },
            end: { line: 892, column: 109, offset: 33784 }
          }
        },
        {
          type: 'inlineCode',
          value: 'optionsHandler',
          position: {
            start: { line: 892, column: 109, offset: 33784 },
            end: { line: 892, column: 125, offset: 33800 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 125, offset: 33800 },
            end: { line: 892, column: 127, offset: 33802 }
          }
        },
        {
          type: 'inlineCode',
          value: 'getUserHandler',
          position: {
            start: { line: 892, column: 127, offset: 33802 },
            end: { line: 892, column: 143, offset: 33818 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 143, offset: 33818 },
            end: { line: 892, column: 145, offset: 33820 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notFoundHandler',
          position: {
            start: { line: 892, column: 145, offset: 33820 },
            end: { line: 892, column: 162, offset: 33837 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 892, column: 162, offset: 33837 },
            end: { line: 892, column: 168, offset: 33843 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 892, column: 168, offset: 33843 },
            end: { line: 892, column: 182, offset: 33857 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 892, column: 182, offset: 33857 },
            end: { line: 892, column: 183, offset: 33858 }
          }
        }
      ],
      position: {
        start: { line: 892, column: 1, offset: 33676 },
        end: { line: 892, column: 183, offset: 33858 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Now let's combine the smaller handlers using Rubico's ",
          position: {
            start: { line: 894, column: 1, offset: 33860 },
            end: { line: 894, column: 55, offset: 33914 }
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
                start: { line: 894, column: 56, offset: 33915 },
                end: { line: 894, column: 64, offset: 33923 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 55, offset: 33914 },
            end: { line: 894, column: 81, offset: 33940 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 894, column: 81, offset: 33940 },
            end: { line: 894, column: 86, offset: 33945 }
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
                start: { line: 894, column: 87, offset: 33946 },
                end: { line: 894, column: 97, offset: 33956 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 86, offset: 33945 },
            end: { line: 894, column: 116, offset: 33975 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 894, column: 116, offset: 33975 },
            end: { line: 894, column: 117, offset: 33976 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 33860 },
        end: { line: 894, column: 117, offset: 33976 }
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
        start: { line: 896, column: 1, offset: 33978 },
        end: { line: 918, column: 4, offset: 34505 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'combinedHandler',
          position: {
            start: { line: 920, column: 1, offset: 34507 },
            end: { line: 920, column: 18, offset: 34524 }
          }
        },
        {
          type: 'text',
          value: ' is functionally equivalent to ',
          position: {
            start: { line: 920, column: 18, offset: 34524 },
            end: { line: 920, column: 49, offset: 34555 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 920, column: 49, offset: 34555 },
            end: { line: 920, column: 65, offset: 34571 }
          }
        },
        {
          type: 'text',
          value: ', but is able to be expressed using a combination of smaller, simpler HTTP handlers. The benefits are as follows: being able to structure your application as small, simple components lends itself well to development, testing, and maintenance.',
          position: {
            start: { line: 920, column: 65, offset: 34571 },
            end: { line: 920, column: 307, offset: 34813 }
          }
        }
      ],
      position: {
        start: { line: 920, column: 1, offset: 34507 },
        end: { line: 920, column: 307, offset: 34813 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Development is quick and easy: where you once had to digest and add onto the entire complex component, now you only need to write a simple, greenfield component.',
          position: {
            start: { line: 922, column: 1, offset: 34815 },
            end: { line: 922, column: 162, offset: 34976 }
          }
        }
      ],
      position: {
        start: { line: 922, column: 1, offset: 34815 },
        end: { line: 922, column: 162, offset: 34976 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Testing is simplified: where you once had to write a complex integration test with many controls and conditions for the complex component, now you only need to write simple integration tests for the simple components.',
          position: {
            start: { line: 924, column: 1, offset: 34978 },
            end: { line: 924, column: 218, offset: 35195 }
          }
        }
      ],
      position: {
        start: { line: 924, column: 1, offset: 34978 },
        end: { line: 924, column: 218, offset: 35195 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The maintenance overhead is reduced: where you once had to concern yourself with testing changes over large areas of code with complex components, now you can reduce the burden to smaller areas of code with simple components.',
          position: {
            start: { line: 926, column: 1, offset: 35197 },
            end: { line: 926, column: 226, offset: 35422 }
          }
        }
      ],
      position: {
        start: { line: 926, column: 1, offset: 35197 },
        end: { line: 926, column: 226, offset: 35422 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Putting everything together:',
          position: {
            start: { line: 928, column: 1, offset: 35424 },
            end: { line: 928, column: 29, offset: 35452 }
          }
        }
      ],
      position: {
        start: { line: 928, column: 1, offset: 35424 },
        end: { line: 928, column: 29, offset: 35452 }
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
        start: { line: 930, column: 1, offset: 35454 },
        end: { line: 1107, column: 4, offset: 39687 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can find a working example of the above HTTP server code at ',
          position: {
            start: { line: 1109, column: 1, offset: 39689 },
            end: { line: 1109, column: 65, offset: 39753 }
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
                start: { line: 1109, column: 66, offset: 39754 },
                end: { line: 1109, column: 84, offset: 39772 }
              }
            }
          ],
          position: {
            start: { line: 1109, column: 65, offset: 39753 },
            end: { line: 1109, column: 166, offset: 39854 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1109, column: 166, offset: 39854 },
            end: { line: 1109, column: 167, offset: 39855 }
          }
        }
      ],
      position: {
        start: { line: 1109, column: 1, offset: 39689 },
        end: { line: 1109, column: 167, offset: 39855 }
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
            start: { line: 1111, column: 5, offset: 39861 },
            end: { line: 1111, column: 15, offset: 39871 }
          }
        }
      ],
      position: {
        start: { line: 1111, column: 1, offset: 39857 },
        end: { line: 1111, column: 15, offset: 39871 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Handling HTTP in [A]synchronous Functional Programming.',
          position: {
            start: { line: 1113, column: 1, offset: 39873 },
            end: { line: 1113, column: 71, offset: 39943 }
          }
        }
      ],
      position: {
        start: { line: 1113, column: 1, offset: 39873 },
        end: { line: 1113, column: 71, offset: 39943 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about Rubico and would like to get started, please visit Rubico's home page: ",
          position: {
            start: { line: 1115, column: 1, offset: 39945 },
            end: { line: 1115, column: 97, offset: 40041 }
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
                start: { line: 1115, column: 98, offset: 40042 },
                end: { line: 1115, column: 109, offset: 40053 }
              }
            }
          ],
          position: {
            start: { line: 1115, column: 97, offset: 40041 },
            end: { line: 1115, column: 113, offset: 40057 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1115, column: 113, offset: 40057 },
            end: { line: 1115, column: 114, offset: 40058 }
          }
        }
      ],
      position: {
        start: { line: 1115, column: 1, offset: 39945 },
        end: { line: 1115, column: 114, offset: 40058 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1116, column: 1, offset: 40059 }
  }
}