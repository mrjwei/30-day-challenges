---
title: "A List (Part 2)"
---

# Day 13: A List (Part 2)

## Expected Output

```js
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
```

## Code

### Solution 1

The suggested solution.

```js
const listToArray = (list) => {
  let arr = []
  for(let node = list; node; node = node.rest) {
    arr.push(node.value)
  }
  return arr
}
```

### Solution 2

My own solution which uses a higher-order function.

```js
const wrapListToArray = () => {
  let arr = []
  return function listToArray(list) {
    if (list === null) {
      return []
    }

    arr.push(list.value)

    if (list.rest === null) {
      return arr
    } else {
      list = list.rest
      return listToArray(list)
    }
  }
}
```

### Solution 3

My own solution which utilizes a class.

```js
class ListToArray {
  constructor() {
    this.arr = []
  }
  listToArray(list) {
    if (list === null) {
      return this.arr
    }

    this.arr.push(list.value)

    if (list.rest === null) {
      return this.arr
    } else {
      list = list.rest
      return this.listToArray(list)
    }
  }
}
```

### Notes

Performance benchmarking shows that solution 1 is the most performant while class-based solution 3 seems to be an overkill for this task.

![perflink showing solution 1 outperforms the others](/images/day13-perflink.png)
*Solution 1 outperforms the others*
