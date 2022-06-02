---
title: "Swap Elements by Drag-and-Drop"
---

# Day 9: Swap Elements by Drag-and-Drop

Today, I broke away temporarily from *Eloquent Javascript* and explored ways to swap elements in an unordered list, for example, by dragging and dropping. This project is inspired by a great article on [HTML DOM](https://htmldom.dev/drag-and-drop-element-in-a-list/). I borrowed a few ideas from the article, but generally coded it in my own way.

## Demo

::demo[]{filename=swap-elements-by-drag-and-drop.html}

Source code can be found [here](https://github.com/mrjwei/swap-elements-by-drag-and-drop).

## Code

### HTML

```html
<ul>
  <li class="item">Dan</li>
  <li class="item">Jackson</li>
  <li class="item">Alice</li>
  <li class="item">Bob</li>
  <li class="item">Wayne</li>
</ul>
```

### CSS

```css
body {
  margin: 0;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
* {
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 16rem;
  position: relative;
}
.item {
  cursor: move;
  margin-bottom: 1rem;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 100%;
  color: grey;
  background-color: white;
  border: 2px solid grey;
}
.item:hover {
  color: red;
  border: 2px solid red;
}
.placeholder {
  background-color: #edf2f7;
  border: 2px dashed grey;
  margin-bottom: 1rem;
}
```

### Javascript

#### Utilities

```js
function createPlaceholder() {
  return document.createElement("li")
}

function configPlaceholder(placeholderEl, width, height) {
  placeholderEl.classList.add("placeholder")
  placeholderEl.style.width = `${width}px`
  placeholderEl.style.height = `${height}px`
}

function insertPlaceholder(draggingEl, placeholderEl) {
  draggingEl.parentNode.insertBefore(placeholderEl, draggingEl.nextSibling)
}

function swapElements(
  elements,
  draggingEl,
  draggingElInitOffsetTop,
  placeholderEl
) {
  Array.from(elements).forEach(element => {
    if (element !== draggingEl) {
      /**
       * if draggingEl overlaps with this element vertically,
       * swap this element with placeholder
       */
      if (element.offsetTop === draggingEl.offsetTop) {
        if (draggingEl.offsetTop < draggingElInitOffsetTop) { // dragging upwards
          draggingEl.parentNode.insertBefore(placeholderEl, element)
        } else {
          draggingEl.parentNode.insertBefore(element, placeholderEl)
        }
      }
    }
  })
}
```

#### Core Function

```js
function swapElementsByDragAndDrop() {
  const items = document.querySelectorAll(".item")
  let draggingEl
  let elementWidth
  let elementHeight
  let elementY
  let clientX
  let clientY
  let placeholder
  let isDraggingStarted = false

  const handleMouseDown = (event) => {
    draggingEl = event.target

    elementWidth = draggingEl.offsetWidth
    elementHeight = draggingEl.offsetHeight
    elementY = draggingEl.offsetTop
    clientX = event.clientX
    clientY = event.clientY

    draggingEl.style.color = "red"
    draggingEl.style.borderColor = "red"

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleMouseMove = (event) => {
    if (!isDraggingStarted) { // only create placeholder once
      isDraggingStarted = true

      placeholder = createPlaceholder()
      configPlaceholder(placeholder, elementWidth, elementHeight)
      insertPlaceholder(draggingEl, placeholder)
    }
    draggingEl.style.position = "absolute"
    draggingEl.style.left = `${draggingEl.offsetLeft + event.clientX - clientX}px`
    draggingEl.style.top = `${draggingEl.offsetTop + event.clientY - clientY}px`

    swapElements(
      items,
      draggingEl,
      elementY,
      placeholder
    )

    clientX = event.clientX
    clientY = event.clientY
  }

  const handleMouseUp = () => {
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

    /**
     * Falls back to styles specified in css and
     * hover styles apply properly.
     * Using:
     *   draggingEl.style.color = "grey"
     *   draggingEl.style.borderColor = "grey"
     * will override hover styles.
    */
    draggingEl.style.removeProperty("color")
    draggingEl.style.removeProperty("border-color")

    draggingEl = null

    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  Array.from(items).forEach(item => {
    item.addEventListener("mousedown", handleMouseDown)
  })
}
```

#### Call Core Function After Document Is Loaded

```js
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", swapElementsByDragAndDrop)
} else {
  swapElementsByDragAndDrop()
}
```

## Takeaways

- A key operation for swapping is the usage of `insertBefore`. But another option is to use `insertAdjacentElement` as [this article](https://htmldom.dev/insert-an-element-after-or-before-other-element/) suggests. For a more detailed description of this method, see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement).

- In cases where a handler (someHandler) depends on the result of an event (someEvent), it is both more readable and manageable to attach someHander within the code that handles someEvent, and then remove someHandler when the effect of someEvent is cancelled, like this:

```js
const handleMouseDown = (event) => {
  ...

  /** Mouse move and up events should only be listened
   *  when mouse down event is fired.
  */
  document.addEventListener("mousemove", handleMouseMove)
  document.addEventListener("mouseup", handleMouseUp)
}

const handleMouseUp = (event) => {
  ...

  /** Mouse move and up events should not be listened
   *  after mouse is up.
  */
  document.removeEventListener("mousemove", handleMouseMove)
  document.removeEventListener("mouseup", handleMouseUp)
}
```

For a more detailed explanation, check out [Attach event handlers inside other handlers](https://htmldom.dev/attach-event-handlers-inside-other-handlers/).

- The code above showed no animation and only applied different styles between mouse events statically. But I explored a couple of approaches to add simple animations to items. Here is an [example](https://github.com/mrjwei/swap-elements-by-drag-and-drop/tree/with-web-animation-api) using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). The key point is to asynchronously handle dependent variables' reset and dependent elements's removing like this:

```js
// In mouse up event handler
draggingElAnimation.finished
  .then(() => {
    // reset dependent variables and/or remove dependent elements
  })
```
