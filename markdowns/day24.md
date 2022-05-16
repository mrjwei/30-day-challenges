---
title: "Handy Todo: A Truly Handy App to Manage Your Life (Auth0)"
---

# Day 24: Handy Todo: A Truly Handy App to Manage Your Life (Auth0)

Today, I did extensive research on Auth0 to explore its Management API, Actions and so on.

## Auth0 Management API

An important takeaway is that proper permissions must be set in order for requests to work. Otherwise, `401 Unauthorized` error will be thrown and you cannot get anything back from the API.

![auth0 management api permissions](/images/day24-permissions.png)

## Actions

Actions can be a powerful feature, especially in my case where I want to create a user record in my own database when a user is registered on Auth0. For example, I can do somthing like this to achieve that.

```js
const axios = require("axios");

exports.onExecutePostUserRegistration = async (event) => {
  const {id, name} = event.user
  await axios.get(MY_BACKEND_API_URL, {id, name})
};
```
