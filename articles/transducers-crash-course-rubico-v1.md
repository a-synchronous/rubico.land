---
title: Transducers Crash Course for Rubico V1
author: Richard Yufei Tong, King of Software at CLOUT
date: 2020-10-02
updated: 2026-02-22
path: /blog/transducers-crash-course-rubico-v1
description: A crash course in transducers for Rubico v1
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

Below takes the above example and converts it to use Rubico transducers.

<br />

```javascript [playground]
import rubico from 'https://cdn.jsdelivr.net/npm/rubico@1/es.js'

const { pipe, map, filter } = rubico

const isOdd = number => number % 2 == 1

const square = number => number ** 2

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

const squaredOdds = pipe([
  filter(isOdd),
  map(square),
])

const transformed = transform(squaredOdds, [])(manyNumbers)

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

<br />

![dominoes.png](/assets/dominoes.png)

<br />

Since the reducer that sets off a pipeline of transducers is called last, `pipe` behaves as `compose` and chains functions in reverse when a reducer is passed in data position. This allows for all function pipelines created with `pipe`, even those of transducers, to read left to right.

The following operators are the core building blocks of Rubico's transducer API. It is possible to perform the full spectrum of tranducer transformations with just these.

 * `map` - apply a mapper to each item of a reducing operation
 * `filter` - filter out items of a reducing operation by predicate
 * `flatMap` - apply a flatMapper to each item of a reducing operation, flattening each item of the result into the accumulator.

A transducer must be used with a reduce function such as Array `.reduce`. Rubico provides async-capable reduce functions as the `transform` and `reduce` operators.

The following example shows the function pipeline `squaredOdds` used as a transducer.

<br />

```javascript [playground]
import rubico from 'https://cdn.jsdelivr.net/npm/rubico@1/es.js'

const { pipe, map, filter } = rubico

const square = number => number ** 2

const isOdd = number => number % 2 == 1

const squaredOdds = pipe([
  filter(isOdd),
  map(square),
])

const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)

// use the transducer squaredOdds with Rubico's transform
const transformedWithRubicoTransform = transform(squaredOdds, [])(manyNumbers)

console.log(transformedWithRubicoTransform)

const arrayConcat = (array, value) => array.concat(value)

// use the transducer squaredOdds with vanilla JavaScript
const transformedWithArrayReduce =
    manyNumbers.reduce(squaredOdds(arrayConcat), [])

console.log(transformedWithArrayReduce)
```

Due to Rubico's polymorphic nature, any transducer-capable operator not used in a reduce function is capable of eager transformations. The below example is a non-transducing version of the above.

```javascript [playground]
import rubico from 'https://cdn.jsdelivr.net/npm/rubico@1/es.js'

const { pipe, map, filter } = rubico

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

Transducers are useful for creating memory efficient data transformations, and are easy to use with Rubico. You can get started with transducers [here](/docs/map).

Further reading:
 * https://tgvashworth.com/2014/08/31/csp-and-transducers.html

Photo credits:
 * https://www.pngkit.com/view/u2w7e6u2y3o0o0y3_junior-alex-berlaga-helps-set-dominoes-world-records/
