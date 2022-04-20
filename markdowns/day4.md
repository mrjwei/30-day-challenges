# Day 4: Minimum

## Expected Output

```js
console.log(getMinFromNumbers(8, 3)) // 3
console.log(getMinFromNumbers(0, 10, 6)) // 0
console.log(getMinFromNumbers(2, -1, 100, 231)) // -1
```

## Code

```js
const getMinFromNumbers = (...numList) => {
  // variable name "num" implies it holds a number,
  // but at this point, it is not guaranteed a member is a number,
  // so I named the variable of inner arrow function as "item"
  if (numList.some(item => typeof item !== "number")) {
    throw TypeError("Every item in list should be a number")
  }
  if (numList.length < 2) {
    throw Error("At least 2 numbers must be provided as arguments")
  }
  return numList.reduce((currentMin, currentNum) => {
    return currentNum < currentMin ? currentNum : currentMin
  })
}
```

## Notes

- The original exercise in the book expects a function that takes only two arguments and returns their minimum. But as a tiny challenge, I generalized it to accept two or more than two numbers of arguments.
- I spent time thinking about readability. The specified function name in the book is *min*. But I feel it a bit ambiguous and provides no information about the argument(s) it takes. Also, I think it is important to handle errors and provide users with informative error messages.
