---
title: "Todo App Tutorial: New Features"
---

# Day 14: Todo App Tutorial: New Features

Today, I added serveral new fields to the todo model on the backend and adapted frontend to the changes. In specific,

- Now, users can mark a todo as important.
- Now, users can create a new todo without putting it into any list.
- Now, users can set due date and time for a todo (in-progress).

And I created relevant content of the step for the tutorial.

## What I Learned Today

I used to wonder why bother setting `type="button"` for a `button` element. But today I understood it by running into a problem directly related to this and fixing it.

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type), `type` specifies **the default behavior of the button and the `submit` type is the default for a button in a form**. This means if a button in a form does not have the `type` attribute set, it will be treated as a submit button. This results in unexpected behaviour of the button and was the problem I got today.

By setting `type="button"`, I tell the browser to treat it as a normal button and not a submit button, which solved my problem.