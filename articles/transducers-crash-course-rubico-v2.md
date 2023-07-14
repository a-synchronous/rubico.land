---
title: Transducers Crash Course for rubico V2
author: Richard Tong
date: 2020-10-02
path: /blog/transducers-crash-course-rubico-v2
description: A crash course in rubico v2 transducers
---

Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. Say you wanted to square the odd numbers from one to one thousand.

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

Above, `manyNumbers` goes through two batch transformations from `.filter` and `.map`. This is not so memory efficient.

With transducers, you could express the above transformation as a single pass without incurring a memory penalty. An item in the transducer transformation would be both filtered and mapped before the next item in the reducing operation.

<br />

```javascript [playground]
const isOdd = number => number % 2 == 1

const square = number => number ** 2

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

const squaredOdds = compose([
  Transducer.filter(isOdd),
  Transducer.map(square),
])

console.log(
  transform(manyNumbers, squaredOdds, [])
) // [1, 9, 25, 36, 49, ...]
```

```coffeescript [specscript]
type Reducer = (
  accumulator any,
  value any,
  indexOrKey? number|string,
  collection? Foldable,
)=>(nextAccumulator Promise|any)

type Transducer = Reducer=>Reducer
```

A `Reducer` is a function that defines a relationship between an accumulator and an item in a transformation, and must be used in a reducing operation, such as with `Array.prototype.reduce`.

A `Transducer` is a function that takes a `Reducer` and returns another `Reducer`. Transducers enable function chains with reducers - pass a reducer to a pipe of transducers to create a reducer with chained functionality. Imagine dominos falling over.

![dominoes.png](https://www.pngkit.com/png/detail/220-2206099_junior-alex-berlaga-helps-set-dominoes-world-records.png)

The `Transducer` module of rubico offers the core building blocks for rubico's transducer API.

 * [Transducer.map](/docs/Transducer.map)
 * [Transducer.filter](/docs/Transducer.filter)
 * [Transducer.flatMap](/docs/Transducer.flatMap)
 * [Transducer.forEach](/docs/Transducer.forEach)
 * [Transducer.passthrough](/docs/Transducer.passthrough)
 * [Transducer.tryCatch](/docs/Transducer.tryCatch)

A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as `transform` and `reduce`, and it's also possible to execute a synchronous transducer with vanilla JavaScript `Array.prototype.reduce`.

The following example shows the function pipeline `squaredOdds` used as a transducer.

```javascript [playground]
const square = number => number ** 2

const isOdd = number => number % 2 == 1

const squaredOdds = compose([
  Transducer.filter(isOdd),
  Transducer.map(square),
])

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

// consume the transducer squaredOdds with rubico's transform
console.log(
  transform(manyNumbers, squaredOdds, [])
) // [1, 9, 25, 36, 49, ...]

const arrayConcat = (array, value) => array.concat(value)

// consume the transducer squaredOdds with vanilla JavaScript
console.log(
  manyNumbers.reduce(squaredOdds(arrayConcat), []),
) // [1, 9, 25, 36, 49, ...]
```

With rubico's transducers, it is possible to transform asynchronous sources.

```javascript [playground]
const myAsyncSource = async function* () {
  let number = 0
  while (number < 1000) {
    yield number
    number += 1
  }
}

transform(myAsyncSource(), Transducer.passthrough, [])
  .then(console.log) // [1, 2, 3, 4, 5, ...]
```

This is powerful in comparison to the vanilla JavaScript `for await`, where it takes more lines to express the same operation.

```javascript [playground]
const myAsyncSource = async function* () {
  let number = 0
  while (number < 1000) {
    yield number
    number += 1
  }
}

setTimeout(async function () {
  const array = []
  for await (const number of myAsyncSource()) {
    array.push(number)
  }
  console.log(array) // [1, 2, 3, 4, 5, ...]
}, 0)
```

Transducers are useful for creating memory efficient data transformations, and are easy to use with rubico. You can get started with transducers at the [docs](/docs/Transducer.map).


Further reading:
 * https://tgvashworth.com/2014/08/31/csp-and-transducers.html

Photo credits:
 * https://www.pngkit.com/view/u2w7e6u2y3o0o0y3_junior-alex-berlaga-helps-set-dominoes-world-records/
