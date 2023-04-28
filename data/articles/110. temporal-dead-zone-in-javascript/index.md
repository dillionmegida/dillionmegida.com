---
title: The Temporal Dead Zone in JavaScript, Simplified
date: "2023-04-28"
cover: "110-temporal-dead-zone.png"
pageDescription: "The Temporal Dead Zone, is a concept that applies to JavaScript variables. Here's what that means."
pageKeywords: "temporal dead zone, hoisting, let variables, const variables, var variables, block scope, function scope, global scope, variable declaration, variable initialization"
tags: ["javascript"]
video: https://youtu.be/Cad46WAHApY
---

The Temporal Dead Zone, abbreviated as **TDZ** is a concept that applies to JavaScript variables. What does this concept mean? I'll explain that in this article using examples.

The TDZ of a variable declared in your JavaScript code is the area where the variable is hoisted but inaccessible until it is initialized with a value. This concept applies to variables declared with `let` and `const` (but not `var`).

Let's see a code example:

```js
console.log(myName)
// undefined

var myName = "Dillion"

console.log(myName)
// Dillion
```

Here, we declare a variable called `myName` with a string value of "Dillion" (because that's my name 😁). Did you notice we try to access the variable even before it was declared in the code? At the first line, we execute `console.log(myName)`. But, we do not get an error. Instead, we get `undefined` logged to the console.

What happens here is that `myName` is hoisted. But, by using the `var` keyword, the variable is hoisted with a default value of `undefined`. When we try to access `myName` after the declaration line in the code has been executed, we now get "Dillion".

Let's say we used `let` here:

```js
console.log(myName)
// ReferenceError: Cannot access 'myName' before initialization

let myName = "Dillion"

console.log(myName)
```

Now we get an error: a reference error--**Cannot access 'myName' before initialization**. The error does not say "myName is not defined", which means the interpreter "knows" of a variable called "myName". But that variable does not have a default value, which makes it inaccessible. This is where the concept of **temporal dead zone** lies.

## Temporal Dead Zone in Global Scope

`myName` is declared in the global scope, therefore it is hoisted to the top of the global scope. The area between the top of the global scope and the line of declaration of the variable is the temporal dead zone. The variable is inaccessible in this zone

 <!-- Here's a little diagram to explain this: -->

<!-- ![]() -->

Here's what it looks like on the code:

```js
console.log(myName) // temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
let myName = "Dillion"
```

Attempting to access `myName` in this zone would throw "cannot access myName before initialization". `myName` is only accessible from the line it was initialized in the code:

<!-- ![]() -->

```js
console.log(myName) // temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
// temporal dead zone for myName
let myName = "Dillion" // now accessible
// now accessible
// now accessible
// now accessible
```

## Temporal Dead Zone in Function Scope

TDZ also applies in function scope. Let's see an example:

```js
function print() {
  console.log(myName)

  let myName = "Dillion"
}

print()

// ReferenceError: Cannot access 'myName' before initialization
```

Again here, we get a reference error: **Cannot access 'myName' before initialization**. We try to access `myName` before the line it was declared. Though `myName` is hoisted to the top of the local scope (since it is declared in a function), it remains inaccessible until the line where it is initialized is executed. The area where it is hoisted but not accessible is the temporal dead zone:

```js
function print() {
  // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  console.log(myName) // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  let myName = "Dillion"
}

print()
```

You can only access `myName` without errors after initialization:

```js
function print() {
  // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  console.log(myName) // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  let myName = "Dillion" // now accessible
}

print()
```

## Temporal Dead Zone in Block Scope

Unlike with `var`, variables declared with `let` and `const` have a block scope. A block is created with open and closed curly brackets: `{...}`.

You'd find blocks in `if`, `switch` and loop statements to name a few:

```js
if(condition) {
  // block
}

switch(expression) {
    // block
}

for (...) {
    // block
}
```

Declaring variables with `let` and `const` in these blocks would make those variables have a **block scope**. Such variables would not be accessible outside the block.

> Blocks also exist in functions since they have curly brackets, but the scope in them is better referred to as **function scope** or **local scope**.

`let` and `const` variables are also hoisted to the top of the block scope, but the temporal dead zone also applies. Let's see an example:

```js
{
  console.log(myName)

  let myName = "Dillion"
}

// ReferenceError: Cannot access 'myName' before initialization
```

We get the same reference error. `myName` is hoisted to the top of the block scope, but remains inaccessible until the variable is initialized with a value; the **temporal dead zone**:

```js

{
    // temporal dead zone for myName
  console.log(myName) // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  // temporal dead zone for myName
  let myName = "Dillion" // now accessible
  // now accessible
  // now accessible
}
```

After initialization, the variable becomes accessible.

---

I hope this post simplifies the temporal dead zone for you. Please share :)