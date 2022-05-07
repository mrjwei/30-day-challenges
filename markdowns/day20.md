---
title: "Javascript Prototype (Part 1)"
---

# Day 20: Javascript Prototype (Part 1)

As the first part of my deep-diving into the concept of `prototype`, today I focused on how prototype can be read, assigned and compared. And I learned the idea of `prototype chain`.

## Code

This is the code I wrote to explore `prototype`.

```js
const food = {
  name: "apple"
}

const food2 = function() {
  this.name = "apple"
}

// o's prototype is food.
const o = Object.create(food)
// o2's prototype is food's prototype which is Object.prototype
const o2 = Object.create(Object.getPrototypeOf(food))
// o3's prototype is the prototype property of food2
const o3 = new food2()

/**
 * Get {} and has `name: "apple"` in [[Prototype]].
*/
console.log(o)
/**
 * Get {} and does not have `name: "apple"` in [[Prototype]].
*/
console.log(o2)
/**
 * Get {name: "apple"}..
*/
console.log(o3)

/**
 * All get true.
*/
console.log(Object.getPrototypeOf(o) === food)
console.log(Object.getPrototypeOf(o2) === Object.prototype)
console.log(Object.getPrototypeOf(o3) === food2.prototype)
```

## Takeaways

- `Object.create(somePrototype)` creates an object with its prototype set to `somePrototype`.
- An object's prototype is, if not specified otherwise, Object.prototype.
- A function's prototype is, if not specified otherwise, Function.prototype.
- An object created with `new Foo` has a prototype equal to `Foo.prototype`. `Foo.prototype` is not `Object.getPrototypeOf(Foo)`. The former is a property of `new Foo` while the latter is THE prototype of `Foo`.
