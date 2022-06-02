---
title: "Deep Comparison"
---

# Day 18: Deep Comparison

## Expected Output

```js
let obj = { here: { is: "an" }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }))
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))
// → true
```

## Code

### Solution 1

This is the first solution that I came up with. The global `equal` variable seems a bit annoying but the code works.

```js
let equal = true

const deepEqual = (val1, val2) => {
  if ([val1, val2].every((val) => typeof val !== "object")) {
    if (val1 !== val2) {
      equal = false
    }
    return equal
  }
  if (
    [val1, val2].some((val) => typeof val === "object") &&
    [val1, val2].some((val) => typeof val !== "object")
  ) {
    equal = false
    return equal
  }

  const val1Keys = Object.keys(val1)
  const val2Keys = Object.keys(val2)
  if (val1Keys.length !== val2Keys.length) {
    equal = false
    return equal
  }
  for (let key of val1Keys) {
    if (!(key in val2)) {
      equal = false
      return equal
    }
    deepEqual(val1[key], val2[key])
  }
  return equal
}
```

### Solution 2

Wrapping the logic in a class and making the class callable result in a solution that is more readable and reusable. The concept is the same as solution 1 though.

```js
class DeepEqual {
  constructor() {
    this.equal = true
    return this._call.bind(this)
  }

  _call(val1, val2) {
    if ([val1, val2].every((val) => typeof val !== "object")) {
      if (val1 !== val2) {
        this.equal = false
      }
      return this.equal
    }
    if (
      [val1, val2].some((val) => typeof val === "object") &&
      [val1, val2].some((val) => typeof val !== "object")
    ) {
      this.equal = false
      return this.equal
    }

    const val1Keys = Object.keys(val1)
    const val2Keys = Object.keys(val2)
    if (val1Keys.length !== val2Keys.length) {
      this.equal = false
      return this.equal
    }
    for (let key of val1Keys) {
      if (!(key in val2)) {
        this.equal = false
        return this.equal
      }
      this._call(val1[key], val2[key])
    }
    return this.equal
  }
}
```

In this case, I first create an instance of `DeepEqual` and assign it to a variable, `deepEqual`. This way, I can perform the deep comparison by calling `deepEqual(val1, val2)`.
