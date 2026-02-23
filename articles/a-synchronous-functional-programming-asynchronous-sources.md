---
title: [A]synchronous Functional Programming - Asynchronous Sources
author: Richard Yufei Tong, King of Software at CLOUT
date: 2025-02-23
updated: 2026-02-23
path: /blog/a-synchronous-functional-programming-asynchronous-sources
description: Asynchronous Sources in [A]synchronous Functional Programming
image: /assets/asynchronous-sources-examples.jpg
---

Welcome to Asynchronous Sources in [A]synchronous Functional Programming. In this article we will discuss asynchronous sources in the context of the [A]synchronous Functional Programming paradigm in JavaScript.

## Asynchronous Sources

Asynchronous Sources are ubiquitous in modern day JavaScript environments, in both web browsers and servers. Asynchronous sources can be data streams, network connections, and event targets. Asynchronous sources execute independently of the main program's execution flow.

Here are some examples of asynchronous sources that occur in web browsers and in [NodeJS](https://nodejs.org/en).

```javascript
// EventTarget (Web)
const myButtonElement = document.getElementById('#my-button')
myButtonElement.addEventListener('click', event => {
  // event is a click event of the event target myButtonElement
})

// fetch response (web)
const response = await fetch('https://jsonplaceholder.typicode.com/posts')
// response.body

// WebSocket (Web)
const myWebsocket = new WebSocket('ws://localhost:8080/')
websocket.addEventListener('message', event => {
  // event is a message event of the WebSocket connection myWebsocket
})

// stream.Readable (NodeJS)
const fs = require('fs')
const myReadableStream = fs.createReadStream('/path/to/my/file')
myReadableStream.on('data', chunk => {
  // chunk is data from the file stream myReadableStream
})
```

## Asynchronous Sources on the Web

On the web, event targets and network connections are both examples of asynchronous sources.

### Event Targets and Events

An event target ([EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)) is an object that can receive events. Any element ([Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)), including the `document` ([Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)) object and global `window` ([Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)) object, can be considered an event target.

An event ([Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)) is an object that represents an asynchronous occurrence in relation to an event target. For example, a "click" event can occur on a button event target, and a "change" event can occur on an input event target.

```coffeescript [specscript]
type Event = {
  type: string,
  target: EventTarget,
}

type EventListener = (event Event)=>any

type EventTarget = {
  addEventListener: (eventName string, listener EventListener)=>undefined,
  removeEventListener: (eventName string, listener EventListener)=>undefined,
}
```

To listen for an event on an event target, you would call the `addEventListener` method of the event target with the event name and an event listener callback function. You can add multiple event listeners for the same event, and remove event listeners with `removeEventListener`. To remove an event listener, you would call the `removeEventListener` method of the event target with the event name and the event listener callback function to remove.

```javascript
// myButton is an event target
const myButton = document.getElementById('my-button')

const myListener = event => {
  console.log(event.target)
}

// adds myListener to myButton's click event listeners
myButton.addEventListener('click', myListener)

const myOtherListener = event => {
  console.log(event.target)
}

// adds myOtherListener to myButton's click event listeners
myButton.addEventListener('click', myOtherListener)

// removes myOtherListener from myButton's click event listeners
myButton.removeEventListener('click', myOtherListener)
```

Some common events:
  * [Element focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
  * [Element change event](#element-change-event)
  * [Element keydown event](#element-keydown-event)
  * [Element keyup event](#element-keyup-event)
  * [Element mousemove event](#element-mousemove-event)
  * [Element click event](#element-click-event)
  * [Element scroll event](#element-scroll-event)

## Asynchronous Sources in NodeJS
