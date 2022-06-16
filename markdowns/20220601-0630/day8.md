---
title: "Todo App Tutorial: Backend (Add Prisma & Passport.js)"
---

# Day 8: Todo App Tutorial: Backend (Add Prisma & Passport.js)

Today, I did the following tasks:

- Added Prisma and passport.js to the backend of the todo app and created tutorial content for this step.
- Explored and played with the `crypto` module's `pbkdf2` method.
- Played with the `findRoute` method of the robot project in EJS book to try to understand it but still failed to get a comprehensive idea. I'll keep trying.

## Fixed a Tiny Problem Relating to Typescript

I'm using typescript for both frontend and backend of the todo app. A problem that trapped me today was typescript complaining `Cannot use "new" with an expression whose type lacks a call or construct signature` with the `passport-local` module.

Luckily, I solved it by referring to [this answer](https://stackoverflow.com/a/55797024). The cause seemed to be that the `Strategy` property of the default import has a constructor signature, rather than the default import itself.
