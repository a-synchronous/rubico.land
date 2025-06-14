---
title: [A]synchronous Functional Programming - Data Types
author: Richard Tong, CTO and Co-Founder of Claimyr Inc.
date: 2025-06-13
lastUpdated: 2025-06-14
path: /blog/a-synchronous-functional-programming-data-types
description: Data types in [A]synchronous Functional Programming
image: /assets/monad.png
---

Welcome to Data Types in [A]synchronous Functional Programming. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.

## Primitive Data Types
Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.

The number primitive data type represents integer numbers like `1` and also floating-point numbers like `1.2`. To create a number in JavaScript you only need to write a number literal.

```javascript
1
```

You may also use the `Number` constructor to create a number. You can use the `Number` constructor to convert other types like strings to numbers.

```javascript
Number('3') // 3
```

The string primitive data type represents strings like `'abc'` or `'Hello World!'`. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can a string literal.

```javascript
'Hello World!'
```

You may also use the `String` constructor to create a string. You can use the `String` constructor to convert other types like numbers to strings.

```javascript
String(3) // '3'
```

The boolean primitive data type represents the logical values `true` or `false`. To create a boolean, you can write a boolean literal.

```javascript
true
```

Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators `==`, `>`, `<`, `>=`, `<=`, `&&`, or `||` on variables. Then you can use them with `if` statements to control code execution.

```javascript
const myNumber = 3
const myCondition = myNumber > 2 // myCondition is a boolean

if (myCondition) {
  // execute code
}
```

You can also use the `Boolean` constructor to create a boolean.

```javascript
Boolean(0) // false
```

The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the TypedArray constructors to create binary data types.

```javascript
// Uint8Array is a TypedArray constructor
new Uint8Array([1, 2, 3])
```

In practice, you usually won't use the constructors when working with binary data. Instead, you would access the binary data through an API.

```javascript
const fileReader = new FileReader()
fileReader.onload = function (event) {
  // event.target.result is binary data
}
fileReader.readAsArrayBuffer(myFile)
```

