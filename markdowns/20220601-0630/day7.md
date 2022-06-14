---
title: "EJS Book: A Robot Project (Part2)"
---

# Day 7: EJS Book: A Robot Project (Part2)

I kept working on the robot project of the EJS book today. Last time, I wrote all the code and tested everything out but found a couple of concepts hard to internalize.

This time, I wrote all the code again, found some of the ideas that I felt hard to understand more straightforward. But the `findRoute` function stays as a challenge and I will play with it a bit more.

## Key Takeaways So Far

### Choices For Variable Names Could Have Been Better

The variable `place` is used for multiple things such as current place of robot, current place of parcel, destination and so on. And variables like `destination` and `address` are also used to refer to a particular place. Also, `parcels` are used in different cases.

I find it hard to track which variable refers to which value along the way. So I opted for my own version of more explicit variable names such as `robotCurrentPlace`, `robotNextPlace`, `parcelAddress`, `parcelsToDeliver` and so on.

### Comments Are Desired

While the author did a great job to explain complex ideas behind code snippets, I would still appreciated it if some comments are added to clear things further.

This is one of the cases where I feel the importance of proper comments. I'll be careful about this in my own practice.
