---
title: Transducers Crash Course
author: Richard Yufei Tong, King of Software at CLOUT
date: 2026-02-22
updated: 2026-02-22
path: /blog/transducers-crash-course
description: A crash course on Rubico transducers
image: /assets/dominoes.png
---

Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.

The following example depicts the array `manyNumbers` going through two batch transformations, one with Array `.filter` and one with Array `.map`.

```javascript [playground]
const isOdd = number => number % 2 == 1

const square = number => number ** 2

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

const transformed = manyNumbers.filter(isOdd).map(square)

console.log(transformed)
```

<br />

With transducers, you can express the above transformation as a single pass. Each item would be both filtered and mapped before the next item in the array. Batch transformations such as those with Array `.map` and `.filter` must create an intermediate array between each operation; transducers do not have this requirement and so do not incur a memory penalty.

The next example takes the above and converts it to use Rubico transducers.

<br />

```javascript [playground]
const isOdd = number => number % 2 == 1

const square = number => number ** 2

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

const squaredOdds = compose([
  Transducer.filter(isOdd),
  Transducer.map(square),
])

const transformed = transform(manyNumbers, squaredOdds, [])

console.log(transformed)
```

Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but can be difficult to pick up. You can build intuition for transducers by starting with reducers.

```coffeescript [specscript]
type Reducer = (
  accumulator any,
  value any,
)=>(nextAccumulator Promise|any)

type Transducer = Reducer=>Reducer
```

A `Reducer` is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

A `Transducer` is a function that takes a `Reducer` and returns another `Reducer`. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.

![dominoes.png](/assets/dominoes.png)

It's a good exercise to implement transducers on your own. If you are interested in transducers after that, you can use transducers anywhere via Rubico's `Transducer` module. The `Transducer` module offers the core building blocks for Rubico's transducer API.

 * [Transducer.map](/docs/Transducer.map)
 * [Transducer.filter](/docs/Transducer.filter)
 * [Transducer.flatMap](/docs/Transducer.flatMap)
 * [Transducer.forEach](/docs/Transducer.forEach)
 * [Transducer.passthrough](/docs/Transducer.passthrough)
 * [Transducer.tryCatch](/docs/Transducer.tryCatch)

A transducer must be used with a reduce function such as Array `.reduce`. Rubico provides async-capable reduce functions as the `transform` and `reduce` operators.

The following example shows the function pipeline `squaredOdds` used as a transducer.

```javascript [playground]
const square = number => number ** 2

const isOdd = number => number % 2 == 1

const squaredOdds = compose([
  Transducer.filter(isOdd),
  Transducer.map(square),
])

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

// use the transducer squaredOdds with Rubico's transform
const transformedWithRubicoTransform = transform(manyNumbers, squaredOdds, [])

console.log(transformedWithRubicoTransform)

const arrayConcat = (array, value) => array.concat(value)

// use the transducer squaredOdds with vanilla JavaScript
const transformedWithArrayReduce =
  manyNumbers.reduce(squaredOdds(arrayConcat), [])

console.log(transformedWithArrayReduce)
```

With Rubico's transducers, it is possible to transform asynchronous sources.

```javascript [playground]
const myAsyncSource = async function* () {
  let number = 0
  while (number < 1000) {
    yield number
    number += 1
  }
}

const transformed = await transform(
  myAsyncSource(),
  Transducer.passthrough,
  []
)

console.log(transformed)
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

const array = []
for await (const number of myAsyncSource()) {
  array.push(number)
}
console.log(array)
```

Transducers are useful for creating memory efficient data transformations, and are easy to use with Rubico. You can get started with transducers [here](/docs/Transducer.map).

Further reading:
 * https://tgvashworth.com/2014/08/31/csp-and-transducers.html

Photo credits:
 * https://www.pngkit.com/view/u2w7e6u2y3o0o0y3_junior-alex-berlaga-helps-set-dominoes-world-records/