The symbol primitive data type represents unique and [immutable](https://developer.mozilla.org/en-US/docs/Glossary/Immutable) values, and are primarily used as identifiers for object properties.

```javascript
const mySymbol1 = Symbol('description')
const mySymbol2 = Symbol('description')
mySymbol1 == mySymbol2 // false
// mySymbol1 is unique from mySymbol2
```

Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like `for...in` loops or `Object.keys`.

```javascript
const o = { a: 1, b: 2, c: 3 }

const s1 = Symbol('1')
const o[s1] = 'my-unique-prop'

for (const key in o) {
  // symbol s1 won't be enumerated here
}
```

Some useful built-in symbols are `Symbol.iterator` and `Symbol.asyncIterator`. These symbols, when used to define properties on objects, implement special protocols for iteration. See [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) and [async iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)

Finally, the nullish data type represents the absence of a meaningful value and encopasses two values: `null` and `undefined`. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use `null` to express the intentional absence of an object value, while you wouldn't normally have to use `undefined`, though it is sometimes stylish to return `undefined` from a function.

```javascript
function myFunction(arg) {
  // check is arg is null or undefined
  if (arg == null) {
    return undefined
  }
  // continue with function knowing arg is a meaningful value
}

// declare myVar2 without initializing
let myVar2

console.log(myVar2) // undefined
```

### Primitive Versus Reference Data Types
As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.

## Collection Data Types
Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.

The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the `Array` constructor.

```javascript
[1, 2, 3] // array literal
new Array(1, 2, 3) // array constructor

const myArray = ['a', 'b', 'c']
myArray[0] // 'a', accessed at index 0 of myArray
myArray[1] // 'b', accessed at index 1 of myArray
myArray[2] // 'c', accessed at index 2 of myArray
```

You can also create arrays using static methods on the `Array` constructor.

```javascript
Array.from('foo') // ['f', 'o', 'o']
Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]
```

Several array instance methods such as `.slice` and `.map` also create new arrays.

```javascript
const myArray = [1, 2, 3, 4, 5]

myArray.slice(0, 3) // [1, 2, 3]
myArray.map(n => n * 2) // [2, 4, 6, 8, 10]
```

To insert an item into an array, use the `.push` instance method.

```javascript [playground]
const myArray = [1, 2]

myArray.push(3)

console.log(myArray) // [1, 2, 3]
```

To remove an item from an array, use the `.splice` instance method.

```javascript [playground]
const myArray = [1, 2, 3]

myArray.splice(1, 1) // remove 1 item from index 1 of myArray

console.log(myArray) // [1, 3]
```

To iterate through the elements of an array, use a `for...of` loop.

```javascript [playground]
const numbers = [1, 2, 3, 4, 5]

for (const n of numbers) {
  console.log(n)
  // 1
  // 2
  // 3
  // 4
  // 5
}
```

The object data type is an unordered collection of elements that is accessed by string or symbol keys, as opposed to numerical indexes for arrays. You can create an object by writing an object literal.

```javascript
{ a: 1, b: 'foo' }
```

You can also use the `Object` constructor to create an object, though this is not as common.

```javascript
new Object()
```

To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.

```javascript
const o = {}

o.a = 1 // set the number 1 as an element at key 'a' on the object o

const myPropertyName = 'My-Prop'
o[myPropertyName] = 'foo'
// set the string 'foo' as an element at key 'My-Prop' on the object o
```

To remove an item from an object, use property accessor syntax with the `delete` keyword.

```javascript
const o = { a: 1, 'My-Prop': 'foo' }

delete o.a // remove the element 1 under key 'a' from object o
delete o['My-Prop'] // remove the element 'foo' under key 'My-Prop' from object o
```

To iterate through the enumerable properties of an object, use a `for...in` loop.

```javascript [playground]
const o = { a: 1, b: 2, c: 3 }
for (const key in o) {
  const value = o[key]
  console.log(key, value)
  // a 1
  // b 2
  // c 3
}
```

The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's `.has` method.

```javascript [playground]
const mySet = new Set([1, 2, 3])

console.log('set has 1:', mySet.has(1)) // set has 1: true
console.log('set has 0:', mySet.has(0)) // set has 0: false
```

To create a set, use the `Set` constructor.

```javascript
new Set([1, 2, 3])
```

To insert an element into a set, use the `.add` instance method.

```javascript [playground]
const mySet = new Set()

mySet.add(1)
mySet.add('foo')
mySet.add(true)

console.log(mySet) // Set(3) { 1, 'foo', true }
```

To remove an element from a set, use the `.delete` instance method.

```javascript [playground]
const mySet = new Set([1, 2, 3])

mySet.delete(2)

console.log(mySet) // Set(2) { 1, 3 }
```

To iterate through the elements of a set, use a `for...of` loop.

```javascript [playground]
const mySet = new Set([1, 2, 3, 4, 5])

for (const num of mySet) {
  console.log(num)
  // 1
  // 2
  // 3
  // 4
  // 5
}
```

The map data type is a collection of elements ordered by insertion order and can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:
  * In scenarios involving frequent insertions and deletions of elements, maps are more performant than objects.
  * Maps need to be first converted to plain objects before they can be serialized, e.g. via `JSON.stringify`
  * Map keys can be any value (including functions, objects, or any primitive), while object keys can only be strings or symbols.
  * Maps are iterable with `for...of` loops, while objects use `for...in` loops

Use the `Map` constructor to create a map. The `Map` constructor accepts an array of arrays representing the map's entries.

```javascript
const m = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
])
```

To insert an element into a map, use the `.set` instance method.

```javascript [playground]
const m = new Map()
m.set('a', 1)
m.set('b', 2)
m.set('c', 3)

console.log(m) // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
```

To remove an element from a map, use the `.delete` instance method.

```javascript [playground]
const m = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
])

m.delete('a')

console.log(m) // Map(2) { 'b' => 2, 'c' => 3 }
```

To iterate through the elements of a map, use a `for...of` loop.

```javascript [playground]
const myMap = new Map()

myMap.set('a', 1)
myMap.set(null, true)
myMap.set(function myFunc() {}, ['example'])

for (const [key, value] of myMap) {
  console.log(key, value)
  // a 1
  // null true
  // [Function: myFunc] ['example']
}
```

### Which Collection Data Structure Is Right for Me?

When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.

## Iterable Data Types
Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) using a method `[Symbol.iterator]` that, when called, returns an iterator object. The collection data types excluding object (array, map, and set) are all iterable data types that implement the `[Symbol.iterator]` method, and can be consumed with a `for...of` loop.

