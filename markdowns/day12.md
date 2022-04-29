---
title: "A List"
---

# Day 12: A List

Today I'm back to *Eloquent Javascript* book.

## Expected Output

```js
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
```

## Code

### Solution 1

This should be the suggested approach by the author in the *hint*. It's neat and short, but the shape of the ending result may not be very self-explanatory.

```js
const arrayToList = (arr) => {
  let result = null
  for (let i of arr.reverse()) {
    result = {value: i, rest: result}
  }
  return result
}
```

### Solution 2

This is my own approach which seems a bit more verbose, but it's still clean and more importantly, you can **easily get an idea of the final shape of the result**.

```js
const arrayToList = (arr) => {
  if (arr.length === 0) {
    return null
  }
  if (arr.length === 1) {
    return {
      value: arr[0],
      rest: null
    }
  }
  return {
    value: arr.shift(),
    rest: arrayToList(arr)
  }
}
```

### Notes

Solution 2 seems to also have a performance edge over solution 1. I tried different sizes of arrays with similar outcomes.

![perflink showing returning a new array with reversed order is faster](/images/day12-perflink.png)
*Solution 2 runs more than twice as fast as solution 1*
