require('rubico/global')

const myApp = data => {
console.log('myApp', data)
return tryCatch(data, pipe([
  tap(function validate(data) {
    if (data.userId == null) {
      throw new Error('userId is required but not found')
    }
  }),
  // ...
]), console.error)
}

console.log(myApp({}))
