# Day 10: Handle Touch Events For Day 9 Challenge

Yesterday, I built a tiny project, [Swap Elements by Drag-and-Drop](/day9) which only handled mouse events. Today, I enhanced it by enabling it to handle touch events as well and refactored code to make it cleaner.

## Expected Output

::demo[]{filename=enable-touch-for-swap-elements-by-drag-and-drop.html}

## Code

### Handle Mouse Down and Touch Start

```js
const handleStart = (isTouchEvent = false) => {
  return (event) => {
    draggingEl = event.target

    draggingEl.style.color = "red"
    draggingEl.style.borderColor = "red"

    elementWidth = draggingEl.offsetWidth
    elementHeight = draggingEl.offsetHeight
    elementY = draggingEl.offsetTop

    if (isTouchEvent) {
      touch = event.changedTouches[0]
      moveHandler = handleMove(true)
      endHandler = handleEnd(true)
      clientX = touch.clientX
      clientY = touch.clientY
      document.addEventListener("touchmove", moveHandler)
      document.addEventListener("touchend", endHandler)
    } else {
      clientX = event.clientX
      clientY = event.clientY
      moveHandler = handleMove()
      endHandler = handleEnd()
      document.addEventListener("mousemove", moveHandler)
      document.addEventListener("mouseup", endHandler)
    }
  }
}
```

### Handle Mouse Move and Touch Move

```js
const handleMove = (isTouchEvent = false) => {
  return (event) => {
    if (!isDraggingStarted) { // only create placeholder once
      isDraggingStarted = true

      placeholder = createPlaceholder()
      configPlaceholder(placeholder, elementWidth, elementHeight)
      insertPlaceholder(draggingEl, placeholder)
    }

    draggingEl.style.position = "absolute"

    if (isTouchEvent) {
      touch = event.changedTouches[0]
      draggingEl.style.left = `${draggingEl.offsetLeft + touch.clientX - clientX}px`
      draggingEl.style.top = `${draggingEl.offsetTop + touch.clientY - clientY}px`
    } else {
      draggingEl.style.left = `${draggingEl.offsetLeft + event.clientX - clientX}px`
      draggingEl.style.top = `${draggingEl.offsetTop + event.clientY - clientY}px`
    }

    swapElements(
      items,
      draggingEl,
      elementY,
      placeholder
    )

    if (isTouchEvent) {
      touch = event.changedTouches[0]
      clientX = touch.clientX
      clientY = touch.clientY
    } else {
      clientX = event.clientX
      clientY = event.clientY
    }
  }
}
```

### Handle Mouse Up and Touch End

```js
const handleEnd = (isTouchEvent = false) => {
  return (event) => {
    if (isDraggingStarted) {
      draggingEl.style.removeProperty("top")
      draggingEl.style.removeProperty("left")
      draggingEl.style.removeProperty("position")

      // fix draggingEl at placeholder's current position
      draggingEl.parentNode.insertBefore(draggingEl, placeholder)

      placeholder && draggingEl.parentNode.removeChild(placeholder)
      placeholder = null

      isDraggingStarted = false
    }

    elementWidth = null
    elementHeight = null
    elementY = null
    clientX = null
    clientY = null
    touch = null

    draggingEl.style.removeProperty("color")
    draggingEl.style.removeProperty("border-color")

    draggingEl = null

    if (isTouchEvent) {
      document.removeEventListener("touchmove", moveHandler)
      document.removeEventListener("touchend", endHandler)
    } else {
      document.removeEventListener("mousemove", moveHandler)
      document.removeEventListener("mouseup", endHandler)
    }

    moveHandler = null
    endHandler = null
  }
}
```

### Attach Mouse Down and Touch Start Handlers

```js
Array.from(items).forEach(item => {
  item.addEventListener("mousedown", handleStart())
  item.addEventListener("touchstart", handleStart(true))
})
```
