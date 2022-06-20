---
title: "Todo App Tutorial: Frontend (Auth & Session)"
---

# Day 11: Todo App Tutorial: Frontend (Auth & Session)

Today, I added authentication and session feature to the frontend of the todo app. By referring to [this example](https://reactrouter.com/docs/en/v6/examples/auth) from [React Router v6](https://reactrouter.com/), I built protected routes, persisted session and tested pre- and post-login behaviours. A major progress.

## Things Learned Today

- The `FormData` API makes it easier to work with forms by eliminating the need for feild states and change functions.
- `Outlet` is a new feature of React Router v6 but it was a bit hard to figure out how it works for me until I found [this amazing post](https://www.robinwieruch.de/react-router-private-routes/). This feature makes it easier and cleaner to wrap multiple private routes with protecting component.