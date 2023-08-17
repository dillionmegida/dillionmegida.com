---
title: The Concept of Short-Circuit Evaluation in JavaScript, Simplified
date: "2023-05-04"
cover: "111-short-circuit-evaluation.png"
pageDescription: "Short-Circuiting is a concept you'd find in many programming languages, including JavaScript. I'll explain how this applies to logical expressions in JavaScript in this article"
pageKeywords: "js, short-circuit, short-circuiting, programming, logical expressions, logical operators, boolean expressions, boolean, and, or, nullish operator"
tags: ["javascript"]
video: https://youtu.be/AhNUQ6Hn3qM
---

Short-Circuiting is a concept you'd find in many programming languages, including JavaScript. This mechanism applies when an interpreter is executing logical expressions, and skips the "irrelevant" parts of the expressions.

What do I mean by "irrelevant"? Let's examine this statement:

**"I am 30 years old, AND I am a singer"**

For this statement to be TRUE, I "have to be 30 years old", and not only that, I also "have to be a singer". In the case that:

* I am 30 years old, but not a singer or
* I am not 30 years old, but I'm a singer or
* I am neither 30 years old nor a singer

the whole statement evaluates to FALSE.

If an interpreter is to execute this statement, it first checks if "I am 30 years old" is correct. If it is, the interpreter cannot yet conclude that the whole expression is TRUE, because it doesn't know if the "I am a singer" part of the expression will be TRUE. In this case, "I am a singer" is a **relevant** part of the expression as it is a determining factor of the result.

But if the interpreter sees that "I am 30 years old" is incorrect, it would not need to check the "I am a singer" ipart. "I am a singer" becomes an **irrelevant** part of the expression because its result changes nothing. Whether "I am a singer" is TRUE or FALSE, the whole expression is FALSE because "I am **NOT** 30 years old". This is where short-circuiting happens.

Since the interpreter knows that the second part of the expression does not change the result, it skips it. The first expression returns FALSE, and the interpreter halts the execution of the whole expression and returns FALSE.

This example is the case of the **AND** logical operator. Short-Circuiting also applies to the **OR** and **Nullish** logical operators.

## Short-circuiting with the AND operator

The **AND** `&&` operator evaluates expressions from left to right, and returns the right operand if the left operand evaluates
 to `true`. If used with many operands, and any of the operands are `false`, this operator would return the **first falsy** value. Let's see an example:

```js
const expression = 10 > 5 && "dillion"

console.log(expression)
// "dillion"
```

In this example, we have an expression that uses the **AND** operator. The two operands here are `10 > 5` and `"dillion"`. The first operand evaluates to `true`, so the operator moves to the second operand (from left to right) and returns it. That's why we have the result of `expression` as "dillion". Let's see an example with the operator used multiple times:

```js
function getWeather() {
  console.log("It's really cold today")
  return 0
}

function sum(a, b) {
  console.log(`Summing ${a} and ${b}`)
  return a + b
}

const expression = 10 > 5 && "dillion"
  && getWeather() && sum(2, 5)

console.log(expression)

// It's really cold today
// 0
```

Here, we used the operator three times with the operands `10 > 5`, "dillion", `isItSunny()`, and `sum(2, 5)`. Here's how this expression is executed:

* the first check is `10 > 5`--this evaluates to `true`
* from left to right, the operator checks `"dillion"`--this evaluates to `true`
* then the operator checks `getWeather()`--this function logs "It's really cold today" and returns `0` (falsy value)
* **short-circuiting** happens as the operator finds the first **falsy** value, and the operator returns this value

Due to short-circuiting, the `sum(2, 5)` expression is not executed (that's why "Summing..." is not logged). It does not matter what value this expression returns, the `&&` operator has already found the first **falsy** value, so it doesn't continue checking the boolean expression.

## Short-circuiting with the OR operator

The **OR** `||` operator evaluates expressions from left to right, and returns the right operand if the left evaluates to `false`. In contrast to AND, when used with many operands, this operator would return the first **truthy** value if any of the operands are `true`. Let's see an example:

```js
function sum(a, b) {
  console.log(`Summing ${a} and ${b}`)
  return a + b
}

const expression = "dillion" || sum(2, 5)

console.log(expression)
// "dillion"
```

We have two operands here: `"dillion"` and `sum(2, 5)`. Using the OR operator here, "dillion" is returned because it is a `truthy` value. Short-circuiting also happens here. `sum(2, 5)` is not executed because the value of this expression does not change the fact that the OR operator has already found its first `truthy` value.

Let's see another example using this operator multiple times:

```js
function sum(a, b) {
  console.log(`Summing ${a} and ${b}`)
  return a + b
}

const exp = 2 > 5 || "" || sum(5, 25) || 5 ** 1000000000

console.log(exp)

// Summing 5 and 25
// 30
```

Here, we used the operator three times with the operands `2 > 5`, `""`, `sum(5, 25)` and `5 ** 1000000000`. Here's how this expression is executed:

* the first check is `2 > 5`--this evaluates to `false`
* from left to right, the operator checks `""`--this evaluates to `false` (empty string)
* then the operator evaluates `sum(5, 25)`--this function logs "Summing 5 and 25" then returns 30 (truthy value)
* **short-circuiting** happens as the operator finds the first **truthy** value, and the operator returns this value (30)

Due to short-circuiting here, `5 ** 1000000000` is not executed. It does not matter what this expression evaluates to, the OR operator has already found a `true` candidate. As you would see here, this saves some time and resources executing `5 ** 1000000000`. Short-circuiting is like "don't run this expression if you do not NEED to".

## Short-circuiting with the Nullish operator

How does short-circuiting also work here?

The **OR** `||` operator evaluates expressions from left to right and returns the right operand if the left operand evaluates to a nullish value. Nullish values are `null` and `undefined`. When used with many operands, this operator would return the first **non-nullish** value if there are any. Let's see an example:

```js
let language

const expression = language ?? "javascript"

console.log(expression)
// "javascript"
```

We have two expressions here: `language` and `"javascript"`. The operator checks the first operand, which evaluates to `undefined`. The operator then returns the second operand.

Let's see another example using many operands:

```js
const obj = {
  name: "Dillion"
}

function getWeather() {
  console.log(`Getting weather`)
  return null
}

function sum(a, b) {
  console.log(`Summing ${a} and ${b}`)
  return a + b
}

const exp = obj.age ?? getWeather() ?? false ?? sum(10, 20)

console.log(exp)

// Getting weather
// false 
```

Here, we used the operator three times with the operands `obj.age`, `getWeather()`, `false`, and `sum(10, 20)`. Here's how this expression is executed:

* the first check is `obj.age`--this evaluates to `undefined` (there's no `age` property in `obj`)
* from left to right, the operator checks `getWeather`--this function logs "Getting weather" then returns `null`
* then the operator evaluates `false`--this is `false`, but not a nullish value
* **short-circuiting** happens as the operator finds the first **non-nullish** value, and the operator returns this value (`false`)

Due to short-circuiting as you would see here, the last operand `sum(10, 20)` is not evaluated, because it's irrelevant--it does not change the result. The nullish operator was looking for the first non-nullish value and it found it already, so the value of `sum(10, 20)` does not matter.

## Wrap Up

As you have seen in the examples in this article, short-circuiting is a concept where the interpreter ignores (or skips) parts of an expression that do not change the already found result. This saves execution time, and resources. The main idea is "there's no need to execute this expression; we already found our "unchangeable" result".

Short-circuiting applies to logical expressions which involve logical operators AND, OR, and Nullish as we have seen in this article.

If you enjoyed this piece, please share it with others :)