```javascript
const myArray = [1, 2, 3]
myArray[Symbol.iterator]() // Array Iterator
for (const item of myArray) {
  // myArray is iterable
}

const myMap = new Map([['a', 1], ['b', 2], ['c', 3]])
myMap[Symbol.iterator]() // MapIterator
for (const [key, value] of myMap) {
  // myMap is iterable
}

const mySet = new Set([1, 2, 3])
mySet[Symbol.iterator]() // SetIterator
for (const value of mySet) {
  // mySet is iterable
}
```

You can also implement the iterable protocol on your own classes and objects.

```javascript [playground]
class MyClass {
  constructor() {
  }

  * [Symbol.iterator]() {
    yield 1
    yield 2
    yield 3
  }
}

const myInstance = new MyClass()
// myInstance created from MyClass is iterable
for (const item of myInstance) {
  console.log(item)
  // 1
  // 2
  // 3
}

const myObject = {
  * [Symbol.iterator]() {
    yield 1
    yield 2
    yield 3
  }
}

// myObject is iterable
for (const item of myObject) {
  console.log(item)
  // 1
  // 2
  // 3
}
```

A convenient way to create iterators is with generator functions using the `function* () {}` syntax and the `yield` keyword. Generator functions create generators, a kind of iterator.

```javascript [playground]
function* myGeneratorFunction() {
  yield 1
  yield 2
  yield 3
}

// the generator function myGeneratorFunction creates a generator myGenerator
const myGenerator = myGeneratorFunction()

// myGenerator is iterable
myGenerator[Symbol.iterator]() // Generator
for (const item of myGenerator) {
  console.log(item)
  // 1
  // 2
  // 3
}
```

## Asynchronous Data Types
Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.

The promise data type represents an asynchronous operation that resolves to a single value, or rejects with an error. The way you can access the resolved value or rejected error of a promise is via the `.then` method of a promise instance.

```javascript
myPromise.then(resolvedValue => {
  // resolvedValue is the resolved value of myPromise
}).catch(error => {
  // error is the rejected error of myPromise
})
```

You can also use the keywords `async` and `await` to access the resolved value or rejected error of a promise.

```javascript
async function myFunction() {
  try {
    const resolvedValue = await myPromise
    // resolvedValue is the resolved value of myPromise
  } catch (error) {
    // error is the rejected error of myPromise
  }
}
```

You can use the `Promise` constructor to create a promise.

```javascript [playground]
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 100)
})

myPromise.then(resolvedValue => {
  console.log(resolvedValue) // 1
})

const myRejectingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('rejected'))
  }, 100)
})

myRejectingPromise.catch(error => {
  console.error(error) // Error: rejected
})
```

You can also use methods on the Promise constructor to conveniently create promises.

```javascript
Promise.resolve(1) // promise with resolved value 1 that doesn't reject

Promise.reject(new Error('example')) // promise that rejects with an error with message 'example'
```

In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.

```javascript [playground]
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise.then(response => {
  console.log(response) // [object Response]

  const promise2 = response.json()

  promise2.then(data => {
    console.log(data) // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  })
})
```

## Asynchronous Iterable Data Types
Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the [async iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) using a method `[Symbol.asyncIterator]` that, when called, returns an async iterator object that can be consumed with a `for await...of` loop. As of this article (2025), no built-in JavaScript data types currently implement the async iterable protocol. The only way to create async iterable data types is to implement the async iterable protocol yourself or by using an async generator function.

```javascript [playground]
class MyClass {
  constructor() {
  }

  async * [Symbol.asyncIterator]() {
    yield 1
    yield 2
    yield 3
  }
}

const myInstance = new MyClass()
// myInstance created from MyClass is async iterable
;(async () => {
  for await (const item of myInstance) {
    console.log(item)
    // 1
    // 2
    // 3
  }
})()

const myObject = {
  async * [Symbol.asyncIterator]() {
    yield 1
    yield 2
    yield 3
  }
}

// myObject is async iterable
;(async () => {
  for await (const item of myObject) {
    console.log(item)
    // 1
    // 2
    // 3
  }
})()
```

You can create async iterators is with async generator functions using the `async function* () {}` syntax and the `yield` keyword. Async generator functions create async generators, a kind of async iterator.

