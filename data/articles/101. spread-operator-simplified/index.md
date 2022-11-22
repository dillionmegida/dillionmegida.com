---
title: "Spread Operator in JavaScript, Simplified"
date: "2022-11-22"
cover: "101-spread-operator.png"
pageDescription: "The spread operator allows you to spread an iterable collection into another collection and can be useful for various cases. Learn more in this article"
tags: ["javascript"]
video: https://www.youtube.com/watch?v=ksatclkx84s
---

The **Spread** operator, just like the **Rest** operator, is represented with three dots: `...`. The way you use the dots determines what operation--**spread** or **rest**--you want to carry out.

The `rest` operator is used to store the remaining of (the "rest of") some values in an object or array.

<!-- Learn more here: [Rest Operator Simplified](). -->

In this article, I'll simplify the `spread` operator using different examples.

## What is the Spread operator

The `spread` operator is used to unroll (to "spread", like butter on bread 😂) the individual elements of an iterable object or array (iterable collection), separated by a comma, into another collection.

![Spreading button on bread](https://media.giphy.com/media/TGv4Zf9WCzyYklAyH6/giphy.gif)

The syntax:

```js
...collection
```

Let's look at the different ways you can use the spread operator.

## Spread operator with arrays

With this operator, you can spread the values of an array into another array, especially useful for combining arrays together. Here's an example:

```js
const array1 = [1, 2, 3]
const array2 = [100, 200, 300]

const combined = [...array1, "hello", ...array2]

console.log(combined)
// [1, 2, 3, "hello, 100, 200, 300]
```

In the `combined` array, you can see the contents of the `array1` spread, with the value "hello" and the contents of the `array2` also spread. As you can see in the log, the values of this array are spread and separated by commas.

## Spread operator with objects

Just like arrays, you can also spread the properties of an object into another object. Here's an example:

```js
const info = {
  name: "Dillion",
  age: 100,
}

const fullInfo = {
  ...info,
  language: "JavaScript",
  stack: "frontend",
}

console.log(fullInfo)
// {
//   name: 'Dillion',
//   age: 100,
//   language: 'JavaScript',
//   stack: 'frontend'
// }
```

As you can see, we spread the `info` object (with the `name` and `age` properties) into the `fullInfo` object, and also add two properties: `language` and `stack`. The `fullInfo` object now contains `name`, `age`, `language`, and `stack`.

When spreading objects, you should also take note of overwrites.

### How overwriting works when spreading objects

Take a look at the following example:

```js
const info = {
  name: "Dillion",
  age: 100,
}

const fullInfo = {
  name: "Micheal",
  ...info,
  language: "JavaScript",
  stack: "frontend",
}
```

In this example, what do you think the `name` property in `fullInfo` would be?

...

If you guessed "Dillion", you are correct.

```js
console.log(fullInfo)
// {
//   name: 'Dillion',
//   age: 100,
//   language: 'JavaScript',
//   stack: 'frontend'
// }
```

As you may know, objects cannot have duplicate properties. This means the part of an object where you spread another object can either overwrite or be overwritten by an existing property.

In the example above, we have the `name` property with the value **Micheal**, and then we spread the `info` object. Since this spread comes after the `name` property, then the `name` property in the spread object, `info` overwrites the existing `name` property in the `fullInfo` object.

What about this example:

```js
const info = {
  name: "Dillion",
  age: 100,
}

const fullInfo = {
  ...info,
  name: "Micheal",
  language: "JavaScript",
  stack: "frontend",
}
```

Here, what do you think the `info` property of `fullInfo` would be? If you guessed "Micheal", you're right:

```js
console.log(fullInfo)
// {
//   name: 'Micheal',
//   age: 100,
//   language: 'JavaScript',
//   stack: 'frontend'
// }
```

In this example, the `name` property of `fullInfo` comes after the spread `info` object, so the `name` of `fulInfo` would overwrite the `name` coming from the `info` object.

## Spread operator with function arguments

The spread operator can also be used to spread arrays as function arguments. Let's see an example:

```js
function addNumbers(num1, num2, num3) {
  return num1 + num2 + num3
}

const numbers = [10, 20, 30]

const total = addNumbers(...numbers)

console.log(total)
// 60
```

The `numbers` array is spread, and its values become arguments for the `addNumbers` function, separated by commas.

## Wrap up

In this article, we've learned about the spread operator and seen how it allows you to spread an iterable collection (arrays and objects) into another collection.

It is also useful (and a shorter way) for duplicating collections without modifying the originals:

```js
const array = [1, 2, 3, 4, 5]
const clonedArray = [...array]

const object = {
  name: "Dillion",
  age: 100,
}
const clonedObject = { ...object }
```

If you enjoyed this article, please share :)
