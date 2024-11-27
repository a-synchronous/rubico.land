---
title: Transducers Crash Course for rubico V1
author: Richard Tong, CTO and Co-Founder of Claimyr Inc.
date: 2020-10-02
path: /blog/transducers-crash-course-rubico-v1
description: A crash course in transducers for rubico v1
---

Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.

The below example depicts numbers going through two batch transformations, one with `.filter` and one with `.map`.

```javascript [playground]
const isOdd = number => number % 2 == 1

const square = number => number ** 2

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

console.log(
  manyNumbers
    .filter(isOdd)
    .map(square),
) // [1, 9, 25, 36, 49, ...]
```

<br />

With transducers, you could express the above transformation as a single pass. An item in the transformation would be both filtered and mapped before the next item in the reducing operation. Batch transformations must create an intermediate array between each operation; transducers do not have this requirement and so do not incur the memory penalty.

Below takes the above example and converts it to use rubico transducers.

<br />

```javascript [playground]
const isOdd = number => number % 2 == 1

const square = number => number ** 2

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

const squaredOdds = pipe([
  filter(isOdd),
  map(square),
])

console.log(
  transform(squaredOdds, [])(manyNumbers),
) // [1, 9, 25, 36, 49, ...]
```

Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but they can be confusing to anyone picking them up for the first time. I have found it easiest to build intuition for transducers by starting with reducers.

```coffeescript [specscript]
Reducer<T> = (any, T)=>Promise|any

Transducer = Reducer=>Reducer
```

A `Reducer` is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

A `Transducer` is a function that takes a `Reducer` and returns another `Reducer`. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.

<br />

![dominoes.png](/assets/dominoes.png)

<br />

Since the reducer that sets off a pipeline of transducers is called last, `pipe` behaves as `compose` and chains functions in reverse when a reducer is passed in data position. This decision is purely for API, and allows for all function pipelines created with `pipe`, even those of transducers, to read left to right.

The following operators are the core building blocks of rubico's transducer API. It is possible to perform the full spectrum of tranducer transformations with just these.

 * `map` - apply a mapper to each item of a reducing operation
 * `filter` - filter out items of a reducing operation by predicate
 * `flatMap` - apply a flatMapper to each item of a reducing operation, flattening each item of the result into the accumulator.

A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as `transform` and `reduce`, though it's entirely possible to execute a synchronous transducer with `Array.prototype.reduce`.

The following example shows the function pipeline `squaredOdds` used as a transducer.

<br />

```javascript [playground]
const square = number => number ** 2

const isOdd = number => number % 2 == 1

const squaredOdds = pipe([
  filter(isOdd),
  map(square),
])

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

console.log(
  transform(squaredOdds, [])(manyNumbers),
) // [1, 9, 25, 36, 49, ...]

const arrayConcat = (array, value) => array.concat(value)

console.log(
  manyNumbers.reduce(squaredOdds(arrayConcat), []),
) // [1, 9, 25, 36, 49, ...]
```

Due to rubico's polymorphic nature, any transducer not used in a reduce implementation is capable of eager transformations. Below is an eager version of the above transformation.

```javascript [playground]
const square = number => number ** 2

const isOdd = number => number % 2 == 1

const squaredOdds = pipe([
  filter(isOdd),
  map(square),
])

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

console.log(
  squaredOdds(manyNumbers),
) // [1, 9, 25, 36, 49, ...]
```

Transducers are useful for creating memory efficient data transformations, and are easy to use with rubico. You can get started with transducers at the [docs](/docs/map).

Further reading:
 * https://tgvashworth.com/2014/08/31/csp-and-transducers.html

Photo credits:
 * https://www.pngkit.com/view/u2w7e6u2y3o0o0y3_junior-alex-berlaga-helps-set-dominoes-world-records/
