---
title: "My Own Loop"
---

# Day 22: My Own Loop

## Expected Output

```js
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
```

## Code

```js
const loop = (val, testFunc, updateFunc, bodyFunc) => {
  while (testFunc(val)) {
    bodyFunc(val)
    val = updateFunc(val)
  }
}
```
