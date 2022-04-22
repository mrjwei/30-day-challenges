# Day 8: Reversing an Array

## Expected Output

```js
console.log(reverseArray([true, 4, "B"])) // ["B", 4, true]
let arr = ["a", 1, "b", true]
reverseArrayInPlace(arr)
console.log(arr) // [true, "b", 1, "a"]
```

## Code

```js
// returns a new array with reversed elements order
const reverseArray = (arr) => {
  return arr.reduce((newArrInProgress, item) => {
    newArrInProgress.unshift(item)
    return newArrInProgress
  }, [])
}

// reverse elements order of passed array in place
const reverseArrayInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i] , arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
}
```

## Notes

- Reversing an array in place takes much more time than returning a new array with reversed order, as the following performance benchmarking shows.

![perflink showing returning a new array with reversed order is faster](/images/day8-perflink.png)
*Returning a new array with reversed order is faster*

- In `reverseArrayInPlace` function, instead of `[arr[i] , arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]`, you could do,

```js
...
const tmp = arr[i]
arr[i] = arr[arr.length - 1 - i]
arr[arr.length - 1 - i] = tmp
...
```

but I feel it a bit verbose, considering `[a, b] = [b, a]` syntax are common in many languages, not just Javascript.
