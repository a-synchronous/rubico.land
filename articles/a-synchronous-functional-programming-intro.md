---
title: [A]synchronous Functional Programming - Intro
author: Richard Tong, King of Software at CLOUŢ
date: 2024-11-26
updated: 2026-10-06
path: /blog/a-synchronous-functional-programming-intro
description: An introduction to the [A]synchronous Functional Programming paradigm.
image: https://rubico.land/assets/rubico-logo-3.jpg
---

Hello, welcome to my series on a new paradigm built on top of the [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming) paradigm: **[A]synchronous Functional Programming**. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:

 * asynchronous code should be simple
 * functional style should not care about async
 * functional transformations should be composable, performant, and simple to express

At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:

### First Class Functions
First class functions are functions as data types, as opposed to language constructs. A first class function can be passed to another function as an argument.

In the example below, `square` is a first class function.

```javascript [playground]
function square(n) {
  return n ** 2
}

const array = [1, 2, 3]

const squared = array.map(square)

console.log(squared)
```

### Higher-Order Functions
Higher-order functions are functions that take other functions as arguments.

Here are some examples of higher-order functions in JavaScript:

 * **.reduce() Method**: Iterates through an array and returns a single value
 * **.forEach() Method**: Executes a callback function on each of the elements in an array in order
 * **.map() Method**: Returns a new array made up of the return values from the provided callback function

In the example below, `logArgs` is a higher-order function.

```javascript [playground]
function logArgs(f) {
  return (...args) => {
    console.log(...args)
    return f(...args)
  }
}

const add = (a, b) => a + b
const addWithArgsLogged = logArgs(add)

const result = addWithArgsLogged(1, 2)

console.log(result)
```

### Pure Functions

Pure functions are functions that have the following characteristics:

 * **No side effects**: A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see [immutability](https://en.wikipedia.org/wiki/Immutable_object)).
 * **Deterministic output / Referential transparency / Idempotence**: Given the same input, a pure function will always return the same output.

Pure functions have the following advantages:

 * Pure functions are easy to test - simply vary the input for full code coverage
 * Multiple pure functions can be executed in parallel without interfering with each other
 * Pure functions can be [memoized](https://en.wikipedia.org/wiki/Memoization)

The function `add` is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling `add` with 1 and 2 will always result in 3)

```javascript [playground]
const add = (a, b) => a + b

console.log(add(1, 2))

console.log(add(1, 2))

console.log(add(1, 2))
```

The following are examples of side effects

 * Modifying global variables (global variables are state outside the function's scope)
 * Writing to a file (file contents are state outside the function's scope)
 * Logging output to the console (console is state outside the function's scope)
 * Inserting, updating, or deleting data from a database (database storage is state outside the function's scope)
 * Sending a network request to an external http API (the API is an interface over state outside the function's scope)
 * Overwriting a key on an object passed as an argument to the function (the object passed to the function is considered state outside the function's scope)

### Partial Application
Partial application is a technique in functional programming where a curry function is used to partially apply arguments to a function, returning a partially applied function that expects the remaining arguments of the function.

Here is an example of partial application:

```javascript [playground]
function multiply(a, b, c) {
  return a * b * c
}

const multiply__5 = curry(multiply, __, __, 5)
const multiply3_5 = curry(multiply__5, 3, __)

const product = multiply3_5(4)

console.log(product)
```

### Monad-Like Structures / Meaningful Objects
A monad-like structure or meaningful object is an object that has some meaning beyond its name, for example the Array class creates arrays that can store other data types, and the Promise class creates a promise that can either complete or fail with a result on completion or error on failure. Arrays and Promises are examples of a meaningful objects.

The below example shows a promise `promiseB` chaining functionality with its `.then` method in a meaningful way, as if to say "wait for promiseA to resolve, and then execute the result on completion as n, returning n + 2".

```javascript [playground]
const promiseA = Promise.resolve(1)

const promiseB = promiseA.then(n => n + 2)

promiseB.then(console.log)
```

### [A]synchronous Functional Programming

[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)) when creating modular and predictable programs composed of functions.

We can use the [Rubico](https://rubico.land/) library to operate in the [A]synchronous Functional Programming paradigm.

```javascript [playground]
const { compose, map, forEach } = rubico

const ids = [1, 2, 3, 4, 5]

pipe(ids, [

  // make a request for each id
  map(async id => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }),

  // log each response body
  forEach(console.log),

])
```

Above we see a composition of functions created with the Rubico [compose](/docs/compose) operator. `compose` allows us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids `[1, 2, 3, 4, 5]`, then using the async-enabled Rubico [map](/docs/map) operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the Rubico [forEach](/docs/forEach) operator and the `console.log` function.

In the above example, `console.log` is a first-class function - it is provided to the higher order function `forEach` as an argument. `map` is also a higher order function, accepting the anonymous first-class function `async id => {...}`. This combination of higher order functions and first-class functions using `compose` is what is known as a "function composition". There are no pure functions in the above example.

Now consider an example with pure functions:

```javascript [playground]
const { pipe, tap, map, forEach, reduce } = rubico

const add = (a, b) => a + b

const square = n => n ** 2

const sleep = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds))

const numbers = [1, 2, 3, 4, 5]

pipe(numbers, [

  // square each number
  map(square),

  // for each number, pause then log the number
  tap(async numbers => {
    for (const n of numbers) {
      await sleep(500)
      console.log(n)
    }
  }),

  // sum up the numbers
  reduce(add, 0),

  // final pause then log
  async sum => {
    await sleep(500)
    console.log('sum:', sum)
  },
])
```

In the above example, `add` and `square` are pure functions. They are very simple, expressed almost as pure math. A given input to `add` or `square` would result in the same output for each invocation. The `add` function is provided as a first class function to the Rubico [reduce](/docs/reduce) operator, and the `square` function is provided as a first class function to the Rubico [map](/docs/map) operator. Both `reduce` and `map` operators are considered to be higher order functions.

The combination of first class and high order functions above is similar to what we have seen with `compose` in the previous example. The difference is the use of the operator `pipe` over `compose`, in this case instead of creating a function composition with `compose` we create a "function pipeline" with [pipe](/docs/pipe).

We see a new operation in the above example with `reduce`. It takes the squared numbers from `map(square)` and adds them all together into a final sum. We see the operator [tap](/docs/tap) as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With `tap`, the return value of the provided function is unused, so we can expect the input to the `reduce` operation following the tap expression `tap(async numbers => {...})` to be the same as the input to the tap expression.

### Conclusion

This concludes the intro to the [A]synchronous Functional Programming paradigm.

If you are curious about Rubico and would like to get started, please visit Rubico's home page, [rubico.land](/).
