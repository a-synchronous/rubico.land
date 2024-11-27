---
title: [A]synchronous Functional Programming - Intro
author: Richard Tong, CTO and Co-Founder of Claimyr Inc.
date: 2024-11-26
path: /blog/a-synchronous-functional-programming-intro
description: An introduction to the [A]synchronous Functional Programming paradigm
image: https://rubico.land/assets/rubico-logo-large.png
---

Hello, welcome to my series on a new paradigm built on top of the [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming) paradigm: **[A]synchronous Functional Programming**. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:

 * asynchronous code should be simple
 * functional style should not care about async
 * functional transformations should be composable, performant, and simple to express

At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:

### First class and higher-order Functions

Functions that fall under first class and higher-order functions are all functions that can take other functions as arguments and return a function as the result. The distinction between the two is subtle: a "higher-order" function is a function that takes one or more functions as arguments and returns a function or value as a result, while a "first class" function is a function that can be treated like any other data type (e.g. number, string, function) in a programming language. First class functions are passed as arguments to higher-order functions. There can be no higher-order functions without first class functions in any programming language.

Here are some examples of higher-order functions in JavaScript:

 * **.reduce() Method**: Iterates through an array and returns a single value
 * **.forEach() Method**: Executes a callback function on each of the elements in an array in order
 * **.map() Method**: Returns a new array made up of the return values from the provided callback function

Here are some examples of first class functions in JavaScript:

 * **.reduce(firstClassFunction)**: `firstClassFunction` is a first class function
 * **.forEach(firstClassFunction)**: `firstClassFunction` is a first class function
 * **.map(firstClassFunction)**: `firstClassFunction` is a first class function

You could even write your own higher-order functions, for example, the function `logArgs` takes the first class function `f` and logs the arguments to `f` every time `f` is called.

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
// 1 2

console.log(result)
// 3
```

### Pure functions

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
// 3

console.log(add(1, 2))
// 3

console.log(add(1, 2))
// 3
```

The following are examples of side effects

 * Modifying global variables (global variables are state outside the function's scope)
 * Writing to a file (file contents are state outside the function's scope)
 * Logging output to the console (console is state outside the function's scope)
 * Inserting, updating, or deleting data from a database (database storage is state outside the function's scope)
 * Sending a network request to an external http API (the API is an interface over state outside the function's scope)
 * Overwriting a key on an object passed as an argument to the function (the object passed to the function is considered state outside the function's scope)

### [A]synchronous Functional Programming

[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)) when creating modular and predictable programs composed of functions.

In order to operate in the [A]synchronous Functional Programming paradigm, we need the library [rubico](https://rubico.land/). Consider the following example:

```javascript [playground]
const { pipe, map, forEach } = rubico

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

Above we see a composition of functions created with the `pipe` operator. `pipe` enables us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids `[1, 2, 3, 4, 5]`, then using the async-enabled rubico `map` operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the rubico `forEach` operator and the `console.log` function.

In the above example, `console.log` is a first-class function - it is provided to the higher order function `forEach` as an argument. `map` is also a higher order function, accepting the anonymous first-class function `async id => {...`. This combination of higher order functions and first-class functions is what is known as a "function composition". There are no pure functions in the above example.

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

In the above example, `add` and `square` are pure functions. You can see they are very simple, expressed almost as pure math. A given input to `add` or `square` would result in the same output for each invocation. The `add` function is provided as a first class function to the `reduce` higher order function, and the `square` function is provided as a first class function to the `map` higher order function. The composition is similar to what we have seen in the previous example; `pipe` creates the overarching composition, and each operation expressed as miniature function composition follows sequentially. We see a new operation in the above example as well with `reduce`. It takes the squared numbers from `map(square)` and adds them all together into a final sum. We see a new rubico operator `tap` as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With `tap`, the return value of the provided first class function is discarded, so that is why we don't see a return value for the first class function provided to `tap` in the example.

### Conclusion

This concludes the intro the the [A]synchronous Functional Programming paradigm. Thank you for taking the time to read. I hope to produce these articles at least one every few months.

If you are curious about rubico and would like to get started, you can visit the home page for the library, [rubico.land](https://rubico.land/).

Below are quick links for some of the rubico operators used in the examples:
 * [pipe](https://rubico.land/docs/pipe)
 * [tap](https://rubico.land/docs/tap)
 * [map](https://rubico.land/docs/map)
 * [reduce](https://rubico.land/docs/reduce)
 * [forEach](https://rubico.land/docs/forEach)
