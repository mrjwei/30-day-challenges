# Day 3: Chessboard

## Expected Output

```js
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
```

## Code

```js
const createRowArr = (size, charAtOddIndex, charAtEvenIndex) => {
  return Array.from(Array(size), (_, i) => i % 2 === 0 ? charAtEvenIndex : charAtOddIndex)
}
const createRowPattern = (rowArr) => {
  return rowArr.join("")
}

const createGridArr = (rowPatternAtOddIndex, rowPatternAtEvenIndex, size) => {
  return Array.from(Array(size), (_, i) => i % 2 === 0 ? rowPatternAtEvenIndex : rowPatternAtOddIndex)
}
const createGridPattern = (gridArr) => {
  return gridArr.join("\n")
}

const size = 8

const rowArr1 = createRowArr(size, "#", " ")
const rowArr2 = createRowArr(size, " ", "#")
const rowPattern1 = createRowPattern(rowArr1)
const rowPattern2 = createRowPattern(rowArr2)
const gridArr = createGridArr(rowPattern1, rowPattern2, size)
const gridPattern = createGridPattern(gridArr)

console.log(gridPattern)
```

## Notes

- You might think that rowArr2 can be obtained by rowArr1.reverse(). But it works only when size is an even number.
- Constructing and outputting the whole grid pattern, rather than doing it line by line, boosts performance and is more readable.
