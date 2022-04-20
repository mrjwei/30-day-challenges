# Day 5: Recursion

## Expected Output

```js
console.log(isEven(5)) // false
console.log(isEven(12)) // true
console.log(isEven(-89)) // false
```

## Code

```js
function isEven(num) {
  if (num < 0) {
    num = num * -1
  }
  else if (num === 0) {
    return 0
  } else if (num === 1) {
    return 1
  }
  return isEven(num - 2)
}
```

## Notes

The exercise in the book expects a function that takes a positive whole number as argument and returns a Boolean indicating whether the argument is an even number.

I extended it a bit by allowing users to pass a positive, zero or *negative* number as argument.
