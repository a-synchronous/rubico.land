export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Handling HTTP\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-21\n' +
        'updated: 2025-07-06\n' +
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
          url: '/assets/http-diagram-2.jpg',
          alt: 'http-diagram.jpg',
          position: {
            start: { line: 19, column: 1, offset: 1200 },
            end: { line: 19, column: 48, offset: 1247 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1200 },
        end: { line: 19, column: 48, offset: 1247 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In order for clients to find the right servers to request, they need to use a URL.',
          position: {
            start: { line: 21, column: 1, offset: 1249 },
            end: { line: 21, column: 83, offset: 1331 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1249 },
        end: { line: 21, column: 83, offset: 1331 }
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
            start: { line: 23, column: 4, offset: 1336 },
            end: { line: 23, column: 7, offset: 1339 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1333 },
        end: { line: 23, column: 7, offset: 1339 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A URL (Uniform Resource Locator) is a string that uniquely identifies the web address of a resource on the internet. A resource is information or content that can be identified and accessed via a URL. A resources can be a file, an image, a document, or a record in a database.',
          position: {
            start: { line: 25, column: 1, offset: 1341 },
            end: { line: 25, column: 277, offset: 1617 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 1341 },
        end: { line: 25, column: 277, offset: 1617 }
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
            start: { line: 27, column: 1, offset: 1619 },
            end: { line: 27, column: 64, offset: 1682 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1619 },
        end: { line: 27, column: 64, offset: 1682 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The basic structure of a URL includes the following parts:',
          position: {
            start: { line: 29, column: 1, offset: 1684 },
            end: { line: 29, column: 59, offset: 1742 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 1684 },
        end: { line: 29, column: 59, offset: 1742 }
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
                        start: { line: 30, column: 5, offset: 1747 },
                        end: { line: 30, column: 11, offset: 1753 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 1746 },
                    end: { line: 30, column: 25, offset: 1767 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 4, offset: 1746 },
                end: { line: 30, column: 25, offset: 1767 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 1744 },
            end: { line: 30, column: 25, offset: 1767 }
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
                        start: { line: 31, column: 5, offset: 1772 },
                        end: { line: 31, column: 16, offset: 1783 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 1771 },
                    end: { line: 31, column: 35, offset: 1802 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1771 },
                end: { line: 31, column: 35, offset: 1802 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 1769 },
            end: { line: 31, column: 35, offset: 1802 }
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
                        start: { line: 32, column: 5, offset: 1807 },
                        end: { line: 32, column: 9, offset: 1811 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 1806 },
                    end: { line: 32, column: 21, offset: 1823 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1806 },
                end: { line: 32, column: 21, offset: 1823 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 1804 },
            end: { line: 32, column: 21, offset: 1823 }
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
                        start: { line: 33, column: 5, offset: 1828 },
                        end: { line: 33, column: 14, offset: 1837 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 1827 },
                    end: { line: 33, column: 31, offset: 1854 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1827 },
                end: { line: 33, column: 31, offset: 1854 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 1825 },
            end: { line: 33, column: 31, offset: 1854 }
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
                        start: { line: 34, column: 5, offset: 1859 },
                        end: { line: 34, column: 9, offset: 1863 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 34, column: 4, offset: 1858 },
                    end: { line: 34, column: 21, offset: 1875 }
                  }
                }
              ],
              position: {
                start: { line: 34, column: 4, offset: 1858 },
                end: { line: 34, column: 21, offset: 1875 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 2, offset: 1856 },
            end: { line: 34, column: 21, offset: 1875 }
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
                        start: { line: 35, column: 5, offset: 1880 },
                        end: { line: 35, column: 21, offset: 1896 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 35, column: 4, offset: 1879 },
                    end: { line: 35, column: 45, offset: 1920 }
                  }
                }
              ],
              position: {
                start: { line: 35, column: 4, offset: 1879 },
                end: { line: 35, column: 45, offset: 1920 }
              }
            }
          ],
          position: {
            start: { line: 35, column: 2, offset: 1877 },
            end: { line: 35, column: 45, offset: 1920 }
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
                        start: { line: 36, column: 5, offset: 1925 },
                        end: { line: 36, column: 11, offset: 1931 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 36, column: 4, offset: 1924 },
                    end: { line: 36, column: 25, offset: 1945 }
                  }
                }
              ],
              position: {
                start: { line: 36, column: 4, offset: 1924 },
                end: { line: 36, column: 25, offset: 1945 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 2, offset: 1922 },
            end: { line: 36, column: 25, offset: 1945 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 2, offset: 1744 },
        end: { line: 36, column: 25, offset: 1945 }
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
            start: { line: 38, column: 5, offset: 1951 },
            end: { line: 38, column: 15, offset: 1961 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1947 },
        end: { line: 38, column: 15, offset: 1961 }
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
            start: { line: 40, column: 1, offset: 1963 },
            end: { line: 40, column: 78, offset: 2040 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1963 },
        end: { line: 40, column: 78, offset: 2040 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The scheme of a URL specifies the protocol that the client will use to send a request to the server. For HTTP, the scheme could be ',
          position: {
            start: { line: 42, column: 1, offset: 2042 },
            end: { line: 42, column: 132, offset: 2173 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 42, column: 132, offset: 2173 },
            end: { line: 42, column: 138, offset: 2179 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 42, column: 138, offset: 2179 },
            end: { line: 42, column: 142, offset: 2183 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https',
          position: {
            start: { line: 42, column: 142, offset: 2183 },
            end: { line: 42, column: 149, offset: 2190 }
          }
        },
        {
          type: 'text',
          value: '. Other schemes include ',
          position: {
            start: { line: 42, column: 149, offset: 2190 },
            end: { line: 42, column: 173, offset: 2214 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ws',
          position: {
            start: { line: 42, column: 173, offset: 2214 },
            end: { line: 42, column: 177, offset: 2218 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 42, column: 177, offset: 2218 },
            end: { line: 42, column: 182, offset: 2223 }
          }
        },
        {
          type: 'inlineCode',
          value: 'wss',
          position: {
            start: { line: 42, column: 182, offset: 2223 },
            end: { line: 42, column: 187, offset: 2228 }
          }
        },
        {
          type: 'text',
          value: ' for the ',
          position: {
            start: { line: 42, column: 187, offset: 2228 },
            end: { line: 42, column: 196, offset: 2237 }
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
                start: { line: 42, column: 197, offset: 2238 },
                end: { line: 42, column: 206, offset: 2247 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 196, offset: 2237 },
            end: { line: 42, column: 228, offset: 2269 }
          }
        },
        {
          type: 'text',
          value: ' protocol, ',
          position: {
            start: { line: 42, column: 228, offset: 2269 },
            end: { line: 42, column: 239, offset: 2280 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mailto',
          position: {
            start: { line: 42, column: 239, offset: 2280 },
            end: { line: 42, column: 247, offset: 2288 }
          }
        },
        {
          type: 'text',
          value: ' for the "mailto:" protocol, and ',
          position: {
            start: { line: 42, column: 247, offset: 2288 },
            end: { line: 42, column: 280, offset: 2321 }
          }
        },
        {
          type: 'inlineCode',
          value: 'file',
          position: {
            start: { line: 42, column: 280, offset: 2321 },
            end: { line: 42, column: 286, offset: 2327 }
          }
        },
        {
          type: 'text',
          value: ' for the "file:" protocol.',
          position: {
            start: { line: 42, column: 286, offset: 2327 },
            end: { line: 42, column: 312, offset: 2353 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 2042 },
        end: { line: 42, column: 312, offset: 2353 }
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
            start: { line: 44, column: 5, offset: 2359 },
            end: { line: 44, column: 20, offset: 2374 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 2355 },
        end: { line: 44, column: 20, offset: 2374 }
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
            start: { line: 46, column: 1, offset: 2376 },
            end: { line: 46, column: 88, offset: 2463 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 2376 },
        end: { line: 46, column: 88, offset: 2463 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The domain name of a URL is a unique name that translates to the address of a computer where the resource of the URL is located. Domain names are translated via the ',
          position: {
            start: { line: 48, column: 1, offset: 2465 },
            end: { line: 48, column: 166, offset: 2630 }
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
                start: { line: 48, column: 167, offset: 2631 },
                end: { line: 48, column: 191, offset: 2655 }
              }
            }
          ],
          position: {
            start: { line: 48, column: 166, offset: 2630 },
            end: { line: 48, column: 246, offset: 2710 }
          }
        },
        {
          type: 'text',
          value: ' to computer addresses running web servers to which HTTP clients can send requests.',
          position: {
            start: { line: 48, column: 246, offset: 2710 },
            end: { line: 48, column: 329, offset: 2793 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 2465 },
        end: { line: 48, column: 329, offset: 2793 }
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
            start: { line: 50, column: 5, offset: 2799 },
            end: { line: 50, column: 13, offset: 2807 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 2795 },
        end: { line: 50, column: 13, offset: 2807 }
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
            start: { line: 52, column: 1, offset: 2809 },
            end: { line: 52, column: 74, offset: 2882 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2809 },
        end: { line: 52, column: 74, offset: 2882 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The port of a URL is a number that identifies a specific process or network service running on the computer where the resource of the URL is located. When a computer starts up a process like a web server, it can assign it a numerical port between 0 and 65535. The web server would then listen on this assigned port for HTTP requests.',
          position: {
            start: { line: 54, column: 1, offset: 2884 },
            end: { line: 54, column: 334, offset: 3217 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 2884 },
        end: { line: 54, column: 334, offset: 3217 }
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
            start: { line: 56, column: 5, offset: 3223 },
            end: { line: 56, column: 18, offset: 3236 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 3219 },
        end: { line: 56, column: 18, offset: 3236 }
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
            start: { line: 58, column: 1, offset: 3238 },
            end: { line: 58, column: 84, offset: 3321 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 3238 },
        end: { line: 58, column: 84, offset: 3321 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The authority of a URL consists of the domain name and port of the URL separated by a colon.',
          position: {
            start: { line: 60, column: 1, offset: 3323 },
            end: { line: 60, column: 93, offset: 3415 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3323 },
        end: { line: 60, column: 93, offset: 3415 }
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
            start: { line: 62, column: 5, offset: 3421 },
            end: { line: 62, column: 13, offset: 3429 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3417 },
        end: { line: 62, column: 13, offset: 3429 }
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
            start: { line: 64, column: 1, offset: 3431 },
            end: { line: 64, column: 74, offset: 3504 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 3431 },
        end: { line: 64, column: 74, offset: 3504 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The path of a URL is a string that identifies the physical or abstract location of the resource within the URL's domain.",
          position: {
            start: { line: 66, column: 1, offset: 3506 },
            end: { line: 66, column: 121, offset: 3626 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3506 },
        end: { line: 66, column: 121, offset: 3626 }
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
            start: { line: 68, column: 5, offset: 3632 },
            end: { line: 68, column: 25, offset: 3652 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3628 },
        end: { line: 68, column: 25, offset: 3652 }
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
            start: { line: 70, column: 1, offset: 3654 },
            end: { line: 70, column: 98, offset: 3751 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 3654 },
        end: { line: 70, column: 98, offset: 3751 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The query parameters of a URL are a list of key-value pairs separated by the ',
          position: {
            start: { line: 72, column: 1, offset: 3753 },
            end: { line: 72, column: 78, offset: 3830 }
          }
        },
        {
          type: 'inlineCode',
          value: '&',
          position: {
            start: { line: 72, column: 78, offset: 3830 },
            end: { line: 72, column: 81, offset: 3833 }
          }
        },
        {
          type: 'text',
          value: ' symbol. The query parameters can further identify the resource of a URL.',
          position: {
            start: { line: 72, column: 81, offset: 3833 },
            end: { line: 72, column: 154, offset: 3906 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 3753 },
        end: { line: 72, column: 154, offset: 3906 }
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
            start: { line: 74, column: 5, offset: 3912 },
            end: { line: 74, column: 15, offset: 3922 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 3908 },
        end: { line: 74, column: 15, offset: 3922 }
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
            start: { line: 76, column: 1, offset: 3924 },
            end: { line: 76, column: 78, offset: 4001 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3924 },
        end: { line: 76, column: 78, offset: 4001 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `The anchor of a URL specifies a part of the URL's resource, and does not necessarily locate the resource. When a web server serves a web page as a resource, the anchor acts as a sort of "bookmark" inside the resource. Browsers will see the anchor and scroll the page down to where the section identified by the anchor is visible.`,
          position: {
            start: { line: 78, column: 1, offset: 4003 },
            end: { line: 78, column: 330, offset: 4332 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 4003 },
        end: { line: 78, column: 330, offset: 4332 }
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
            start: { line: 80, column: 4, offset: 4337 },
            end: { line: 80, column: 15, offset: 4348 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 4334 },
        end: { line: 80, column: 15, offset: 4348 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP client is a component of a ',
          position: {
            start: { line: 82, column: 1, offset: 4350 },
            end: { line: 82, column: 36, offset: 4385 }
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
                start: { line: 82, column: 37, offset: 4386 },
                end: { line: 82, column: 57, offset: 4406 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 36, offset: 4385 },
            end: { line: 82, column: 110, offset: 4459 }
          }
        },
        {
          type: 'text',
          value: ' running inside a computer that sends HTTP requests to HTTP servers. The JavaScript code below is part of a software application that runs in your web browser. The code demonstrates the use of an HTTP client ',
          position: {
            start: { line: 82, column: 110, offset: 4459 },
            end: { line: 82, column: 318, offset: 4667 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 82, column: 318, offset: 4667 },
            end: { line: 82, column: 325, offset: 4674 }
          }
        },
        {
          type: 'text',
          value: ' to send a request to an HTTP server at the url ',
          position: {
            start: { line: 82, column: 325, offset: 4674 },
            end: { line: 82, column: 373, offset: 4722 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https://jsonplaceholder.typicode.com/todos/1',
          position: {
            start: { line: 82, column: 373, offset: 4722 },
            end: { line: 82, column: 419, offset: 4768 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 82, column: 419, offset: 4768 },
            end: { line: 82, column: 420, offset: 4769 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 4350 },
        end: { line: 82, column: 420, offset: 4769 }
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
        start: { line: 84, column: 1, offset: 4771 },
        end: { line: 95, column: 4, offset: 5104 }
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
            start: { line: 97, column: 4, offset: 5109 },
            end: { line: 97, column: 16, offset: 5121 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 5106 },
        end: { line: 97, column: 16, offset: 5121 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request is a message conforming to the HTTP protocol that a client sends to a server. An HTTP request has the following properties:',
          position: {
            start: { line: 99, column: 1, offset: 5123 },
            end: { line: 99, column: 140, offset: 5262 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 5123 },
        end: { line: 99, column: 140, offset: 5262 }
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
                        start: { line: 100, column: 5, offset: 5267 },
                        end: { line: 100, column: 11, offset: 5273 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 100, column: 4, offset: 5266 },
                    end: { line: 100, column: 34, offset: 5296 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 4, offset: 5266 },
                end: { line: 100, column: 34, offset: 5296 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 2, offset: 5264 },
            end: { line: 100, column: 34, offset: 5296 }
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
                        start: { line: 101, column: 5, offset: 5301 },
                        end: { line: 101, column: 8, offset: 5304 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 101, column: 4, offset: 5300 },
                    end: { line: 101, column: 28, offset: 5324 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 4, offset: 5300 },
                end: { line: 101, column: 28, offset: 5324 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 2, offset: 5298 },
            end: { line: 101, column: 28, offset: 5324 }
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
                        start: { line: 102, column: 5, offset: 5329 },
                        end: { line: 102, column: 12, offset: 5336 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 102, column: 4, offset: 5328 },
                    end: { line: 102, column: 36, offset: 5360 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 4, offset: 5328 },
                end: { line: 102, column: 36, offset: 5360 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 2, offset: 5326 },
            end: { line: 102, column: 36, offset: 5360 }
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
                        start: { line: 103, column: 5, offset: 5365 },
                        end: { line: 103, column: 9, offset: 5369 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 103, column: 4, offset: 5364 },
                    end: { line: 103, column: 30, offset: 5390 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 4, offset: 5364 },
                end: { line: 103, column: 30, offset: 5390 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 2, offset: 5362 },
            end: { line: 103, column: 30, offset: 5390 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 2, offset: 5264 },
        end: { line: 103, column: 30, offset: 5390 }
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
            start: { line: 105, column: 5, offset: 5396 },
            end: { line: 105, column: 24, offset: 5415 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 5392 },
        end: { line: 105, column: 24, offset: 5415 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: ',
          position: {
            start: { line: 107, column: 1, offset: 5417 },
            end: { line: 107, column: 192, offset: 5608 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 107, column: 192, offset: 5608 },
            end: { line: 107, column: 197, offset: 5613 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 197, offset: 5613 },
            end: { line: 107, column: 199, offset: 5615 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 107, column: 199, offset: 5615 },
            end: { line: 107, column: 205, offset: 5621 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 205, offset: 5621 },
            end: { line: 107, column: 207, offset: 5623 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 107, column: 207, offset: 5623 },
            end: { line: 107, column: 213, offset: 5629 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 213, offset: 5629 },
            end: { line: 107, column: 215, offset: 5631 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 107, column: 215, offset: 5631 },
            end: { line: 107, column: 220, offset: 5636 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 220, offset: 5636 },
            end: { line: 107, column: 222, offset: 5638 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 107, column: 222, offset: 5638 },
            end: { line: 107, column: 229, offset: 5645 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 229, offset: 5645 },
            end: { line: 107, column: 231, offset: 5647 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 107, column: 231, offset: 5647 },
            end: { line: 107, column: 239, offset: 5655 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 239, offset: 5655 },
            end: { line: 107, column: 241, offset: 5657 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 107, column: 241, offset: 5657 },
            end: { line: 107, column: 250, offset: 5666 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 250, offset: 5666 },
            end: { line: 107, column: 252, offset: 5668 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 107, column: 252, offset: 5668 },
            end: { line: 107, column: 261, offset: 5677 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 107, column: 261, offset: 5677 },
            end: { line: 107, column: 267, offset: 5683 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 107, column: 267, offset: 5683 },
            end: { line: 107, column: 274, offset: 5690 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 107, column: 274, offset: 5690 },
            end: { line: 107, column: 275, offset: 5691 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 5417 },
        end: { line: 107, column: 275, offset: 5691 }
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
            start: { line: 109, column: 6, offset: 5698 },
            end: { line: 109, column: 9, offset: 5701 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 5693 },
        end: { line: 109, column: 9, offset: 5701 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 111, column: 1, offset: 5703 },
            end: { line: 111, column: 5, offset: 5707 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 5, offset: 5707 },
            end: { line: 111, column: 10, offset: 5712 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for a data representation of the resource. ',
          position: {
            start: { line: 111, column: 10, offset: 5712 },
            end: { line: 111, column: 94, offset: 5796 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 94, offset: 5796 },
            end: { line: 111, column: 99, offset: 5801 }
          }
        },
        {
          type: 'text',
          value: ' requests are ',
          position: {
            start: { line: 111, column: 99, offset: 5801 },
            end: { line: 111, column: 113, offset: 5815 }
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
                start: { line: 111, column: 114, offset: 5816 },
                end: { line: 111, column: 118, offset: 5820 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 113, offset: 5815 },
            end: { line: 111, column: 180, offset: 5882 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 111, column: 180, offset: 5882 },
            end: { line: 111, column: 182, offset: 5884 }
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
                start: { line: 111, column: 183, offset: 5885 },
                end: { line: 111, column: 193, offset: 5895 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 182, offset: 5884 },
            end: { line: 111, column: 256, offset: 5958 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 111, column: 256, offset: 5958 },
            end: { line: 111, column: 262, offset: 5964 }
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
                start: { line: 111, column: 263, offset: 5965 },
                end: { line: 111, column: 272, offset: 5974 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 262, offset: 5964 },
            end: { line: 111, column: 334, offset: 6036 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 111, column: 334, offset: 6036 },
            end: { line: 111, column: 335, offset: 6037 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 5703 },
        end: { line: 111, column: 335, offset: 6037 }
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
            start: { line: 113, column: 6, offset: 6044 },
            end: { line: 113, column: 10, offset: 6048 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 6039 },
        end: { line: 113, column: 10, offset: 6048 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 115, column: 1, offset: 6050 },
            end: { line: 115, column: 5, offset: 6054 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 5, offset: 6054 },
            end: { line: 115, column: 11, offset: 6060 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for metadata about the resource. ',
          position: {
            start: { line: 115, column: 11, offset: 6060 },
            end: { line: 115, column: 85, offset: 6134 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 85, offset: 6134 },
            end: { line: 115, column: 91, offset: 6140 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, idempotent, and cacheable.',
          position: {
            start: { line: 115, column: 91, offset: 6140 },
            end: { line: 115, column: 137, offset: 6186 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 6050 },
        end: { line: 115, column: 137, offset: 6186 }
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
            start: { line: 117, column: 6, offset: 6193 },
            end: { line: 117, column: 10, offset: 6197 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 6188 },
        end: { line: 117, column: 10, offset: 6197 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 119, column: 1, offset: 6199 },
            end: { line: 119, column: 5, offset: 6203 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 5, offset: 6203 },
            end: { line: 119, column: 11, offset: 6209 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to create the resource. ',
          position: {
            start: { line: 119, column: 11, offset: 6209 },
            end: { line: 119, column: 85, offset: 6283 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 85, offset: 6283 },
            end: { line: 119, column: 91, offset: 6289 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 119, column: 91, offset: 6289 },
            end: { line: 119, column: 185, offset: 6383 }
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
                start: { line: 119, column: 186, offset: 6384 },
                end: { line: 119, column: 195, offset: 6393 }
              }
            }
          ],
          position: {
            start: { line: 119, column: 185, offset: 6383 },
            end: { line: 119, column: 257, offset: 6455 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 119, column: 257, offset: 6455 },
            end: { line: 119, column: 278, offset: 6476 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 119, column: 278, offset: 6476 },
            end: { line: 119, column: 287, offset: 6485 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 119, column: 287, offset: 6485 },
            end: { line: 119, column: 291, offset: 6489 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 119, column: 291, offset: 6489 },
            end: { line: 119, column: 306, offset: 6504 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 119, column: 306, offset: 6504 },
            end: { line: 119, column: 328, offset: 6526 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 119, column: 328, offset: 6526 },
            end: { line: 119, column: 346, offset: 6544 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 119, column: 346, offset: 6544 },
            end: { line: 119, column: 354, offset: 6552 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6199 },
        end: { line: 119, column: 354, offset: 6552 }
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
            start: { line: 121, column: 6, offset: 6559 },
            end: { line: 121, column: 9, offset: 6562 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6554 },
        end: { line: 121, column: 9, offset: 6562 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 123, column: 1, offset: 6564 },
            end: { line: 123, column: 5, offset: 6568 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 5, offset: 6568 },
            end: { line: 123, column: 10, offset: 6573 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 123, column: 10, offset: 6573 },
            end: { line: 123, column: 135, offset: 6698 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 135, offset: 6698 },
            end: { line: 123, column: 140, offset: 6703 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 123, column: 140, offset: 6703 },
            end: { line: 123, column: 198, offset: 6761 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6564 },
        end: { line: 123, column: 198, offset: 6761 }
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
            start: { line: 125, column: 6, offset: 6768 },
            end: { line: 125, column: 11, offset: 6773 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6763 },
        end: { line: 125, column: 11, offset: 6773 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 127, column: 1, offset: 6775 },
            end: { line: 127, column: 5, offset: 6779 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 5, offset: 6779 },
            end: { line: 127, column: 12, offset: 6786 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the resource. ',
          position: {
            start: { line: 127, column: 12, offset: 6786 },
            end: { line: 127, column: 96, offset: 6870 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 96, offset: 6870 },
            end: { line: 127, column: 103, offset: 6877 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 127, column: 103, offset: 6877 },
            end: { line: 127, column: 227, offset: 7001 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 127, column: 227, offset: 7001 },
            end: { line: 127, column: 236, offset: 7010 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 127, column: 236, offset: 7010 },
            end: { line: 127, column: 240, offset: 7014 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 127, column: 240, offset: 7014 },
            end: { line: 127, column: 255, offset: 7029 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 127, column: 255, offset: 7029 },
            end: { line: 127, column: 277, offset: 7051 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 127, column: 277, offset: 7051 },
            end: { line: 127, column: 295, offset: 7069 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 127, column: 295, offset: 7069 },
            end: { line: 127, column: 303, offset: 7077 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6775 },
        end: { line: 127, column: 303, offset: 7077 }
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
            start: { line: 129, column: 6, offset: 7084 },
            end: { line: 129, column: 12, offset: 7090 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 7079 },
        end: { line: 129, column: 12, offset: 7090 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 131, column: 1, offset: 7092 },
            end: { line: 131, column: 5, offset: 7096 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 5, offset: 7096 },
            end: { line: 131, column: 13, offset: 7104 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the resource. ',
          position: {
            start: { line: 131, column: 13, offset: 7104 },
            end: { line: 131, column: 78, offset: 7169 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 78, offset: 7169 },
            end: { line: 131, column: 86, offset: 7177 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 131, column: 86, offset: 7177 },
            end: { line: 131, column: 148, offset: 7239 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 7092 },
        end: { line: 131, column: 148, offset: 7239 }
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
            start: { line: 133, column: 6, offset: 7246 },
            end: { line: 133, column: 13, offset: 7253 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 7241 },
        end: { line: 133, column: 13, offset: 7253 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 135, column: 1, offset: 7255 },
            end: { line: 135, column: 5, offset: 7259 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 5, offset: 7259 },
            end: { line: 135, column: 14, offset: 7268 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the resource. ',
          position: {
            start: { line: 135, column: 14, offset: 7268 },
            end: { line: 135, column: 119, offset: 7373 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 119, offset: 7373 },
            end: { line: 135, column: 128, offset: 7382 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 135, column: 128, offset: 7382 },
            end: { line: 135, column: 194, offset: 7448 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 7255 },
        end: { line: 135, column: 194, offset: 7448 }
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
            start: { line: 137, column: 6, offset: 7455 },
            end: { line: 137, column: 13, offset: 7462 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 7450 },
        end: { line: 137, column: 13, offset: 7462 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 139, column: 1, offset: 7464 },
            end: { line: 139, column: 5, offset: 7468 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 5, offset: 7468 },
            end: { line: 139, column: 14, offset: 7477 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options of the resource. ',
          position: {
            start: { line: 139, column: 14, offset: 7477 },
            end: { line: 139, column: 110, offset: 7573 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 110, offset: 7573 },
            end: { line: 139, column: 119, offset: 7582 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 139, column: 119, offset: 7582 },
            end: { line: 139, column: 177, offset: 7640 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7464 },
        end: { line: 139, column: 177, offset: 7640 }
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
            start: { line: 141, column: 6, offset: 7647 },
            end: { line: 141, column: 11, offset: 7652 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7642 },
        end: { line: 141, column: 11, offset: 7652 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 143, column: 1, offset: 7654 },
            end: { line: 143, column: 5, offset: 7658 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 5, offset: 7658 },
            end: { line: 143, column: 12, offset: 7665 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 143, column: 12, offset: 7665 },
            end: { line: 143, column: 66, offset: 7719 }
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
                start: { line: 143, column: 67, offset: 7720 },
                end: { line: 143, column: 81, offset: 7734 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 66, offset: 7719 },
            end: { line: 143, column: 134, offset: 7787 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the URL. ',
          position: {
            start: { line: 143, column: 134, offset: 7787 },
            end: { line: 143, column: 162, offset: 7815 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 162, offset: 7815 },
            end: { line: 143, column: 169, offset: 7822 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 143, column: 169, offset: 7822 },
            end: { line: 143, column: 227, offset: 7880 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7654 },
        end: { line: 143, column: 227, offset: 7880 }
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
            start: { line: 145, column: 5, offset: 7886 },
            end: { line: 145, column: 21, offset: 7902 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7882 },
        end: { line: 145, column: 21, offset: 7902 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request URL is the ',
          position: {
            start: { line: 147, column: 1, offset: 7904 },
            end: { line: 147, column: 29, offset: 7932 }
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
                start: { line: 147, column: 30, offset: 7933 },
                end: { line: 147, column: 33, offset: 7936 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 29, offset: 7932 },
            end: { line: 147, column: 40, offset: 7943 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 147, column: 40, offset: 7943 },
            end: { line: 147, column: 137, offset: 8040 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7904 },
        end: { line: 147, column: 137, offset: 8040 }
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
            start: { line: 149, column: 5, offset: 8046 },
            end: { line: 149, column: 25, offset: 8066 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 8042 },
        end: { line: 149, column: 25, offset: 8066 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request.',
          position: {
            start: { line: 151, column: 1, offset: 8068 },
            end: { line: 151, column: 144, offset: 8211 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 8068 },
        end: { line: 151, column: 144, offset: 8211 }
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
            start: { line: 153, column: 5, offset: 8217 },
            end: { line: 153, column: 22, offset: 8234 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 8213 },
        end: { line: 153, column: 22, offset: 8234 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP request body is the part of the request that carries the bulk of the data sent to the server. The content type of the request body should be specified in the request's ",
          position: {
            start: { line: 155, column: 1, offset: 8236 },
            end: { line: 155, column: 178, offset: 8413 }
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
                start: { line: 155, column: 179, offset: 8414 },
                end: { line: 155, column: 191, offset: 8426 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 178, offset: 8413 },
            end: { line: 155, column: 274, offset: 8509 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 155, column: 274, offset: 8509 },
            end: { line: 155, column: 282, offset: 8517 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 8236 },
        end: { line: 155, column: 282, offset: 8517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP request bodies:',
          position: {
            start: { line: 157, column: 1, offset: 8519 },
            end: { line: 157, column: 38, offset: 8556 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 8519 },
        end: { line: 157, column: 38, offset: 8556 }
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
                        start: { line: 158, column: 5, offset: 8561 },
                        end: { line: 158, column: 9, offset: 8565 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 8560 },
                    end: { line: 158, column: 45, offset: 8601 }
                  }
                },
                {
                  type: 'text',
                  value: ' - request body used for web applications. The request method is typically ',
                  position: {
                    start: { line: 158, column: 45, offset: 8601 },
                    end: { line: 158, column: 120, offset: 8676 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 158, column: 120, offset: 8676 },
                    end: { line: 158, column: 125, offset: 8681 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 158, column: 125, offset: 8681 },
                    end: { line: 158, column: 127, offset: 8683 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 158, column: 127, offset: 8683 },
                    end: { line: 158, column: 133, offset: 8689 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 158, column: 133, offset: 8689 },
                    end: { line: 158, column: 138, offset: 8694 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 158, column: 138, offset: 8694 },
                    end: { line: 158, column: 145, offset: 8701 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 158, column: 145, offset: 8701 },
                    end: { line: 158, column: 151, offset: 8707 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 158, column: 151, offset: 8707 },
                    end: { line: 158, column: 165, offset: 8721 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 158, column: 165, offset: 8721 },
                    end: { line: 158, column: 187, offset: 8743 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 158, column: 187, offset: 8743 },
                    end: { line: 158, column: 205, offset: 8761 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 158, column: 205, offset: 8761 },
                    end: { line: 158, column: 206, offset: 8762 }
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 8560 },
                end: { line: 158, column: 206, offset: 8762 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 2, offset: 8558 },
            end: { line: 158, column: 206, offset: 8762 }
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
                    start: { line: 159, column: 4, offset: 8766 },
                    end: { line: 159, column: 83, offset: 8845 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 159, column: 83, offset: 8845 },
                    end: { line: 159, column: 88, offset: 8850 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 159, column: 88, offset: 8850 },
                    end: { line: 159, column: 92, offset: 8854 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 159, column: 92, offset: 8854 },
                    end: { line: 159, column: 98, offset: 8860 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 159, column: 98, offset: 8860 },
                    end: { line: 159, column: 104, offset: 8866 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 159, column: 104, offset: 8866 },
                    end: { line: 159, column: 118, offset: 8880 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 159, column: 118, offset: 8880 },
                    end: { line: 159, column: 139, offset: 8901 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 159, column: 139, offset: 8901 },
                    end: { line: 159, column: 151, offset: 8913 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 151, offset: 8913 },
                    end: { line: 159, column: 153, offset: 8915 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 159, column: 153, offset: 8915 },
                    end: { line: 159, column: 164, offset: 8926 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 164, offset: 8926 },
                    end: { line: 159, column: 166, offset: 8928 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 159, column: 166, offset: 8928 },
                    end: { line: 159, column: 178, offset: 8940 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 178, offset: 8940 },
                    end: { line: 159, column: 180, offset: 8942 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 159, column: 180, offset: 8942 },
                    end: { line: 159, column: 193, offset: 8955 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 159, column: 193, offset: 8955 },
                    end: { line: 159, column: 198, offset: 8960 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 159, column: 198, offset: 8960 },
                    end: { line: 159, column: 209, offset: 8971 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 159, column: 209, offset: 8971 },
                    end: { line: 159, column: 210, offset: 8972 }
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 8766 },
                end: { line: 159, column: 210, offset: 8972 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 2, offset: 8764 },
            end: { line: 159, column: 210, offset: 8972 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 2, offset: 8558 },
        end: { line: 159, column: 210, offset: 8972 }
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
            start: { line: 161, column: 4, offset: 8977 },
            end: { line: 161, column: 17, offset: 8990 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8974 },
        end: { line: 161, column: 17, offset: 8990 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client. An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8992 },
            end: { line: 163, column: 149, offset: 9140 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8992 },
        end: { line: 163, column: 149, offset: 9140 }
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
                        start: { line: 164, column: 5, offset: 9145 },
                        end: { line: 164, column: 16, offset: 9156 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 164, column: 4, offset: 9144 },
                    end: { line: 164, column: 45, offset: 9185 }
                  }
                }
              ],
              position: {
                start: { line: 164, column: 4, offset: 9144 },
                end: { line: 164, column: 45, offset: 9185 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 2, offset: 9142 },
            end: { line: 164, column: 45, offset: 9185 }
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
                        start: { line: 165, column: 5, offset: 9190 },
                        end: { line: 165, column: 12, offset: 9197 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 165, column: 4, offset: 9189 },
                    end: { line: 165, column: 37, offset: 9222 }
                  }
                }
              ],
              position: {
                start: { line: 165, column: 4, offset: 9189 },
                end: { line: 165, column: 37, offset: 9222 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 2, offset: 9187 },
            end: { line: 165, column: 37, offset: 9222 }
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
                        start: { line: 166, column: 5, offset: 9227 },
                        end: { line: 166, column: 9, offset: 9231 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 166, column: 4, offset: 9226 },
                    end: { line: 166, column: 31, offset: 9253 }
                  }
                }
              ],
              position: {
                start: { line: 166, column: 4, offset: 9226 },
                end: { line: 166, column: 31, offset: 9253 }
              }
            }
          ],
          position: {
            start: { line: 166, column: 2, offset: 9224 },
            end: { line: 166, column: 31, offset: 9253 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 2, offset: 9142 },
        end: { line: 166, column: 31, offset: 9253 }
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
            start: { line: 168, column: 5, offset: 9259 },
            end: { line: 168, column: 30, offset: 9284 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 9255 },
        end: { line: 168, column: 30, offset: 9284 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response status code is a three-digit code that indicates the status of the server's processing of the request.",
          position: {
            start: { line: 170, column: 1, offset: 9286 },
            end: { line: 170, column: 121, offset: 9406 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 9286 },
        end: { line: 170, column: 121, offset: 9406 }
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
            start: { line: 172, column: 6, offset: 9413 },
            end: { line: 172, column: 42, offset: 9449 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 9408 },
        end: { line: 172, column: 42, offset: 9449 }
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
            start: { line: 174, column: 7, offset: 9457 },
            end: { line: 174, column: 19, offset: 9469 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 9451 },
        end: { line: 174, column: 19, offset: 9469 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received the request headers and is ready for the client to send the request body.',
          position: {
            start: { line: 176, column: 1, offset: 9471 },
            end: { line: 176, column: 98, offset: 9568 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 9471 },
        end: { line: 176, column: 98, offset: 9568 }
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
            start: { line: 178, column: 7, offset: 9576 },
            end: { line: 178, column: 30, offset: 9599 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 9570 },
        end: { line: 178, column: 30, offset: 9599 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is switching to a different protocol, specified in the ',
          position: {
            start: { line: 180, column: 1, offset: 9601 },
            end: { line: 180, column: 67, offset: 9667 }
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
                start: { line: 180, column: 68, offset: 9668 },
                end: { line: 180, column: 75, offset: 9675 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 67, offset: 9667 },
            end: { line: 180, column: 153, offset: 9753 }
          }
        },
        {
          type: 'text',
          value: " header, at the client's request. ",
          position: {
            start: { line: 180, column: 153, offset: 9753 },
            end: { line: 180, column: 187, offset: 9787 }
          }
        },
        {
          type: 'inlineCode',
          value: '101 Switching Protocols',
          position: {
            start: { line: 180, column: 187, offset: 9787 },
            end: { line: 180, column: 212, offset: 9812 }
          }
        },
        {
          type: 'text',
          value: ' is used by the ',
          position: {
            start: { line: 180, column: 212, offset: 9812 },
            end: { line: 180, column: 228, offset: 9828 }
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
                start: { line: 180, column: 229, offset: 9829 },
                end: { line: 180, column: 238, offset: 9838 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 228, offset: 9828 },
            end: { line: 180, column: 260, offset: 9860 }
          }
        },
        {
          type: 'text',
          value: ' protocol when switching from HTTP.',
          position: {
            start: { line: 180, column: 260, offset: 9860 },
            end: { line: 180, column: 295, offset: 9895 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 9601 },
        end: { line: 180, column: 295, offset: 9895 }
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
            start: { line: 182, column: 7, offset: 9903 },
            end: { line: 182, column: 21, offset: 9917 }
          }
        }
      ],
      position: {
        start: { line: 182, column: 1, offset: 9897 },
        end: { line: 182, column: 21, offset: 9917 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received and is processing the request but no response is available yet.',
          position: {
            start: { line: 184, column: 1, offset: 9919 },
            end: { line: 184, column: 88, offset: 10006 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 9919 },
        end: { line: 184, column: 88, offset: 10006 }
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
            start: { line: 186, column: 7, offset: 10014 },
            end: { line: 186, column: 22, offset: 10029 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 10008 },
        end: { line: 186, column: 22, offset: 10029 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.',
          position: {
            start: { line: 188, column: 1, offset: 10031 },
            end: { line: 188, column: 139, offset: 10169 }
          }
        }
      ],
      position: {
        start: { line: 188, column: 1, offset: 10031 },
        end: { line: 188, column: 139, offset: 10169 }
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
            start: { line: 190, column: 6, offset: 10176 },
            end: { line: 190, column: 39, offset: 10209 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 10171 },
        end: { line: 190, column: 39, offset: 10209 }
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
            start: { line: 192, column: 7, offset: 10217 },
            end: { line: 192, column: 13, offset: 10223 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 10211 },
        end: { line: 192, column: 13, offset: 10223 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server successfully processed the request. The meaning of success depends on the request method:',
          position: {
            start: { line: 194, column: 1, offset: 10225 },
            end: { line: 194, column: 101, offset: 10325 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 10225 },
        end: { line: 194, column: 101, offset: 10325 }
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
                    start: { line: 195, column: 4, offset: 10329 },
                    end: { line: 195, column: 9, offset: 10334 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource has been successfully retrieved and transmitted in the response message body.',
                  position: {
                    start: { line: 195, column: 9, offset: 10334 },
                    end: { line: 195, column: 102, offset: 10427 }
                  }
                }
              ],
              position: {
                start: { line: 195, column: 4, offset: 10329 },
                end: { line: 195, column: 102, offset: 10427 }
              }
            }
          ],
          position: {
            start: { line: 195, column: 2, offset: 10327 },
            end: { line: 195, column: 102, offset: 10427 }
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
                    start: { line: 196, column: 4, offset: 10431 },
                    end: { line: 196, column: 10, offset: 10437 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The requested metadata about the resource is available in the response headers.',
                  position: {
                    start: { line: 196, column: 10, offset: 10437 },
                    end: { line: 196, column: 92, offset: 10519 }
                  }
                }
              ],
              position: {
                start: { line: 196, column: 4, offset: 10431 },
                end: { line: 196, column: 92, offset: 10519 }
              }
            }
          ],
          position: {
            start: { line: 196, column: 2, offset: 10429 },
            end: { line: 196, column: 92, offset: 10519 }
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
                    start: { line: 197, column: 4, offset: 10523 },
                    end: { line: 197, column: 10, offset: 10529 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created successfully.',
                  position: {
                    start: { line: 197, column: 10, offset: 10529 },
                    end: { line: 197, column: 51, offset: 10570 }
                  }
                }
              ],
              position: {
                start: { line: 197, column: 4, offset: 10523 },
                end: { line: 197, column: 51, offset: 10570 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 2, offset: 10521 },
            end: { line: 197, column: 51, offset: 10570 }
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
                    start: { line: 198, column: 4, offset: 10574 },
                    end: { line: 198, column: 9, offset: 10579 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created or updated successfully.',
                  position: {
                    start: { line: 198, column: 9, offset: 10579 },
                    end: { line: 198, column: 61, offset: 10631 }
                  }
                }
              ],
              position: {
                start: { line: 198, column: 4, offset: 10574 },
                end: { line: 198, column: 61, offset: 10631 }
              }
            }
          ],
          position: {
            start: { line: 198, column: 2, offset: 10572 },
            end: { line: 198, column: 61, offset: 10631 }
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
                    start: { line: 199, column: 4, offset: 10635 },
                    end: { line: 199, column: 11, offset: 10642 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was updated successfully.',
                  position: {
                    start: { line: 199, column: 11, offset: 10642 },
                    end: { line: 199, column: 52, offset: 10683 }
                  }
                }
              ],
              position: {
                start: { line: 199, column: 4, offset: 10635 },
                end: { line: 199, column: 52, offset: 10683 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 2, offset: 10633 },
            end: { line: 199, column: 52, offset: 10683 }
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
                    start: { line: 200, column: 4, offset: 10687 },
                    end: { line: 200, column: 12, offset: 10695 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was deleted successfully.',
                  position: {
                    start: { line: 200, column: 12, offset: 10695 },
                    end: { line: 200, column: 53, offset: 10736 }
                  }
                }
              ],
              position: {
                start: { line: 200, column: 4, offset: 10687 },
                end: { line: 200, column: 53, offset: 10736 }
              }
            }
          ],
          position: {
            start: { line: 200, column: 2, offset: 10685 },
            end: { line: 200, column: 53, offset: 10736 }
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
                    start: { line: 201, column: 4, offset: 10740 },
                    end: { line: 201, column: 13, offset: 10749 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The connection was established successfully.',
                  position: {
                    start: { line: 201, column: 13, offset: 10749 },
                    end: { line: 201, column: 60, offset: 10796 }
                  }
                }
              ],
              position: {
                start: { line: 201, column: 4, offset: 10740 },
                end: { line: 201, column: 60, offset: 10796 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 2, offset: 10738 },
            end: { line: 201, column: 60, offset: 10796 }
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
                    start: { line: 202, column: 4, offset: 10800 },
                    end: { line: 202, column: 13, offset: 10809 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The communication options are available in the ',
                  position: {
                    start: { line: 202, column: 13, offset: 10809 },
                    end: { line: 202, column: 63, offset: 10859 }
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
                        start: { line: 202, column: 64, offset: 10860 },
                        end: { line: 202, column: 69, offset: 10865 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 202, column: 63, offset: 10859 },
                    end: { line: 202, column: 145, offset: 10941 }
                  }
                },
                {
                  type: 'text',
                  value: ' header.',
                  position: {
                    start: { line: 202, column: 145, offset: 10941 },
                    end: { line: 202, column: 153, offset: 10949 }
                  }
                }
              ],
              position: {
                start: { line: 202, column: 4, offset: 10800 },
                end: { line: 202, column: 153, offset: 10949 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 2, offset: 10798 },
            end: { line: 202, column: 153, offset: 10949 }
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
                    start: { line: 203, column: 4, offset: 10953 },
                    end: { line: 203, column: 11, offset: 10960 }
                  }
                },
                {
                  type: 'text',
                  value: " - The server successfully received and echoed back the client's request.",
                  position: {
                    start: { line: 203, column: 11, offset: 10960 },
                    end: { line: 203, column: 84, offset: 11033 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10953 },
                end: { line: 203, column: 84, offset: 11033 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10951 },
            end: { line: 203, column: 84, offset: 11033 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 2, offset: 10327 },
        end: { line: 203, column: 84, offset: 11033 }
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
            start: { line: 205, column: 7, offset: 11041 },
            end: { line: 205, column: 18, offset: 11052 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 11035 },
        end: { line: 205, column: 18, offset: 11052 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded and a new resource was created.',
          position: {
            start: { line: 207, column: 1, offset: 11054 },
            end: { line: 207, column: 54, offset: 11107 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 11054 },
        end: { line: 207, column: 54, offset: 11107 }
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
            start: { line: 209, column: 7, offset: 11115 },
            end: { line: 209, column: 19, offset: 11127 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 11109 },
        end: { line: 209, column: 19, offset: 11127 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request has been received but has not yet been processed.',
          position: {
            start: { line: 211, column: 1, offset: 11129 },
            end: { line: 211, column: 62, offset: 11190 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 11129 },
        end: { line: 211, column: 62, offset: 11190 }
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
            start: { line: 213, column: 7, offset: 11198 },
            end: { line: 213, column: 40, offset: 11231 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 11192 },
        end: { line: 213, column: 40, offset: 11231 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded but the response headers or body were modified by a proxy server before being sent to the client.',
          position: {
            start: { line: 215, column: 1, offset: 11233 },
            end: { line: 215, column: 120, offset: 11352 }
          }
        }
      ],
      position: {
        start: { line: 215, column: 1, offset: 11233 },
        end: { line: 215, column: 120, offset: 11352 }
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
            start: { line: 217, column: 7, offset: 11360 },
            end: { line: 217, column: 21, offset: 11374 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 11354 },
        end: { line: 217, column: 21, offset: 11374 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, but there is no content available for this request. The client may update its cached headers for the requested resource with the response headers from this request.',
          position: {
            start: { line: 219, column: 1, offset: 11376 },
            end: { line: 219, column: 216, offset: 11591 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 11376 },
        end: { line: 219, column: 216, offset: 11591 }
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
            start: { line: 221, column: 7, offset: 11599 },
            end: { line: 221, column: 24, offset: 11616 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 11593 },
        end: { line: 221, column: 24, offset: 11616 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and asks the client to reset the document to its original state.',
          position: {
            start: { line: 223, column: 1, offset: 11618 },
            end: { line: 223, column: 116, offset: 11733 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 11618 },
        end: { line: 223, column: 116, offset: 11733 }
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
            start: { line: 225, column: 7, offset: 11741 },
            end: { line: 225, column: 26, offset: 11760 }
          }
        }
      ],
      position: {
        start: { line: 225, column: 1, offset: 11735 },
        end: { line: 225, column: 26, offset: 11760 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and is delivering only part of the requested resource. ',
          position: {
            start: { line: 227, column: 1, offset: 11762 },
            end: { line: 227, column: 107, offset: 11868 }
          }
        },
        {
          type: 'inlineCode',
          value: '206 Partial Content',
          position: {
            start: { line: 227, column: 107, offset: 11868 },
            end: { line: 227, column: 128, offset: 11889 }
          }
        },
        {
          type: 'text',
          value: ' is commonly used in ',
          position: {
            start: { line: 227, column: 128, offset: 11889 },
            end: { line: 227, column: 149, offset: 11910 }
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
                start: { line: 227, column: 150, offset: 11911 },
                end: { line: 227, column: 164, offset: 11925 }
              }
            }
          ],
          position: {
            start: { line: 227, column: 149, offset: 11910 },
            end: { line: 227, column: 238, offset: 11999 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 227, column: 238, offset: 11999 },
            end: { line: 227, column: 239, offset: 12000 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 11762 },
        end: { line: 227, column: 239, offset: 12000 }
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
            start: { line: 229, column: 6, offset: 12007 },
            end: { line: 229, column: 40, offset: 12041 }
          }
        }
      ],
      position: {
        start: { line: 229, column: 1, offset: 12002 },
        end: { line: 229, column: 40, offset: 12041 }
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
            start: { line: 231, column: 7, offset: 12049 },
            end: { line: 231, column: 27, offset: 12069 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 1, offset: 12043 },
        end: { line: 231, column: 27, offset: 12069 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has multiple representations, and the client needs to choose which one to access.',
          position: {
            start: { line: 233, column: 1, offset: 12071 },
            end: { line: 233, column: 95, offset: 12165 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 12071 },
        end: { line: 233, column: 95, offset: 12165 }
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
            start: { line: 235, column: 7, offset: 12173 },
            end: { line: 235, column: 28, offset: 12194 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 12167 },
        end: { line: 235, column: 28, offset: 12194 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 237, column: 1, offset: 12196 },
            end: { line: 237, column: 118, offset: 12313 }
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
                start: { line: 237, column: 119, offset: 12314 },
                end: { line: 237, column: 127, offset: 12322 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 118, offset: 12313 },
            end: { line: 237, column: 206, offset: 12401 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 237, column: 206, offset: 12401 },
            end: { line: 237, column: 230, offset: 12425 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 12196 },
        end: { line: 237, column: 230, offset: 12425 }
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
            start: { line: 239, column: 7, offset: 12433 },
            end: { line: 239, column: 16, offset: 12442 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 12427 },
        end: { line: 239, column: 16, offset: 12442 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 241, column: 1, offset: 12444 },
            end: { line: 241, column: 118, offset: 12561 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 241, column: 118, offset: 12561 },
            end: { line: 241, column: 128, offset: 12571 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 241, column: 128, offset: 12571 },
            end: { line: 241, column: 152, offset: 12595 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 12444 },
        end: { line: 241, column: 152, offset: 12595 }
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
            start: { line: 243, column: 7, offset: 12603 },
            end: { line: 243, column: 20, offset: 12616 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 12597 },
        end: { line: 243, column: 20, offset: 12616 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is redirecting the client's request for the resource to a different resource. The URL of the redirected resource is available in the ",
          position: {
            start: { line: 245, column: 1, offset: 12618 },
            end: { line: 245, column: 145, offset: 12762 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 245, column: 145, offset: 12762 },
            end: { line: 245, column: 155, offset: 12772 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the HTTP ',
          position: {
            start: { line: 245, column: 155, offset: 12772 },
            end: { line: 245, column: 211, offset: 12828 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 245, column: 211, offset: 12828 },
            end: { line: 245, column: 216, offset: 12833 }
          }
        },
        {
          type: 'text',
          value: ' method to request the redirected resource.',
          position: {
            start: { line: 245, column: 216, offset: 12833 },
            end: { line: 245, column: 259, offset: 12876 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 12618 },
        end: { line: 245, column: 259, offset: 12876 }
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
            start: { line: 247, column: 7, offset: 12884 },
            end: { line: 247, column: 23, offset: 12900 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 12878 },
        end: { line: 247, column: 23, offset: 12900 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has not been modified since the last access, so the client can continue to use the same cached version of the resource.',
          position: {
            start: { line: 249, column: 1, offset: 12902 },
            end: { line: 249, column: 133, offset: 13034 }
          }
        }
      ],
      position: {
        start: { line: 249, column: 1, offset: 12902 },
        end: { line: 249, column: 133, offset: 13034 }
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
            start: { line: 251, column: 7, offset: 13042 },
            end: { line: 251, column: 29, offset: 13064 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 13036 },
        end: { line: 251, column: 29, offset: 13064 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 253, column: 1, offset: 13066 },
            end: { line: 253, column: 118, offset: 13183 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 253, column: 118, offset: 13183 },
            end: { line: 253, column: 128, offset: 13193 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 253, column: 128, offset: 13193 },
            end: { line: 253, column: 235, offset: 13300 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 13066 },
        end: { line: 253, column: 235, offset: 13300 }
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
            start: { line: 255, column: 7, offset: 13308 },
            end: { line: 255, column: 29, offset: 13330 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 13302 },
        end: { line: 255, column: 29, offset: 13330 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 257, column: 1, offset: 13332 },
            end: { line: 257, column: 118, offset: 13449 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 257, column: 118, offset: 13449 },
            end: { line: 257, column: 128, offset: 13459 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 257, column: 128, offset: 13459 },
            end: { line: 257, column: 235, offset: 13566 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 13332 },
        end: { line: 257, column: 235, offset: 13566 }
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
            start: { line: 259, column: 6, offset: 13573 },
            end: { line: 259, column: 41, offset: 13608 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 13568 },
        end: { line: 259, column: 41, offset: 13608 }
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
            start: { line: 261, column: 7, offset: 13616 },
            end: { line: 261, column: 22, offset: 13631 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 13610 },
        end: { line: 261, column: 22, offset: 13631 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot process the request due to client error, e.g. invalid syntax.',
          position: {
            start: { line: 263, column: 1, offset: 13633 },
            end: { line: 263, column: 80, offset: 13712 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 13633 },
        end: { line: 263, column: 80, offset: 13712 }
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
            start: { line: 265, column: 7, offset: 13720 },
            end: { line: 265, column: 23, offset: 13736 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 13714 },
        end: { line: 265, column: 23, offset: 13736 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials.',
          position: {
            start: { line: 267, column: 1, offset: 13738 },
            end: { line: 267, column: 52, offset: 13789 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 13738 },
        end: { line: 267, column: 52, offset: 13789 }
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
            start: { line: 269, column: 7, offset: 13797 },
            end: { line: 269, column: 27, offset: 13817 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 13791 },
        end: { line: 269, column: 27, offset: 13817 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested content is not available until the client makes a payment.',
          position: {
            start: { line: 271, column: 1, offset: 13819 },
            end: { line: 271, column: 73, offset: 13891 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 13819 },
        end: { line: 271, column: 73, offset: 13891 }
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
            start: { line: 273, column: 7, offset: 13899 },
            end: { line: 273, column: 20, offset: 13912 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 13893 },
        end: { line: 273, column: 20, offset: 13912 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is refusing the client access to the requested resource.',
          position: {
            start: { line: 275, column: 1, offset: 13914 },
            end: { line: 275, column: 68, offset: 13981 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 13914 },
        end: { line: 275, column: 68, offset: 13981 }
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
            start: { line: 277, column: 7, offset: 13989 },
            end: { line: 277, column: 20, offset: 14002 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 13983 },
        end: { line: 277, column: 20, offset: 14002 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot find the requested resource. Either the URL is not recognized, or the URL is recognized but the requested resource does not exist.',
          position: {
            start: { line: 279, column: 1, offset: 14004 },
            end: { line: 279, column: 149, offset: 14152 }
          }
        }
      ],
      position: {
        start: { line: 279, column: 1, offset: 14004 },
        end: { line: 279, column: 149, offset: 14152 }
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
            start: { line: 281, column: 7, offset: 14160 },
            end: { line: 281, column: 29, offset: 14182 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 14154 },
        end: { line: 281, column: 29, offset: 14182 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is known by the server but it is not supported for the requested resource.',
          position: {
            start: { line: 283, column: 1, offset: 14184 },
            end: { line: 283, column: 94, offset: 14277 }
          }
        }
      ],
      position: {
        start: { line: 283, column: 1, offset: 14184 },
        end: { line: 283, column: 94, offset: 14277 }
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
            start: { line: 285, column: 7, offset: 14285 },
            end: { line: 285, column: 25, offset: 14303 }
          }
        }
      ],
      position: {
        start: { line: 285, column: 1, offset: 14279 },
        end: { line: 285, column: 25, offset: 14303 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is unable to provide a response that matches the client's requested format, typically specified in the ",
          position: {
            start: { line: 287, column: 1, offset: 14305 },
            end: { line: 287, column: 115, offset: 14419 }
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
                start: { line: 287, column: 116, offset: 14420 },
                end: { line: 287, column: 122, offset: 14426 }
              }
            }
          ],
          position: {
            start: { line: 287, column: 115, offset: 14419 },
            end: { line: 287, column: 199, offset: 14503 }
          }
        },
        {
          type: 'text',
          value: ' header of the request.',
          position: {
            start: { line: 287, column: 199, offset: 14503 },
            end: { line: 287, column: 222, offset: 14526 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 14305 },
        end: { line: 287, column: 222, offset: 14526 }
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
            start: { line: 289, column: 7, offset: 14534 },
            end: { line: 289, column: 40, offset: 14567 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 14528 },
        end: { line: 289, column: 40, offset: 14567 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials for the ',
          position: {
            start: { line: 291, column: 1, offset: 14569 },
            end: { line: 291, column: 60, offset: 14628 }
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
                start: { line: 291, column: 61, offset: 14629 },
                end: { line: 291, column: 73, offset: 14641 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 60, offset: 14628 },
            end: { line: 291, column: 118, offset: 14686 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 291, column: 118, offset: 14686 },
            end: { line: 291, column: 119, offset: 14687 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 14569 },
        end: { line: 291, column: 120, offset: 14688 }
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
            start: { line: 293, column: 7, offset: 14696 },
            end: { line: 293, column: 26, offset: 14715 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 14690 },
        end: { line: 293, column: 26, offset: 14715 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server would like to shut down the unused connection.',
          position: {
            start: { line: 295, column: 1, offset: 14717 },
            end: { line: 295, column: 58, offset: 14774 }
          }
        }
      ],
      position: {
        start: { line: 295, column: 1, offset: 14717 },
        end: { line: 295, column: 58, offset: 14774 }
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
            start: { line: 297, column: 7, offset: 14782 },
            end: { line: 297, column: 19, offset: 14794 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 14776 },
        end: { line: 297, column: 19, offset: 14794 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request conflicts with the current state of the resource, e.g. when trying to create a resource that already exists.',
          position: {
            start: { line: 299, column: 1, offset: 14796 },
            end: { line: 299, column: 121, offset: 14916 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 14796 },
        end: { line: 299, column: 121, offset: 14916 }
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
            start: { line: 301, column: 7, offset: 14924 },
            end: { line: 301, column: 15, offset: 14932 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 14918 },
        end: { line: 301, column: 15, offset: 14932 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has been permanently removed from the server.',
          position: {
            start: { line: 303, column: 1, offset: 14934 },
            end: { line: 303, column: 59, offset: 14992 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 14934 },
        end: { line: 303, column: 59, offset: 14992 }
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
            start: { line: 305, column: 7, offset: 15000 },
            end: { line: 305, column: 26, offset: 15019 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 14994 },
        end: { line: 305, column: 26, offset: 15019 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 307, column: 1, offset: 15021 },
            end: { line: 307, column: 5, offset: 15025 }
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
                start: { line: 307, column: 6, offset: 15026 },
                end: { line: 307, column: 20, offset: 15040 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 5, offset: 15025 },
            end: { line: 307, column: 105, offset: 15125 }
          }
        },
        {
          type: 'text',
          value: ' request header is required but not present.',
          position: {
            start: { line: 307, column: 105, offset: 15125 },
            end: { line: 307, column: 149, offset: 15169 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 15021 },
        end: { line: 307, column: 149, offset: 15169 }
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
            start: { line: 309, column: 7, offset: 15177 },
            end: { line: 309, column: 30, offset: 15200 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 1, offset: 15171 },
        end: { line: 309, column: 30, offset: 15200 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request headers have indicated preconditions that the server does not meet.',
          position: {
            start: { line: 311, column: 1, offset: 15202 },
            end: { line: 311, column: 80, offset: 15281 }
          }
        }
      ],
      position: {
        start: { line: 311, column: 1, offset: 15202 },
        end: { line: 311, column: 80, offset: 15281 }
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
            start: { line: 313, column: 7, offset: 15289 },
            end: { line: 313, column: 28, offset: 15310 }
          }
        }
      ],
      position: {
        start: { line: 313, column: 1, offset: 15283 },
        end: { line: 313, column: 28, offset: 15310 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request body is larger than the limits defined by the server. The server might close the connection or respond with a ',
          position: {
            start: { line: 315, column: 1, offset: 15312 },
            end: { line: 315, column: 123, offset: 15434 }
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
                start: { line: 315, column: 124, offset: 15435 },
                end: { line: 315, column: 135, offset: 15446 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 123, offset: 15434 },
            end: { line: 315, column: 217, offset: 15528 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 315, column: 217, offset: 15528 },
            end: { line: 315, column: 225, offset: 15536 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 15312 },
        end: { line: 315, column: 225, offset: 15536 }
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
            start: { line: 317, column: 7, offset: 15544 },
            end: { line: 317, column: 23, offset: 15560 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 15538 },
        end: { line: 317, column: 23, offset: 15560 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource is too long.',
          position: {
            start: { line: 319, column: 1, offset: 15562 },
            end: { line: 319, column: 47, offset: 15608 }
          }
        }
      ],
      position: {
        start: { line: 319, column: 1, offset: 15562 },
        end: { line: 319, column: 47, offset: 15608 }
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
            start: { line: 321, column: 7, offset: 15616 },
            end: { line: 321, column: 33, offset: 15642 }
          }
        }
      ],
      position: {
        start: { line: 321, column: 1, offset: 15610 },
        end: { line: 321, column: 33, offset: 15642 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The media format of the requested resource is not supported by the server.',
          position: {
            start: { line: 323, column: 1, offset: 15644 },
            end: { line: 323, column: 75, offset: 15718 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 15644 },
        end: { line: 323, column: 75, offset: 15718 }
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
            start: { line: 325, column: 7, offset: 15726 },
            end: { line: 325, column: 32, offset: 15751 }
          }
        }
      ],
      position: {
        start: { line: 325, column: 1, offset: 15720 },
        end: { line: 325, column: 32, offset: 15751 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The ranges specified in the request's ",
          position: {
            start: { line: 327, column: 1, offset: 15753 },
            end: { line: 327, column: 39, offset: 15791 }
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
                start: { line: 327, column: 40, offset: 15792 },
                end: { line: 327, column: 45, offset: 15797 }
              }
            }
          ],
          position: {
            start: { line: 327, column: 39, offset: 15791 },
            end: { line: 327, column: 121, offset: 15873 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be fulfilled by the server.',
          position: {
            start: { line: 327, column: 121, offset: 15873 },
            end: { line: 327, column: 163, offset: 15915 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 15753 },
        end: { line: 327, column: 163, offset: 15915 }
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
            start: { line: 329, column: 7, offset: 15923 },
            end: { line: 329, column: 29, offset: 15945 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 15917 },
        end: { line: 329, column: 29, offset: 15945 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The expectation indicated by the request's ",
          position: {
            start: { line: 331, column: 1, offset: 15947 },
            end: { line: 331, column: 44, offset: 15990 }
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
                start: { line: 331, column: 45, offset: 15991 },
                end: { line: 331, column: 51, offset: 15997 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 44, offset: 15990 },
            end: { line: 331, column: 128, offset: 16074 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be met by the server.',
          position: {
            start: { line: 331, column: 128, offset: 16074 },
            end: { line: 331, column: 164, offset: 16110 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 15947 },
        end: { line: 331, column: 164, offset: 16110 }
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
            start: { line: 333, column: 7, offset: 16118 },
            end: { line: 333, column: 23, offset: 16134 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 16112 },
        end: { line: 333, column: 23, offset: 16134 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses the attempt to brew coffee with a teapot.',
          position: {
            start: { line: 335, column: 1, offset: 16136 },
            end: { line: 335, column: 61, offset: 16196 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 16136 },
        end: { line: 335, column: 61, offset: 16196 }
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
            start: { line: 337, column: 7, offset: 16204 },
            end: { line: 337, column: 30, offset: 16227 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 16198 },
        end: { line: 337, column: 30, offset: 16227 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The request was directed at a server that is not configured to produce a response for the request URL's scheme and authority.",
          position: {
            start: { line: 339, column: 1, offset: 16229 },
            end: { line: 339, column: 126, offset: 16354 }
          }
        }
      ],
      position: {
        start: { line: 339, column: 1, offset: 16229 },
        end: { line: 339, column: 126, offset: 16354 }
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
            start: { line: 341, column: 7, offset: 16362 },
            end: { line: 341, column: 32, offset: 16387 }
          }
        }
      ],
      position: {
        start: { line: 341, column: 1, offset: 16356 },
        end: { line: 341, column: 32, offset: 16387 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request was well-formed but was unable to be processed due to semantic errors.',
          position: {
            start: { line: 343, column: 1, offset: 16389 },
            end: { line: 343, column: 83, offset: 16471 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 16389 },
        end: { line: 343, column: 83, offset: 16471 }
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
            start: { line: 345, column: 7, offset: 16479 },
            end: { line: 345, column: 17, offset: 16489 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 16473 },
        end: { line: 345, column: 17, offset: 16489 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is locked.',
          position: {
            start: { line: 347, column: 1, offset: 16491 },
            end: { line: 347, column: 34, offset: 16524 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 16491 },
        end: { line: 347, column: 34, offset: 16524 }
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
            start: { line: 349, column: 7, offset: 16532 },
            end: { line: 349, column: 28, offset: 16553 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 16526 },
        end: { line: 349, column: 28, offset: 16553 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request failed due to the failure of a previous request.',
          position: {
            start: { line: 351, column: 1, offset: 16555 },
            end: { line: 351, column: 61, offset: 16615 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 16555 },
        end: { line: 351, column: 61, offset: 16615 }
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
            start: { line: 353, column: 7, offset: 16623 },
            end: { line: 353, column: 20, offset: 16636 }
          }
        }
      ],
      position: {
        start: { line: 353, column: 1, offset: 16617 },
        end: { line: 353, column: 20, offset: 16636 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is unwilling to risk processing a request that might be replayed.',
          position: {
            start: { line: 355, column: 1, offset: 16638 },
            end: { line: 355, column: 77, offset: 16714 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 16638 },
        end: { line: 355, column: 77, offset: 16714 }
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
            start: { line: 357, column: 7, offset: 16722 },
            end: { line: 357, column: 27, offset: 16742 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 16716 },
        end: { line: 357, column: 27, offset: 16742 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses to process the request under the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an ',
          position: {
            start: { line: 359, column: 1, offset: 16744 },
            end: { line: 359, column: 171, offset: 16914 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Upgrade',
          position: {
            start: { line: 359, column: 171, offset: 16914 },
            end: { line: 359, column: 180, offset: 16923 }
          }
        },
        {
          type: 'text',
          value: ' header in the response to indicate the required protocol(s).',
          position: {
            start: { line: 359, column: 180, offset: 16923 },
            end: { line: 359, column: 241, offset: 16984 }
          }
        }
      ],
      position: {
        start: { line: 359, column: 1, offset: 16744 },
        end: { line: 359, column: 241, offset: 16984 }
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
            start: { line: 361, column: 7, offset: 16992 },
            end: { line: 361, column: 32, offset: 17017 }
          }
        }
      ],
      position: {
        start: { line: 361, column: 1, offset: 16986 },
        end: { line: 361, column: 32, offset: 17017 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The origin server requires the request to be ',
          position: {
            start: { line: 363, column: 1, offset: 17019 },
            end: { line: 363, column: 46, offset: 17064 }
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
                start: { line: 363, column: 47, offset: 17065 },
                end: { line: 363, column: 58, offset: 17076 }
              }
            }
          ],
          position: {
            start: { line: 363, column: 46, offset: 17064 },
            end: { line: 363, column: 138, offset: 17156 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 363, column: 138, offset: 17156 },
            end: { line: 363, column: 139, offset: 17157 }
          }
        }
      ],
      position: {
        start: { line: 363, column: 1, offset: 17019 },
        end: { line: 363, column: 139, offset: 17157 }
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
            start: { line: 365, column: 7, offset: 17165 },
            end: { line: 365, column: 28, offset: 17186 }
          }
        }
      ],
      position: {
        start: { line: 365, column: 1, offset: 17159 },
        end: { line: 365, column: 28, offset: 17186 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client has sent too many requests in a given time period. See ',
          position: {
            start: { line: 367, column: 1, offset: 17188 },
            end: { line: 367, column: 67, offset: 17254 }
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
                start: { line: 367, column: 68, offset: 17255 },
                end: { line: 367, column: 81, offset: 17268 }
              }
            }
          ],
          position: {
            start: { line: 367, column: 67, offset: 17254 },
            end: { line: 367, column: 144, offset: 17331 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 367, column: 144, offset: 17331 },
            end: { line: 367, column: 145, offset: 17332 }
          }
        }
      ],
      position: {
        start: { line: 367, column: 1, offset: 17188 },
        end: { line: 367, column: 145, offset: 17332 }
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
            start: { line: 369, column: 7, offset: 17340 },
            end: { line: 369, column: 42, offset: 17375 }
          }
        }
      ],
      position: {
        start: { line: 369, column: 1, offset: 17334 },
        end: { line: 369, column: 42, offset: 17375 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request header fields are too large.',
          position: {
            start: { line: 371, column: 1, offset: 17377 },
            end: { line: 371, column: 41, offset: 17417 }
          }
        }
      ],
      position: {
        start: { line: 371, column: 1, offset: 17377 },
        end: { line: 371, column: 41, offset: 17417 }
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
            start: { line: 373, column: 7, offset: 17425 },
            end: { line: 373, column: 40, offset: 17458 }
          }
        }
      ],
      position: {
        start: { line: 373, column: 1, offset: 17419 },
        end: { line: 373, column: 40, offset: 17458 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is unavailable due to legal reasons.',
          position: {
            start: { line: 375, column: 1, offset: 17460 },
            end: { line: 375, column: 60, offset: 17519 }
          }
        }
      ],
      position: {
        start: { line: 375, column: 1, offset: 17460 },
        end: { line: 375, column: 60, offset: 17519 }
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
            start: { line: 377, column: 6, offset: 17526 },
            end: { line: 377, column: 41, offset: 17561 }
          }
        }
      ],
      position: {
        start: { line: 377, column: 1, offset: 17521 },
        end: { line: 377, column: 41, offset: 17561 }
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
            start: { line: 379, column: 7, offset: 17569 },
            end: { line: 379, column: 32, offset: 17594 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 17563 },
        end: { line: 379, column: 32, offset: 17594 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has encountered a situation it does not know how to handle.',
          position: {
            start: { line: 381, column: 1, offset: 17596 },
            end: { line: 381, column: 71, offset: 17666 }
          }
        }
      ],
      position: {
        start: { line: 381, column: 1, offset: 17596 },
        end: { line: 381, column: 71, offset: 17666 }
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
            start: { line: 383, column: 7, offset: 17674 },
            end: { line: 383, column: 26, offset: 17693 }
          }
        }
      ],
      position: {
        start: { line: 383, column: 1, offset: 17668 },
        end: { line: 383, column: 26, offset: 17693 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is not supported by the server and cannot be handled.',
          position: {
            start: { line: 385, column: 1, offset: 17695 },
            end: { line: 385, column: 73, offset: 17767 }
          }
        }
      ],
      position: {
        start: { line: 385, column: 1, offset: 17695 },
        end: { line: 385, column: 73, offset: 17767 }
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
            start: { line: 387, column: 7, offset: 17775 },
            end: { line: 387, column: 22, offset: 17790 }
          }
        }
      ],
      position: {
        start: { line: 387, column: 1, offset: 17769 },
        end: { line: 387, column: 22, offset: 17790 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The gateway server received an invalid response from an upstream server or origin server.',
          position: {
            start: { line: 389, column: 1, offset: 17792 },
            end: { line: 389, column: 90, offset: 17881 }
          }
        }
      ],
      position: {
        start: { line: 389, column: 1, offset: 17792 },
        end: { line: 389, column: 90, offset: 17881 }
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
            start: { line: 391, column: 7, offset: 17889 },
            end: { line: 391, column: 30, offset: 17912 }
          }
        }
      ],
      position: {
        start: { line: 391, column: 1, offset: 17883 },
        end: { line: 391, column: 30, offset: 17912 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is not ready to handle the request.',
          position: {
            start: { line: 393, column: 1, offset: 17914 },
            end: { line: 393, column: 47, offset: 17960 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 17914 },
        end: { line: 393, column: 47, offset: 17960 }
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
            start: { line: 395, column: 7, offset: 17968 },
            end: { line: 395, column: 26, offset: 17987 }
          }
        }
      ],
      position: {
        start: { line: 395, column: 1, offset: 17962 },
        end: { line: 395, column: 26, offset: 17987 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The gateway server's request to an upstream server or origin server timed out.",
          position: {
            start: { line: 397, column: 1, offset: 17989 },
            end: { line: 397, column: 79, offset: 18067 }
          }
        }
      ],
      position: {
        start: { line: 397, column: 1, offset: 17989 },
        end: { line: 397, column: 79, offset: 18067 }
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
            start: { line: 399, column: 7, offset: 18075 },
            end: { line: 399, column: 37, offset: 18105 }
          }
        }
      ],
      position: {
        start: { line: 399, column: 1, offset: 18069 },
        end: { line: 399, column: 37, offset: 18105 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP version used in the request is not supported by the server.',
          position: {
            start: { line: 401, column: 1, offset: 18107 },
            end: { line: 401, column: 69, offset: 18175 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 18107 },
        end: { line: 401, column: 69, offset: 18175 }
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
            start: { line: 403, column: 7, offset: 18183 },
            end: { line: 403, column: 34, offset: 18210 }
          }
        }
      ],
      position: {
        start: { line: 403, column: 1, offset: 18177 },
        end: { line: 403, column: 34, offset: 18210 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has an internal configuration error related to content negotiation.',
          position: {
            start: { line: 405, column: 1, offset: 18212 },
            end: { line: 405, column: 79, offset: 18290 }
          }
        }
      ],
      position: {
        start: { line: 405, column: 1, offset: 18212 },
        end: { line: 405, column: 79, offset: 18290 }
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
            start: { line: 407, column: 7, offset: 18298 },
            end: { line: 407, column: 31, offset: 18322 }
          }
        }
      ],
      position: {
        start: { line: 407, column: 1, offset: 18292 },
        end: { line: 407, column: 31, offset: 18322 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server does not have enough available storage to successfully process the request.',
          position: {
            start: { line: 409, column: 1, offset: 18324 },
            end: { line: 409, column: 87, offset: 18410 }
          }
        }
      ],
      position: {
        start: { line: 409, column: 1, offset: 18324 },
        end: { line: 409, column: 87, offset: 18410 }
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
            start: { line: 411, column: 7, offset: 18418 },
            end: { line: 411, column: 24, offset: 18435 }
          }
        }
      ],
      position: {
        start: { line: 411, column: 1, offset: 18412 },
        end: { line: 411, column: 24, offset: 18435 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server detected an infinite loop while processing the request.',
          position: {
            start: { line: 413, column: 1, offset: 18437 },
            end: { line: 413, column: 67, offset: 18503 }
          }
        }
      ],
      position: {
        start: { line: 413, column: 1, offset: 18437 },
        end: { line: 413, column: 67, offset: 18503 }
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
            start: { line: 415, column: 7, offset: 18511 },
            end: { line: 415, column: 23, offset: 18527 }
          }
        }
      ],
      position: {
        start: { line: 415, column: 1, offset: 18505 },
        end: { line: 415, column: 23, offset: 18527 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client declares an HTTP Extension (',
          position: {
            start: { line: 417, column: 1, offset: 18529 },
            end: { line: 417, column: 40, offset: 18568 }
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
                start: { line: 417, column: 41, offset: 18569 },
                end: { line: 417, column: 49, offset: 18577 }
              }
            }
          ],
          position: {
            start: { line: 417, column: 40, offset: 18568 },
            end: { line: 417, column: 97, offset: 18625 }
          }
        },
        {
          type: 'text',
          value: ') that should be used to process the request, but the extension is not supported by the server.',
          position: {
            start: { line: 417, column: 97, offset: 18625 },
            end: { line: 417, column: 192, offset: 18720 }
          }
        }
      ],
      position: {
        start: { line: 417, column: 1, offset: 18529 },
        end: { line: 417, column: 192, offset: 18720 }
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
            start: { line: 419, column: 7, offset: 18728 },
            end: { line: 419, column: 42, offset: 18763 }
          }
        }
      ],
      position: {
        start: { line: 419, column: 1, offset: 18722 },
        end: { line: 419, column: 42, offset: 18763 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client needs to authenticate to gain network access.',
          position: {
            start: { line: 421, column: 1, offset: 18765 },
            end: { line: 421, column: 57, offset: 18821 }
          }
        }
      ],
      position: {
        start: { line: 421, column: 1, offset: 18765 },
        end: { line: 421, column: 57, offset: 18821 }
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
            start: { line: 423, column: 5, offset: 18827 },
            end: { line: 423, column: 26, offset: 18848 }
          }
        }
      ],
      position: {
        start: { line: 423, column: 1, offset: 18823 },
        end: { line: 423, column: 26, offset: 18848 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP response headers are key-value pairs assigned to each response. HTTP response headers pass additional context and metadata about the response.',
          position: {
            start: { line: 425, column: 1, offset: 18850 },
            end: { line: 425, column: 148, offset: 18997 }
          }
        }
      ],
      position: {
        start: { line: 425, column: 1, offset: 18850 },
        end: { line: 425, column: 148, offset: 18997 }
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
            start: { line: 427, column: 5, offset: 19003 },
            end: { line: 427, column: 23, offset: 19021 }
          }
        }
      ],
      position: {
        start: { line: 427, column: 1, offset: 18999 },
        end: { line: 427, column: 23, offset: 19021 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response body is the part of the response that carries the bulk of the data sent back to the client. The content type of the response body should be specified in the response's ",
          position: {
            start: { line: 429, column: 1, offset: 19023 },
            end: { line: 429, column: 187, offset: 19209 }
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
                start: { line: 429, column: 188, offset: 19210 },
                end: { line: 429, column: 200, offset: 19222 }
              }
            }
          ],
          position: {
            start: { line: 429, column: 187, offset: 19209 },
            end: { line: 429, column: 283, offset: 19305 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 429, column: 283, offset: 19305 },
            end: { line: 429, column: 291, offset: 19313 }
          }
        }
      ],
      position: {
        start: { line: 429, column: 1, offset: 19023 },
        end: { line: 429, column: 291, offset: 19313 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP response bodies:',
          position: {
            start: { line: 431, column: 1, offset: 19315 },
            end: { line: 431, column: 39, offset: 19353 }
          }
        }
      ],
      position: {
        start: { line: 431, column: 1, offset: 19315 },
        end: { line: 431, column: 39, offset: 19353 }
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
                        start: { line: 432, column: 5, offset: 19358 },
                        end: { line: 432, column: 9, offset: 19362 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 432, column: 4, offset: 19357 },
                    end: { line: 432, column: 61, offset: 19414 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web pages. The method of the request is typically ',
                  position: {
                    start: { line: 432, column: 61, offset: 19414 },
                    end: { line: 432, column: 137, offset: 19490 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 432, column: 137, offset: 19490 },
                    end: { line: 432, column: 142, offset: 19495 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 432, column: 142, offset: 19495 },
                    end: { line: 432, column: 148, offset: 19501 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 432, column: 148, offset: 19501 },
                    end: { line: 432, column: 162, offset: 19515 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 432, column: 162, offset: 19515 },
                    end: { line: 432, column: 184, offset: 19537 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/html',
                  position: {
                    start: { line: 432, column: 184, offset: 19537 },
                    end: { line: 432, column: 195, offset: 19548 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 432, column: 195, offset: 19548 },
                    end: { line: 432, column: 196, offset: 19549 }
                  }
                }
              ],
              position: {
                start: { line: 432, column: 4, offset: 19357 },
                end: { line: 432, column: 196, offset: 19549 }
              }
            }
          ],
          position: {
            start: { line: 432, column: 2, offset: 19355 },
            end: { line: 432, column: 196, offset: 19549 }
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
                        start: { line: 433, column: 5, offset: 19554 },
                        end: { line: 433, column: 9, offset: 19558 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 433, column: 4, offset: 19553 },
                    end: { line: 433, column: 45, offset: 19594 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web applications. The method of the request is typically ',
                  position: {
                    start: { line: 433, column: 45, offset: 19594 },
                    end: { line: 433, column: 128, offset: 19677 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 433, column: 128, offset: 19677 },
                    end: { line: 433, column: 133, offset: 19682 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 433, column: 133, offset: 19682 },
                    end: { line: 433, column: 135, offset: 19684 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 433, column: 135, offset: 19684 },
                    end: { line: 433, column: 141, offset: 19690 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 433, column: 141, offset: 19690 },
                    end: { line: 433, column: 146, offset: 19695 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 433, column: 146, offset: 19695 },
                    end: { line: 433, column: 153, offset: 19702 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 433, column: 153, offset: 19702 },
                    end: { line: 433, column: 159, offset: 19708 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 433, column: 159, offset: 19708 },
                    end: { line: 433, column: 173, offset: 19722 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 433, column: 173, offset: 19722 },
                    end: { line: 433, column: 195, offset: 19744 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 433, column: 195, offset: 19744 },
                    end: { line: 433, column: 213, offset: 19762 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 433, column: 213, offset: 19762 },
                    end: { line: 433, column: 214, offset: 19763 }
                  }
                }
              ],
              position: {
                start: { line: 433, column: 4, offset: 19553 },
                end: { line: 433, column: 214, offset: 19763 }
              }
            }
          ],
          position: {
            start: { line: 433, column: 2, offset: 19551 },
            end: { line: 433, column: 214, offset: 19763 }
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
                        start: { line: 434, column: 5, offset: 19768 },
                        end: { line: 434, column: 8, offset: 19771 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 4, offset: 19767 },
                    end: { line: 434, column: 46, offset: 19809 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for ',
                  position: {
                    start: { line: 434, column: 46, offset: 19809 },
                    end: { line: 434, column: 72, offset: 19835 }
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
                        start: { line: 434, column: 73, offset: 19836 },
                        end: { line: 434, column: 81, offset: 19844 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 72, offset: 19835 },
                    end: { line: 434, column: 161, offset: 19924 }
                  }
                },
                {
                  type: 'text',
                  value: ' or web applications. The method of the request can be ',
                  position: {
                    start: { line: 434, column: 161, offset: 19924 },
                    end: { line: 434, column: 216, offset: 19979 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 434, column: 216, offset: 19979 },
                    end: { line: 434, column: 221, offset: 19984 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 221, offset: 19984 },
                    end: { line: 434, column: 223, offset: 19986 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 434, column: 223, offset: 19986 },
                    end: { line: 434, column: 228, offset: 19991 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 228, offset: 19991 },
                    end: { line: 434, column: 230, offset: 19993 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 434, column: 230, offset: 19993 },
                    end: { line: 434, column: 236, offset: 19999 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 434, column: 236, offset: 19999 },
                    end: { line: 434, column: 241, offset: 20004 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 434, column: 241, offset: 20004 },
                    end: { line: 434, column: 248, offset: 20011 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 434, column: 248, offset: 20011 },
                    end: { line: 434, column: 254, offset: 20017 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 434, column: 254, offset: 20017 },
                    end: { line: 434, column: 268, offset: 20031 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 434, column: 268, offset: 20031 },
                    end: { line: 434, column: 289, offset: 20052 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/xml',
                  position: {
                    start: { line: 434, column: 289, offset: 20052 },
                    end: { line: 434, column: 306, offset: 20069 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 434, column: 306, offset: 20069 },
                    end: { line: 434, column: 310, offset: 20073 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/xml',
                  position: {
                    start: { line: 434, column: 310, offset: 20073 },
                    end: { line: 434, column: 320, offset: 20083 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 434, column: 320, offset: 20083 },
                    end: { line: 434, column: 321, offset: 20084 }
                  }
                }
              ],
              position: {
                start: { line: 434, column: 4, offset: 19767 },
                end: { line: 434, column: 321, offset: 20084 }
              }
            }
          ],
          position: {
            start: { line: 434, column: 2, offset: 19765 },
            end: { line: 434, column: 321, offset: 20084 }
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
                    start: { line: 435, column: 4, offset: 20088 },
                    end: { line: 435, column: 91, offset: 20175 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 435, column: 91, offset: 20175 },
                    end: { line: 435, column: 96, offset: 20180 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 435, column: 96, offset: 20180 },
                    end: { line: 435, column: 102, offset: 20186 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 435, column: 102, offset: 20186 },
                    end: { line: 435, column: 116, offset: 20200 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 435, column: 116, offset: 20200 },
                    end: { line: 435, column: 137, offset: 20221 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 435, column: 137, offset: 20221 },
                    end: { line: 435, column: 149, offset: 20233 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 149, offset: 20233 },
                    end: { line: 435, column: 151, offset: 20235 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 435, column: 151, offset: 20235 },
                    end: { line: 435, column: 162, offset: 20246 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 162, offset: 20246 },
                    end: { line: 435, column: 164, offset: 20248 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 435, column: 164, offset: 20248 },
                    end: { line: 435, column: 176, offset: 20260 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 176, offset: 20260 },
                    end: { line: 435, column: 178, offset: 20262 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 435, column: 178, offset: 20262 },
                    end: { line: 435, column: 191, offset: 20275 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 435, column: 191, offset: 20275 },
                    end: { line: 435, column: 196, offset: 20280 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 435, column: 196, offset: 20280 },
                    end: { line: 435, column: 207, offset: 20291 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 435, column: 207, offset: 20291 },
                    end: { line: 435, column: 208, offset: 20292 }
                  }
                }
              ],
              position: {
                start: { line: 435, column: 4, offset: 20088 },
                end: { line: 435, column: 208, offset: 20292 }
              }
            }
          ],
          position: {
            start: { line: 435, column: 2, offset: 20086 },
            end: { line: 435, column: 208, offset: 20292 }
          }
        }
      ],
      position: {
        start: { line: 432, column: 2, offset: 19355 },
        end: { line: 435, column: 208, offset: 20292 }
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
            start: { line: 437, column: 4, offset: 20297 },
            end: { line: 437, column: 15, offset: 20308 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 20294 },
        end: { line: 437, column: 15, offset: 20308 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 439, column: 1, offset: 20310 },
            end: { line: 439, column: 226, offset: 20535 }
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
                start: { line: 439, column: 227, offset: 20536 },
                end: { line: 439, column: 233, offset: 20542 }
              }
            }
          ],
          position: {
            start: { line: 439, column: 226, offset: 20535 },
            end: { line: 439, column: 257, offset: 20566 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 439, column: 257, offset: 20566 },
            end: { line: 439, column: 371, offset: 20680 }
          }
        }
      ],
      position: {
        start: { line: 439, column: 1, offset: 20310 },
        end: { line: 439, column: 371, offset: 20680 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 441, column: 1, offset: 20682 },
            end: { line: 441, column: 23, offset: 20704 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 441, column: 23, offset: 20704 },
            end: { line: 441, column: 29, offset: 20710 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 441, column: 29, offset: 20710 },
            end: { line: 441, column: 62, offset: 20743 }
          }
        }
      ],
      position: {
        start: { line: 441, column: 1, offset: 20682 },
        end: { line: 441, column: 62, offset: 20743 }
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
        start: { line: 443, column: 1, offset: 20745 },
        end: { line: 456, column: 4, offset: 20981 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates a NodeJS HTTP server with ',
          position: {
            start: { line: 458, column: 1, offset: 20983 },
            end: { line: 458, column: 58, offset: 21040 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 458, column: 58, offset: 21040 },
            end: { line: 458, column: 77, offset: 21059 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 458, column: 77, offset: 21059 },
            end: { line: 458, column: 106, offset: 21088 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 458, column: 106, offset: 21088 },
            end: { line: 458, column: 136, offset: 21118 }
          }
        },
        {
          type: 'text',
          value: ' that only responds with status ',
          position: {
            start: { line: 458, column: 136, offset: 21118 },
            end: { line: 458, column: 168, offset: 21150 }
          }
        },
        {
          type: 'inlineCode',
          value: '200',
          position: {
            start: { line: 458, column: 168, offset: 21150 },
            end: { line: 458, column: 173, offset: 21155 }
          }
        },
        {
          type: 'text',
          value: ' and body ',
          position: {
            start: { line: 458, column: 173, offset: 21155 },
            end: { line: 458, column: 183, offset: 21165 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ok',
          position: {
            start: { line: 458, column: 183, offset: 21165 },
            end: { line: 458, column: 187, offset: 21169 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 458, column: 187, offset: 21169 },
            end: { line: 458, column: 230, offset: 21212 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 458, column: 230, offset: 21212 },
            end: { line: 458, column: 236, offset: 21218 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 458, column: 236, offset: 21218 },
            end: { line: 458, column: 254, offset: 21236 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 458, column: 254, offset: 21236 },
            end: { line: 458, column: 269, offset: 21251 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 458, column: 269, offset: 21251 },
            end: { line: 458, column: 270, offset: 21252 }
          }
        }
      ],
      position: {
        start: { line: 458, column: 1, offset: 20983 },
        end: { line: 458, column: 270, offset: 21252 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 460, column: 1, offset: 21254 },
            end: { line: 460, column: 45, offset: 21298 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 21254 },
        end: { line: 460, column: 45, offset: 21298 }
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
                        start: { line: 461, column: 5, offset: 21303 },
                        end: { line: 461, column: 9, offset: 21307 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 461, column: 4, offset: 21302 },
                    end: { line: 461, column: 29, offset: 21327 }
                  }
                }
              ],
              position: {
                start: { line: 461, column: 4, offset: 21302 },
                end: { line: 461, column: 29, offset: 21327 }
              }
            }
          ],
          position: {
            start: { line: 461, column: 2, offset: 21300 },
            end: { line: 461, column: 29, offset: 21327 }
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
                        start: { line: 462, column: 5, offset: 21332 },
                        end: { line: 462, column: 9, offset: 21336 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 462, column: 4, offset: 21331 },
                    end: { line: 462, column: 29, offset: 21356 }
                  }
                }
              ],
              position: {
                start: { line: 462, column: 4, offset: 21331 },
                end: { line: 462, column: 29, offset: 21356 }
              }
            }
          ],
          position: {
            start: { line: 462, column: 2, offset: 21329 },
            end: { line: 462, column: 29, offset: 21356 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 2, offset: 21300 },
        end: { line: 462, column: 29, offset: 21356 }
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
            start: { line: 464, column: 5, offset: 21362 },
            end: { line: 464, column: 21, offset: 21378 }
          }
        }
      ],
      position: {
        start: { line: 464, column: 1, offset: 21358 },
        end: { line: 464, column: 21, offset: 21378 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server port is a number that represents the network port on which the server is listening. A network port is a logical communication endpoint within a network. The value for the port can range from 0 and 65535. In the above example, we created an HTTP web server that listened on port ',
          position: {
            start: { line: 466, column: 1, offset: 21380 },
            end: { line: 466, column: 295, offset: 21674 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 466, column: 295, offset: 21674 },
            end: { line: 466, column: 301, offset: 21680 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 466, column: 301, offset: 21680 },
            end: { line: 466, column: 302, offset: 21681 }
          }
        }
      ],
      position: {
        start: { line: 466, column: 1, offset: 21380 },
        end: { line: 466, column: 302, offset: 21681 }
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
            start: { line: 468, column: 5, offset: 21687 },
            end: { line: 468, column: 21, offset: 21703 }
          }
        }
      ],
      position: {
        start: { line: 468, column: 1, offset: 21683 },
        end: { line: 468, column: 21, offset: 21703 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server host is the IP address of the ',
          position: {
            start: { line: 470, column: 1, offset: 21705 },
            end: { line: 470, column: 47, offset: 21751 }
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
                start: { line: 470, column: 48, offset: 21752 },
                end: { line: 470, column: 62, offset: 21766 }
              }
            }
          ],
          position: {
            start: { line: 470, column: 47, offset: 21751 },
            end: { line: 470, column: 134, offset: 21838 }
          }
        },
        {
          type: 'text',
          value: ' on which the server is running.',
          position: {
            start: { line: 470, column: 134, offset: 21838 },
            end: { line: 470, column: 166, offset: 21870 }
          }
        }
      ],
      position: {
        start: { line: 470, column: 1, offset: 21705 },
        end: { line: 470, column: 166, offset: 21870 }
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
            start: { line: 472, column: 4, offset: 21875 },
            end: { line: 472, column: 16, offset: 21887 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 21872 },
        end: { line: 472, column: 16, offset: 21887 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 474, column: 1, offset: 21889 },
            end: { line: 474, column: 109, offset: 21997 }
          }
        }
      ],
      position: {
        start: { line: 474, column: 1, offset: 21889 },
        end: { line: 474, column: 109, offset: 21997 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 476, column: 1, offset: 21999 },
            end: { line: 476, column: 61, offset: 22059 }
          }
        }
      ],
      position: {
        start: { line: 476, column: 1, offset: 21999 },
        end: { line: 476, column: 61, offset: 22059 }
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
                    start: { line: 477, column: 4, offset: 22063 },
                    end: { line: 477, column: 74, offset: 22133 }
                  }
                }
              ],
              position: {
                start: { line: 477, column: 4, offset: 22063 },
                end: { line: 477, column: 74, offset: 22133 }
              }
            }
          ],
          position: {
            start: { line: 477, column: 2, offset: 22061 },
            end: { line: 477, column: 74, offset: 22133 }
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
                    start: { line: 478, column: 4, offset: 22137 },
                    end: { line: 478, column: 52, offset: 22185 }
                  }
                }
              ],
              position: {
                start: { line: 478, column: 4, offset: 22137 },
                end: { line: 478, column: 52, offset: 22185 }
              }
            }
          ],
          position: {
            start: { line: 478, column: 2, offset: 22135 },
            end: { line: 478, column: 52, offset: 22185 }
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
                    start: { line: 479, column: 4, offset: 22189 },
                    end: { line: 479, column: 237, offset: 22422 }
                  }
                }
              ],
              position: {
                start: { line: 479, column: 4, offset: 22189 },
                end: { line: 479, column: 237, offset: 22422 }
              }
            }
          ],
          position: {
            start: { line: 479, column: 2, offset: 22187 },
            end: { line: 479, column: 237, offset: 22422 }
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
                    start: { line: 480, column: 4, offset: 22426 },
                    end: { line: 480, column: 128, offset: 22550 }
                  }
                }
              ],
              position: {
                start: { line: 480, column: 4, offset: 22426 },
                end: { line: 480, column: 128, offset: 22550 }
              }
            }
          ],
          position: {
            start: { line: 480, column: 2, offset: 22424 },
            end: { line: 480, column: 128, offset: 22550 }
          }
        }
      ],
      position: {
        start: { line: 477, column: 2, offset: 22061 },
        end: { line: 480, column: 128, offset: 22550 }
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
            start: { line: 482, column: 5, offset: 22556 },
            end: { line: 482, column: 28, offset: 22579 }
          }
        }
      ],
      position: {
        start: { line: 482, column: 1, offset: 22552 },
        end: { line: 482, column: 28, offset: 22579 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 484, column: 1, offset: 22581 },
            end: { line: 484, column: 33, offset: 22613 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 484, column: 33, offset: 22613 },
            end: { line: 484, column: 39, offset: 22619 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 484, column: 39, offset: 22619 },
            end: { line: 484, column: 161, offset: 22741 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 484, column: 161, offset: 22741 },
            end: { line: 484, column: 176, offset: 22756 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 484, column: 176, offset: 22756 },
            end: { line: 484, column: 184, offset: 22764 }
          }
        }
      ],
      position: {
        start: { line: 484, column: 1, offset: 22581 },
        end: { line: 484, column: 184, offset: 22764 }
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
        start: { line: 486, column: 1, offset: 22766 },
        end: { line: 499, column: 4, offset: 23091 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 501, column: 1, offset: 23093 },
            end: { line: 501, column: 12, offset: 23104 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 501, column: 12, offset: 23104 },
            end: { line: 501, column: 18, offset: 23110 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 501, column: 18, offset: 23110 },
            end: { line: 501, column: 88, offset: 23180 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 501, column: 88, offset: 23180 },
            end: { line: 501, column: 104, offset: 23196 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 501, column: 104, offset: 23196 },
            end: { line: 501, column: 113, offset: 23205 }
          }
        }
      ],
      position: {
        start: { line: 501, column: 1, offset: 23093 },
        end: { line: 501, column: 113, offset: 23205 }
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
        start: { line: 503, column: 1, offset: 23207 },
        end: { line: 509, column: 4, offset: 23404 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 511, column: 1, offset: 23406 },
            end: { line: 511, column: 35, offset: 23440 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 511, column: 35, offset: 23440 },
            end: { line: 511, column: 50, offset: 23455 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 511, column: 50, offset: 23455 },
            end: { line: 511, column: 55, offset: 23460 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 511, column: 55, offset: 23460 },
            end: { line: 511, column: 71, offset: 23476 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 511, column: 71, offset: 23476 },
            end: { line: 511, column: 112, offset: 23517 }
          }
        }
      ],
      position: {
        start: { line: 511, column: 1, offset: 23406 },
        end: { line: 511, column: 112, offset: 23517 }
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
        start: { line: 513, column: 1, offset: 23519 },
        end: { line: 528, column: 4, offset: 23950 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 530, column: 1, offset: 23952 },
            end: { line: 530, column: 81, offset: 24032 }
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
                start: { line: 530, column: 82, offset: 24033 },
                end: { line: 530, column: 93, offset: 24044 }
              }
            }
          ],
          position: {
            start: { line: 530, column: 81, offset: 24032 },
            end: { line: 530, column: 108, offset: 24059 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 530, column: 108, offset: 24059 },
            end: { line: 530, column: 117, offset: 24068 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 23952 },
        end: { line: 530, column: 117, offset: 24068 }
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
        start: { line: 532, column: 1, offset: 24070 },
        end: { line: 566, column: 4, offset: 24721 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server ',
          position: {
            start: { line: 568, column: 1, offset: 24723 },
            end: { line: 568, column: 17, offset: 24739 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server',
          position: {
            start: { line: 568, column: 17, offset: 24739 },
            end: { line: 568, column: 25, offset: 24747 }
          }
        },
        {
          type: 'text',
          value: ' created by the NodeJS ',
          position: {
            start: { line: 568, column: 25, offset: 24747 },
            end: { line: 568, column: 48, offset: 24770 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 568, column: 48, offset: 24770 },
            end: { line: 568, column: 54, offset: 24776 }
          }
        },
        {
          type: 'text',
          value: " module's ",
          position: {
            start: { line: 568, column: 54, offset: 24776 },
            end: { line: 568, column: 64, offset: 24786 }
          }
        },
        {
          type: 'inlineCode',
          value: 'createServer',
          position: {
            start: { line: 568, column: 64, offset: 24786 },
            end: { line: 568, column: 78, offset: 24800 }
          }
        },
        {
          type: 'text',
          value: ' accepts the HTTP handler ',
          position: {
            start: { line: 568, column: 78, offset: 24800 },
            end: { line: 568, column: 104, offset: 24826 }
          }
        },
        {
          type: 'inlineCode',
          value: 'handler',
          position: {
            start: { line: 568, column: 104, offset: 24826 },
            end: { line: 568, column: 113, offset: 24835 }
          }
        },
        {
          type: 'text',
          value: ' as a single argument. To start the server we only need to call ',
          position: {
            start: { line: 568, column: 113, offset: 24835 },
            end: { line: 568, column: 177, offset: 24899 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 568, column: 177, offset: 24899 },
            end: { line: 568, column: 192, offset: 24914 }
          }
        },
        {
          type: 'text',
          value: ', specifying port ',
          position: {
            start: { line: 568, column: 192, offset: 24914 },
            end: { line: 568, column: 210, offset: 24932 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 568, column: 210, offset: 24932 },
            end: { line: 568, column: 216, offset: 24938 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 568, column: 216, offset: 24938 },
            end: { line: 568, column: 217, offset: 24939 }
          }
        }
      ],
      position: {
        start: { line: 568, column: 1, offset: 24723 },
        end: { line: 568, column: 217, offset: 24939 }
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
            start: { line: 570, column: 5, offset: 24945 },
            end: { line: 570, column: 59, offset: 24999 }
          }
        }
      ],
      position: {
        start: { line: 570, column: 1, offset: 24941 },
        end: { line: 570, column: 59, offset: 24999 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In [A]synchronous Functional Programming, HTTP handlers are simple, reusable, and modular. Consider the following web server implementation with a complex HTTP handler:',
          position: {
            start: { line: 572, column: 1, offset: 25001 },
            end: { line: 572, column: 169, offset: 25169 }
          }
        }
      ],
      position: {
        start: { line: 572, column: 1, offset: 25001 },
        end: { line: 572, column: 169, offset: 25169 }
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
        start: { line: 574, column: 1, offset: 25171 },
        end: { line: 734, column: 4, offset: 29517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above handler ',
          position: {
            start: { line: 736, column: 1, offset: 29519 },
            end: { line: 736, column: 19, offset: 29537 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 736, column: 19, offset: 29537 },
            end: { line: 736, column: 35, offset: 29553 }
          }
        },
        {
          type: 'text',
          value: ' has many responsibilities, including handling health checks, handling options requests, retrieving user resources, updating or creating user resources, and handling application errors.',
          position: {
            start: { line: 736, column: 35, offset: 29553 },
            end: { line: 736, column: 220, offset: 29738 }
          }
        }
      ],
      position: {
        start: { line: 736, column: 1, offset: 29519 },
        end: { line: 736, column: 220, offset: 29738 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, we can break down the above complex HTTP handler into simple, modular, and reusable handlers, then use the library ',
          position: {
            start: { line: 738, column: 1, offset: 29740 },
            end: { line: 738, column: 160, offset: 29899 }
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
                start: { line: 738, column: 161, offset: 29900 },
                end: { line: 738, column: 167, offset: 29906 }
              }
            }
          ],
          position: {
            start: { line: 738, column: 160, offset: 29899 },
            end: { line: 738, column: 190, offset: 29929 }
          }
        },
        {
          type: 'text',
          value: ' to combine those handlers in a meaningful way.',
          position: {
            start: { line: 738, column: 190, offset: 29929 },
            end: { line: 738, column: 237, offset: 29976 }
          }
        }
      ],
      position: {
        start: { line: 738, column: 1, offset: 29740 },
        end: { line: 738, column: 237, offset: 29976 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "First, let's break down the complex handler.",
          position: {
            start: { line: 740, column: 1, offset: 29978 },
            end: { line: 740, column: 45, offset: 30022 }
          }
        }
      ],
      position: {
        start: { line: 740, column: 1, offset: 29978 },
        end: { line: 740, column: 45, offset: 30022 }
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
        start: { line: 742, column: 1, offset: 30024 },
        end: { line: 890, column: 4, offset: 33680 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "We've broken down the complex handler ",
          position: {
            start: { line: 892, column: 1, offset: 33682 },
            end: { line: 892, column: 39, offset: 33720 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 892, column: 39, offset: 33720 },
            end: { line: 892, column: 55, offset: 33736 }
          }
        },
        {
          type: 'text',
          value: ' into smaller, simpler handlers ',
          position: {
            start: { line: 892, column: 55, offset: 33736 },
            end: { line: 892, column: 87, offset: 33768 }
          }
        },
        {
          type: 'inlineCode',
          value: 'healthCheckHandler',
          position: {
            start: { line: 892, column: 87, offset: 33768 },
            end: { line: 892, column: 107, offset: 33788 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 107, offset: 33788 },
            end: { line: 892, column: 109, offset: 33790 }
          }
        },
        {
          type: 'inlineCode',
          value: 'optionsHandler',
          position: {
            start: { line: 892, column: 109, offset: 33790 },
            end: { line: 892, column: 125, offset: 33806 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 125, offset: 33806 },
            end: { line: 892, column: 127, offset: 33808 }
          }
        },
        {
          type: 'inlineCode',
          value: 'getUserHandler',
          position: {
            start: { line: 892, column: 127, offset: 33808 },
            end: { line: 892, column: 143, offset: 33824 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 143, offset: 33824 },
            end: { line: 892, column: 145, offset: 33826 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notFoundHandler',
          position: {
            start: { line: 892, column: 145, offset: 33826 },
            end: { line: 892, column: 162, offset: 33843 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 892, column: 162, offset: 33843 },
            end: { line: 892, column: 168, offset: 33849 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 892, column: 168, offset: 33849 },
            end: { line: 892, column: 182, offset: 33863 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 892, column: 182, offset: 33863 },
            end: { line: 892, column: 183, offset: 33864 }
          }
        }
      ],
      position: {
        start: { line: 892, column: 1, offset: 33682 },
        end: { line: 892, column: 183, offset: 33864 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Now let's combine the smaller handlers using rubico's ",
          position: {
            start: { line: 894, column: 1, offset: 33866 },
            end: { line: 894, column: 55, offset: 33920 }
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
                start: { line: 894, column: 56, offset: 33921 },
                end: { line: 894, column: 64, offset: 33929 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 55, offset: 33920 },
            end: { line: 894, column: 81, offset: 33946 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 894, column: 81, offset: 33946 },
            end: { line: 894, column: 86, offset: 33951 }
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
                start: { line: 894, column: 87, offset: 33952 },
                end: { line: 894, column: 97, offset: 33962 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 86, offset: 33951 },
            end: { line: 894, column: 116, offset: 33981 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 894, column: 116, offset: 33981 },
            end: { line: 894, column: 117, offset: 33982 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 33866 },
        end: { line: 894, column: 117, offset: 33982 }
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
        start: { line: 896, column: 1, offset: 33984 },
        end: { line: 918, column: 4, offset: 34511 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'combinedHandler',
          position: {
            start: { line: 920, column: 1, offset: 34513 },
            end: { line: 920, column: 18, offset: 34530 }
          }
        },
        {
          type: 'text',
          value: ' is functionally equivalent to ',
          position: {
            start: { line: 920, column: 18, offset: 34530 },
            end: { line: 920, column: 49, offset: 34561 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 920, column: 49, offset: 34561 },
            end: { line: 920, column: 65, offset: 34577 }
          }
        },
        {
          type: 'text',
          value: ', but is able to be expressed using a combination of smaller, simpler HTTP handlers. The benefits are as follows: being able to structure your application as small, simple components lends itself well to development, testing, and maintenance.',
          position: {
            start: { line: 920, column: 65, offset: 34577 },
            end: { line: 920, column: 307, offset: 34819 }
          }
        }
      ],
      position: {
        start: { line: 920, column: 1, offset: 34513 },
        end: { line: 920, column: 307, offset: 34819 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Development is quick and easy: where you once had to digest and add onto the entire complex component, now you only need to write a simple, greenfield component.',
          position: {
            start: { line: 922, column: 1, offset: 34821 },
            end: { line: 922, column: 162, offset: 34982 }
          }
        }
      ],
      position: {
        start: { line: 922, column: 1, offset: 34821 },
        end: { line: 922, column: 162, offset: 34982 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Testing is simplified: where you once had to write a complex integration test with many controls and conditions for the complex component, now you only need to write simple integration tests for the simple components.',
          position: {
            start: { line: 924, column: 1, offset: 34984 },
            end: { line: 924, column: 218, offset: 35201 }
          }
        }
      ],
      position: {
        start: { line: 924, column: 1, offset: 34984 },
        end: { line: 924, column: 218, offset: 35201 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The maintenance overhead is reduced: where you once had to concern yourself with testing changes over large areas of code with complex components, now you can reduce the burden to smaller areas of code with simple components.',
          position: {
            start: { line: 926, column: 1, offset: 35203 },
            end: { line: 926, column: 226, offset: 35428 }
          }
        }
      ],
      position: {
        start: { line: 926, column: 1, offset: 35203 },
        end: { line: 926, column: 226, offset: 35428 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Putting everything together:',
          position: {
            start: { line: 928, column: 1, offset: 35430 },
            end: { line: 928, column: 29, offset: 35458 }
          }
        }
      ],
      position: {
        start: { line: 928, column: 1, offset: 35430 },
        end: { line: 928, column: 29, offset: 35458 }
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
        start: { line: 930, column: 1, offset: 35460 },
        end: { line: 1107, column: 4, offset: 39693 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can find a working example of the above HTTP server code at ',
          position: {
            start: { line: 1109, column: 1, offset: 39695 },
            end: { line: 1109, column: 65, offset: 39759 }
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
                start: { line: 1109, column: 66, offset: 39760 },
                end: { line: 1109, column: 84, offset: 39778 }
              }
            }
          ],
          position: {
            start: { line: 1109, column: 65, offset: 39759 },
            end: { line: 1109, column: 166, offset: 39860 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1109, column: 166, offset: 39860 },
            end: { line: 1109, column: 167, offset: 39861 }
          }
        }
      ],
      position: {
        start: { line: 1109, column: 1, offset: 39695 },
        end: { line: 1109, column: 167, offset: 39861 }
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
            start: { line: 1111, column: 5, offset: 39867 },
            end: { line: 1111, column: 15, offset: 39877 }
          }
        }
      ],
      position: {
        start: { line: 1111, column: 1, offset: 39863 },
        end: { line: 1111, column: 15, offset: 39877 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Handling HTTP in [A]synchronous Functional Programming.',
          position: {
            start: { line: 1113, column: 1, offset: 39879 },
            end: { line: 1113, column: 71, offset: 39949 }
          }
        }
      ],
      position: {
        start: { line: 1113, column: 1, offset: 39879 },
        end: { line: 1113, column: 71, offset: 39949 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about rubico and would like to get started, please visit rubico's home page: ",
          position: {
            start: { line: 1115, column: 1, offset: 39951 },
            end: { line: 1115, column: 97, offset: 40047 }
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
                start: { line: 1115, column: 98, offset: 40048 },
                end: { line: 1115, column: 109, offset: 40059 }
              }
            }
          ],
          position: {
            start: { line: 1115, column: 97, offset: 40047 },
            end: { line: 1115, column: 113, offset: 40063 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1115, column: 113, offset: 40063 },
            end: { line: 1115, column: 114, offset: 40064 }
          }
        }
      ],
      position: {
        start: { line: 1115, column: 1, offset: 39951 },
        end: { line: 1115, column: 114, offset: 40064 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1116, column: 1, offset: 40065 }
  }
}