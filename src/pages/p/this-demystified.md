---
title: "Almighty this, Demystified"
date: "2020-03-28"
pageDescription: "this is an inherently (automatically) created variable at the creation of every function. In this article, you'll learn how it works in Javascript and what it references at every time it is called"
pageKeywords: "this, this in Javascript, call, bind, apply, arrow functions, arrow functions and this"
tags: ["javascript"]
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1585344783/images/blogs_cover/Almighty_gg2axf.png"
---

`this` is a popular misunderstood concept in Javascript as during usage, you cannot determine most of the time what it references. In this article, I hope to clear every confusion surrounding it.

---

`this` is an inherently (automatically) created variable at the creation of every function.

A quick guess at what `this` is, is the object calling the function which the `this` belongs to, but this is not always the case. We'll understand what this means as we progress with the article.

## The `window` object

The `window` object is the default reference of `this` except defined otherwise. Check it out by running the following:

```js
console.log(this)
```

When your type into any .js file and begin executing codes, a global function is ran, which is assumed to be `global()` or `main()`. This function is placed on the call stack followed by all other functions involved in the program. When all the codes are executed, the global function leaves the stack.

For example, the code block above would be interpreted (though, not exactly) as below when executed.

```js
function global() {
  console.log(this)
}
window.global()
```

The object executing the function `global()` is `window`. Hence, `this` at that point references `window`. Remember that `this` was automatically created when `global` was declared.

## Our own defined object

Let's create our own object with a method (function).

```js
console.log(this)
const obj = {
  name: "Object",
  print: function () {
    console.log(this)
  },
}
obj.print()
```

The expected outputs for the two console.log would be the contents of `window` and `obj`. It's `obj` because it is the object calling `print()`.

The above would be interpreted as:

```js
function global() {
  console.log(this)
  const obj = {
    name: "Object",
    print: function () {
      console.log(this)
    },
  }
  obj.print()
}
window.global()
```

Guess what `this` in `print` would refer to here:

```js
const obj = {
  name: "Object",
  print: function () {
    console.log(this)
  },
}
const printer = obj.print
printer()
```

If you guessed `obj`, you are wrong. Remember as stated earlier, `this` is determined by the object calling the function. As seen above, it being called directly, can be interpreted as `window.printer()`.

## What if there was no object calling the function _directly_?

This question can be interpreted as the following:

```js
console.log(this)
const obj = {
  name: "Object",
  print: function () {
    console.log(this)
    function print2() {
      console.log(this)
    }
    print2()
  },
}
obj.print()
```

The three outputs would be the contents of `window`, `obj` and `window`. Surpised, yeah?

Well, the object `obj` called the function `print()` but didn't _directly_ call the function `print2()`. Hence, `print2()` used the default, `window`

What you probably expected was that the `this` would be retained as `obj` from the beginning of `print()` to the end, but that's not the case.

## Retaining `this` all through the function

There are three methods of handling `this` all through the functions declared in an object.

1. Assigning `this` to a variable
2. Using `call`, `bind` or `apply`.
3. Using arrow functions

### 1. Assigning `this` to a variable

```js
let obj = {
  name: "Object",
  print: function () {
    const that = this
    function print2() {
      console.log(that)
    }
    print2()
  },
}
obj.print()
```

Now, the variable `that` will point to `this` which refers to the object `obj`.

This was the former way of retaining `this`. At the beginning of the function, we know that `this` is automatically declared, so we assign it to a variable `that` which would refer to `this` all through the object.

### 2. Using `call`, `bind` or `apply`

These methods are used in changing the scope of `this`. They work in different ways but with a similar purpose. We'd be looking at the `call` method for this article. An example usage is:

```js
let obj = {
  name: "Object",
  print: function () {
    function print2() {
      console.log(this)
    }
    print2.call(this)
  },
}
obj.print()
```

As seen above, `this` in `print2()` refers to the `window` object but `this` in `print()` refers to the object `obj`. `print2()` is called in the same scope as `obj`'s `this`. Using the `call` method of the `print2()` function, means, "Use the `this` of `print` for `print2()`". Hence, `print2()` uses `obj` as `this`.

**Side note:** Every function declaration is a "function object" combo. I'm preparing an article on that but what I'll leave you with is, functions are also objects. Which means properties and methods (like `call`) can be added or called on them. Such variables are only invoked as a function when parenthesis '()' is used on them.

Check out this article - [call, bind and apply in Javascript](https://thewebfor5.com/p/javascript/call-bind-apply-javascript) to learn about `bind` and `apply`.

### 3. Arrow Functions

There's more to arrow functions than the ease of creating functions (`() => ()`). In arrow functions, `this` is not automatically created. Every reference to `this` in arrow functions refers to what `this` initially was before that function was created. For example, using arrow functions in `obj`:

```js
let obj = {
  name: "Object",
  print: function () {
    const print2 = () => {
      console.log(this)
    }
    print2()
  },
}
obj.print()
```

If you tried this, you'll notice that `this` now references the object `obj` as the arrow function didn't create it's own.

#### What if `print` was also an arrow function?

Let's try that.

```js
let obj = {
  name: "Object",
  print: () => {
    console.log(this)
    const print2 = () => {
      console.log(this)
    }
    print2()
  },
}
obj.print()
```

The two expected outputs are `window` and `window`. Why? `print` being an arrow function didn't create it's own `this`, same thing with `print2`, so they used what `this` was before they were declared, which at both points was `window`.

And also, 🤣, the global function cannot be an arrow function. That's what happens at the background.

## Wrap up

I hope with this article, almighty `this` has become clearer and yeah, demystified. If there are any more confusions or something I'm missing out on, kindly reach out to me on twiiter - [@iamdillion](https://twitter.com/iamdillion).

If you learnt something from this, you could share.

Thanks for reading 😇
