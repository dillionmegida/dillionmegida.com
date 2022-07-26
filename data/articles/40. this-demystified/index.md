---
title: "Almighty this, Demystified"
date: "2020-03-28"
pageDescription: "this is an inherently (automatically) created variable at the creation of every function. In this article, you'll learn how it works in Javascript and what it references at every time it is called"
pageKeywords: "this, this in Javascript, call, bind, apply, arrow functions, arrow functions and this"
tags: ["javascript"]
cover: "40-this-demystified.png"
video: "https://youtu.be/MgOK_DwJqTM"
---

`this` is a popular misunderstood concept in Javascript as during usage, you cannot determine most of the time what it references. In this article, I hope to clear every confusion surrounding it.

---

`this` is an inherently (automatically) created variable at the creation of every function.

The quickest way to identify what `this` references in a function, is the object calling that function. i.e:

```js
obj.func()
```

The `this` in the function `func` declaration, is the object `obj`.

However, this is not always the case. We'll understand what this means as we progress with the article.

## The `window` object

The `window` object is the default reference of `this` except defined otherwise. Check it out by running the following:

```js
console.log(this)
// Window {...}
```

In executing JavaScript codes, a global function is ran, which is assumed to be `global()` or `main()`. This function is placed on the call stack followed by all other functions invoked in the program. When all the codes are executed, the global function leaves the stack.

For example, the code block above would be interpreted in a similar way to the below:

```js
function global() {
  // this, automatically created
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
  print: function() {
    console.log(this)
  },
}

obj.print()
```

The result of both logs are the objects `window` and `obj`. It's `obj` because it is the object calling `print()` (**obj**.print()) just as `window` called `global()`.

The above can be interpreted as:

```js
function global() {
  // this automatically created
  console.log(this)

  const obj = {
    name: "Object",
    print: function() {
      // this, automatically created
      console.log(this)
    },
  }

  obj.print()
}

window.global()
```

In the following code, guess what `this` in the `print` function would refer to here:

```js
const obj = {
  name: "Object",
  print: function() {
    console.log(this)
  },
}

const printer = obj.print

printer()
```

If you guessed `obj`, you are wrong. Remember as stated earlier, `this` is determined by the object calling the function. As seen above, `printer` is called directly, which can be interpreted as `window.printer()`.

## What if there was no object calling the function _directly_?

Here's a codeblock to clarify what I mean by this question:

```js
console.log(this)

const obj = {
  name: "Object",
  print: function() {
    console.log(this)

    function print2() {
      console.log(this)
    }

    print2()
  },
}

obj.print()
```

The result of the three logs will be the object `window`, `obj` and `window`. Surpised, yeah?

Well, the object `obj` called the function `print()` but didn't _directly_ call the function `print2()`. Hence, `print2()` used the default, `window`

What you probably expected was that the `this` would be retained as `obj` from the beginning of `print()` to the end, but that's not the case.

## What if you wanted to retain `this` in a function?

There are three methods of preserving the value of `this` all through the functions declared in an object.

1. Assigning `this` to a variable
2. Using `call`, `bind` or `apply`.
3. Using arrow functions

### 1. Assigning `this` to a variable

```js
let obj = {
  name: "Object",
  print: function() {
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

At the beginning of the function, we know that `this` is automatically declared, so we assign it to a variable `that` which would refer to `this` all through the object.

This was the former way of retaining `this` until new methods came in.

### 2. Using `call`, `bind` or `apply`

These methods are used in changing the scope of `this`. They work in different ways but with a similar purpose. We'd be looking at the `call` method for this article. An example usage is:

```js
let obj = {
  name: "Object",
  print: function() {
    function print2() {
      console.log(this)
    }

    print2.call(this)
  },
}
obj.print()
```

As seen above, `this` in `print2()` would point to the `window` object if there was no object directly calling. However, the `this` in `print()` refers to the object `obj`. `print2()` is called in the same scope as `obj`'s `this`. Using the `call` method of the `print2()` function, means, "Use the `this` of `print` for `print2`". Hence, `print2()` uses `obj` as `this`.

**Side note:** Every function declaration is a "function object" combo, i.e functions are also objects ([more details](https://www.freecodecamp.org/news/how-javascript-implements-oop#objectfunctioncombination)). This means properties and methods (like `call`) can be added or called on them. Such variables are only invoked as a function when parenthesis '()' is used on them.

Check out this article - [call, bind and apply in Javascript](/p/call-bind-apply-javascript) to learn about `bind` and `apply`.

### 3. Arrow Functions

There's more to arrow functions than the ease of creating functions (`() => ()`). In arrow functions, `this` is not automatically created. Every reference to `this` in arrow functions refers to what `this` initially was before that function was declared. For example, using arrow functions in `obj`:

```js
let obj = {
  name: "Object",
  print: function() {
    const print2 = () => {
      // no automatic this here
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

The two results are the objects `window` and `window`. Why? `print` being an arrow function didn't create it's own `this`, same thing with `print2`, so they used what `this` was before they were declared, which at both points was `window`.

And also, the global function cannot be an arrow function. That's what happens at the background. So there would also be a default `this` if there are no other `this`es.

## Wrap up

I hope with this article, almighty `this` has become clearer and demystified. If there are any more confusions or something I'm missing out on, kindly reach out to me on twiiter - [@iamdillion](https://twitter.com/iamdillion).

If you learnt something from this, you could share.

Thanks for reading 😇
