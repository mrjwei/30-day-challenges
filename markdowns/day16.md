---
title: "Web Components (Custom Square)"
---

# Day 16: Web Components (Custom Square)

Today, I learned life cycle callbacks of Web Components with the [Custom Square](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks) example from [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks) and tried and built it myself.

Live demo can be found [here](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)

## Code

### Javascript

```js
class CustomSquare extends HTMLElement {
  static get observedAttributes() {
    return ["edge", "color"]
  }

  constructor() {
    super()

    const shadow = this.attachShadow({mode: "open"})

    const div = document.createElement("div")
    const style = document.createElement("style")
    shadow.appendChild(style)
    shadow.appendChild(div)
  }

  connectedCallback() {
    console.log("custom square added to page")
    updateStyle(this)
  }

  disconnectedCallback() {
    console.log("custom square removed from page")
  }

  attributeChangedCallback(name, prevValue, newValue) {
    console.log("custom square element attributes changed")
    updateStyle(this)
  }
}

function updateStyle(element) {
  const shadow = element.shadowRoot
  shadow.querySelector("style").textContent = `
    div {
      width: ${element.getAttribute("edge")}px;
      height: ${element.getAttribute("edge")}px;
      background-color: ${element.getAttribute("color")};
    }
  `
}

customElements.define("custom-square", CustomSquare)

const addBtn = document.querySelector("#add")
const removeBtn = document.querySelector("#remove")
const updateBtn = document.querySelector("#update")

removeBtn.disabled = true
updateBtn.disabled = true

let square

addBtn.addEventListener("click", () => {
  square = document.createElement("custom-square")
  square.setAttribute("edge", "100")
  square.setAttribute("color", "red")
  document.body.appendChild(square)

  if (square.isConnected) {
    addBtn.disabled = true
    removeBtn.disabled = false
    updateBtn.disabled = false
  }
})

removeBtn.addEventListener("click", () => {
  square.remove()

  if (!square.isConnected) {
    addBtn.disabled = false
    removeBtn.disabled = true
    updateBtn.disabled = true
  }
})

updateBtn.addEventListener("click", () => {
  square.setAttribute("edge", "200")
  square.setAttribute("color", "blue")
})
```

### HTML

```html
<h1>Life Cycle Callbacks</h1>
<div style="margin-bottom: 20px;">
  <button id="add">Add</button>
  <button id="remove">Remove</button>
  <button id="update">Update Attributes</button>
</div>
```
