Welcome to the rubico tour. This tour covers high level concepts and provides runnable and editable code examples. All code areas have the rubico core methods and Transducer module imported globally.

```javascript
const {

  pipe, compose,

  tap, forEach,

  switchCase,

  tryCatch,

  all, assign, get, set, pick, omit,

  map, filter, flatMap, reduce, transform,

  and, or, not, some, every,

  eq, gt, lt, gte, lte,

  thunkify, always, curry, __,

} = rubico
```

# Table of Contents

 1. [[A]synchrony](#a-synchrony)
 2. [Composition](#composition)
 3. [Polymorphism](#polymorphism)
 4. [Control Flow](#control-flow)
 5. [Error Handling](#error-handling)
 6. [Transducers](#transducers)

# [A]synchrony
Pass **synchronous or asynchronous** functions to any rubico operator - all promises are resolved for their promised value before continuing. Run things in parallel without having to call `Promise.all` on `array.map`. For more on this behavior, see this [blog post](https://dev.to/richytong/rubico-a-synchrnous-functional-syntax-motivation-20hf).

```javascript [playground]
const getTodo = id => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

map([1, 2, 3, 4, 5], pipe([
  getTodo,
  res => res.json(),
  console.log,
]))
```

Press the `run` button to make five requests using `fetch`, parse five request bodies, and log five todos out to the console - all in parallel.

# Composition
**Reduce coupling and complexity**. Use rubico's operators to create compositions of small, reusable functions. Add functionality to your program by composing the desired function - rubico gives you the tools to make this as simple and stress-free as possible.

```javascript [playground]
const identity = value => value

const square = number => number ** 2

const doMathsWithLogs = pipe([
  tap(number => console.log('input:', number)),
  all({
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

The `run` button above executes the pipeline `doMathsWithLogs` that logs a number out to the console, then parallelizes an identity operation and another pipeline into an object `{ number, numberSquared }`. The above example also introduces rubico's `curry` and placeholder `__`; use these to compose any function by creating a partially applied variant suited for the task at hand.

# Polymorphism
**Expressive power at your fingertips**. All rubico methods support data types beyond arrays including generators, async generators, strings, sets, maps, binary, and plain objects where sensible.

```javascript [playground]
const square = number => number ** 2

const functors = [
  [1, 2, 3, 4, 5],
  '12345',
  new Set([1, 2, 3, 4, 5]),
  new Uint8Array([1, 2, 3, 4, 5]),
  { a: 1, b: 2, c: 3, d: 4, e: 5 },
  new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]),
]

forEach(functors, pipe([
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

In the above example, the rubico operator `map` acts on a multitude of [functor](/blog/a-synchronous-functional-programming-data-types#functor) data types, including an array `[1, 2, 3, 4, 5]`, a string `'12345'`, a set `new Set([1, 2, 3, 4, 5])`, binary `new Uint8Array([1, 2, 3, 4, 5])`, a plain object `{ a: 1, b: 2, c: 3, d: 4, e: 5 }`, and a map `new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])`.

# Control Flow
**Create declarative, SQL-esque logical expressions** by composing predicates with rubico's logical operators. Below depicts vanilla JavaScript operators and their rubico analogs.

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

The above example shows a declarative `cli` using the rubico `switchCase` and `or` operators.

# Error Handling
**Confidently throw errors**. rubico's `tryCatch` operator catches both thrown errors and rejected Promises. Wrap your application pipeline in a `tryCatch` and never worry about uncaught errors or unhandled promise rejections again.

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
]), function errorHandler(error) {
  console.error(error)
})

myApp({}) // Error: userId is required but not found

myApp({ userId: 1 }) // validated user 1
```

The example above depicts a rubico `tryCatch` operator wrapping a pipeline created by a `pipe` operator. The catcher function `errorHandler` catches the error thrown by the function `validate` when the `userId` of `data` is nullish.

# Transducers
**Wrangle large or infinite streams of data**. Easily express complex transformations in a memory efficient way with rubico's `Trasnducer` module and `compose` operator. Read more on transducers [here](/blog/transducers-crash-course-rubico-v2).

```javascript [playground]
const toBinaryString = value => value.toString(2)

const toBinaryInt = value => parseInt(value, 2)

const decimalsToNotes = pipe([
  BigInt,
  toBinaryString,

  function* generateSegments(str, length = 7) {
    for (let i = 0; i < str.length; i += length) {
      yield str.slice(i, i + length)
    }
  },

  transform(compose(
    Transducer.map(toBinaryInt),
    Transducer.map(String.fromCharCode),
  ), ''),
])

const decimals = '16791573288892525934609440079317541905554393653557736896280802239551592289061061348368963'
const notes = decimalsToNotes(decimals)

console.log(notes) // CCGGAAGFFEEDDCGGFFEEDGGFFEEDCCGGAAGFFEEDDC
```

Above we see a complex transformation made simple by the rubico `transform` operator. The operator transforms the generator of decimal segments created by `generateSegments` into the string `notes`.

# Conclusion

You've arrived at the end of the tour. From here, you could get started with rubico ([installation](/#installation)) or read more at the [docs](/docs).
