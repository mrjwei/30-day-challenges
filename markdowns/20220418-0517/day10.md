---
title: "Handle Touch Events For Day 9 Challenge"
---

# Day 10: Handle Touch Events For Day 9 Challenge

Yesterday, I built a tiny project, [Swap Elements by Drag-and-Drop](/day9) which only handled mouse events. Today, I enhanced it by enabling it to handle touch events as well and refactored code to make it cleaner.

## Demo

::demo[]{filename=enable-touch-for-swap-elements-by-drag-and-drop.html}

Source code can be found [here](https://github.com/mrjwei/swap-elements-by-drag-and-drop).

## Code

### CSS

```css
.item {
  ...
  /* this line prevents items to scroll */
  touch-action: none;
}
```

### Javascript

#### Handle Mouse Down and Touch Start

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

#### Handle Mouse Move and Touch Move

```js
const handleMove = (isTouchEvent = false) => {
  return (event) => {
    if (!isDraggingStarted) {
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

#### Handle Mouse Up and Touch End

```js
const handleEnd = (isTouchEvent = false) => {
  return (event) => {
    if (isDraggingStarted) {
      draggingEl.style.removeProperty("top")
      draggingEl.style.removeProperty("left")
      draggingEl.style.removeProperty("position")

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

#### Attach Mouse Down and Touch Start Handlers

```js
Array.from(items).forEach(item => {
  item.addEventListener("mousedown", handleStart())
  item.addEventListener("touchstart", handleStart(true))
})
```

## Takeaways

- Touch events should be handled otherwise the demo does not work on mobile devices.
- Handling touch events is comparable handling mouse events, with some key differences, including:
  - There can be multiple touch points and thus multiple touch events fired simultaneously, as opposed to mouse which is assumed to be only one at a time by default.
  - The first step to handle touch events is to get a list of the active touch points. `event.changedTouches` does this for us.
- Browsers like Chrome make touch event handlers [passive](https://developer.chrome.com/blog/scrolling-intervention/) by default, which means scrolling is not interrupted during the handling of the touch event. But this is not what I want in this project where the draggable items should not scroll. I used the suggested `touch-action: none;` CSS style to the elements that should not scroll and solved the problem quite easily.
