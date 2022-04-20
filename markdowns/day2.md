# Day 2: FizzBuzz

## Expected Output

```js
// from 1 to 100
1
2
Fizz  // divisible by 3 but not 5
4
Buzz  // divisible by 5 but not 3
...
14
FizzBuzz  // divisible by 15
...
98
Fizz
Buzz
```

## Code

### solution 1

```js
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}
```

### Solution 2

```js
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("Fizz")
  } else if (i % 3 !== 0 && i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else {
    console.log(i)
  }
}
```

### Solution 3

```js
let result = ""
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    result += "Fizz\n"
  } else if (i % 3 !== 0 && i % 5 === 0) {
    result += "Buzz\n"
  } else if (i % 3 === 0 && i % 5 === 0) {
    result += "FizzBuzz\n"
  } else {
    result += `${i}\n`
  }
}
console.log(result)
```

## Performance Check

On performance check, solution 3 consistently took about 0.2s to run, compared to 5~8s for solution 1 and 2 with solution 2 being slightly faster.

One reason why solution 1 and 2 took significantly longer time than solution 1 to run seems to be the recursive calling of console.log method. And the different orders of control flow led to the tiny performance edge of solution 2 over solution 1 (this needs a bit more research).
