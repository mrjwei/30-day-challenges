# Day 7: The Sum of a Range

## Expected Output

```js
console.log(range(3, 5)) // [3, 4, 5]
console.log(range(4, 2, -1)) // [4, 3, 2]
console.log(sum(range(10, 1, -2))) // 30
```

## Code

```js
const range = (start, end, step = 1) => {
  let result = []

  // zero step does not make sense and
  // will result in infinite loop
  if (step === 0) {
      throw Error("Invalid step. Step should not be zero.")
  }

  // normalize step to always be positive
  // this makes code cleaner and easier to read
  if (step < 0) {
    step = step * -1
  }

  if (end - start >= 0) {
    for (let i = start; i <= end; i = i + step) {
      result.push(i)
    }
  } else {
    for (let i = start; i >= end; i = i - step) {
      result.push(i)
    }
  }

  return result
}

const sum = (numArr) => {
  if (numArr.some(item => typeof item !== "number")) {
    throw TypeError("All items in array should be number.")
  }
  return numArr.reduce((acc, num) => acc + num)
}
```
