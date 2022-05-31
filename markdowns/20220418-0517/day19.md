---
title: "Tagged Template"
---

# Day 19: Tagged Template

Tagged template is widely used and I have been curious how and why it is used. Today, I learned it and tried to emulate the tagging implementation of `styled-components`.

## Output

![tagged template used in styled-components](/images/day19-tagged-template.png)

## Code

```js
function StyledComponents() {}

["p", "button"].forEach(tag => {
  StyledComponents.prototype[tag] = (strings, ...expressions) => {
    return (props, ...children) => {
      let style = ""
      strings.forEach((string, index) => {
        style += string
        if (expressions[index]) {
          style += expressions[index](props)
        }
      })
      const element = document.createElement(tag)
      element.setAttribute("style", style)
      element.append(...children)
      return element
    }
  }
})

const styled = new StyledComponents()

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 2em;
  margin-top: 1rem;
`
const parent = document.querySelector("div")
const strong = document.createElement("strong")
const i = document.createElement("i")
i.textContent = "Click Me"
strong.textContent = "Important "
/**
 * In JSX, `Button` should look like
 * `<Button primary><strong>Important </strong><i>Click Me</i></Button>`
*/
parent.appendChild(Button({primary: true}, strong, i))
```

## Notes

1. Tagged templates can be seen used in other packages as well, such as `graphql-tag`.
2. By building my own version of `styled-components`, I also learned a lot about Javascript `prototype`. For example, I set the `(strings, ...expressions) => {...}` function on *prototype* properties instead of *instance* properties. This is because I want all instances of `StyledComponents` to share the properties (i.e. to be able to do `styled.p`, `styled.button` etc.). I could have achieved this by doing something like,

```js
class StyledComponents {
  constructor() {
    ["p", "button"].forEach(tag => {
      this[tag] = (strings, ...expressions) => {
        return (props, ...children) => {
          // code omitted
        }
      }
    })
  }
}
```

But this is less efficient because the constructor runs every time an instance is created even though I want those properties to be setup only once.
