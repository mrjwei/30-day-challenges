---
title: "Flattening"
---

# Day 21: Flattening

## Expected Output

```js
console.log(flattenTwoDimensionalArr([[1, 2, 3], [4, 5], [6]]))
// → [1, 2, 3, 4, 5, 6]
console.log(flattenMultiDimensionalArr([[1,2, ["a", "b"]], 3, [4, [[5]], 6], 7, 8]))
// → [1, 2, "a", "b", 3, 4, 5, 6, 7, 8]
```

## Code

### Flatten Two-Dimensional Arrays

#### Solution 1

Using `reduce()` and `concat()` methods turned out to be the most performant solution.

```js
const flattenTwoDimensionalArr = (arr) => {
  const flattenedArr = arr.reduce((concattedArr, currentArr) => {
    return concattedArr.concat(currentArr)
  }, [])
  return flattenedArr
}
```

#### Solution 2

Looping is usually the most obvious solution while often not the best. Benchmarking indicated that this solution is only slightly less performant than the first one, potentially because the use of the `concat()` method saved a nested loop.

```js
const flattenTwoDimensionalArr = (arr) => {
  let result = []
  for (let i of arr) {
    if (typeof i !== "object") {
      result.push(i)
    } else {
      result = result.concat(i)
    }
  }
  return result
}
```

#### Solution 3

Nested looping is much more memory-intensive and time-consuming. This solution took more than twice the time to run as the other two in benchmarking.

```js
const flattenTwoDimensionalArr = (arr) => {
  let result = []
  for (let outer of arr) {
    if (typeof outer !== "object") {
      result.push(outer)
    } else {
      for (let inner of outer) {
        result.push(inner)
      }
    }
  }
  return result
}
```

### Flatten Multi-Dimensional Arrays

I took one step further from the exercise in the book to allow flattening of arrays of arbitary dimensions.

```js
const flattenMultiDimensionalArrWrapper = () => {
  let result = []
  const doFlatten = (arr) => {
    for (let item of arr) {
      if (typeof item !== "object") {
        result.push(item)
      }
      else {
        doFlatten(item)
      }
    }
    return result
  }
  return doFlatten
}
```
