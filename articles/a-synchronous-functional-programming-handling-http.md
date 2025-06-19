---
title: [A]synchronous Functional Programming - Handling HTTP
author: Richard Tong, CTO and Co-Founder of Claimyr Inc.
date: 2025-06-16
lastUpdated: 2025-06-16
path: /blog/a-synchronous-functional-programming-handling-http
description: Handling HTTP in [A]synchronous Functional Programming
image: /assets/HTTP_logo.png
---

Welcome to Handling HTTP in [A]synchronous Functional Programming. In this article we will discuss how to handle HTTP in the context of the [A]synchronous Functional Programming paradigm in JavaScript.

## HTTP

HTTP (Hypertext Transfer Protocol) is a [protocol](https://www.cloudflare.com/learning/network-layer/what-is-a-protocol/) by which data is transferred over the internet. The internet is just a bunch of computers (including PCs, laptops, and smartphones), and those computers communicate with each other using HTTP. When you visit a website, chances are it was served to you using HTTP. When you use a mobile app, chances are it used HTTP to serve you content.

HTTP adheres to the [client-server model](https://www.akamai.com/glossary/what-is-the-client-server-model) where a client sends a request to a server and the server sends a response back to the client.

![http-diagram.jpg](/assets/http-diagram.jpg)

In order for clients to find the right servers to request, they need to use a URL.

## URL

A URL (Uniform Resource Locator) is a string that uniquely identifies the web address of a resource on the internet.

![url-structure-diagram.jpg](/assets/url-structure-diagram.jpg)

The basic structure of a URL includes the following parts:
 * scheme
 * domain name
 * port
 * authority
 * path
 * query parameters
 * anchor

### Scheme

![url-structure-scheme-diagram.jpg](/assets/url-structure-scheme-diagram.jpg)

The scheme of a URL specifies the protocol that the client will use to send a request to the server. For HTTP, the scheme could be `http` or `https`. Other schemes include `ws` and `wss` for the WebSocket protocol, `mailto` for the "mailto:" protocol, and `file` for the "file:" protocol.

### Domain Name

![url-structure-domain-name-diagram.jpg](/assets/url-structure-domain-name-diagram.jpg)

The domain name of a URL is a unique name that translates to the address of a computer where the resource of the URL is located. Domain names are translated via the [Domain Name System (DNS)](https://www.cloudflare.com/learning/dns/what-is-dns/) to computer addresses running web servers to which HTTP clients can send requests.

### Port

![url-structure-port-diagram.jpg](/assets/url-structure-port-diagram.jpg)

The port of a URL is a number that identifies a specific process or network service running on the computer where the resource of the URL is located. When a computer starts up a process like a web server, it can assign it a numerical port between 0 and 65535. The web server would then listen on this assigned port for HTTP requests.

### Authority

![url-structure-authority-diagram.jpg](/assets/url-structure-authority-diagram.jpg)

The authority of a URL consists of the domain name and port of the URL separated by a colon.

### Path

![url-structure-path-diagram.jpg](/assets/url-structure-path-diagram.jpg)

The path of a URL is a string that identifies the physical or abstract location of the resource within the URL's domain.

### Query Parameters

![url-structure-query-parameters-diagram.jpg](/assets/url-structure-query-parameters-diagram.jpg)

The query parameters of a URL are a list of key-value pairs separated by the `&` symbol. The query parameters can further identify the resource of a URL.

### Anchor

![url-structure-anchor-diagram.jpg](/assets/url-structure-anchor-diagram.jpg)

The anchor of a URL specifies a part of the URL's resource, and does not necessarily locate the resource. When a web server serves a web page as a resource, the anchor acts as a sort of "bookmark" inside the resource. Browsers will see the anchor and scroll the page down to where the section identified by the anchor is visible.

## HTTP Client

An HTTP client is a component of a [software application](https://en.wikipedia.org/wiki/Application_software) running inside a computer that sends HTTP requests to HTTP servers. The JavaScript code below is part of a software application that runs in your web browser. The code demonstrates the use of an HTTP client `fetch` to send a request to an HTTP server at the url `https://jsonplaceholder.typicode.com/todos/1`.

```javascript [playground]
const url = 'https://jsonplaceholder.typicode.com/todos/1'

const response = await fetch(url)

console.log('HTTP Response Status:', response.status)
console.log('HTTP Response Headers:', Object.fromEntries(response.headers))

const data = await response.json()

console.log('HTTP Response Body:', data)
```

## HTTP Request

An HTTP request is a message conforming to the HTTP protocol that a client sends to a server.

An HTTP request has the following properties:
 * method
 * url
 * headers
 * body

### HTTP Request Method

An HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, and `PATCH`.

#### GET

A `GET` HTTP request method asks the web server for a data representation of the specified resource. `GET` requests are [safe](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP), [idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent), and [cacheable](https://developer.mozilla.org/en-US/docs/Glossary/Cacheable).

#### HEAD

A `HEAD` HTTP request method asks the web server for metadata about the specified resource. `HEAD` requests are safe, idempotent, and cacheable.

#### POST

A `POST` HTTP request method sends data to the web server to create or update the specified resource. `POST` requests are not safe, are not idempotent, and are cacheable only when the response includes [freshness](https://developer.mozilla.org/en-US/docs/Glossary/Cacheable) information via the `Expires` or `Cache-Control` headers as well as a `Content-Location` header.

#### PUT

A `PUT` HTTP request method sends data to the web server to replace the specified resource. If the resource doesn't exist, it may be created. `PUT` requests are not safe, are idempotent, and are cacheable.

#### PATCH

A `PATCH` HTTP request method sends data to the web server to partially update the specified resource. `PATCH` requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the `Expires` or `Cache-Control` headers as well as a `Content-Location` header.

#### DELETE

A `DELETE` HTTP request method asks the web server to remove the specified resource. `DELETE` requests are not safe, are idempotent, and are not cacheable.

#### CONNECT

A `CONNECT` HTTP request method asks the web server to establish a tunnel to the server identified by the specified resource. `CONNECT` requests are not safe, are not idempotent, and are not cacheable.

#### OPTIONS

An `OPTIONS` HTTP request method asks the web server to describe the communication options for the target resource. `OPTIONS` requests are safe, are idempotent, and are not cacheable.

#### TRACE

A `TRACE` HTTP request method asks the web server to perform a [loop-back test](https://lightyear.ai/tips/what-is-loopback-testing) along the path of the specified resource. `TRACE` requests are safe, are idempotent, and are not cacheable.

### HTTP Request URL

An HTTP request URL is the [URL](#url) of a request. The request URL is provided to the request when the request is made by the client.

### HTTP Request Headers

HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request. Some common HTTP request headers are `Content-Type`, `Authorization`, `Cookie`, and `User-Agent`.

### HTTP Request Body

An HTTP request body is the part of the request that carries the bulk of the data sent to the server. It is commonly used for `POST`, `PUT`, and `PATCH` requests. HTTP request bodies can be string or binary. The content type of the request body should be specified by the `Content-Type` header. Some common values for the `Content-Type` header of string request bodies are `text/plain` and `application/json`. Some common values for the `Content-Type` header of binary request bodies are `image/jpg`, `image/png`, `audio/mpeg`, `audio/x-wav`, and `video/mp4`.

## HTTP Response

An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client.

An HTTP response has the following properties:
 * status code
 * headers
 * body

### HTTP Response Status Code

An HTTP response status code is a three-digit code that indicates the status of the processing done by the HTTP server on a request.

#### Informational Status Codes

The informational status codes indicate the server has received the initial part of a request and will continue processing.

##### 100 Continue

The server has received the request headers and is ready for the client to send the request body.

##### 101 Switching Protocols

The server is switching to a different protocol, specified in the `Upgrade` header, at the client's request. `101 Switching Protocols` is used by the WebSocket protocol when switching from HTTP.

##### 102 Processing

The server has received and is processing the request but no response is available yet.

##### 103 Early Hints

The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.

#### Successful Status Codes

The successful status codes indicate the server has received, understood, and accepted a request.

##### 200 OK

The server successfully processed the request. The meaning of success depends on the request method:
 * `GET` - The resource has been successfully retrieved and transmitted in the response message body.
 * `HEAD` - The requested metadata about the resource is available in the response headers.
 * `POST` - The resource was created or updated successfully
 * `PUT` - The resource was replaced successfully
 * `DELETE` - The resource was deleted successfully
 * `CONNECT` - The connection was established successfully
 * `OPTIONS` - The communication options are available

### HTTP Response Headers
### HTTP Response Body

Some common values for the `Content-Type` header of string response bodies are `text/plain`, `application/json`, `text/html`, and `text/xml`. Some common values for the `Content-Type` header of binary response bodies are `image/jpg`, `image/png`, `audio/mpeg`, `audio/x-wav`, and `video/mp4`.

## HTTP Server

An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The [NodeJS](https://en.wikipedia.org/wiki/Node.js) JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.

We can use the NodeJS `http` module to create an HTTP server.

```javascript
const http = require('http')

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  })
  response.end('ok')
})

const port = 8080

server.listen(port)
```

The example code above creates an HTTP server with `http.createServer` that takes a simple handler `(request, response) => {...}`. The HTTP server starts listening on port `8080` with the call to `server.listen`.

An HTTP server has the following properties:
 * port

### HTTP Server Port

The HTTP server port is...

## HTTP Handler

An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.

Generally, an HTTP handler is responsible for the following:
 * Parsing information from a request such as its headers, path, and body
 * Validating the information parsed from a request
 * Sending additional requests to other web servers or "web services", for example sending a request to a database web service (Amazon DynamoDB, Amazon RDS running PostgreSQL or MySQL) or external cache (Redis) to retrieve or store data
 * Generating the response to the request, including setting the appropriate response headers and writing to the response body.

### HTTP Handlers in NodeJS

The NodeJS JavaScript runtime's `http` module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS `ClientRequest` object.

```coffeescript [specscript]
type ClientRequest = {
  method: string,
  url: string,
  headers: Object<string>,
  on: (eventName string, eventHandler function)=>undefined,
}

request ClientRequest

request.on('data', (data Buffer)=>undefined)
request.on('error', (error Error)=>undefined)
request.on('end', ()=>undefined)
```

The NodeJS `http` module offers an interface or "API" for generating HTTP responses as `ServerResponse` objects.

```coffeescript [specscript]
type ServerResponse = {
  writeHead: (statusCode number, headers Object<string>),
  write: (data Buffer|string)=>undefined,
  end: (data Buffer|string)=>undefined
}
```

An HTTP handler in NodeJS handles `ClientRequest` and `ServerResponse` objects and has the following structure:

```coffeescript [specscript]
type ClientRequest = {
  method: string,
  url: string,
  headers: Object<string>,
  on: (eventName string, eventHandler function)=>undefined,
}

type ServerResponse = {
  writeHead: (statusCode number, headers Object<string>),
  write: (data Buffer|string)=>undefined,
  end: (data Buffer|string)=>undefined
}

type HttpHandler = (request ClientRequest, response ServerResponse)=>Promise|undefined
```

Below is a theoretical NodeJS HTTP handler that handles the request made in the [HTTP client](#http-client) example.

```javascript
const http = require('http')

const handler = function (request, response) {
  if (request.method == 'GET' && request.url == '/todos/1') {
    const status = 200

    const headers = {
      'Cache-Control': 'max-age=43200',
      'Content-Type': 'application/json; charset=utf-8',
      'Expires': '-1',
      'Pragma': 'no-cache',
    }

    response.writeHead(status, headers)

    const data = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    }

    response.end(JSON.stringify(data))
  }

  // ...
}

const server = http.createServer(handler)

const port = 8080

server.listen(port)
```

### Http Handlers in [A]synchronous Functional Programming
