Welcome to the Rubico tour. This tour covers high level concepts and provides runnable and editable code examples. All code areas have the Rubico core methods imported globally.

```javascript
const {
  pipe, tap,
  switchCase, tryCatch,
  fork, assign, get, set, pick, omit,
  map, filter, reduce, transform, flatMap,
  and, or, not, any, all,
  eq, gt, lt, gte, lte,
  thunkify, always,
  curry, __,
} = rubico
```

# Table of Contents

 1. [[A]synchrony](#a-synchrony)
 2. [Composition](#composition)
 3. [Polymorphism](#polymorphism)
 4. [Control Flow](#control-flow)
 5. [Error Handling](#error-handling)

# [A]synchrony
Pass **synchronous or asynchronous** functions to any Rubico operator - any and all promises will be resolved. Execute functions concurrently without having to call `Promise.all` on `array.map`.

```javascript [playground]
const getTodo = id => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

map([1, 2, 3, 4, 5], pipe([
  getTodo,
  res => res.json(),
  console.log,
]))
```

Press the `run` button to make five concurrent requests using `fetch`, parse five request bodies, and log five todos out to the console.

# Composition
**Reduce coupling and complexity**. Use Rubico's operators to create compositions of small, reusable functions. Add functionality by composing a new function - Rubico gives you the tools to make this as simple and stress-free as possible.

```javascript [playground]
const identity = value => value

const square = number => number ** 2

const doMathsWithLogs = pipe([
  tap(number => console.log('input:', number)),
  fork({
    number: identity,
    numberSquared: pipe([
      square,
      tap(curry.arity(2, console.log, 'result of square:', __)),
    ]),
  }),
])

console.log(doMathsWithLogs(3))
// input: 3
// result of square: 9
// { number: 3, numberSquared: 9 }
```

The code above executes the pipeline `doMathsWithLogs`, logging a number out to the console and composing an identity operation and another Rubico pipeline into the object `{ number, numberSquared }`. The above example also introduces Rubico's `curry` operator and placeholder `__`; use these to create a partially applied function that suits any API.

# Polymorphism
**Expressive power at your fingertips**. All Rubico methods support data types beyond arrays where sensible, including generators, async generators, strings, sets, maps, binary data, and plain objects.

```javascript [playground]
const square = number => number ** 2

const iterables = [
  [1, 2, 3, 4, 5],
  '12345',
  new Set([1, 2, 3, 4, 5]),
  new Uint8Array([1, 2, 3, 4, 5]),
  { a: 1, b: 2, c: 3, d: 4, e: 5 },
  new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]),
]

iterables.forEach(pipe([
  map(square),
  console.log,
]))
// [1, 2, 3, 4, 5]
// '1491625'
// Set { 1, 4, 9, 16, 25 }
// Uint8Array [1, 4, 9, 16, 25]
// { a: 1, b: 4, c: 9, d: 16, e: 25 }
// Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }
```

In the above example, the Rubico operator `map` acts on a multitude of [functor](/blog/a-synchronous-functional-programming-data-types#functor) data types, including an array `[1, 2, 3, 4, 5]`, a string `'12345'`, a set `new Set([1, 2, 3, 4, 5])`, binary `new Uint8Array([1, 2, 3, 4, 5])`, a plain object `{ a: 1, b: 2, c: 3, d: 4, e: 5 }`, and a map `new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])`.

# Control Flow
**Create declarative, SQL-esque logical expressions**. Compose predicate functions with Rubico's logical operators. Below depicts vanilla JavaScript operators and their Rubico analogs.

* Conditional (Ternary), `a ? b : c` → `switchCase([f, g, h])`
* Logical And, `a && b` → `and([f, g])`
* Logical Or, `a || b` → `or([f, g])`
* Logical Not, `!a` → `not(f)`
* Identity, `a === b` → `eq(f, g)`
* Greater Than, `a > b` → `gt(f, g)`
* Less Than, `a < b` → `lt(f, g)`
* Greater Than or Equal, `a >= b` → `gte(f, g)`
* Less Than or Equal, `a <= b` → `lte(f, g)`

```javascript [playground]
const hasFlag = flag => array => array.includes(flag)

const log = message => () => console.log(message)

const cli = switchCase([
  or([
    hasFlag('-h'),
    hasFlag('--help'),
  ]),
  log('USAGE: ...'),

  or([
    hasFlag('-v'),
    hasFlag('--version'),
  ]),
  log('v0.0.0'),

  log('USAGE: ...'),
])

cli(['-h']) // USAGE: ...
cli(['--version']) // v0.0.0
cli(['???']) // USAGE: ...
```

The above example shows a declarative `cli` using the Rubico `switchCase` and `or` operators.

# Error Handling
**Confidently throw and catch errors**. Rubico's `tryCatch` operator catches both thrown errors and rejected Promises. Wrap your application pipeline in a Rubico `tryCatch` operator and never worry about uncaught errors or unhandled promise rejections again.

```javascript [playground]
const myApp = tryCatch(pipe([
  tap(function validate(data) {
    if (data.userId == null) {
      throw new Error('userId is required but not found')
    }
  }),
  data => {
    console.log('validated user', data.userId)
  },
]), error => console.error(error))

myApp({}) // Error: userId is required but not found

myApp({ userId: 1 }) // validated user 1
```

The example above depicts a Rubico `tryCatch` operator wrapping a pipeline created by a `pipe` operator. The catcher function `errorHandler` catches the error thrown by the function `validate` when the `userId` of `data` is undefined.

You've arrived at the end of the tour. From here, you could get started with Rubico in a project ([installation](/#installation)) or read more at the [docs](/docs).
