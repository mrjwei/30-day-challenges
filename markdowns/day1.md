# Day 1: Looping a Triangle

## Expected Output

```js
#
##
###
####
#####
######
#######
```

## Code

### Solution 1

```js
for (let i = 1; i <= 7; i++) {
  const str = "#".repeat(i)
  console.log(str)
}
```

### Solution 2

```js
let str = ""
for (let i = 1; i <= 7; i++) {
  str += "#".repeat(i)
  str += "\n"
}
console.log(str)
```

## Performance Check

Solution 1 took approximately 0.7s while solution 2 took about 0.2s to run at test. From performance persperctive, solution 2 seems like the winner while in terms of readability, solution 1 seems to have a slight edge.
