---
title: "Web Components (Templates & Slots)"
---

# Day 17: Web Components (Templates & Slots)

Today, I learned how to use templates & slots in Web Components and built the [element-details example](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#a_more_involved_example) by myself.

Live demo can be found [here](https://mdn.github.io/web-components-examples/element-details/) (I striped all styles to focus on the concepts).

## Code

### HTML

```html
<h1>Element Details</h1>
<template id="template">
  <details>
    <summary>
      <<slot name="element-name">Element</slot>>
      <slot name="element-desc">Element Description</slot>
    </summary>
    <div>
      <h4>Attributes</h4>
      <slot name="attributes">Attributes</slot>
    </div>
  </details>
</template>
<element-details>
  <strong slot="element-name">div</strong>
  <i slot="element-desc">A container element that is usually used to wrap other elements.</i>
  <dl slot="attributes">
    <dt>style</dt>
    <dd>The style object of the element</dd>
  </dl>
</element-details>
```

### Javascript

```js
class ElementDetails extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: "open"})
    const template = document.querySelector("#template")
    const templateContent = template.content
    shadowRoot.appendChild(templateContent.cloneNode(true))
  }
}
customElements.define("element-details", ElementDetails)
```
