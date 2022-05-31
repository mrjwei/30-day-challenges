---
title: "Web Components (Expanding List)"
---

# Day 15: Web Components (Expanding List)

Today, I studied the [Expanding List](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component) Web Components example from [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) and tried and built it myself.

## Playground

::demo[]{filename=expanding-list.html height=400}

## Code

### Javascript

```js
class ExpandingList extends HTMLUListElement {
  constructor() {
    super()

    const uls = this.querySelectorAll("ul")
    const lis = this.querySelectorAll("li")

    uls.forEach(ul => {
      ul.style.display = "none"
    })

    lis.forEach(li => {
      if (li.querySelectorAll("ul").length > 0) {
        li.classList.add("closed")
        const textNode = li.childNodes[0]
        const span = document.createElement("span")
        span.textContent = textNode.textContent
        span.style.cursor = "pointer"
        span.onclick = this.toggleListVisibility
        li.insertBefore(span, textNode)
        textNode.remove()
      }
    })
  }

  toggleListVisibility(event) {
    const listToToggle = event.target.nextElementSibling
    if (listToToggle.style.display === "block") {
      listToToggle.style.display = "none"
      event.target.parentNode.classList.add("closed")
    } else {
      listToToggle.style.display = "block"
      event.target.parentNode.classList.remove("closed")
    }
  }
}

customElements.define("expanding-list", ExpandingList, {extends: "ul"})
```

### HTML & CSS

```html
<ul is="expanding-list">
  <li>
    Fruits
    <ul>
      <li>Apple</li>
      <li>Orange</li>
      <li>
        Others
        <ul>
          <li>Watermelon</li>
          <li>Grape</li>
          <li>Banana</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Vegetables
    <ul>
      <li>Onion</li>
      <li>Potato</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>
```

```css
ul {
  list-style: none;
  width: 200px;
  margin: 20px auto;
}
li {
  position: relative;
  padding-left: 25px;
}
li::before {
  content: url(./minus.svg);
  display: block;
  position: absolute;
  line-height: 15px;
  left: 0;
  top: 0;
}
.closed::before {
  content: url(./plus.svg);
  top: calc(50% - 7.5px);
}
```
