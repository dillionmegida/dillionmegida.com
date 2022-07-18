---
title: "switch statement in JavaScript explained"
date: "2022-07-18"
cover: "96-switch-statement.png"
pageDescription: "switch statements are used to create conditional statements in JavaScript which specify different cases that will be run when the specified condition is met"
pageKeywords: "javascript, if, else if, conditionals, switch statements, switch"
tags: ["javascript"]
---

I made a previous post on [if statements explained](/p/if-statements) where I explained what **conditionals** are in JavaScript. Do check it out to get the best of this article on switch statements.

Not everything you create in applications is a direct flow. Sometimes, the flow changes, and this depends on different conditions.

With conditional statements, you execute some code if some conditions are met, and if they are not met, you execute some other code.

As mentioned in the referenced article above, the two ways for creating conditional statements in JavaScript are `if` and `switch` statements.

## switch statements

`switch` statements allow you to "switch between" a set of codes to execute depending on the specified conditions. I'm going to use the example from the referenced article above, for this article also:

> "If you pass 70 score in your exams, I will buy you a bicycle. If you don't, but you pass 50, I will buy you a toy car. And if you don't meet 50, I'll buy you a stick sweet"

There are three things that can happen in the statement above, but since they are based on conditions, they cannot happen together. One of them may happen if the condition is met.

This is how to use `switch` statements for this scenario:

```js
switch(score) {
    case "pass 70":
      buy a bicycle
      break;

    case "pass 50":
      buy a toy car
      break;

    case "doesn't pass 50":
      buy a stick sweet
      break;
}
```

The `switch` statement takes in an expression on which conditions would be built upon. In this case, the expression is the score value.

In the `switch` statement, you create different `cases` (which are conditions). Starting from the top, if any of the condition is met for the score, the code for that case will be executed.

The `break` keyword is important because, without it, JavaScript continues checking other cases down the `switch` statements and if they are met, the code will also be executed. `break` is a way to say "since this case has passed, do not worry about the other cases".

Just like the `else` block in `if statements`, `switch` statements also have the `default` block which allows you to specify a code that will run if no case is executed:

```js
switch(score) {
    case "pass 70":
      buy a bicycle
      break;

    case "pass 50":
      buy a toy car
      break;

    default:
      buy a stick sweet
}
```

By using `default`, if none of the first two cases pass, the code in the `default` block "buy a stick sweet" will be run. This part of switch statements is optional, but it's usually recommended to run as a fallback if no other case works.

## Real JavaScript examples

Here's a valid JavaScript example if `break` is not included:

```js
const score = 80

switch (true) {
  case score > 70:
    console.log("buy a bicycle")

    case score > 50:
      console.log("buy a toy car")

    default:
      console.log("buy a stick sweet")
}

// buy a bicycle
// buy a toy car
// buy a stick sweet
```

Without the breaks, you can see that everything is run because the switch keeps checking from the top; `score  > 70` and `score > 50` conditions passed, and the `default` block also runs.

I'm using `switch(true)` because the cases use the `score` variable directly. Here is an example where the cases depend on the argument:

```js
const score = 80

switch (score) {
  case 70:
    console.log("The score is 70")

  case 80:
    console.log("The score is 80")

  default:
    console.log("The score is not 80")
}

// The score is 80
// The score is not 80
```

In this `switch` statement, you can see the expression `score` passed to the `switch` statement.

Using the `case`s, we defined conditions where the `score` is 80 or 70. Without the `break` keyword, the `70` condition passes and the `default` case is also run.

## Wrap up

`if` and `switch` statements are used to run code conditionally. With `switch` statements, there are different cases that specify conditions and code that will be run if the conditions are met. The `default` block, if specified, is run if none of the other cases are executed.
