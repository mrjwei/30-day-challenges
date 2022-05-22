---
title: "Handy Todo (Perf Tuning) + CSS Loading Animation"
---

# Day 29: Handy Todo (Perf Tuning) + CSS Loading Animation

Today, I did the following tasks.

- Researched methods for performance optimization of my **todo app**. My options include API redesign to allow fetching sections of data, migrating to microservices and using caching. Currently, the app looks like this (minimizzed styles to focus on features):

![handy todo app: a list](/images/day29-list.png#float)
![handy todo app: lists](/images/day29-lists.png#float)
![handy todo app: edit todo](/images/day29-edit-todo.png#float)
![handy todo app: add todo](/images/day29-add-todo.png#float)
![handy todo app: add list](/images/day29-add-list.png#float)
![handy todo app: settings](/images/day29-settings.png#float)

- Learned and made a simple loading animation in CSS.
- Learned CacheStorage API on MDN.

## CSS Loading Animation

Inspired by [this project](https://projects.lukehaas.me/css-loaders/), I tried and build a very basic loading animation myself.

### Demo

::demo[]{filename=css-loading-animation.html height=200}

### Code

```html
<div class="loader"></div>
```

```css
.loader {
  width: 100px;
  height: 100px;
  /* background: pink; */
  border-radius: 50%;
  border-top: 6px solid #f2e1e4;
  border-right: 6px solid #f2e1e4;
  border-bottom: 6px solid #f2e1e4;
  border-left: 6px solid red;
  animation: rotation 1.1s infinite linear;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

There are many other ideas on loading animations and I would try a few others out in the following days.
