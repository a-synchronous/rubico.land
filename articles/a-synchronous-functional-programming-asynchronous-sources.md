---
title: [A]synchronous Functional Programming - Asynchronous Sources
author: Richard Tong, CTO and Co-Founder of Claimyr Inc.
date: 2025-06-21
updated: 2025-06-21
path: /blog/a-synchronous-functional-programming-asynchronous-sources
description: Handling HTTP in [A]synchronous Functional Programming
image: /assets/HTTP_logo.png
---

Welcome to Asynchronous Sources in [A]synchronous Functional Programming. In this article we will discuss asynchronous sources in [A]synchronous Functional Programming.

## Asynchronous Sources

An "asynchronous source" or "stream" is a connection, producer, origin, or target of events, messages, or data. An asynchronous source flows independently of the main program's execution flow.

Below are examples of asynchronous sources that occur on the [web](https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web) and in [NodeJS](https://nodejs.org/en).

```javascript
// EventTarget (Web)
const myButtonElement = document.getElementById('#my-button')
myButtonElement.addEventListener('click', event => {
  // event is a click event of the asynchronous source myButtonElement
})

// WebSocket (Web)
const myWebSocket = new WebSocket('ws://localhost:8080/')
myWebSocket.addEventListener('message', event => {
  // event is a message event of the asynchronous source myWebSocket
})

// stream.Readable (NodeJS)
const fs = require('fs')
const myReadableStream = fs.createReadStream('/path/to/file')
myReadableStream.on('data', chunk => {
  // chunk is a string or Buffer of the asynchronous source myReadableStream
})
```

## Asynchronous Sources on the Web

On the web, asynchronous sources can be event targets and WebSocket connections.

### Event

An "event" ([Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)) is an object that represents an asynchronous occurence in relation to an [event target](#event-target). For example a "click" event can occur on a "button" event target.

```coffeescript [specscript]
type Event = {
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
  currentTarget: EventTarget,
  defaultPrevented: boolean,
  eventPhase: number,
  isTrusted: boolean,
  srcElement: EventTarget,
  target: EventTarget,
  timeStamp: number,
  type: string,
}
```

#### Event bubbles
#### Event cancelable
#### Event composed
#### Event currentTarget
#### Event defaultPrevented
#### Event eventPhase
#### Event isTrusted
#### Event srcElement
#### Event target
#### Event timeStamp
#### Event type

https://developer.mozilla.org/en-US/docs/Web/API/Event

### Event Types

#### click event
Fires when mouse's primary button is pressed and released while pointer is inside the event target. For mobile devices, fires when a touch gesture is performed on the element.

```coffeescript [specscript]
type EventTarget = Element|Document|Window

type Event = {
  target: EventTarget,
}

eventTarget.addEventListener('click', event Event)
```

#### dblclick event
mouse's primary button is double-clicked (rapidly clicked twice) while pointer is inside the event target.

#### mousedown event
mouse button is pressed over event target

`mouseup` - mouse button is released over event target
`mousemove` - pointer is moved while over event target
`mouseover` - pointer 
`mouseout`
`contextmenu`
`wheel`

### Event Target

An "event target" [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) is an object that can receive [events](#event). Any [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) element ([Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)), the `document` object ([Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)), and global `window` object ([Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)) can be considered event targets.

```coffeescript [specscript]
type AbortSignal = {
  aborted: boolean,
  reason: string,
}

type EventListener = (event Event)=>()

type EventTarget = {
  addEventListener: (eventType string, listener EventListener, optionsOrUseCapture {
    capture?: boolean,
    once?: boolean,
    passive?: boolean,
    signal?: AbortSignal,
  }|boolean)=>(),

  removeEventListener: (eventType string, listener EventListener, optionsOrUseCapture {
    capture?: boolean,
  }|boolean)=>(),

  dispatchEvent: (event Event)=>boolean,
}
```

## Asynchronous Sources in NodeJS