```javascript [playground]
async function* myAsyncGeneratorFunction() {
  yield 1
  yield 2
  yield 3
}

// the async generator function myAsyncGeneratorFunction creates an async generator myAsyncGenerator
const myAsyncGenerator = myAsyncGeneratorFunction()

// myAsyncGenerator is async iterable
myAsyncGenerator[Symbol.asyncIterator]() // AsyncGenerator
;(async () => {
  for await (const item of myAsyncGenerator) {
    console.log(item)
    // 1
    // 2
    // 3
  }
})()
```

## Algebraic Structures
Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.

The functor algebraic structure identifies data types with the `.map` method. Data types implementing `.map` must conform to the functor laws:

  1. Identity Law: applying the identity function `a => a` to a functor is equivalent to not having applied a function.

```javascript
assert.equivalent(
  myFunctor.map(identity),
  myFunctor
)
```

  2. Composition Law: applying two functions in sequence using `.map` is equivalent to applying their composition in a single `.map` operation.

```javascript
assert.equivalent(
  myFunctor.map(f).map(g),
  myFunctor.map(compose([g, f]))
)
```

The following built-in data types are considered to be functors:
 * `array`
 * `set`
 * `map`
 * `generator`
 * `async generator`
 * `object`

The filterable algebraic structure identifies data types with the `.filter` method. Data types implementing `.filter` must conform to the following laws:

  1. Distributivity Law: applying two predicate functions in sequence using consecutive calls to `.filter` is equivalent to executing both predicate functions in a logical AND expression with a single call to `.filter`.

```javascript
assert.equivalent(
  myFilterable.filter(x => f(x) && g(x)),
  myFilterable.filter(f).filter(g)
)
```

  2. Identity Law: applying a predicate function that always returns true is equivalent to not having applied a function.

```javascript
assert.equivalent(
  myFilterable.filter(() => true),
  myFilterable
)
```

  3. Annihilation Law: given two distinct filterables, applying a predicate function that always returns false to both filterables produces equivalent results.

```javascript
assert.equivalent(
  myFilterableA.filter(() => false),
  myFilterableB.filter(() => false)
)
```

The following built-in data types are considered to be filterables:
 * `array`
 * `set`
 * `map`
 * `generator`
 * `async generator`
 * `object`

The foldable algebraic structure identifies data types with the `.reduce` method. Data types implementing `.reduce` must conform to the following law: 

  1. A given reducing operation is equivalent to two chained reducing operations with `.reduce` where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.

```javascript
assert.equivalent(
  myFoldable.reduce(reducer),
  myFoldable
    .reduce((accumulator, item) => accumulator.concat([item]) , [])
    .reduce(reducer)
)
```

The following built-in data types are considered to be foldables:
 * `array`
 * `set`
 * `map`
 * `generator`
 * `async generator`
 * `object`

The semigroup algebraic structure identifies data types with the `.concat` method. Data types implementing `.concat` must conform to the following laws:

  1. Associativity: when concatenating three elements, concatenating the first and then the last two is the same as concatenating the first two and then the last.

```javascript
assert.equivalent(
  mySemigroup.concat(a).concat(b, c),
  mySemigroup.concat(a, b).concat(c),
)
```

The following built-in data types are considered to be semigroups:
 * `array`
 * `string`
 * `set`
 * `binary`
 * `object`

The monad algebraic structure identifies data types with the `.flatMap` or `.chain` methods. Data types implementing `.flatMap` or `.chain` must conform to the monad laws:

  1. Left Identity: wrapping a value in a monad and then calling the monad's `.flatMap` or `.chain` with a function is equivalent to directly applying the function to the value.

```javascript
assert.equivalent(
  MyMonad.of(a).flatMap(f),
  f(a),
)
```

  2. Right Identity: given a monad, chaining a function that wraps a value in a monad should result in the given monad.

```javascript
assert.equivalent(
  myMonad.flatMap(MyMonad.of),
  myMonad
)
```

  3. Associativity: the order of execution of chaining operations on a monad does not affect the final result.

```javascript
// f and g are functions that return a monad
assert.equivalent(
  myMonad.flatMap(f).flatMap(g),
  myMonad.flatMap(x => f(x).flatMap(g))
)
```

The following built-in data types are considered to be monads:
 * `array`
 * `string`
 * `set`
 * `genreator`
 * `async generator`
 * `object`

## Conclusion

This concludes the data types of the [A]synchronous Functional Programming paradigm.

If you are interested in getting started with rubico and [A]synchronous Functional Programming, please visit the home page for the library: [rubico.land](https://rubico.land/).
