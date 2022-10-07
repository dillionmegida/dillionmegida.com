---
title: "How to find the factorial of a number using Recursion in JavaScript"
date: "2022-10-07"
cover: "100-factorial-recursion.png"
pageDescription: "Recursion is a concept in programming where a function calls itself as long as a condition is true. Using recursion, you can implement number factorials which I will explain in this article"
tags: ["javascript"]
# video: https://youtube.com/shorts/MYQ1yUeX7rQ
---

The factorial of a number, in mathematics, is written as **n!** which reads "n factorial". This factorial means **n** multiplied by every number that precedes it until 1.

So, **5!** means **5 \* 4 \* 3 \* 2 \* 1** which is equal to **120**.

There are many ways you can do factorials in JavaScript. In this example, we'll look at a recursion approach.

## What is Recursion

Recursion is a concept in programming where a function calls itself and keeps calling itself until something stops it from doing so. If nothing stops it, an **infinite recursion** occurs which crashes your application.

Here's an example of recursion in JavaScript:

```js
function printHello() {
  console.log("hello")

  printHello()
}

printHello()
```

As you can see, the `printHello` function calls itself. When `printHello` is called after the function definition, the `console.log("hello")` line runs, followed by the `printHello()` call. When `printHello()` runs, the `console.log("hello")` line runs again, followed by another `printHello()`.

That's recursion happening. To avoid infinite recursion, we can apply a base case condition like this:

```js
let counter = 0

function printHello() {
  console.log("hello")
  counter++

  if (counter > 6) {
    return
  }

  printHello()
}

printHello()
```

With this condition, when the `counter` becomes **7**, the base case is met, the `return` statement is executed, and the recursion ends.

Let more about recursion with more examples in this video: [Recursion in JavaScript (video)](https://www.youtube.com/watch?v=wCPU8iYiTbE)

## Implement factorial with Recursion

To achieve this, let's start by creating a function that takes an `n` argument and multiples it by the number before n, that is, `n - 1`:

```js
function factorial(n) {
  const preceding = n - 1
  
  return n * preceding
}
```

Then, the recursion:

```js
function factorial(n) {
  const preceding = n - 1

  return n * factorial(preceding)
}

factorial(5)
```

What happens here is that when `factorial` is called with the argument **5**:

- the `preceding` variable becomes **4** (`5 - 1`)
- then we execute `n * factorial(4)` which will not complete instantly because `factorial(4)` is a recursion

With `factorial(4)`:

- the `preceding` variable becomes **3** (`4 - 1`)
- then we execute `n * factorial(3)` which will not also complete instantly because `factorial(3)` is a recursion

This keeps happening infinitely even when `n` becomes **-1**, **-2** until the app crashes. So here, we need a base that lets the function know when to stop.

As I mentioned at the beginning, the factorial of a number is the number multiplied by its precedents until the number **1**. So, we can create a base case that lets the `factorial` function stop recursing when `n` is 1 like this:

```js
function factorial(n) {
  if (n === 1) {
    return n
  }

  const preceding = n - 1

  return n * factorial(preceding)
}

factorial(5)
// 120
```

Starting again, let's see how this recursion works.

`factorial(5)`:

- 5 is not equal to 1, so the base case isn't met
- `preceding` is **4**
- `return n * factorial(4)` doesn't complete instantly as `n` (which is 5) needs to wait for `factorial(4)` to return something

`factorial(4)`:

- base case not met again
- `preceding` is **3**
- `return n * factorial(3)` doesn't complete instantly as **4** needs to wait for `factorial(3)` to return something

`factorial(3)`:

- base case not met again
- `preceding` is **2**
- `return n * factorial(2)` doesn't complete instantly as **3** needs to wait for `factorial(2)` to complete

`factorial(2)`:

- base case not met again
- `preceding` is **1**
- `return n * factorial(1)` doesn't complete instantly as **2** needs to wait for `factorial(1)` to complete

`factorial(1)`:

- the base case is met as `n` (which is 1) is equal to 1
- then we return `n` which means returning **1** from this function

Now, `factorial(2)` can complete its execution, which means `n * factorial(preceding)` becomes `2 * factorial(1)` which becomes `2 * 1` which is **2**.

**2** is returned from `factorial(2)`, so since this is completed, `factorial(3)` can also complete its execution. This means `n * factorial(preceding)` becomes `3 * factorial(2)` which becomes `3 * 2` which is **6**.

**6** is returned from `factorial(3)`, so since this is completed, `factorial(4)` can also complete its execution. This means `n * factorial(preceding)` becomes `4 * factorial(3)` which becomes `4 * 6` which is **24**.

**24** is returned from `factorial(4)`, so since this is completed, `factorial(5)`, the first call, can also complete its execution. This means `n * factorial(preceding)` becomes `5 * factorial(4)` which becomes `5 * 24` which is **120**.

And **120** is returned from `factorial(5)` which is the result we were looking for.

So you see how the function keeps calling itself with different arguments are different points until a base case is met that stops the recursion.

## Wrap up

As stated earlier, there are multiple ways to implement factorials in JavaScript. You can also use loops. But in this article, I've shown you how to use recursion.

I explained what Recursion is, and also explained the different steps that happen in recursion for our `factorial` function.

Check out this [video to learn more about Recursion](https://www.youtube.com/watch?v=wCPU8iYiTbE)

If you enjoyed this piece, kindly share it 😇
