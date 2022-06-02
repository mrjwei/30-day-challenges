---
title: "Everything"
---

# Day 28: Everything

Today, I returned to EJS book and did the *Everything* excercise in the [Higher-Order Functions chapter](https://eloquentjavascript.net/05_higher_order.html#i_SmbRSAd5GA).

## Expected Output

```js
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
```

## Code

### Solution 1

This is probably the most intuitive solution.

```js
const every = (arr, testFunc) => {
  for (let item of arr) {
    if (!testFunc(item)) {
      return false
    }
  }
  return true
}
```

### Solution 2

This one makes use of Array object's built-in `some` method. It's much conciser and benchmarking indicates it has a slight performance edge over solution 1. But it's **HARD to read or understand** and I will NEVER opt for something like this in my code.

```js
const every = (arr, testFunc) => {
  return !arr.some((item) => !testFunc(item))
}
```
