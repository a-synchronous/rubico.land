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
                  type: 'link',
                  title: null,
                  url: '#url-scheme',
                  children: [
                    {
                      type: 'text',
                      value: 'scheme',
                      position: {
                        start: { line: 30, column: 5, offset: 1745 },
                        end: { line: 30, column: 11, offset: 1751 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 1744 },
                    end: { line: 30, column: 25, offset: 1765 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 4, offset: 1744 },
                end: { line: 30, column: 25, offset: 1765 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 1742 },
            end: { line: 30, column: 25, offset: 1765 }
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
                        start: { line: 31, column: 5, offset: 1770 },
                        end: { line: 31, column: 16, offset: 1781 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 1769 },
                    end: { line: 31, column: 35, offset: 1800 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1769 },
                end: { line: 31, column: 35, offset: 1800 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 1767 },
            end: { line: 31, column: 35, offset: 1800 }
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
                        start: { line: 32, column: 5, offset: 1805 },
                        end: { line: 32, column: 9, offset: 1809 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 1804 },
                    end: { line: 32, column: 21, offset: 1821 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1804 },
                end: { line: 32, column: 21, offset: 1821 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 1802 },
            end: { line: 32, column: 21, offset: 1821 }
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
                        start: { line: 33, column: 5, offset: 1826 },
                        end: { line: 33, column: 14, offset: 1835 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 1825 },
                    end: { line: 33, column: 31, offset: 1852 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1825 },
                end: { line: 33, column: 31, offset: 1852 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 1823 },
            end: { line: 33, column: 31, offset: 1852 }
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
                        start: { line: 34, column: 5, offset: 1857 },
                        end: { line: 34, column: 9, offset: 1861 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 34, column: 4, offset: 1856 },
                    end: { line: 34, column: 21, offset: 1873 }
                  }
                }
              ],
              position: {
                start: { line: 34, column: 4, offset: 1856 },
                end: { line: 34, column: 21, offset: 1873 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 2, offset: 1854 },
            end: { line: 34, column: 21, offset: 1873 }
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
                        start: { line: 35, column: 5, offset: 1878 },
                        end: { line: 35, column: 21, offset: 1894 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 35, column: 4, offset: 1877 },
                    end: { line: 35, column: 45, offset: 1918 }
                  }
                }
              ],
              position: {
                start: { line: 35, column: 4, offset: 1877 },
                end: { line: 35, column: 45, offset: 1918 }
              }
            }
          ],
          position: {
            start: { line: 35, column: 2, offset: 1875 },
            end: { line: 35, column: 45, offset: 1918 }
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
                        start: { line: 36, column: 5, offset: 1923 },
                        end: { line: 36, column: 11, offset: 1929 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 36, column: 4, offset: 1922 },
                    end: { line: 36, column: 25, offset: 1943 }
                  }
                }
              ],
              position: {
                start: { line: 36, column: 4, offset: 1922 },
                end: { line: 36, column: 25, offset: 1943 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 2, offset: 1920 },
            end: { line: 36, column: 25, offset: 1943 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 2, offset: 1742 },
        end: { line: 36, column: 25, offset: 1943 }
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
            start: { line: 38, column: 5, offset: 1949 },
            end: { line: 38, column: 15, offset: 1959 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1945 },
        end: { line: 38, column: 15, offset: 1959 }
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
            start: { line: 40, column: 1, offset: 1961 },
            end: { line: 40, column: 78, offset: 2038 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1961 },
        end: { line: 40, column: 78, offset: 2038 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The scheme of a URL specifies the protocol that the client will use to send a request to the server. For HTTP, the scheme could be ',
          position: {
            start: { line: 42, column: 1, offset: 2040 },
            end: { line: 42, column: 132, offset: 2171 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 42, column: 132, offset: 2171 },
            end: { line: 42, column: 138, offset: 2177 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 42, column: 138, offset: 2177 },
            end: { line: 42, column: 142, offset: 2181 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https',
          position: {
            start: { line: 42, column: 142, offset: 2181 },
            end: { line: 42, column: 149, offset: 2188 }
          }
        },
        {
          type: 'text',
          value: '. Other schemes include ',
          position: {
            start: { line: 42, column: 149, offset: 2188 },
            end: { line: 42, column: 173, offset: 2212 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ws',
          position: {
            start: { line: 42, column: 173, offset: 2212 },
            end: { line: 42, column: 177, offset: 2216 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 42, column: 177, offset: 2216 },
            end: { line: 42, column: 182, offset: 2221 }
          }
        },
        {
          type: 'inlineCode',
          value: 'wss',
          position: {
            start: { line: 42, column: 182, offset: 2221 },
            end: { line: 42, column: 187, offset: 2226 }
          }
        },
        {
          type: 'text',
          value: ' for the ',
          position: {
            start: { line: 42, column: 187, offset: 2226 },
            end: { line: 42, column: 196, offset: 2235 }
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
                start: { line: 42, column: 197, offset: 2236 },
                end: { line: 42, column: 206, offset: 2245 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 196, offset: 2235 },
            end: { line: 42, column: 228, offset: 2267 }
          }
        },
        {
          type: 'text',
          value: ' protocol, ',
          position: {
            start: { line: 42, column: 228, offset: 2267 },
            end: { line: 42, column: 239, offset: 2278 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mailto',
          position: {
            start: { line: 42, column: 239, offset: 2278 },
            end: { line: 42, column: 247, offset: 2286 }
          }
        },
        {
          type: 'text',
          value: ' for the "mailto:" protocol, and ',
          position: {
            start: { line: 42, column: 247, offset: 2286 },
            end: { line: 42, column: 280, offset: 2319 }
          }
        },
        {
          type: 'inlineCode',
          value: 'file',
          position: {
            start: { line: 42, column: 280, offset: 2319 },
            end: { line: 42, column: 286, offset: 2325 }
          }
        },
        {
          type: 'text',
          value: ' for the "file:" protocol.',
          position: {
            start: { line: 42, column: 286, offset: 2325 },
            end: { line: 42, column: 312, offset: 2351 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 2040 },
        end: { line: 42, column: 312, offset: 2351 }
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
            start: { line: 44, column: 5, offset: 2357 },
            end: { line: 44, column: 20, offset: 2372 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 2353 },
        end: { line: 44, column: 20, offset: 2372 }
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
            start: { line: 46, column: 1, offset: 2374 },
            end: { line: 46, column: 88, offset: 2461 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 2374 },
        end: { line: 46, column: 88, offset: 2461 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The domain name of a URL is a unique name that translates to the address of a computer where the resource of the URL is located. Domain names are translated via the ',
          position: {
            start: { line: 48, column: 1, offset: 2463 },
            end: { line: 48, column: 166, offset: 2628 }
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
                start: { line: 48, column: 167, offset: 2629 },
                end: { line: 48, column: 191, offset: 2653 }
              }
            }
          ],
          position: {
            start: { line: 48, column: 166, offset: 2628 },
            end: { line: 48, column: 246, offset: 2708 }
          }
        },
        {
          type: 'text',
          value: ' to computer addresses running web servers to which HTTP clients can send requests.',
          position: {
            start: { line: 48, column: 246, offset: 2708 },
            end: { line: 48, column: 329, offset: 2791 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 2463 },
        end: { line: 48, column: 329, offset: 2791 }
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
            start: { line: 50, column: 5, offset: 2797 },
            end: { line: 50, column: 13, offset: 2805 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 2793 },
        end: { line: 50, column: 13, offset: 2805 }
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
            start: { line: 52, column: 1, offset: 2807 },
            end: { line: 52, column: 74, offset: 2880 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2807 },
        end: { line: 52, column: 74, offset: 2880 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The port of a URL is a number that identifies a specific process or network service running on the computer where the resource of the URL is located. When a computer starts up a process like a web server, it can assign it a numerical port between 0 and 65535. The web server would then listen on this assigned port for HTTP requests.',
          position: {
            start: { line: 54, column: 1, offset: 2882 },
            end: { line: 54, column: 334, offset: 3215 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 2882 },
        end: { line: 54, column: 334, offset: 3215 }
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
            start: { line: 56, column: 5, offset: 3221 },
            end: { line: 56, column: 18, offset: 3234 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 3217 },
        end: { line: 56, column: 18, offset: 3234 }
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
            start: { line: 58, column: 1, offset: 3236 },
            end: { line: 58, column: 84, offset: 3319 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 3236 },
        end: { line: 58, column: 84, offset: 3319 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The authority of a URL consists of the domain name and port of the URL separated by a colon.',
          position: {
            start: { line: 60, column: 1, offset: 3321 },
            end: { line: 60, column: 93, offset: 3413 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3321 },
        end: { line: 60, column: 93, offset: 3413 }
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
            start: { line: 62, column: 5, offset: 3419 },
            end: { line: 62, column: 13, offset: 3427 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3415 },
        end: { line: 62, column: 13, offset: 3427 }
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
            start: { line: 64, column: 1, offset: 3429 },
            end: { line: 64, column: 74, offset: 3502 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 3429 },
        end: { line: 64, column: 74, offset: 3502 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The path of a URL is a string that identifies the physical or abstract location of the resource within the URL's domain.",
          position: {
            start: { line: 66, column: 1, offset: 3504 },
            end: { line: 66, column: 121, offset: 3624 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3504 },
        end: { line: 66, column: 121, offset: 3624 }
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
            start: { line: 68, column: 5, offset: 3630 },
            end: { line: 68, column: 25, offset: 3650 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3626 },
        end: { line: 68, column: 25, offset: 3650 }
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
            start: { line: 70, column: 1, offset: 3652 },
            end: { line: 70, column: 98, offset: 3749 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 3652 },
        end: { line: 70, column: 98, offset: 3749 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The query parameters of a URL are a list of key-value pairs separated by the ',
          position: {
            start: { line: 72, column: 1, offset: 3751 },
            end: { line: 72, column: 78, offset: 3828 }
          }
        },
        {
          type: 'inlineCode',
          value: '&',
          position: {
            start: { line: 72, column: 78, offset: 3828 },
            end: { line: 72, column: 81, offset: 3831 }
          }
        },
        {
          type: 'text',
          value: ' symbol. The query parameters can further identify the resource of a URL.',
          position: {
            start: { line: 72, column: 81, offset: 3831 },
            end: { line: 72, column: 154, offset: 3904 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 3751 },
        end: { line: 72, column: 154, offset: 3904 }
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
            start: { line: 74, column: 5, offset: 3910 },
            end: { line: 74, column: 15, offset: 3920 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 3906 },
        end: { line: 74, column: 15, offset: 3920 }
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
            start: { line: 76, column: 1, offset: 3922 },
            end: { line: 76, column: 78, offset: 3999 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3922 },
        end: { line: 76, column: 78, offset: 3999 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `The anchor of a URL specifies a part of the URL's resource, and does not necessarily locate the resource. When a web server serves a web page as a resource, the anchor acts as a sort of "bookmark" inside the resource. Browsers will see the anchor and scroll the page down to where the section identified by the anchor is visible.`,
          position: {
            start: { line: 78, column: 1, offset: 4001 },
            end: { line: 78, column: 330, offset: 4330 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 4001 },
        end: { line: 78, column: 330, offset: 4330 }
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
            start: { line: 80, column: 4, offset: 4335 },
            end: { line: 80, column: 15, offset: 4346 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 4332 },
        end: { line: 80, column: 15, offset: 4346 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP client is a component of a ',
          position: {
            start: { line: 82, column: 1, offset: 4348 },
            end: { line: 82, column: 36, offset: 4383 }
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
                start: { line: 82, column: 37, offset: 4384 },
                end: { line: 82, column: 57, offset: 4404 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 36, offset: 4383 },
            end: { line: 82, column: 110, offset: 4457 }
          }
        },
        {
          type: 'text',
          value: ' running inside a computer that sends HTTP requests to HTTP servers. The JavaScript code below is part of a software application that runs in your web browser. The code demonstrates the use of an HTTP client ',
          position: {
            start: { line: 82, column: 110, offset: 4457 },
            end: { line: 82, column: 318, offset: 4665 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 82, column: 318, offset: 4665 },
            end: { line: 82, column: 325, offset: 4672 }
          }
        },
        {
          type: 'text',
          value: ' to send a request to an HTTP server at the url ',
          position: {
            start: { line: 82, column: 325, offset: 4672 },
            end: { line: 82, column: 373, offset: 4720 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https://jsonplaceholder.typicode.com/todos/1',
          position: {
            start: { line: 82, column: 373, offset: 4720 },
            end: { line: 82, column: 419, offset: 4766 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 82, column: 419, offset: 4766 },
            end: { line: 82, column: 420, offset: 4767 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 4348 },
        end: { line: 82, column: 420, offset: 4767 }
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
        start: { line: 84, column: 1, offset: 4769 },
        end: { line: 95, column: 4, offset: 5102 }
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
            start: { line: 97, column: 4, offset: 5107 },
            end: { line: 97, column: 16, offset: 5119 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 5104 },
        end: { line: 97, column: 16, offset: 5119 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request is a message conforming to the HTTP protocol that a client sends to a server. An HTTP request has the following properties:',
          position: {
            start: { line: 99, column: 1, offset: 5121 },
            end: { line: 99, column: 140, offset: 5260 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 5121 },
        end: { line: 99, column: 140, offset: 5260 }
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
                        start: { line: 100, column: 5, offset: 5265 },
                        end: { line: 100, column: 11, offset: 5271 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 100, column: 4, offset: 5264 },
                    end: { line: 100, column: 34, offset: 5294 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 4, offset: 5264 },
                end: { line: 100, column: 34, offset: 5294 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 2, offset: 5262 },
            end: { line: 100, column: 34, offset: 5294 }
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
                        start: { line: 101, column: 5, offset: 5299 },
                        end: { line: 101, column: 8, offset: 5302 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 101, column: 4, offset: 5298 },
                    end: { line: 101, column: 28, offset: 5322 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 4, offset: 5298 },
                end: { line: 101, column: 28, offset: 5322 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 2, offset: 5296 },
            end: { line: 101, column: 28, offset: 5322 }
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
                        start: { line: 102, column: 5, offset: 5327 },
                        end: { line: 102, column: 12, offset: 5334 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 102, column: 4, offset: 5326 },
                    end: { line: 102, column: 36, offset: 5358 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 4, offset: 5326 },
                end: { line: 102, column: 36, offset: 5358 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 2, offset: 5324 },
            end: { line: 102, column: 36, offset: 5358 }
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
                        start: { line: 103, column: 5, offset: 5363 },
                        end: { line: 103, column: 9, offset: 5367 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 103, column: 4, offset: 5362 },
                    end: { line: 103, column: 30, offset: 5388 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 4, offset: 5362 },
                end: { line: 103, column: 30, offset: 5388 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 2, offset: 5360 },
            end: { line: 103, column: 30, offset: 5388 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 2, offset: 5262 },
        end: { line: 103, column: 30, offset: 5388 }
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
            start: { line: 105, column: 5, offset: 5394 },
            end: { line: 105, column: 24, offset: 5413 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 5390 },
        end: { line: 105, column: 24, offset: 5413 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: ',
          position: {
            start: { line: 107, column: 1, offset: 5415 },
            end: { line: 107, column: 192, offset: 5606 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 107, column: 192, offset: 5606 },
            end: { line: 107, column: 197, offset: 5611 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 197, offset: 5611 },
            end: { line: 107, column: 199, offset: 5613 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 107, column: 199, offset: 5613 },
            end: { line: 107, column: 205, offset: 5619 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 205, offset: 5619 },
            end: { line: 107, column: 207, offset: 5621 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 107, column: 207, offset: 5621 },
            end: { line: 107, column: 213, offset: 5627 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 213, offset: 5627 },
            end: { line: 107, column: 215, offset: 5629 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 107, column: 215, offset: 5629 },
            end: { line: 107, column: 220, offset: 5634 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 220, offset: 5634 },
            end: { line: 107, column: 222, offset: 5636 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 107, column: 222, offset: 5636 },
            end: { line: 107, column: 229, offset: 5643 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 229, offset: 5643 },
            end: { line: 107, column: 231, offset: 5645 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 107, column: 231, offset: 5645 },
            end: { line: 107, column: 239, offset: 5653 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 239, offset: 5653 },
            end: { line: 107, column: 241, offset: 5655 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 107, column: 241, offset: 5655 },
            end: { line: 107, column: 250, offset: 5664 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 250, offset: 5664 },
            end: { line: 107, column: 252, offset: 5666 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 107, column: 252, offset: 5666 },
            end: { line: 107, column: 261, offset: 5675 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 107, column: 261, offset: 5675 },
            end: { line: 107, column: 267, offset: 5681 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 107, column: 267, offset: 5681 },
            end: { line: 107, column: 274, offset: 5688 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 107, column: 274, offset: 5688 },
            end: { line: 107, column: 275, offset: 5689 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 5415 },
        end: { line: 107, column: 275, offset: 5689 }
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
            start: { line: 109, column: 6, offset: 5696 },
            end: { line: 109, column: 9, offset: 5699 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 5691 },
        end: { line: 109, column: 9, offset: 5699 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 111, column: 1, offset: 5701 },
            end: { line: 111, column: 5, offset: 5705 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 5, offset: 5705 },
            end: { line: 111, column: 10, offset: 5710 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for a data representation of the resource. ',
          position: {
            start: { line: 111, column: 10, offset: 5710 },
            end: { line: 111, column: 94, offset: 5794 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 94, offset: 5794 },
            end: { line: 111, column: 99, offset: 5799 }
          }
        },
        {
          type: 'text',
          value: ' requests are ',
          position: {
            start: { line: 111, column: 99, offset: 5799 },
            end: { line: 111, column: 113, offset: 5813 }
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
                start: { line: 111, column: 114, offset: 5814 },
                end: { line: 111, column: 118, offset: 5818 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 113, offset: 5813 },
            end: { line: 111, column: 180, offset: 5880 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 111, column: 180, offset: 5880 },
            end: { line: 111, column: 182, offset: 5882 }
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
                start: { line: 111, column: 183, offset: 5883 },
                end: { line: 111, column: 193, offset: 5893 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 182, offset: 5882 },
            end: { line: 111, column: 256, offset: 5956 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 111, column: 256, offset: 5956 },
            end: { line: 111, column: 262, offset: 5962 }
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
                start: { line: 111, column: 263, offset: 5963 },
                end: { line: 111, column: 272, offset: 5972 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 262, offset: 5962 },
            end: { line: 111, column: 334, offset: 6034 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 111, column: 334, offset: 6034 },
            end: { line: 111, column: 335, offset: 6035 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 5701 },
        end: { line: 111, column: 335, offset: 6035 }
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
            start: { line: 113, column: 6, offset: 6042 },
            end: { line: 113, column: 10, offset: 6046 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 6037 },
        end: { line: 113, column: 10, offset: 6046 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 115, column: 1, offset: 6048 },
            end: { line: 115, column: 5, offset: 6052 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 5, offset: 6052 },
            end: { line: 115, column: 11, offset: 6058 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for metadata about the resource. ',
          position: {
            start: { line: 115, column: 11, offset: 6058 },
            end: { line: 115, column: 85, offset: 6132 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 85, offset: 6132 },
            end: { line: 115, column: 91, offset: 6138 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, idempotent, and cacheable.',
          position: {
            start: { line: 115, column: 91, offset: 6138 },
            end: { line: 115, column: 137, offset: 6184 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 6048 },
        end: { line: 115, column: 137, offset: 6184 }
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
            start: { line: 117, column: 6, offset: 6191 },
            end: { line: 117, column: 10, offset: 6195 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 6186 },
        end: { line: 117, column: 10, offset: 6195 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 119, column: 1, offset: 6197 },
            end: { line: 119, column: 5, offset: 6201 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 5, offset: 6201 },
            end: { line: 119, column: 11, offset: 6207 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to create the resource. ',
          position: {
            start: { line: 119, column: 11, offset: 6207 },
            end: { line: 119, column: 85, offset: 6281 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 85, offset: 6281 },
            end: { line: 119, column: 91, offset: 6287 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 119, column: 91, offset: 6287 },
            end: { line: 119, column: 185, offset: 6381 }
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
                start: { line: 119, column: 186, offset: 6382 },
                end: { line: 119, column: 195, offset: 6391 }
              }
            }
          ],
          position: {
            start: { line: 119, column: 185, offset: 6381 },
            end: { line: 119, column: 257, offset: 6453 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 119, column: 257, offset: 6453 },
            end: { line: 119, column: 278, offset: 6474 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 119, column: 278, offset: 6474 },
            end: { line: 119, column: 287, offset: 6483 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 119, column: 287, offset: 6483 },
            end: { line: 119, column: 291, offset: 6487 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 119, column: 291, offset: 6487 },
            end: { line: 119, column: 306, offset: 6502 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 119, column: 306, offset: 6502 },
            end: { line: 119, column: 328, offset: 6524 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 119, column: 328, offset: 6524 },
            end: { line: 119, column: 346, offset: 6542 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 119, column: 346, offset: 6542 },
            end: { line: 119, column: 354, offset: 6550 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6197 },
        end: { line: 119, column: 354, offset: 6550 }
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
            start: { line: 121, column: 6, offset: 6557 },
            end: { line: 121, column: 9, offset: 6560 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6552 },
        end: { line: 121, column: 9, offset: 6560 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 123, column: 1, offset: 6562 },
            end: { line: 123, column: 5, offset: 6566 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 5, offset: 6566 },
            end: { line: 123, column: 10, offset: 6571 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 123, column: 10, offset: 6571 },
            end: { line: 123, column: 135, offset: 6696 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 135, offset: 6696 },
            end: { line: 123, column: 140, offset: 6701 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 123, column: 140, offset: 6701 },
            end: { line: 123, column: 198, offset: 6759 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6562 },
        end: { line: 123, column: 198, offset: 6759 }
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
            start: { line: 125, column: 6, offset: 6766 },
            end: { line: 125, column: 11, offset: 6771 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6761 },
        end: { line: 125, column: 11, offset: 6771 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 127, column: 1, offset: 6773 },
            end: { line: 127, column: 5, offset: 6777 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 5, offset: 6777 },
            end: { line: 127, column: 12, offset: 6784 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the resource. ',
          position: {
            start: { line: 127, column: 12, offset: 6784 },
            end: { line: 127, column: 96, offset: 6868 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 96, offset: 6868 },
            end: { line: 127, column: 103, offset: 6875 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 127, column: 103, offset: 6875 },
            end: { line: 127, column: 227, offset: 6999 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 127, column: 227, offset: 6999 },
            end: { line: 127, column: 236, offset: 7008 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 127, column: 236, offset: 7008 },
            end: { line: 127, column: 240, offset: 7012 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 127, column: 240, offset: 7012 },
            end: { line: 127, column: 255, offset: 7027 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 127, column: 255, offset: 7027 },
            end: { line: 127, column: 277, offset: 7049 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 127, column: 277, offset: 7049 },
            end: { line: 127, column: 295, offset: 7067 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 127, column: 295, offset: 7067 },
            end: { line: 127, column: 303, offset: 7075 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6773 },
        end: { line: 127, column: 303, offset: 7075 }
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
            start: { line: 129, column: 6, offset: 7082 },
            end: { line: 129, column: 12, offset: 7088 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 7077 },
        end: { line: 129, column: 12, offset: 7088 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 131, column: 1, offset: 7090 },
            end: { line: 131, column: 5, offset: 7094 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 5, offset: 7094 },
            end: { line: 131, column: 13, offset: 7102 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the resource. ',
          position: {
            start: { line: 131, column: 13, offset: 7102 },
            end: { line: 131, column: 78, offset: 7167 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 78, offset: 7167 },
            end: { line: 131, column: 86, offset: 7175 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 131, column: 86, offset: 7175 },
            end: { line: 131, column: 148, offset: 7237 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 7090 },
        end: { line: 131, column: 148, offset: 7237 }
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
            start: { line: 133, column: 6, offset: 7244 },
            end: { line: 133, column: 13, offset: 7251 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 7239 },
        end: { line: 133, column: 13, offset: 7251 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 135, column: 1, offset: 7253 },
            end: { line: 135, column: 5, offset: 7257 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 5, offset: 7257 },
            end: { line: 135, column: 14, offset: 7266 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the resource. ',
          position: {
            start: { line: 135, column: 14, offset: 7266 },
            end: { line: 135, column: 119, offset: 7371 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 119, offset: 7371 },
            end: { line: 135, column: 128, offset: 7380 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 135, column: 128, offset: 7380 },
            end: { line: 135, column: 194, offset: 7446 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 7253 },
        end: { line: 135, column: 194, offset: 7446 }
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
            start: { line: 137, column: 6, offset: 7453 },
            end: { line: 137, column: 13, offset: 7460 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 7448 },
        end: { line: 137, column: 13, offset: 7460 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 139, column: 1, offset: 7462 },
            end: { line: 139, column: 5, offset: 7466 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 5, offset: 7466 },
            end: { line: 139, column: 14, offset: 7475 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options of the resource. ',
          position: {
            start: { line: 139, column: 14, offset: 7475 },
            end: { line: 139, column: 110, offset: 7571 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 110, offset: 7571 },
            end: { line: 139, column: 119, offset: 7580 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 139, column: 119, offset: 7580 },
            end: { line: 139, column: 177, offset: 7638 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7462 },
        end: { line: 139, column: 177, offset: 7638 }
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
            start: { line: 141, column: 6, offset: 7645 },
            end: { line: 141, column: 11, offset: 7650 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7640 },
        end: { line: 141, column: 11, offset: 7650 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 143, column: 1, offset: 7652 },
            end: { line: 143, column: 5, offset: 7656 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 5, offset: 7656 },
            end: { line: 143, column: 12, offset: 7663 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 143, column: 12, offset: 7663 },
            end: { line: 143, column: 66, offset: 7717 }
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
                start: { line: 143, column: 67, offset: 7718 },
                end: { line: 143, column: 81, offset: 7732 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 66, offset: 7717 },
            end: { line: 143, column: 134, offset: 7785 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the URL. ',
          position: {
            start: { line: 143, column: 134, offset: 7785 },
            end: { line: 143, column: 162, offset: 7813 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 162, offset: 7813 },
            end: { line: 143, column: 169, offset: 7820 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 143, column: 169, offset: 7820 },
            end: { line: 143, column: 227, offset: 7878 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7652 },
        end: { line: 143, column: 227, offset: 7878 }
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
            start: { line: 145, column: 5, offset: 7884 },
            end: { line: 145, column: 21, offset: 7900 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7880 },
        end: { line: 145, column: 21, offset: 7900 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request URL is the ',
          position: {
            start: { line: 147, column: 1, offset: 7902 },
            end: { line: 147, column: 29, offset: 7930 }
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
                start: { line: 147, column: 30, offset: 7931 },
                end: { line: 147, column: 33, offset: 7934 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 29, offset: 7930 },
            end: { line: 147, column: 40, offset: 7941 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 147, column: 40, offset: 7941 },
            end: { line: 147, column: 137, offset: 8038 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7902 },
        end: { line: 147, column: 137, offset: 8038 }
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
            start: { line: 149, column: 5, offset: 8044 },
            end: { line: 149, column: 25, offset: 8064 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 8040 },
        end: { line: 149, column: 25, offset: 8064 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request.',
          position: {
            start: { line: 151, column: 1, offset: 8066 },
            end: { line: 151, column: 144, offset: 8209 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 8066 },
        end: { line: 151, column: 144, offset: 8209 }
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
            start: { line: 153, column: 5, offset: 8215 },
            end: { line: 153, column: 22, offset: 8232 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 8211 },
        end: { line: 153, column: 22, offset: 8232 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP request body is the part of the request that carries the bulk of the data sent to the server. The content type of the request body should be specified in the request's ",
          position: {
            start: { line: 155, column: 1, offset: 8234 },
            end: { line: 155, column: 178, offset: 8411 }
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
                start: { line: 155, column: 179, offset: 8412 },
                end: { line: 155, column: 191, offset: 8424 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 178, offset: 8411 },
            end: { line: 155, column: 274, offset: 8507 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 155, column: 274, offset: 8507 },
            end: { line: 155, column: 282, offset: 8515 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 8234 },
        end: { line: 155, column: 282, offset: 8515 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP request bodies:',
          position: {
            start: { line: 157, column: 1, offset: 8517 },
            end: { line: 157, column: 38, offset: 8554 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 8517 },
        end: { line: 157, column: 38, offset: 8554 }
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
                        start: { line: 158, column: 5, offset: 8559 },
                        end: { line: 158, column: 9, offset: 8563 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 8558 },
                    end: { line: 158, column: 45, offset: 8599 }
                  }
                },
                {
                  type: 'text',
                  value: ' - request body used for web applications. The request method is typically ',
                  position: {
                    start: { line: 158, column: 45, offset: 8599 },
                    end: { line: 158, column: 120, offset: 8674 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 158, column: 120, offset: 8674 },
                    end: { line: 158, column: 125, offset: 8679 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 158, column: 125, offset: 8679 },
                    end: { line: 158, column: 127, offset: 8681 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 158, column: 127, offset: 8681 },
                    end: { line: 158, column: 133, offset: 8687 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 158, column: 133, offset: 8687 },
                    end: { line: 158, column: 138, offset: 8692 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 158, column: 138, offset: 8692 },
                    end: { line: 158, column: 145, offset: 8699 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 158, column: 145, offset: 8699 },
                    end: { line: 158, column: 151, offset: 8705 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 158, column: 151, offset: 8705 },
                    end: { line: 158, column: 165, offset: 8719 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 158, column: 165, offset: 8719 },
                    end: { line: 158, column: 187, offset: 8741 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 158, column: 187, offset: 8741 },
                    end: { line: 158, column: 205, offset: 8759 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 158, column: 205, offset: 8759 },
                    end: { line: 158, column: 206, offset: 8760 }
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 8558 },
                end: { line: 158, column: 206, offset: 8760 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 2, offset: 8556 },
            end: { line: 158, column: 206, offset: 8760 }
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
                    start: { line: 159, column: 4, offset: 8764 },
                    end: { line: 159, column: 83, offset: 8843 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 159, column: 83, offset: 8843 },
                    end: { line: 159, column: 88, offset: 8848 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 159, column: 88, offset: 8848 },
                    end: { line: 159, column: 92, offset: 8852 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 159, column: 92, offset: 8852 },
                    end: { line: 159, column: 98, offset: 8858 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 159, column: 98, offset: 8858 },
                    end: { line: 159, column: 104, offset: 8864 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 159, column: 104, offset: 8864 },
                    end: { line: 159, column: 118, offset: 8878 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 159, column: 118, offset: 8878 },
                    end: { line: 159, column: 139, offset: 8899 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 159, column: 139, offset: 8899 },
                    end: { line: 159, column: 151, offset: 8911 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 151, offset: 8911 },
                    end: { line: 159, column: 153, offset: 8913 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 159, column: 153, offset: 8913 },
                    end: { line: 159, column: 164, offset: 8924 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 164, offset: 8924 },
                    end: { line: 159, column: 166, offset: 8926 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 159, column: 166, offset: 8926 },
                    end: { line: 159, column: 178, offset: 8938 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 178, offset: 8938 },
                    end: { line: 159, column: 180, offset: 8940 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 159, column: 180, offset: 8940 },
                    end: { line: 159, column: 193, offset: 8953 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 159, column: 193, offset: 8953 },
                    end: { line: 159, column: 198, offset: 8958 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 159, column: 198, offset: 8958 },
                    end: { line: 159, column: 209, offset: 8969 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 159, column: 209, offset: 8969 },
                    end: { line: 159, column: 210, offset: 8970 }
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 8764 },
                end: { line: 159, column: 210, offset: 8970 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 2, offset: 8762 },
            end: { line: 159, column: 210, offset: 8970 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 2, offset: 8556 },
        end: { line: 159, column: 210, offset: 8970 }
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
            start: { line: 161, column: 4, offset: 8975 },
            end: { line: 161, column: 17, offset: 8988 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8972 },
        end: { line: 161, column: 17, offset: 8988 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client. An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8990 },
            end: { line: 163, column: 149, offset: 9138 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8990 },
        end: { line: 163, column: 149, offset: 9138 }
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
                        start: { line: 164, column: 5, offset: 9143 },
                        end: { line: 164, column: 16, offset: 9154 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 164, column: 4, offset: 9142 },
                    end: { line: 164, column: 45, offset: 9183 }
                  }
                }
              ],
              position: {
                start: { line: 164, column: 4, offset: 9142 },
                end: { line: 164, column: 45, offset: 9183 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 2, offset: 9140 },
            end: { line: 164, column: 45, offset: 9183 }
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
                        start: { line: 165, column: 5, offset: 9188 },
                        end: { line: 165, column: 12, offset: 9195 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 165, column: 4, offset: 9187 },
                    end: { line: 165, column: 37, offset: 9220 }
                  }
                }
              ],
              position: {
                start: { line: 165, column: 4, offset: 9187 },
                end: { line: 165, column: 37, offset: 9220 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 2, offset: 9185 },
            end: { line: 165, column: 37, offset: 9220 }
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
                        start: { line: 166, column: 5, offset: 9225 },
                        end: { line: 166, column: 9, offset: 9229 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 166, column: 4, offset: 9224 },
                    end: { line: 166, column: 31, offset: 9251 }
                  }
                }
              ],
              position: {
                start: { line: 166, column: 4, offset: 9224 },
                end: { line: 166, column: 31, offset: 9251 }
              }
            }
          ],
          position: {
            start: { line: 166, column: 2, offset: 9222 },
            end: { line: 166, column: 31, offset: 9251 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 2, offset: 9140 },
        end: { line: 166, column: 31, offset: 9251 }
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
            start: { line: 168, column: 5, offset: 9257 },
            end: { line: 168, column: 30, offset: 9282 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 9253 },
        end: { line: 168, column: 30, offset: 9282 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response status code is a three-digit code that indicates the status of the server's processing of the request.",
          position: {
            start: { line: 170, column: 1, offset: 9284 },
            end: { line: 170, column: 121, offset: 9404 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 9284 },
        end: { line: 170, column: 121, offset: 9404 }
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
            start: { line: 172, column: 6, offset: 9411 },
            end: { line: 172, column: 42, offset: 9447 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 9406 },
        end: { line: 172, column: 42, offset: 9447 }
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
            start: { line: 174, column: 7, offset: 9455 },
            end: { line: 174, column: 19, offset: 9467 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 9449 },
        end: { line: 174, column: 19, offset: 9467 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received the request headers and is ready for the client to send the request body.',
          position: {
            start: { line: 176, column: 1, offset: 9469 },
            end: { line: 176, column: 98, offset: 9566 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 9469 },
        end: { line: 176, column: 98, offset: 9566 }
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
            start: { line: 178, column: 7, offset: 9574 },
            end: { line: 178, column: 30, offset: 9597 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 9568 },
        end: { line: 178, column: 30, offset: 9597 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is switching to a different protocol, specified in the ',
          position: {
            start: { line: 180, column: 1, offset: 9599 },
            end: { line: 180, column: 67, offset: 9665 }
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
                start: { line: 180, column: 68, offset: 9666 },
                end: { line: 180, column: 75, offset: 9673 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 67, offset: 9665 },
            end: { line: 180, column: 153, offset: 9751 }
          }
        },
        {
          type: 'text',
          value: " header, at the client's request. ",
          position: {
            start: { line: 180, column: 153, offset: 9751 },
            end: { line: 180, column: 187, offset: 9785 }
          }
        },
        {
          type: 'inlineCode',
          value: '101 Switching Protocols',
          position: {
            start: { line: 180, column: 187, offset: 9785 },
            end: { line: 180, column: 212, offset: 9810 }
          }
        },
        {
          type: 'text',
          value: ' is used by the ',
          position: {
            start: { line: 180, column: 212, offset: 9810 },
            end: { line: 180, column: 228, offset: 9826 }
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
                start: { line: 180, column: 229, offset: 9827 },
                end: { line: 180, column: 238, offset: 9836 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 228, offset: 9826 },
            end: { line: 180, column: 260, offset: 9858 }
          }
        },
        {
          type: 'text',
          value: ' protocol when switching from HTTP.',
          position: {
            start: { line: 180, column: 260, offset: 9858 },
            end: { line: 180, column: 295, offset: 9893 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 9599 },
        end: { line: 180, column: 295, offset: 9893 }
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
            start: { line: 182, column: 7, offset: 9901 },
            end: { line: 182, column: 21, offset: 9915 }
          }
        }
      ],
      position: {
        start: { line: 182, column: 1, offset: 9895 },
        end: { line: 182, column: 21, offset: 9915 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received and is processing the request but no response is available yet.',
          position: {
            start: { line: 184, column: 1, offset: 9917 },
            end: { line: 184, column: 88, offset: 10004 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 9917 },
        end: { line: 184, column: 88, offset: 10004 }
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
            start: { line: 186, column: 7, offset: 10012 },
            end: { line: 186, column: 22, offset: 10027 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 10006 },
        end: { line: 186, column: 22, offset: 10027 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.',
          position: {
            start: { line: 188, column: 1, offset: 10029 },
            end: { line: 188, column: 139, offset: 10167 }
          }
        }
      ],
      position: {
        start: { line: 188, column: 1, offset: 10029 },
        end: { line: 188, column: 139, offset: 10167 }
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
            start: { line: 190, column: 6, offset: 10174 },
            end: { line: 190, column: 39, offset: 10207 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 10169 },
        end: { line: 190, column: 39, offset: 10207 }
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
            start: { line: 192, column: 7, offset: 10215 },
            end: { line: 192, column: 13, offset: 10221 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 10209 },
        end: { line: 192, column: 13, offset: 10221 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server successfully processed the request. The meaning of success depends on the request method:',
          position: {
            start: { line: 194, column: 1, offset: 10223 },
            end: { line: 194, column: 101, offset: 10323 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 10223 },
        end: { line: 194, column: 101, offset: 10323 }
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
                    start: { line: 195, column: 4, offset: 10327 },
                    end: { line: 195, column: 9, offset: 10332 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource has been successfully retrieved and transmitted in the response message body.',
                  position: {
                    start: { line: 195, column: 9, offset: 10332 },
                    end: { line: 195, column: 102, offset: 10425 }
                  }
                }
              ],
              position: {
                start: { line: 195, column: 4, offset: 10327 },
                end: { line: 195, column: 102, offset: 10425 }
              }
            }
          ],
          position: {
            start: { line: 195, column: 2, offset: 10325 },
            end: { line: 195, column: 102, offset: 10425 }
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
                    start: { line: 196, column: 4, offset: 10429 },
                    end: { line: 196, column: 10, offset: 10435 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The requested metadata about the resource is available in the response headers.',
                  position: {
                    start: { line: 196, column: 10, offset: 10435 },
                    end: { line: 196, column: 92, offset: 10517 }
                  }
                }
              ],
              position: {
                start: { line: 196, column: 4, offset: 10429 },
                end: { line: 196, column: 92, offset: 10517 }
              }
            }
          ],
          position: {
            start: { line: 196, column: 2, offset: 10427 },
            end: { line: 196, column: 92, offset: 10517 }
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
                    start: { line: 197, column: 4, offset: 10521 },
                    end: { line: 197, column: 10, offset: 10527 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created successfully.',
                  position: {
                    start: { line: 197, column: 10, offset: 10527 },
                    end: { line: 197, column: 51, offset: 10568 }
                  }
                }
              ],
              position: {
                start: { line: 197, column: 4, offset: 10521 },
                end: { line: 197, column: 51, offset: 10568 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 2, offset: 10519 },
            end: { line: 197, column: 51, offset: 10568 }
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
                    start: { line: 198, column: 4, offset: 10572 },
                    end: { line: 198, column: 9, offset: 10577 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created or updated successfully.',
                  position: {
                    start: { line: 198, column: 9, offset: 10577 },
                    end: { line: 198, column: 61, offset: 10629 }
                  }
                }
              ],
              position: {
                start: { line: 198, column: 4, offset: 10572 },
                end: { line: 198, column: 61, offset: 10629 }
              }
            }
          ],
          position: {
            start: { line: 198, column: 2, offset: 10570 },
            end: { line: 198, column: 61, offset: 10629 }
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
                    start: { line: 199, column: 4, offset: 10633 },
                    end: { line: 199, column: 11, offset: 10640 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was updated successfully.',
                  position: {
                    start: { line: 199, column: 11, offset: 10640 },
                    end: { line: 199, column: 52, offset: 10681 }
                  }
                }
              ],
              position: {
                start: { line: 199, column: 4, offset: 10633 },
                end: { line: 199, column: 52, offset: 10681 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 2, offset: 10631 },
            end: { line: 199, column: 52, offset: 10681 }
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
                    start: { line: 200, column: 4, offset: 10685 },
                    end: { line: 200, column: 12, offset: 10693 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was deleted successfully.',
                  position: {
                    start: { line: 200, column: 12, offset: 10693 },
                    end: { line: 200, column: 53, offset: 10734 }
                  }
                }
              ],
              position: {
                start: { line: 200, column: 4, offset: 10685 },
                end: { line: 200, column: 53, offset: 10734 }
              }
            }
          ],
          position: {
            start: { line: 200, column: 2, offset: 10683 },
            end: { line: 200, column: 53, offset: 10734 }
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
                    start: { line: 201, column: 4, offset: 10738 },
                    end: { line: 201, column: 13, offset: 10747 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The connection was established successfully.',
                  position: {
                    start: { line: 201, column: 13, offset: 10747 },
                    end: { line: 201, column: 60, offset: 10794 }
                  }
                }
              ],
              position: {
                start: { line: 201, column: 4, offset: 10738 },
                end: { line: 201, column: 60, offset: 10794 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 2, offset: 10736 },
            end: { line: 201, column: 60, offset: 10794 }
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
                    start: { line: 202, column: 4, offset: 10798 },
                    end: { line: 202, column: 13, offset: 10807 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The communication options are available in the ',
                  position: {
                    start: { line: 202, column: 13, offset: 10807 },
                    end: { line: 202, column: 63, offset: 10857 }
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
                        start: { line: 202, column: 64, offset: 10858 },
                        end: { line: 202, column: 69, offset: 10863 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 202, column: 63, offset: 10857 },
                    end: { line: 202, column: 145, offset: 10939 }
                  }
                },
                {
                  type: 'text',
                  value: ' header.',
                  position: {
                    start: { line: 202, column: 145, offset: 10939 },
                    end: { line: 202, column: 153, offset: 10947 }
                  }
                }
              ],
              position: {
                start: { line: 202, column: 4, offset: 10798 },
                end: { line: 202, column: 153, offset: 10947 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 2, offset: 10796 },
            end: { line: 202, column: 153, offset: 10947 }
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
                    start: { line: 203, column: 4, offset: 10951 },
                    end: { line: 203, column: 11, offset: 10958 }
                  }
                },
                {
                  type: 'text',
                  value: " - The server successfully received and echoed back the client's request.",
                  position: {
                    start: { line: 203, column: 11, offset: 10958 },
                    end: { line: 203, column: 84, offset: 11031 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10951 },
                end: { line: 203, column: 84, offset: 11031 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10949 },
            end: { line: 203, column: 84, offset: 11031 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 2, offset: 10325 },
        end: { line: 203, column: 84, offset: 11031 }
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
            start: { line: 205, column: 7, offset: 11039 },
            end: { line: 205, column: 18, offset: 11050 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 11033 },
        end: { line: 205, column: 18, offset: 11050 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded and a new resource was created.',
          position: {
            start: { line: 207, column: 1, offset: 11052 },
            end: { line: 207, column: 54, offset: 11105 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 11052 },
        end: { line: 207, column: 54, offset: 11105 }
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
            start: { line: 209, column: 7, offset: 11113 },
            end: { line: 209, column: 19, offset: 11125 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 11107 },
        end: { line: 209, column: 19, offset: 11125 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request has been received but has not yet been processed.',
          position: {
            start: { line: 211, column: 1, offset: 11127 },
            end: { line: 211, column: 62, offset: 11188 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 11127 },
        end: { line: 211, column: 62, offset: 11188 }
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
            start: { line: 213, column: 7, offset: 11196 },
            end: { line: 213, column: 40, offset: 11229 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 11190 },
        end: { line: 213, column: 40, offset: 11229 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded but the response headers or body were modified by a proxy server before being sent to the client.',
          position: {
            start: { line: 215, column: 1, offset: 11231 },
            end: { line: 215, column: 120, offset: 11350 }
          }
        }
      ],
      position: {
        start: { line: 215, column: 1, offset: 11231 },
        end: { line: 215, column: 120, offset: 11350 }
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
            start: { line: 217, column: 7, offset: 11358 },
            end: { line: 217, column: 21, offset: 11372 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 11352 },
        end: { line: 217, column: 21, offset: 11372 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, but there is no content available for this request. The client may update its cached headers for the requested resource with the response headers from this request.',
          position: {
            start: { line: 219, column: 1, offset: 11374 },
            end: { line: 219, column: 216, offset: 11589 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 11374 },
        end: { line: 219, column: 216, offset: 11589 }
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
            start: { line: 221, column: 7, offset: 11597 },
            end: { line: 221, column: 24, offset: 11614 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 11591 },
        end: { line: 221, column: 24, offset: 11614 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and asks the client to reset the document to its original state.',
          position: {
            start: { line: 223, column: 1, offset: 11616 },
            end: { line: 223, column: 116, offset: 11731 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 11616 },
        end: { line: 223, column: 116, offset: 11731 }
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
            start: { line: 225, column: 7, offset: 11739 },
            end: { line: 225, column: 26, offset: 11758 }
          }
        }
      ],
      position: {
        start: { line: 225, column: 1, offset: 11733 },
        end: { line: 225, column: 26, offset: 11758 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and is delivering only part of the requested resource. ',
          position: {
            start: { line: 227, column: 1, offset: 11760 },
            end: { line: 227, column: 107, offset: 11866 }
          }
        },
        {
          type: 'inlineCode',
          value: '206 Partial Content',
          position: {
            start: { line: 227, column: 107, offset: 11866 },
            end: { line: 227, column: 128, offset: 11887 }
          }
        },
        {
          type: 'text',
          value: ' is commonly used in ',
          position: {
            start: { line: 227, column: 128, offset: 11887 },
            end: { line: 227, column: 149, offset: 11908 }
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
                start: { line: 227, column: 150, offset: 11909 },
                end: { line: 227, column: 164, offset: 11923 }
              }
            }
          ],
          position: {
            start: { line: 227, column: 149, offset: 11908 },
            end: { line: 227, column: 238, offset: 11997 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 227, column: 238, offset: 11997 },
            end: { line: 227, column: 239, offset: 11998 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 11760 },
        end: { line: 227, column: 239, offset: 11998 }
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
            start: { line: 229, column: 6, offset: 12005 },
            end: { line: 229, column: 40, offset: 12039 }
          }
        }
      ],
      position: {
        start: { line: 229, column: 1, offset: 12000 },
        end: { line: 229, column: 40, offset: 12039 }
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
            start: { line: 231, column: 7, offset: 12047 },
            end: { line: 231, column: 27, offset: 12067 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 1, offset: 12041 },
        end: { line: 231, column: 27, offset: 12067 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has multiple representations, and the client needs to choose which one to access.',
          position: {
            start: { line: 233, column: 1, offset: 12069 },
            end: { line: 233, column: 95, offset: 12163 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 12069 },
        end: { line: 233, column: 95, offset: 12163 }
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
            start: { line: 235, column: 7, offset: 12171 },
            end: { line: 235, column: 28, offset: 12192 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 12165 },
        end: { line: 235, column: 28, offset: 12192 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 237, column: 1, offset: 12194 },
            end: { line: 237, column: 118, offset: 12311 }
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
                start: { line: 237, column: 119, offset: 12312 },
                end: { line: 237, column: 127, offset: 12320 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 118, offset: 12311 },
            end: { line: 237, column: 206, offset: 12399 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 237, column: 206, offset: 12399 },
            end: { line: 237, column: 230, offset: 12423 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 12194 },
        end: { line: 237, column: 230, offset: 12423 }
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
            start: { line: 239, column: 7, offset: 12431 },
            end: { line: 239, column: 16, offset: 12440 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 12425 },
        end: { line: 239, column: 16, offset: 12440 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 241, column: 1, offset: 12442 },
            end: { line: 241, column: 118, offset: 12559 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 241, column: 118, offset: 12559 },
            end: { line: 241, column: 128, offset: 12569 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 241, column: 128, offset: 12569 },
            end: { line: 241, column: 152, offset: 12593 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 12442 },
        end: { line: 241, column: 152, offset: 12593 }
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
            start: { line: 243, column: 7, offset: 12601 },
            end: { line: 243, column: 20, offset: 12614 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 12595 },
        end: { line: 243, column: 20, offset: 12614 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is redirecting the client's request for the resource to a different resource. The URL of the redirected resource is available in the ",
          position: {
            start: { line: 245, column: 1, offset: 12616 },
            end: { line: 245, column: 145, offset: 12760 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 245, column: 145, offset: 12760 },
            end: { line: 245, column: 155, offset: 12770 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the HTTP ',
          position: {
            start: { line: 245, column: 155, offset: 12770 },
            end: { line: 245, column: 211, offset: 12826 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 245, column: 211, offset: 12826 },
            end: { line: 245, column: 216, offset: 12831 }
          }
        },
        {
          type: 'text',
          value: ' method to request the redirected resource.',
          position: {
            start: { line: 245, column: 216, offset: 12831 },
            end: { line: 245, column: 259, offset: 12874 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 12616 },
        end: { line: 245, column: 259, offset: 12874 }
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
            start: { line: 247, column: 7, offset: 12882 },
            end: { line: 247, column: 23, offset: 12898 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 12876 },
        end: { line: 247, column: 23, offset: 12898 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has not been modified since the last access, so the client can continue to use the same cached version of the resource.',
          position: {
            start: { line: 249, column: 1, offset: 12900 },
            end: { line: 249, column: 133, offset: 13032 }
          }
        }
      ],
      position: {
        start: { line: 249, column: 1, offset: 12900 },
        end: { line: 249, column: 133, offset: 13032 }
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
            start: { line: 251, column: 7, offset: 13040 },
            end: { line: 251, column: 29, offset: 13062 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 13034 },
        end: { line: 251, column: 29, offset: 13062 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 253, column: 1, offset: 13064 },
            end: { line: 253, column: 118, offset: 13181 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 253, column: 118, offset: 13181 },
            end: { line: 253, column: 128, offset: 13191 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 253, column: 128, offset: 13191 },
            end: { line: 253, column: 235, offset: 13298 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 13064 },
        end: { line: 253, column: 235, offset: 13298 }
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
            start: { line: 255, column: 7, offset: 13306 },
            end: { line: 255, column: 29, offset: 13328 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 13300 },
        end: { line: 255, column: 29, offset: 13328 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 257, column: 1, offset: 13330 },
            end: { line: 257, column: 118, offset: 13447 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 257, column: 118, offset: 13447 },
            end: { line: 257, column: 128, offset: 13457 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 257, column: 128, offset: 13457 },
            end: { line: 257, column: 235, offset: 13564 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 13330 },
        end: { line: 257, column: 235, offset: 13564 }
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
            start: { line: 259, column: 6, offset: 13571 },
            end: { line: 259, column: 41, offset: 13606 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 13566 },
        end: { line: 259, column: 41, offset: 13606 }
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
            start: { line: 261, column: 7, offset: 13614 },
            end: { line: 261, column: 22, offset: 13629 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 13608 },
        end: { line: 261, column: 22, offset: 13629 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot process the request due to client error, e.g. invalid syntax.',
          position: {
            start: { line: 263, column: 1, offset: 13631 },
            end: { line: 263, column: 80, offset: 13710 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 13631 },
        end: { line: 263, column: 80, offset: 13710 }
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
            start: { line: 265, column: 7, offset: 13718 },
            end: { line: 265, column: 23, offset: 13734 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 13712 },
        end: { line: 265, column: 23, offset: 13734 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials.',
          position: {
            start: { line: 267, column: 1, offset: 13736 },
            end: { line: 267, column: 52, offset: 13787 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 13736 },
        end: { line: 267, column: 52, offset: 13787 }
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
            start: { line: 269, column: 7, offset: 13795 },
            end: { line: 269, column: 27, offset: 13815 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 13789 },
        end: { line: 269, column: 27, offset: 13815 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested content is not available until the client makes a payment.',
          position: {
            start: { line: 271, column: 1, offset: 13817 },
            end: { line: 271, column: 73, offset: 13889 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 13817 },
        end: { line: 271, column: 73, offset: 13889 }
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
            start: { line: 273, column: 7, offset: 13897 },
            end: { line: 273, column: 20, offset: 13910 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 13891 },
        end: { line: 273, column: 20, offset: 13910 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is refusing the client access to the requested resource.',
          position: {
            start: { line: 275, column: 1, offset: 13912 },
            end: { line: 275, column: 68, offset: 13979 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 13912 },
        end: { line: 275, column: 68, offset: 13979 }
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
            start: { line: 277, column: 7, offset: 13987 },
            end: { line: 277, column: 20, offset: 14000 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 13981 },
        end: { line: 277, column: 20, offset: 14000 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot find the requested resource. Either the URL is not recognized, or the URL is recognized but the requested resource does not exist.',
          position: {
            start: { line: 279, column: 1, offset: 14002 },
            end: { line: 279, column: 149, offset: 14150 }
          }
        }
      ],
      position: {
        start: { line: 279, column: 1, offset: 14002 },
        end: { line: 279, column: 149, offset: 14150 }
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
            start: { line: 281, column: 7, offset: 14158 },
            end: { line: 281, column: 29, offset: 14180 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 14152 },
        end: { line: 281, column: 29, offset: 14180 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is known by the server but it is not supported for the requested resource.',
          position: {
            start: { line: 283, column: 1, offset: 14182 },
            end: { line: 283, column: 94, offset: 14275 }
          }
        }
      ],
      position: {
        start: { line: 283, column: 1, offset: 14182 },
        end: { line: 283, column: 94, offset: 14275 }
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
            start: { line: 285, column: 7, offset: 14283 },
            end: { line: 285, column: 25, offset: 14301 }
          }
        }
      ],
      position: {
        start: { line: 285, column: 1, offset: 14277 },
        end: { line: 285, column: 25, offset: 14301 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is unable to provide a response that matches the client's requested format, typically specified in the ",
          position: {
            start: { line: 287, column: 1, offset: 14303 },
            end: { line: 287, column: 115, offset: 14417 }
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
                start: { line: 287, column: 116, offset: 14418 },
                end: { line: 287, column: 122, offset: 14424 }
              }
            }
          ],
          position: {
            start: { line: 287, column: 115, offset: 14417 },
            end: { line: 287, column: 199, offset: 14501 }
          }
        },
        {
          type: 'text',
          value: ' header of the request.',
          position: {
            start: { line: 287, column: 199, offset: 14501 },
            end: { line: 287, column: 222, offset: 14524 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 14303 },
        end: { line: 287, column: 222, offset: 14524 }
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
            start: { line: 289, column: 7, offset: 14532 },
            end: { line: 289, column: 40, offset: 14565 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 14526 },
        end: { line: 289, column: 40, offset: 14565 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials for the ',
          position: {
            start: { line: 291, column: 1, offset: 14567 },
            end: { line: 291, column: 60, offset: 14626 }
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
                start: { line: 291, column: 61, offset: 14627 },
                end: { line: 291, column: 73, offset: 14639 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 60, offset: 14626 },
            end: { line: 291, column: 118, offset: 14684 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 291, column: 118, offset: 14684 },
            end: { line: 291, column: 119, offset: 14685 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 14567 },
        end: { line: 291, column: 120, offset: 14686 }
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
            start: { line: 293, column: 7, offset: 14694 },
            end: { line: 293, column: 26, offset: 14713 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 14688 },
        end: { line: 293, column: 26, offset: 14713 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server would like to shut down the unused connection.',
          position: {
            start: { line: 295, column: 1, offset: 14715 },
            end: { line: 295, column: 58, offset: 14772 }
          }
        }
      ],
      position: {
        start: { line: 295, column: 1, offset: 14715 },
        end: { line: 295, column: 58, offset: 14772 }
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
            start: { line: 297, column: 7, offset: 14780 },
            end: { line: 297, column: 19, offset: 14792 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 14774 },
        end: { line: 297, column: 19, offset: 14792 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request conflicts with the current state of the resource, e.g. when trying to create a resource that already exists.',
          position: {
            start: { line: 299, column: 1, offset: 14794 },
            end: { line: 299, column: 121, offset: 14914 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 14794 },
        end: { line: 299, column: 121, offset: 14914 }
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
            start: { line: 301, column: 7, offset: 14922 },
            end: { line: 301, column: 15, offset: 14930 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 14916 },
        end: { line: 301, column: 15, offset: 14930 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has been permanently removed from the server.',
          position: {
            start: { line: 303, column: 1, offset: 14932 },
            end: { line: 303, column: 59, offset: 14990 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 14932 },
        end: { line: 303, column: 59, offset: 14990 }
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
            start: { line: 305, column: 7, offset: 14998 },
            end: { line: 305, column: 26, offset: 15017 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 14992 },
        end: { line: 305, column: 26, offset: 15017 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 307, column: 1, offset: 15019 },
            end: { line: 307, column: 5, offset: 15023 }
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
                start: { line: 307, column: 6, offset: 15024 },
                end: { line: 307, column: 20, offset: 15038 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 5, offset: 15023 },
            end: { line: 307, column: 105, offset: 15123 }
          }
        },
        {
          type: 'text',
          value: ' request header is required but not present.',
          position: {
            start: { line: 307, column: 105, offset: 15123 },
            end: { line: 307, column: 149, offset: 15167 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 15019 },
        end: { line: 307, column: 149, offset: 15167 }
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
            start: { line: 309, column: 7, offset: 15175 },
            end: { line: 309, column: 30, offset: 15198 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 1, offset: 15169 },
        end: { line: 309, column: 30, offset: 15198 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request headers have indicated preconditions that the server does not meet.',
          position: {
            start: { line: 311, column: 1, offset: 15200 },
            end: { line: 311, column: 80, offset: 15279 }
          }
        }
      ],
      position: {
        start: { line: 311, column: 1, offset: 15200 },
        end: { line: 311, column: 80, offset: 15279 }
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
            start: { line: 313, column: 7, offset: 15287 },
            end: { line: 313, column: 28, offset: 15308 }
          }
        }
      ],
      position: {
        start: { line: 313, column: 1, offset: 15281 },
        end: { line: 313, column: 28, offset: 15308 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request body is larger than the limits defined by the server. The server might close the connection or respond with a ',
          position: {
            start: { line: 315, column: 1, offset: 15310 },
            end: { line: 315, column: 123, offset: 15432 }
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
                start: { line: 315, column: 124, offset: 15433 },
                end: { line: 315, column: 135, offset: 15444 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 123, offset: 15432 },
            end: { line: 315, column: 217, offset: 15526 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 315, column: 217, offset: 15526 },
            end: { line: 315, column: 225, offset: 15534 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 15310 },
        end: { line: 315, column: 225, offset: 15534 }
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
            start: { line: 317, column: 7, offset: 15542 },
            end: { line: 317, column: 23, offset: 15558 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 15536 },
        end: { line: 317, column: 23, offset: 15558 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource is too long.',
          position: {
            start: { line: 319, column: 1, offset: 15560 },
            end: { line: 319, column: 47, offset: 15606 }
          }
        }
      ],
      position: {
        start: { line: 319, column: 1, offset: 15560 },
        end: { line: 319, column: 47, offset: 15606 }
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
            start: { line: 321, column: 7, offset: 15614 },
            end: { line: 321, column: 33, offset: 15640 }
          }
        }
      ],
      position: {
        start: { line: 321, column: 1, offset: 15608 },
        end: { line: 321, column: 33, offset: 15640 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The media format of the requested resource is not supported by the server.',
          position: {
            start: { line: 323, column: 1, offset: 15642 },
            end: { line: 323, column: 75, offset: 15716 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 15642 },
        end: { line: 323, column: 75, offset: 15716 }
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
            start: { line: 325, column: 7, offset: 15724 },
            end: { line: 325, column: 32, offset: 15749 }
          }
        }
      ],
      position: {
        start: { line: 325, column: 1, offset: 15718 },
        end: { line: 325, column: 32, offset: 15749 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The ranges specified in the request's ",
          position: {
            start: { line: 327, column: 1, offset: 15751 },
            end: { line: 327, column: 39, offset: 15789 }
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
                start: { line: 327, column: 40, offset: 15790 },
                end: { line: 327, column: 45, offset: 15795 }
              }
            }
          ],
          position: {
            start: { line: 327, column: 39, offset: 15789 },
            end: { line: 327, column: 121, offset: 15871 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be fulfilled by the server.',
          position: {
            start: { line: 327, column: 121, offset: 15871 },
            end: { line: 327, column: 163, offset: 15913 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 15751 },
        end: { line: 327, column: 163, offset: 15913 }
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
            start: { line: 329, column: 7, offset: 15921 },
            end: { line: 329, column: 29, offset: 15943 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 15915 },
        end: { line: 329, column: 29, offset: 15943 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The expectation indicated by the request's ",
          position: {
            start: { line: 331, column: 1, offset: 15945 },
            end: { line: 331, column: 44, offset: 15988 }
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
                start: { line: 331, column: 45, offset: 15989 },
                end: { line: 331, column: 51, offset: 15995 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 44, offset: 15988 },
            end: { line: 331, column: 128, offset: 16072 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be met by the server.',
          position: {
            start: { line: 331, column: 128, offset: 16072 },
            end: { line: 331, column: 164, offset: 16108 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 15945 },
        end: { line: 331, column: 164, offset: 16108 }
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
            start: { line: 333, column: 7, offset: 16116 },
            end: { line: 333, column: 23, offset: 16132 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 16110 },
        end: { line: 333, column: 23, offset: 16132 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses the attempt to brew coffee with a teapot.',
          position: {
            start: { line: 335, column: 1, offset: 16134 },
            end: { line: 335, column: 61, offset: 16194 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 16134 },
        end: { line: 335, column: 61, offset: 16194 }
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
            start: { line: 337, column: 7, offset: 16202 },
            end: { line: 337, column: 30, offset: 16225 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 16196 },
        end: { line: 337, column: 30, offset: 16225 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The request was directed at a server that is not configured to produce a response for the request URL's scheme and authority.",
          position: {
            start: { line: 339, column: 1, offset: 16227 },
            end: { line: 339, column: 126, offset: 16352 }
          }
        }
      ],
      position: {
        start: { line: 339, column: 1, offset: 16227 },
        end: { line: 339, column: 126, offset: 16352 }
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
            start: { line: 341, column: 7, offset: 16360 },
            end: { line: 341, column: 32, offset: 16385 }
          }
        }
      ],
      position: {
        start: { line: 341, column: 1, offset: 16354 },
        end: { line: 341, column: 32, offset: 16385 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request was well-formed but was unable to be processed due to semantic errors.',
          position: {
            start: { line: 343, column: 1, offset: 16387 },
            end: { line: 343, column: 83, offset: 16469 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 16387 },
        end: { line: 343, column: 83, offset: 16469 }
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
            start: { line: 345, column: 7, offset: 16477 },
            end: { line: 345, column: 17, offset: 16487 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 16471 },
        end: { line: 345, column: 17, offset: 16487 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is locked.',
          position: {
            start: { line: 347, column: 1, offset: 16489 },
            end: { line: 347, column: 34, offset: 16522 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 16489 },
        end: { line: 347, column: 34, offset: 16522 }
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
            start: { line: 349, column: 7, offset: 16530 },
            end: { line: 349, column: 28, offset: 16551 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 16524 },
        end: { line: 349, column: 28, offset: 16551 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request failed due to the failure of a previous request.',
          position: {
            start: { line: 351, column: 1, offset: 16553 },
            end: { line: 351, column: 61, offset: 16613 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 16553 },
        end: { line: 351, column: 61, offset: 16613 }
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
            start: { line: 353, column: 7, offset: 16621 },
            end: { line: 353, column: 20, offset: 16634 }
          }
        }
      ],
      position: {
        start: { line: 353, column: 1, offset: 16615 },
        end: { line: 353, column: 20, offset: 16634 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is unwilling to risk processing a request that might be replayed.',
          position: {
            start: { line: 355, column: 1, offset: 16636 },
            end: { line: 355, column: 77, offset: 16712 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 16636 },
        end: { line: 355, column: 77, offset: 16712 }
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
            start: { line: 357, column: 7, offset: 16720 },
            end: { line: 357, column: 27, offset: 16740 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 16714 },
        end: { line: 357, column: 27, offset: 16740 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses to process the request under the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an ',
          position: {
            start: { line: 359, column: 1, offset: 16742 },
            end: { line: 359, column: 171, offset: 16912 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Upgrade',
          position: {
            start: { line: 359, column: 171, offset: 16912 },
            end: { line: 359, column: 180, offset: 16921 }
          }
        },
        {
          type: 'text',
          value: ' header in the response to indicate the required protocol(s).',
          position: {
            start: { line: 359, column: 180, offset: 16921 },
            end: { line: 359, column: 241, offset: 16982 }
          }
        }
      ],
      position: {
        start: { line: 359, column: 1, offset: 16742 },
        end: { line: 359, column: 241, offset: 16982 }
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
            start: { line: 361, column: 7, offset: 16990 },
            end: { line: 361, column: 32, offset: 17015 }
          }
        }
      ],
      position: {
        start: { line: 361, column: 1, offset: 16984 },
        end: { line: 361, column: 32, offset: 17015 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The origin server requires the request to be ',
          position: {
            start: { line: 363, column: 1, offset: 17017 },
            end: { line: 363, column: 46, offset: 17062 }
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
                start: { line: 363, column: 47, offset: 17063 },
                end: { line: 363, column: 58, offset: 17074 }
              }
            }
          ],
          position: {
            start: { line: 363, column: 46, offset: 17062 },
            end: { line: 363, column: 138, offset: 17154 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 363, column: 138, offset: 17154 },
            end: { line: 363, column: 139, offset: 17155 }
          }
        }
      ],
      position: {
        start: { line: 363, column: 1, offset: 17017 },
        end: { line: 363, column: 139, offset: 17155 }
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
            start: { line: 365, column: 7, offset: 17163 },
            end: { line: 365, column: 28, offset: 17184 }
          }
        }
      ],
      position: {
        start: { line: 365, column: 1, offset: 17157 },
        end: { line: 365, column: 28, offset: 17184 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client has sent too many requests in a given time period. See ',
          position: {
            start: { line: 367, column: 1, offset: 17186 },
            end: { line: 367, column: 67, offset: 17252 }
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
                start: { line: 367, column: 68, offset: 17253 },
                end: { line: 367, column: 81, offset: 17266 }
              }
            }
          ],
          position: {
            start: { line: 367, column: 67, offset: 17252 },
            end: { line: 367, column: 144, offset: 17329 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 367, column: 144, offset: 17329 },
            end: { line: 367, column: 145, offset: 17330 }
          }
        }
      ],
      position: {
        start: { line: 367, column: 1, offset: 17186 },
        end: { line: 367, column: 145, offset: 17330 }
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
            start: { line: 369, column: 7, offset: 17338 },
            end: { line: 369, column: 42, offset: 17373 }
          }
        }
      ],
      position: {
        start: { line: 369, column: 1, offset: 17332 },
        end: { line: 369, column: 42, offset: 17373 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request header fields are too large.',
          position: {
            start: { line: 371, column: 1, offset: 17375 },
            end: { line: 371, column: 41, offset: 17415 }
          }
        }
      ],
      position: {
        start: { line: 371, column: 1, offset: 17375 },
        end: { line: 371, column: 41, offset: 17415 }
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
            start: { line: 373, column: 7, offset: 17423 },
            end: { line: 373, column: 40, offset: 17456 }
          }
        }
      ],
      position: {
        start: { line: 373, column: 1, offset: 17417 },
        end: { line: 373, column: 40, offset: 17456 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is unavailable due to legal reasons.',
          position: {
            start: { line: 375, column: 1, offset: 17458 },
            end: { line: 375, column: 60, offset: 17517 }
          }
        }
      ],
      position: {
        start: { line: 375, column: 1, offset: 17458 },
        end: { line: 375, column: 60, offset: 17517 }
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
            start: { line: 377, column: 6, offset: 17524 },
            end: { line: 377, column: 41, offset: 17559 }
          }
        }
      ],
      position: {
        start: { line: 377, column: 1, offset: 17519 },
        end: { line: 377, column: 41, offset: 17559 }
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
            start: { line: 379, column: 7, offset: 17567 },
            end: { line: 379, column: 32, offset: 17592 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 17561 },
        end: { line: 379, column: 32, offset: 17592 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has encountered a situation it does not know how to handle.',
          position: {
            start: { line: 381, column: 1, offset: 17594 },
            end: { line: 381, column: 71, offset: 17664 }
          }
        }
      ],
      position: {
        start: { line: 381, column: 1, offset: 17594 },
        end: { line: 381, column: 71, offset: 17664 }
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
            start: { line: 383, column: 7, offset: 17672 },
            end: { line: 383, column: 26, offset: 17691 }
          }
        }
      ],
      position: {
        start: { line: 383, column: 1, offset: 17666 },
        end: { line: 383, column: 26, offset: 17691 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is not supported by the server and cannot be handled.',
          position: {
            start: { line: 385, column: 1, offset: 17693 },
            end: { line: 385, column: 73, offset: 17765 }
          }
        }
      ],
      position: {
        start: { line: 385, column: 1, offset: 17693 },
        end: { line: 385, column: 73, offset: 17765 }
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
            start: { line: 387, column: 7, offset: 17773 },
            end: { line: 387, column: 22, offset: 17788 }
          }
        }
      ],
      position: {
        start: { line: 387, column: 1, offset: 17767 },
        end: { line: 387, column: 22, offset: 17788 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The gateway server received an invalid response from an upstream server or origin server.',
          position: {
            start: { line: 389, column: 1, offset: 17790 },
            end: { line: 389, column: 90, offset: 17879 }
          }
        }
      ],
      position: {
        start: { line: 389, column: 1, offset: 17790 },
        end: { line: 389, column: 90, offset: 17879 }
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
            start: { line: 391, column: 7, offset: 17887 },
            end: { line: 391, column: 30, offset: 17910 }
          }
        }
      ],
      position: {
        start: { line: 391, column: 1, offset: 17881 },
        end: { line: 391, column: 30, offset: 17910 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is not ready to handle the request.',
          position: {
            start: { line: 393, column: 1, offset: 17912 },
            end: { line: 393, column: 47, offset: 17958 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 17912 },
        end: { line: 393, column: 47, offset: 17958 }
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
            start: { line: 395, column: 7, offset: 17966 },
            end: { line: 395, column: 26, offset: 17985 }
          }
        }
      ],
      position: {
        start: { line: 395, column: 1, offset: 17960 },
        end: { line: 395, column: 26, offset: 17985 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The gateway server's request to an upstream server or origin server timed out.",
          position: {
            start: { line: 397, column: 1, offset: 17987 },
            end: { line: 397, column: 79, offset: 18065 }
          }
        }
      ],
      position: {
        start: { line: 397, column: 1, offset: 17987 },
        end: { line: 397, column: 79, offset: 18065 }
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
            start: { line: 399, column: 7, offset: 18073 },
            end: { line: 399, column: 37, offset: 18103 }
          }
        }
      ],
      position: {
        start: { line: 399, column: 1, offset: 18067 },
        end: { line: 399, column: 37, offset: 18103 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP version used in the request is not supported by the server.',
          position: {
            start: { line: 401, column: 1, offset: 18105 },
            end: { line: 401, column: 69, offset: 18173 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 18105 },
        end: { line: 401, column: 69, offset: 18173 }
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
            start: { line: 403, column: 7, offset: 18181 },
            end: { line: 403, column: 34, offset: 18208 }
          }
        }
      ],
      position: {
        start: { line: 403, column: 1, offset: 18175 },
        end: { line: 403, column: 34, offset: 18208 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has an internal configuration error related to content negotiation.',
          position: {
            start: { line: 405, column: 1, offset: 18210 },
            end: { line: 405, column: 79, offset: 18288 }
          }
        }
      ],
      position: {
        start: { line: 405, column: 1, offset: 18210 },
        end: { line: 405, column: 79, offset: 18288 }
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
            start: { line: 407, column: 7, offset: 18296 },
            end: { line: 407, column: 31, offset: 18320 }
          }
        }
      ],
      position: {
        start: { line: 407, column: 1, offset: 18290 },
        end: { line: 407, column: 31, offset: 18320 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server does not have enough available storage to successfully process the request.',
          position: {
            start: { line: 409, column: 1, offset: 18322 },
            end: { line: 409, column: 87, offset: 18408 }
          }
        }
      ],
      position: {
        start: { line: 409, column: 1, offset: 18322 },
        end: { line: 409, column: 87, offset: 18408 }
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
            start: { line: 411, column: 7, offset: 18416 },
            end: { line: 411, column: 24, offset: 18433 }
          }
        }
      ],
      position: {
        start: { line: 411, column: 1, offset: 18410 },
        end: { line: 411, column: 24, offset: 18433 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server detected an infinite loop while processing the request.',
          position: {
            start: { line: 413, column: 1, offset: 18435 },
            end: { line: 413, column: 67, offset: 18501 }
          }
        }
      ],
      position: {
        start: { line: 413, column: 1, offset: 18435 },
        end: { line: 413, column: 67, offset: 18501 }
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
            start: { line: 415, column: 7, offset: 18509 },
            end: { line: 415, column: 23, offset: 18525 }
          }
        }
      ],
      position: {
        start: { line: 415, column: 1, offset: 18503 },
        end: { line: 415, column: 23, offset: 18525 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client declares an HTTP Extension (',
          position: {
            start: { line: 417, column: 1, offset: 18527 },
            end: { line: 417, column: 40, offset: 18566 }
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
                start: { line: 417, column: 41, offset: 18567 },
                end: { line: 417, column: 49, offset: 18575 }
              }
            }
          ],
          position: {
            start: { line: 417, column: 40, offset: 18566 },
            end: { line: 417, column: 97, offset: 18623 }
          }
        },
        {
          type: 'text',
          value: ') that should be used to process the request, but the extension is not supported by the server.',
          position: {
            start: { line: 417, column: 97, offset: 18623 },
            end: { line: 417, column: 192, offset: 18718 }
          }
        }
      ],
      position: {
        start: { line: 417, column: 1, offset: 18527 },
        end: { line: 417, column: 192, offset: 18718 }
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
            start: { line: 419, column: 7, offset: 18726 },
            end: { line: 419, column: 42, offset: 18761 }
          }
        }
      ],
      position: {
        start: { line: 419, column: 1, offset: 18720 },
        end: { line: 419, column: 42, offset: 18761 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client needs to authenticate to gain network access.',
          position: {
            start: { line: 421, column: 1, offset: 18763 },
            end: { line: 421, column: 57, offset: 18819 }
          }
        }
      ],
      position: {
        start: { line: 421, column: 1, offset: 18763 },
        end: { line: 421, column: 57, offset: 18819 }
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
            start: { line: 423, column: 5, offset: 18825 },
            end: { line: 423, column: 26, offset: 18846 }
          }
        }
      ],
      position: {
        start: { line: 423, column: 1, offset: 18821 },
        end: { line: 423, column: 26, offset: 18846 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP response headers are key-value pairs assigned to each response. HTTP response headers pass additional context and metadata about the response.',
          position: {
            start: { line: 425, column: 1, offset: 18848 },
            end: { line: 425, column: 148, offset: 18995 }
          }
        }
      ],
      position: {
        start: { line: 425, column: 1, offset: 18848 },
        end: { line: 425, column: 148, offset: 18995 }
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
            start: { line: 427, column: 5, offset: 19001 },
            end: { line: 427, column: 23, offset: 19019 }
          }
        }
      ],
      position: {
        start: { line: 427, column: 1, offset: 18997 },
        end: { line: 427, column: 23, offset: 19019 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response body is the part of the response that carries the bulk of the data sent back to the client. The content type of the response body should be specified in the response's ",
          position: {
            start: { line: 429, column: 1, offset: 19021 },
            end: { line: 429, column: 187, offset: 19207 }
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
                start: { line: 429, column: 188, offset: 19208 },
                end: { line: 429, column: 200, offset: 19220 }
              }
            }
          ],
          position: {
            start: { line: 429, column: 187, offset: 19207 },
            end: { line: 429, column: 283, offset: 19303 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 429, column: 283, offset: 19303 },
            end: { line: 429, column: 291, offset: 19311 }
          }
        }
      ],
      position: {
        start: { line: 429, column: 1, offset: 19021 },
        end: { line: 429, column: 291, offset: 19311 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP response bodies:',
          position: {
            start: { line: 431, column: 1, offset: 19313 },
            end: { line: 431, column: 39, offset: 19351 }
          }
        }
      ],
      position: {
        start: { line: 431, column: 1, offset: 19313 },
        end: { line: 431, column: 39, offset: 19351 }
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
                        start: { line: 432, column: 5, offset: 19356 },
                        end: { line: 432, column: 9, offset: 19360 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 432, column: 4, offset: 19355 },
                    end: { line: 432, column: 61, offset: 19412 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web pages. The method of the request is typically ',
                  position: {
                    start: { line: 432, column: 61, offset: 19412 },
                    end: { line: 432, column: 137, offset: 19488 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 432, column: 137, offset: 19488 },
                    end: { line: 432, column: 142, offset: 19493 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 432, column: 142, offset: 19493 },
                    end: { line: 432, column: 148, offset: 19499 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 432, column: 148, offset: 19499 },
                    end: { line: 432, column: 162, offset: 19513 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 432, column: 162, offset: 19513 },
                    end: { line: 432, column: 184, offset: 19535 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/html',
                  position: {
                    start: { line: 432, column: 184, offset: 19535 },
                    end: { line: 432, column: 195, offset: 19546 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 432, column: 195, offset: 19546 },
                    end: { line: 432, column: 196, offset: 19547 }
                  }
                }
              ],
              position: {
                start: { line: 432, column: 4, offset: 19355 },
                end: { line: 432, column: 196, offset: 19547 }
              }
            }
          ],
          position: {
            start: { line: 432, column: 2, offset: 19353 },
            end: { line: 432, column: 196, offset: 19547 }
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
                        start: { line: 433, column: 5, offset: 19552 },
                        end: { line: 433, column: 9, offset: 19556 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 433, column: 4, offset: 19551 },
                    end: { line: 433, column: 45, offset: 19592 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web applications. The method of the request is typically ',
                  position: {
                    start: { line: 433, column: 45, offset: 19592 },
                    end: { line: 433, column: 128, offset: 19675 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 433, column: 128, offset: 19675 },
                    end: { line: 433, column: 133, offset: 19680 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 433, column: 133, offset: 19680 },
                    end: { line: 433, column: 135, offset: 19682 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 433, column: 135, offset: 19682 },
                    end: { line: 433, column: 141, offset: 19688 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 433, column: 141, offset: 19688 },
                    end: { line: 433, column: 146, offset: 19693 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 433, column: 146, offset: 19693 },
                    end: { line: 433, column: 153, offset: 19700 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 433, column: 153, offset: 19700 },
                    end: { line: 433, column: 159, offset: 19706 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 433, column: 159, offset: 19706 },
                    end: { line: 433, column: 173, offset: 19720 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 433, column: 173, offset: 19720 },
                    end: { line: 433, column: 195, offset: 19742 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 433, column: 195, offset: 19742 },
                    end: { line: 433, column: 213, offset: 19760 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 433, column: 213, offset: 19760 },
                    end: { line: 433, column: 214, offset: 19761 }
                  }
                }
              ],
              position: {
                start: { line: 433, column: 4, offset: 19551 },
                end: { line: 433, column: 214, offset: 19761 }
              }
            }
          ],
          position: {
            start: { line: 433, column: 2, offset: 19549 },
            end: { line: 433, column: 214, offset: 19761 }
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
                        start: { line: 434, column: 5, offset: 19766 },
                        end: { line: 434, column: 8, offset: 19769 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 4, offset: 19765 },
                    end: { line: 434, column: 46, offset: 19807 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for ',
                  position: {
                    start: { line: 434, column: 46, offset: 19807 },
                    end: { line: 434, column: 72, offset: 19833 }
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
                        start: { line: 434, column: 73, offset: 19834 },
                        end: { line: 434, column: 81, offset: 19842 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 72, offset: 19833 },
                    end: { line: 434, column: 161, offset: 19922 }
                  }
                },
                {
                  type: 'text',
                  value: ' or web applications. The method of the request can be ',
                  position: {
                    start: { line: 434, column: 161, offset: 19922 },
                    end: { line: 434, column: 216, offset: 19977 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 434, column: 216, offset: 19977 },
                    end: { line: 434, column: 221, offset: 19982 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 221, offset: 19982 },
                    end: { line: 434, column: 223, offset: 19984 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 434, column: 223, offset: 19984 },
                    end: { line: 434, column: 228, offset: 19989 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 228, offset: 19989 },
                    end: { line: 434, column: 230, offset: 19991 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 434, column: 230, offset: 19991 },
                    end: { line: 434, column: 236, offset: 19997 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 434, column: 236, offset: 19997 },
                    end: { line: 434, column: 241, offset: 20002 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 434, column: 241, offset: 20002 },
                    end: { line: 434, column: 248, offset: 20009 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 434, column: 248, offset: 20009 },
                    end: { line: 434, column: 254, offset: 20015 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 434, column: 254, offset: 20015 },
                    end: { line: 434, column: 268, offset: 20029 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 434, column: 268, offset: 20029 },
                    end: { line: 434, column: 289, offset: 20050 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/xml',
                  position: {
                    start: { line: 434, column: 289, offset: 20050 },
                    end: { line: 434, column: 306, offset: 20067 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 434, column: 306, offset: 20067 },
                    end: { line: 434, column: 310, offset: 20071 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/xml',
                  position: {
                    start: { line: 434, column: 310, offset: 20071 },
                    end: { line: 434, column: 320, offset: 20081 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 434, column: 320, offset: 20081 },
                    end: { line: 434, column: 321, offset: 20082 }
                  }
                }
              ],
              position: {
                start: { line: 434, column: 4, offset: 19765 },
                end: { line: 434, column: 321, offset: 20082 }
              }
            }
          ],
          position: {
            start: { line: 434, column: 2, offset: 19763 },
            end: { line: 434, column: 321, offset: 20082 }
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
                    start: { line: 435, column: 4, offset: 20086 },
                    end: { line: 435, column: 91, offset: 20173 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 435, column: 91, offset: 20173 },
                    end: { line: 435, column: 96, offset: 20178 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 435, column: 96, offset: 20178 },
                    end: { line: 435, column: 102, offset: 20184 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 435, column: 102, offset: 20184 },
                    end: { line: 435, column: 116, offset: 20198 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 435, column: 116, offset: 20198 },
                    end: { line: 435, column: 137, offset: 20219 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 435, column: 137, offset: 20219 },
                    end: { line: 435, column: 149, offset: 20231 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 149, offset: 20231 },
                    end: { line: 435, column: 151, offset: 20233 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 435, column: 151, offset: 20233 },
                    end: { line: 435, column: 162, offset: 20244 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 162, offset: 20244 },
                    end: { line: 435, column: 164, offset: 20246 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 435, column: 164, offset: 20246 },
                    end: { line: 435, column: 176, offset: 20258 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 176, offset: 20258 },
                    end: { line: 435, column: 178, offset: 20260 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 435, column: 178, offset: 20260 },
                    end: { line: 435, column: 191, offset: 20273 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 435, column: 191, offset: 20273 },
                    end: { line: 435, column: 196, offset: 20278 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 435, column: 196, offset: 20278 },
                    end: { line: 435, column: 207, offset: 20289 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 435, column: 207, offset: 20289 },
                    end: { line: 435, column: 208, offset: 20290 }
                  }
                }
              ],
              position: {
                start: { line: 435, column: 4, offset: 20086 },
                end: { line: 435, column: 208, offset: 20290 }
              }
            }
          ],
          position: {
            start: { line: 435, column: 2, offset: 20084 },
            end: { line: 435, column: 208, offset: 20290 }
          }
        }
      ],
      position: {
        start: { line: 432, column: 2, offset: 19353 },
        end: { line: 435, column: 208, offset: 20290 }
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
            start: { line: 437, column: 4, offset: 20295 },
            end: { line: 437, column: 15, offset: 20306 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 20292 },
        end: { line: 437, column: 15, offset: 20306 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 439, column: 1, offset: 20308 },
            end: { line: 439, column: 226, offset: 20533 }
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
                start: { line: 439, column: 227, offset: 20534 },
                end: { line: 439, column: 233, offset: 20540 }
              }
            }
          ],
          position: {
            start: { line: 439, column: 226, offset: 20533 },
            end: { line: 439, column: 257, offset: 20564 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 439, column: 257, offset: 20564 },
            end: { line: 439, column: 371, offset: 20678 }
          }
        }
      ],
      position: {
        start: { line: 439, column: 1, offset: 20308 },
        end: { line: 439, column: 371, offset: 20678 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 441, column: 1, offset: 20680 },
            end: { line: 441, column: 23, offset: 20702 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 441, column: 23, offset: 20702 },
            end: { line: 441, column: 29, offset: 20708 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 441, column: 29, offset: 20708 },
            end: { line: 441, column: 62, offset: 20741 }
          }
        }
      ],
      position: {
        start: { line: 441, column: 1, offset: 20680 },
        end: { line: 441, column: 62, offset: 20741 }
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
        start: { line: 443, column: 1, offset: 20743 },
        end: { line: 456, column: 4, offset: 20979 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates a NodeJS HTTP server with ',
          position: {
            start: { line: 458, column: 1, offset: 20981 },
            end: { line: 458, column: 58, offset: 21038 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 458, column: 58, offset: 21038 },
            end: { line: 458, column: 77, offset: 21057 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 458, column: 77, offset: 21057 },
            end: { line: 458, column: 106, offset: 21086 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 458, column: 106, offset: 21086 },
            end: { line: 458, column: 136, offset: 21116 }
          }
        },
        {
          type: 'text',
          value: ' that only responds with status ',
          position: {
            start: { line: 458, column: 136, offset: 21116 },
            end: { line: 458, column: 168, offset: 21148 }
          }
        },
        {
          type: 'inlineCode',
          value: '200',
          position: {
            start: { line: 458, column: 168, offset: 21148 },
            end: { line: 458, column: 173, offset: 21153 }
          }
        },
        {
          type: 'text',
          value: ' and body ',
          position: {
            start: { line: 458, column: 173, offset: 21153 },
            end: { line: 458, column: 183, offset: 21163 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ok',
          position: {
            start: { line: 458, column: 183, offset: 21163 },
            end: { line: 458, column: 187, offset: 21167 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 458, column: 187, offset: 21167 },
            end: { line: 458, column: 230, offset: 21210 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 458, column: 230, offset: 21210 },
            end: { line: 458, column: 236, offset: 21216 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 458, column: 236, offset: 21216 },
            end: { line: 458, column: 254, offset: 21234 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 458, column: 254, offset: 21234 },
            end: { line: 458, column: 269, offset: 21249 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 458, column: 269, offset: 21249 },
            end: { line: 458, column: 270, offset: 21250 }
          }
        }
      ],
      position: {
        start: { line: 458, column: 1, offset: 20981 },
        end: { line: 458, column: 270, offset: 21250 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 460, column: 1, offset: 21252 },
            end: { line: 460, column: 45, offset: 21296 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 21252 },
        end: { line: 460, column: 45, offset: 21296 }
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
                        start: { line: 461, column: 5, offset: 21301 },
                        end: { line: 461, column: 9, offset: 21305 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 461, column: 4, offset: 21300 },
                    end: { line: 461, column: 29, offset: 21325 }
                  }
                }
              ],
              position: {
                start: { line: 461, column: 4, offset: 21300 },
                end: { line: 461, column: 29, offset: 21325 }
              }
            }
          ],
          position: {
            start: { line: 461, column: 2, offset: 21298 },
            end: { line: 461, column: 29, offset: 21325 }
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
                        start: { line: 462, column: 5, offset: 21330 },
                        end: { line: 462, column: 9, offset: 21334 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 462, column: 4, offset: 21329 },
                    end: { line: 462, column: 29, offset: 21354 }
                  }
                }
              ],
              position: {
                start: { line: 462, column: 4, offset: 21329 },
                end: { line: 462, column: 29, offset: 21354 }
              }
            }
          ],
          position: {
            start: { line: 462, column: 2, offset: 21327 },
            end: { line: 462, column: 29, offset: 21354 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 2, offset: 21298 },
        end: { line: 462, column: 29, offset: 21354 }
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
            start: { line: 464, column: 5, offset: 21360 },
            end: { line: 464, column: 21, offset: 21376 }
          }
        }
      ],
      position: {
        start: { line: 464, column: 1, offset: 21356 },
        end: { line: 464, column: 21, offset: 21376 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server port is a number that represents the network port on which the server is listening. A network port is a logical communication endpoint within a network. The value for the port can range from 0 and 65535. In the above example, we created an HTTP web server that listened on port ',
          position: {
            start: { line: 466, column: 1, offset: 21378 },
            end: { line: 466, column: 295, offset: 21672 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 466, column: 295, offset: 21672 },
            end: { line: 466, column: 301, offset: 21678 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 466, column: 301, offset: 21678 },
            end: { line: 466, column: 302, offset: 21679 }
          }
        }
      ],
      position: {
        start: { line: 466, column: 1, offset: 21378 },
        end: { line: 466, column: 302, offset: 21679 }
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
            start: { line: 468, column: 5, offset: 21685 },
            end: { line: 468, column: 21, offset: 21701 }
          }
        }
      ],
      position: {
        start: { line: 468, column: 1, offset: 21681 },
        end: { line: 468, column: 21, offset: 21701 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server host is the IP address of the ',
          position: {
            start: { line: 470, column: 1, offset: 21703 },
            end: { line: 470, column: 47, offset: 21749 }
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
                start: { line: 470, column: 48, offset: 21750 },
                end: { line: 470, column: 62, offset: 21764 }
              }
            }
          ],
          position: {
            start: { line: 470, column: 47, offset: 21749 },
            end: { line: 470, column: 134, offset: 21836 }
          }
        },
        {
          type: 'text',
          value: ' on which the server is running.',
          position: {
            start: { line: 470, column: 134, offset: 21836 },
            end: { line: 470, column: 166, offset: 21868 }
          }
        }
      ],
      position: {
        start: { line: 470, column: 1, offset: 21703 },
        end: { line: 470, column: 166, offset: 21868 }
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
            start: { line: 472, column: 4, offset: 21873 },
            end: { line: 472, column: 16, offset: 21885 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 21870 },
        end: { line: 472, column: 16, offset: 21885 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 474, column: 1, offset: 21887 },
            end: { line: 474, column: 109, offset: 21995 }
          }
        }
      ],
      position: {
        start: { line: 474, column: 1, offset: 21887 },
        end: { line: 474, column: 109, offset: 21995 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 476, column: 1, offset: 21997 },
            end: { line: 476, column: 61, offset: 22057 }
          }
        }
      ],
      position: {
        start: { line: 476, column: 1, offset: 21997 },
        end: { line: 476, column: 61, offset: 22057 }
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
                    start: { line: 477, column: 4, offset: 22061 },
                    end: { line: 477, column: 74, offset: 22131 }
                  }
                }
              ],
              position: {
                start: { line: 477, column: 4, offset: 22061 },
                end: { line: 477, column: 74, offset: 22131 }
              }
            }
          ],
          position: {
            start: { line: 477, column: 2, offset: 22059 },
            end: { line: 477, column: 74, offset: 22131 }
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
                    start: { line: 478, column: 4, offset: 22135 },
                    end: { line: 478, column: 52, offset: 22183 }
                  }
                }
              ],
              position: {
                start: { line: 478, column: 4, offset: 22135 },
                end: { line: 478, column: 52, offset: 22183 }
              }
            }
          ],
          position: {
            start: { line: 478, column: 2, offset: 22133 },
            end: { line: 478, column: 52, offset: 22183 }
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
                    start: { line: 479, column: 4, offset: 22187 },
                    end: { line: 479, column: 237, offset: 22420 }
                  }
                }
              ],
              position: {
                start: { line: 479, column: 4, offset: 22187 },
                end: { line: 479, column: 237, offset: 22420 }
              }
            }
          ],
          position: {
            start: { line: 479, column: 2, offset: 22185 },
            end: { line: 479, column: 237, offset: 22420 }
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
                    start: { line: 480, column: 4, offset: 22424 },
                    end: { line: 480, column: 128, offset: 22548 }
                  }
                }
              ],
              position: {
                start: { line: 480, column: 4, offset: 22424 },
                end: { line: 480, column: 128, offset: 22548 }
              }
            }
          ],
          position: {
            start: { line: 480, column: 2, offset: 22422 },
            end: { line: 480, column: 128, offset: 22548 }
          }
        }
      ],
      position: {
        start: { line: 477, column: 2, offset: 22059 },
        end: { line: 480, column: 128, offset: 22548 }
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
            start: { line: 482, column: 5, offset: 22554 },
            end: { line: 482, column: 28, offset: 22577 }
          }
        }
      ],
      position: {
        start: { line: 482, column: 1, offset: 22550 },
        end: { line: 482, column: 28, offset: 22577 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 484, column: 1, offset: 22579 },
            end: { line: 484, column: 33, offset: 22611 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 484, column: 33, offset: 22611 },
            end: { line: 484, column: 39, offset: 22617 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 484, column: 39, offset: 22617 },
            end: { line: 484, column: 161, offset: 22739 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 484, column: 161, offset: 22739 },
            end: { line: 484, column: 176, offset: 22754 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 484, column: 176, offset: 22754 },
            end: { line: 484, column: 184, offset: 22762 }
          }
        }
      ],
      position: {
        start: { line: 484, column: 1, offset: 22579 },
        end: { line: 484, column: 184, offset: 22762 }
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
        start: { line: 486, column: 1, offset: 22764 },
        end: { line: 499, column: 4, offset: 23089 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 501, column: 1, offset: 23091 },
            end: { line: 501, column: 12, offset: 23102 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 501, column: 12, offset: 23102 },
            end: { line: 501, column: 18, offset: 23108 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 501, column: 18, offset: 23108 },
            end: { line: 501, column: 88, offset: 23178 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 501, column: 88, offset: 23178 },
            end: { line: 501, column: 104, offset: 23194 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 501, column: 104, offset: 23194 },
            end: { line: 501, column: 113, offset: 23203 }
          }
        }
      ],
      position: {
        start: { line: 501, column: 1, offset: 23091 },
        end: { line: 501, column: 113, offset: 23203 }
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
        start: { line: 503, column: 1, offset: 23205 },
        end: { line: 509, column: 4, offset: 23402 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 511, column: 1, offset: 23404 },
            end: { line: 511, column: 35, offset: 23438 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 511, column: 35, offset: 23438 },
            end: { line: 511, column: 50, offset: 23453 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 511, column: 50, offset: 23453 },
            end: { line: 511, column: 55, offset: 23458 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 511, column: 55, offset: 23458 },
            end: { line: 511, column: 71, offset: 23474 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 511, column: 71, offset: 23474 },
            end: { line: 511, column: 112, offset: 23515 }
          }
        }
      ],
      position: {
        start: { line: 511, column: 1, offset: 23404 },
        end: { line: 511, column: 112, offset: 23515 }
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
        start: { line: 513, column: 1, offset: 23517 },
        end: { line: 528, column: 4, offset: 23948 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 530, column: 1, offset: 23950 },
            end: { line: 530, column: 81, offset: 24030 }
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
                start: { line: 530, column: 82, offset: 24031 },
                end: { line: 530, column: 93, offset: 24042 }
              }
            }
          ],
          position: {
            start: { line: 530, column: 81, offset: 24030 },
            end: { line: 530, column: 108, offset: 24057 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 530, column: 108, offset: 24057 },
            end: { line: 530, column: 117, offset: 24066 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 23950 },
        end: { line: 530, column: 117, offset: 24066 }
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
        start: { line: 532, column: 1, offset: 24068 },
        end: { line: 566, column: 4, offset: 24719 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server ',
          position: {
            start: { line: 568, column: 1, offset: 24721 },
            end: { line: 568, column: 17, offset: 24737 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server',
          position: {
            start: { line: 568, column: 17, offset: 24737 },
            end: { line: 568, column: 25, offset: 24745 }
          }
        },
        {
          type: 'text',
          value: ' created by the NodeJS ',
          position: {
            start: { line: 568, column: 25, offset: 24745 },
            end: { line: 568, column: 48, offset: 24768 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 568, column: 48, offset: 24768 },
            end: { line: 568, column: 54, offset: 24774 }
          }
        },
        {
          type: 'text',
          value: " module's ",
          position: {
            start: { line: 568, column: 54, offset: 24774 },
            end: { line: 568, column: 64, offset: 24784 }
          }
        },
        {
          type: 'inlineCode',
          value: 'createServer',
          position: {
            start: { line: 568, column: 64, offset: 24784 },
            end: { line: 568, column: 78, offset: 24798 }
          }
        },
        {
          type: 'text',
          value: ' accepts the HTTP handler ',
          position: {
            start: { line: 568, column: 78, offset: 24798 },
            end: { line: 568, column: 104, offset: 24824 }
          }
        },
        {
          type: 'inlineCode',
          value: 'handler',
          position: {
            start: { line: 568, column: 104, offset: 24824 },
            end: { line: 568, column: 113, offset: 24833 }
          }
        },
        {
          type: 'text',
          value: ' as a single argument. To start the server we only need to call ',
          position: {
            start: { line: 568, column: 113, offset: 24833 },
            end: { line: 568, column: 177, offset: 24897 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 568, column: 177, offset: 24897 },
            end: { line: 568, column: 192, offset: 24912 }
          }
        },
        {
          type: 'text',
          value: ', specifying port ',
          position: {
            start: { line: 568, column: 192, offset: 24912 },
            end: { line: 568, column: 210, offset: 24930 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 568, column: 210, offset: 24930 },
            end: { line: 568, column: 216, offset: 24936 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 568, column: 216, offset: 24936 },
            end: { line: 568, column: 217, offset: 24937 }
          }
        }
      ],
      position: {
        start: { line: 568, column: 1, offset: 24721 },
        end: { line: 568, column: 217, offset: 24937 }
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
            start: { line: 570, column: 5, offset: 24943 },
            end: { line: 570, column: 59, offset: 24997 }
          }
        }
      ],
      position: {
        start: { line: 570, column: 1, offset: 24939 },
        end: { line: 570, column: 59, offset: 24997 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In [A]synchronous Functional Programming, HTTP handlers are simple, reusable, and modular. Consider the following web server implementation with a complex HTTP handler:',
          position: {
            start: { line: 572, column: 1, offset: 24999 },
            end: { line: 572, column: 169, offset: 25167 }
          }
        }
      ],
      position: {
        start: { line: 572, column: 1, offset: 24999 },
        end: { line: 572, column: 169, offset: 25167 }
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
        start: { line: 574, column: 1, offset: 25169 },
        end: { line: 734, column: 4, offset: 29515 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above handler ',
          position: {
            start: { line: 736, column: 1, offset: 29517 },
            end: { line: 736, column: 19, offset: 29535 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 736, column: 19, offset: 29535 },
            end: { line: 736, column: 35, offset: 29551 }
          }
        },
        {
          type: 'text',
          value: ' has many responsibilities, including handling health checks, handling options requests, retrieving user resources, updating or creating user resources, and handling application errors.',
          position: {
            start: { line: 736, column: 35, offset: 29551 },
            end: { line: 736, column: 220, offset: 29736 }
          }
        }
      ],
      position: {
        start: { line: 736, column: 1, offset: 29517 },
        end: { line: 736, column: 220, offset: 29736 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, we can break down the above complex HTTP handler into simple, modular, and reusable handlers, then use the library ',
          position: {
            start: { line: 738, column: 1, offset: 29738 },
            end: { line: 738, column: 160, offset: 29897 }
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
                start: { line: 738, column: 161, offset: 29898 },
                end: { line: 738, column: 167, offset: 29904 }
              }
            }
          ],
          position: {
            start: { line: 738, column: 160, offset: 29897 },
            end: { line: 738, column: 190, offset: 29927 }
          }
        },
        {
          type: 'text',
          value: ' to combine those handlers in a meaningful way.',
          position: {
            start: { line: 738, column: 190, offset: 29927 },
            end: { line: 738, column: 237, offset: 29974 }
          }
        }
      ],
      position: {
        start: { line: 738, column: 1, offset: 29738 },
        end: { line: 738, column: 237, offset: 29974 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "First, let's break down the complex handler.",
          position: {
            start: { line: 740, column: 1, offset: 29976 },
            end: { line: 740, column: 45, offset: 30020 }
          }
        }
      ],
      position: {
        start: { line: 740, column: 1, offset: 29976 },
        end: { line: 740, column: 45, offset: 30020 }
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
        start: { line: 742, column: 1, offset: 30022 },
        end: { line: 890, column: 4, offset: 33678 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "We've broken down the complex handler ",
          position: {
            start: { line: 892, column: 1, offset: 33680 },
            end: { line: 892, column: 39, offset: 33718 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 892, column: 39, offset: 33718 },
            end: { line: 892, column: 55, offset: 33734 }
          }
        },
        {
          type: 'text',
          value: ' into smaller, simpler handlers ',
          position: {
            start: { line: 892, column: 55, offset: 33734 },
            end: { line: 892, column: 87, offset: 33766 }
          }
        },
        {
          type: 'inlineCode',
          value: 'healthCheckHandler',
          position: {
            start: { line: 892, column: 87, offset: 33766 },
            end: { line: 892, column: 107, offset: 33786 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 107, offset: 33786 },
            end: { line: 892, column: 109, offset: 33788 }
          }
        },
        {
          type: 'inlineCode',
          value: 'optionsHandler',
          position: {
            start: { line: 892, column: 109, offset: 33788 },
            end: { line: 892, column: 125, offset: 33804 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 125, offset: 33804 },
            end: { line: 892, column: 127, offset: 33806 }
          }
        },
        {
          type: 'inlineCode',
          value: 'getUserHandler',
          position: {
            start: { line: 892, column: 127, offset: 33806 },
            end: { line: 892, column: 143, offset: 33822 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 892, column: 143, offset: 33822 },
            end: { line: 892, column: 145, offset: 33824 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notFoundHandler',
          position: {
            start: { line: 892, column: 145, offset: 33824 },
            end: { line: 892, column: 162, offset: 33841 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 892, column: 162, offset: 33841 },
            end: { line: 892, column: 168, offset: 33847 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 892, column: 168, offset: 33847 },
            end: { line: 892, column: 182, offset: 33861 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 892, column: 182, offset: 33861 },
            end: { line: 892, column: 183, offset: 33862 }
          }
        }
      ],
      position: {
        start: { line: 892, column: 1, offset: 33680 },
        end: { line: 892, column: 183, offset: 33862 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Now let's combine the smaller handlers using rubico's ",
          position: {
            start: { line: 894, column: 1, offset: 33864 },
            end: { line: 894, column: 55, offset: 33918 }
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
                start: { line: 894, column: 56, offset: 33919 },
                end: { line: 894, column: 64, offset: 33927 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 55, offset: 33918 },
            end: { line: 894, column: 81, offset: 33944 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 894, column: 81, offset: 33944 },
            end: { line: 894, column: 86, offset: 33949 }
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
                start: { line: 894, column: 87, offset: 33950 },
                end: { line: 894, column: 97, offset: 33960 }
              }
            }
          ],
          position: {
            start: { line: 894, column: 86, offset: 33949 },
            end: { line: 894, column: 116, offset: 33979 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 894, column: 116, offset: 33979 },
            end: { line: 894, column: 117, offset: 33980 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 33864 },
        end: { line: 894, column: 117, offset: 33980 }
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
        start: { line: 896, column: 1, offset: 33982 },
        end: { line: 918, column: 4, offset: 34509 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'combinedHandler',
          position: {
            start: { line: 920, column: 1, offset: 34511 },
            end: { line: 920, column: 18, offset: 34528 }
          }
        },
        {
          type: 'text',
          value: ' is functionally equivalent to ',
          position: {
            start: { line: 920, column: 18, offset: 34528 },
            end: { line: 920, column: 49, offset: 34559 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 920, column: 49, offset: 34559 },
            end: { line: 920, column: 65, offset: 34575 }
          }
        },
        {
          type: 'text',
          value: ', but is able to be expressed using a combination of smaller, simpler HTTP handlers. The benefits are as follows: being able to structure your application as small, simple components lends itself well to development, testing, and maintenance.',
          position: {
            start: { line: 920, column: 65, offset: 34575 },
            end: { line: 920, column: 307, offset: 34817 }
          }
        }
      ],
      position: {
        start: { line: 920, column: 1, offset: 34511 },
        end: { line: 920, column: 307, offset: 34817 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Development is quick and easy: where you once had to digest and add onto the entire complex component, now you only need to write a simple, greenfield component.',
          position: {
            start: { line: 922, column: 1, offset: 34819 },
            end: { line: 922, column: 162, offset: 34980 }
          }
        }
      ],
      position: {
        start: { line: 922, column: 1, offset: 34819 },
        end: { line: 922, column: 162, offset: 34980 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Testing is simplified: where you once had to write a complex integration test with many controls and conditions for the complex component, now you only need to write simple integration tests for the simple components.',
          position: {
            start: { line: 924, column: 1, offset: 34982 },
            end: { line: 924, column: 218, offset: 35199 }
          }
        }
      ],
      position: {
        start: { line: 924, column: 1, offset: 34982 },
        end: { line: 924, column: 218, offset: 35199 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The maintenance overhead is reduced: where you once had to concern yourself with testing changes over large areas of code with complex components, now you can reduce the burden to smaller areas of code with simple components.',
          position: {
            start: { line: 926, column: 1, offset: 35201 },
            end: { line: 926, column: 226, offset: 35426 }
          }
        }
      ],
      position: {
        start: { line: 926, column: 1, offset: 35201 },
        end: { line: 926, column: 226, offset: 35426 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Putting everything together:',
          position: {
            start: { line: 928, column: 1, offset: 35428 },
            end: { line: 928, column: 29, offset: 35456 }
          }
        }
      ],
      position: {
        start: { line: 928, column: 1, offset: 35428 },
        end: { line: 928, column: 29, offset: 35456 }
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
        start: { line: 930, column: 1, offset: 35458 },
        end: { line: 1107, column: 4, offset: 39691 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can find a working example of the above HTTP server code at ',
          position: {
            start: { line: 1109, column: 1, offset: 39693 },
            end: { line: 1109, column: 65, offset: 39757 }
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
                start: { line: 1109, column: 66, offset: 39758 },
                end: { line: 1109, column: 84, offset: 39776 }
              }
            }
          ],
          position: {
            start: { line: 1109, column: 65, offset: 39757 },
            end: { line: 1109, column: 166, offset: 39858 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1109, column: 166, offset: 39858 },
            end: { line: 1109, column: 167, offset: 39859 }
          }
        }
      ],
      position: {
        start: { line: 1109, column: 1, offset: 39693 },
        end: { line: 1109, column: 167, offset: 39859 }
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
            start: { line: 1111, column: 5, offset: 39865 },
            end: { line: 1111, column: 15, offset: 39875 }
          }
        }
      ],
      position: {
        start: { line: 1111, column: 1, offset: 39861 },
        end: { line: 1111, column: 15, offset: 39875 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Handling HTTP in [A]synchronous Functional Programming.',
          position: {
            start: { line: 1113, column: 1, offset: 39877 },
            end: { line: 1113, column: 71, offset: 39947 }
          }
        }
      ],
      position: {
        start: { line: 1113, column: 1, offset: 39877 },
        end: { line: 1113, column: 71, offset: 39947 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about rubico and would like to get started, please visit rubico's home page: ",
          position: {
            start: { line: 1115, column: 1, offset: 39949 },
            end: { line: 1115, column: 97, offset: 40045 }
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
                start: { line: 1115, column: 98, offset: 40046 },
                end: { line: 1115, column: 109, offset: 40057 }
              }
            }
          ],
          position: {
            start: { line: 1115, column: 97, offset: 40045 },
            end: { line: 1115, column: 113, offset: 40061 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 1115, column: 113, offset: 40061 },
            end: { line: 1115, column: 114, offset: 40062 }
          }
        }
      ],
      position: {
        start: { line: 1115, column: 1, offset: 39949 },
        end: { line: 1115, column: 114, offset: 40062 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1116, column: 1, offset: 40063 }
  }
}