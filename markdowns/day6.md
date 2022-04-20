# Day 6: Bean Counting

## Expected Output

```js
console.log(countCharInStr("Kobe Bryant was an American basketball player.", "B")) // 4
console.log(countCharInStr("Kobe Bryant was an American basketball player.", "b")) // 4
console.log(countCharInStr("Kobe Bryant was an American basketball player.", "A")) // 8
```

## Code

### Solution 1

```js
function countCharInStr(str, char) {
  let count = 0
  for (let c of str) {
    // normalize cases of both characters internally to
    // to enhance usability as users do not have to
    // worry about case of character he/she passes to function
    if (c.toLowerCase() === char.toLowerCase()) {
      count = count + 1
    }
  }
  return count
}
```

### Solution 2

```js
function countCharInStr(str, char) {
  return Array.from(str).reduce((accCount, currentChar) => {
    if (currentChar.toLowerCase() === char.toLowerCase()) {
      accCount = accCount + 1
    }
    return accCount
  }, 0)
}
```

## Notes

- Benchmarking both solutions on [Perflink](https://perf.builder.io/), I found solution 1 outperformed solution 2 when the string passed as argument was short while solution 2 performed better when the string grew longer.

![perflink showing solution 1 outperforms solution 2 when string is short](/images/day6-perflink-1.png)
*solution 1 outperforms solution 2 when string is short*

![perflink showing solution 2 outperforms solution 1 when string grows longer](/images/day6-perflink-2.png)
*solution 2 outperforms solution 1 when string grows longer*

- Solution 1 seems a bit more readable than 2 but may vary among readers. If you are familiar with reduce function, solution 2 may look more intuitive.
- There are multiple ways to create an array from a string. Here I used `Array.from(str)` in solution 2, but `str.split("")` also works. Using [Perflink](https://perf.builder.io/), I found `Array.from(str)` seems to outperform `str.split("")` when string is short, while the latter beats the former as length of string grows.

![perflink showing Array.from(str) outperforms str.split("") when string is short](/images/day6-perflink-3.png)
*Array.from(str) outperforms str.split("") when string is short*

![perflink showing str.split("") outperforms Array.from(str) when string grows longer](/images/day6-perflink-4.png)
*str.split("") outperforms Array.from(str) when string grows longer*
