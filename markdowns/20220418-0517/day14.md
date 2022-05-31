---
title: "A List (Part 3)"
---

# Day 14: A List (Part 3)

## Expected Output

```js
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
```

## Code

### `prepend` Function

```js
const prepend = (val, list) => {
  return {
    value: val,
    rest: list
  }
}
```

### `nth` Function

#### Solution 1

This makes use of the `listToArray` function that is defined in day12 challenge.

```js
const nth = (list, index) => {
  const arr = listToArray(list) // this function is defined in day12 challenge
  return arr[index]
}
```

#### Solution 2

This solution uses recursive calling to `nth` function itself.

```js
const nth = (list, index) => {
  if (list === null) {
    return null
  }
  if (list.rest === null && index > 0) { // index is bigger than number of layers of list
    return undefined
  }
  if (index === 0) {
    return list.value
  }
  list = list.rest
  index = index - 1
  return this.nth(list, index)
}
```

### A Class To Encapsulate List Logics

At the end of the `A List` exercise, I felt it helpful to create a class to encapsulate everything that I defined from part 1. This way, the code would be easier to understand and reuse.

```js
class ListProcessor {
  static arrayToList(array) {
    if (array.length === 0) {
      return null
    }
    if (array.length === 1) {
      return {
        value: array[0],
        rest: null
      }
    }
    return {
      value: array.shift(),
      rest: this.arrayToList(array)
    }
  }

  static listToArray(list) {
    let array = []
    for(let node = list; node; node = node.rest) {
      array.push(node.value)
    }
    return array
  }

  static prepend(val, list) {
    return {
      value: val,
      rest: list
    }
  }

  static nth(list, index) {
    const array = ListProcessor.listToArray(list)
    return array[index]
  }
}
```
