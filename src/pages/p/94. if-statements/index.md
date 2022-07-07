---
title: "if...else-if...else in JavaScript explained"
date: "2022-07-07"
cover: "94-if-statements.png"
pageDescription: "Understand conditional statements in JavaScript, using the if and else if"
pageKeywords: "javascript, if, else if, conditionals"
tags: ["javascript"]
---

"If you pass 70 score in your exams, I will buy you a bicycle. If you don't, but you pass 50, I will buy you a toy car. And if you don't meet 50, I'll buy you a stick sweet"

When building applications, there are times you want to do things "if something happens".

These are called **conditionals**.

Not everything is one direct flow. Sometimes, you create conditional statements where a piece of code is executed if some conditions are met.

In JavaScript, you can create conditional statements using `if` and `switch` statements. In this article, we'll look at the `if` statements.

## If statements

Back to the paragraph at the beginning,

> "If you pass 70 score in your exams, I will buy you a bicycle. If you don't, but you pass 50, I will buy you a toy car. And if you don't meet 50, I'll buy you a stick sweet"

This is a conditional statement. There are three things that can happen, but all of them cannot happen together.

Using `if` statements, what you get is this:

```txt
if(pass 70 score) {
    buy a bicycle
} else if(pass 50 score) {
    buy a toy car
} else if(doesn't pass 50 score) {
    buy a stick sweet
}
```

`else` is used to create chained `if` statements. "If the first if condition is not `true` (that is, is not met), then, you create another `if` statement with `else`.

In the last statement, I also used `else if`. However, you can replace that with just `else` like this:

```txt
if(pass 70 score) {
    buy a bicycle
} else if(pass 50 score) {
    buy a toy car
} else {
    buy a stick sweet
}
```

The reason why `else` will work in this case is that the score can only be three things based on the `if` statements. It can either be more than 70, more than 50, or less than 50.

Therefore, you do not have to create another `if` statement like this `else if(doesn't pass 50 score)`.

Using only `else` is just a way of saying "if every of the above ifs at false, then do this". Think of it as an optional statement (you don't have to use it) but also a default statement that is executed if nothing else executes in an `if` structure.

`else if` is also optional. You can do only this:

```txt
play football

if(pass 70 score) {
    buy a bicycle
}

eat food
```

"plat football" runs. If pass is more than 70, "buy a bicycle" runs, else, it doesn't. "eat food" also runs.

Now let's look at a code example:

```js
const number = 45

if(number >=60) {
 console.log("number is greater than or equal to 60")
} else if (number >= 46) {
    console.log("number is greater than or equal to 46")
} else if (number >=40) {
    console.log("number is greater than or equal to 40")
} else {
    console.log("number is less than 40")
}
```

When you run the above, you get "number is greater than or equal to 40" printed. This result is because the first `if` condition returns `false` (`number` is not greater than or equal to 60), the second also returns `false` (`number` is not greater than or equal to 46) but the third if statement passes and returns `true` (`number` is greater than or equal to 40).

The `else` statement is not executed because one of the previous `if` statements has already passed.

## Wrap up

`if` statements are used to run code conditionally. When a condition is met, the specified code is executed. If that condition is not met, other conditions are checked using `else if`s. And the final `else`, if specified, is run if the previous `if` statements all return `false.

