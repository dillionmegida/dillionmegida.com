---
title: "Getting Started With Asynchronous Javascript"
date: "2020-02-04"
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1580783303/images/blogs_cover/async-js_hpna31.jpg"
pageDescription: "Asynchronous operations are operations occurring at the same time. Javascript is single-threaded but in this article, we'd see how Javascript is able to handle asynchronous operations."
pageKeywords: "async, asynchronous, asynchronous javascript, javascript, async javascript, async js"
tags: ["javascript", "async"]
---

The term **asynchronous code** refers to non-sequential execution of codes.

Javascript is a single-threaded language, meaning that only one process can be run at a time. However, Javascript has few methods of handling multiple processes (asynchronous processes) at the same time. In this article, we'd look at how this is possible.

-----

## Synchronous Javascript

This is the normal type of javascript codes you'll see in many places. Here, codes are executed one after the other as written in the source. For example;

```javascript
let name = prompt("What is your name?");
let message = `Welcome ${name}`;
console.log(message);
```

Just as ordered, the `name` variable is declared as the first operation. This variable is assigned to the input gotten from the user as a prompt. Until the prompt is closed, the next line of code will never be reached.

The next line is the `message` variable assigned to a string interpolation of "Welcome" and the input gotten.

Then the last line logs the message to the console.

If the user waits 10 seconds before closing the prompt, the next line of code will wait 10 seconds before execution.

## Asynchronous Javascript

In contrast to synchronous Javascript, the codes doesn't necessarily follow order. The ones without delay are executed immediately while the remaining are executed later.

Example of an asynchronous process is fetching data from an external source while performing other tasks. The time it will take the data to return cannot be predicted, but it that doesn't mean that the other tasks should wait 💁‍♂️ 

Here, while waiting for the data, other operations can continue (asides the operations which would need the data). When the data arrives, the operations which need the data can begin their own execution, hence, avoiding **blockage**.

Javascript has three major methods of handling asynchronous codes. They are:

- Callback Functions
- Promises
- Async/Await

###  1. Callback Functions

These are functions which are passed as arguments to other functions and are **call**ed **back** when the function is ready to execute it. That is, they are not run immediately. An example is;

```javascript
console.log("Beginning");
let button = document.querySelector('#submit');
button.addEventListener('click", callbackFunc);
let callbackFunc = () => {
    console.log("Button has been clicked");
}
console.log("End");
```

When this is run, "Beginning" is logged to the console, afterwards "End". The `callbackFunc` is not run immediately. The `addEventListener` waits for the `click` event after which it calls the callback function.

**Note that** not all functions are asynchronous. An example is the `map` method used on arrays. The method is run synchronously (immediately). So, callbacks for asynchronous operations are termed **Async Callbacks**.

Callback functions are rarely used for handling asynchronous operations nowadays. A major reason for this is that it becomes difficult to handle many asynchronous operations together. It results to what is commonly called [Callback Hell](http://callbackhell.com/). Another reason is that it doesn't handle errors efficiently.

A better and more functional method is `promises`.

### 2. Promises

This feature allows codes with unpredictable time to complete to be performed outside the main thread to avoid blockage.

Async operations like promise-based codes are placed in the [event queue](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop). Codes in the event queue are ran immediately after the main thread. This is necessary to avoid hindering other codes from running (probably because of delay or errors). When the operations in the queue are completed, they are executed.

Learn more about promises in this article - [Promises](https://thewebfor5.com/p/javascript/javascript-promises)

### 3. Async / Await

This method is similar to `promises` but has more readable and understable method of handling asyncrhonous operations. The `await` keyword is only used inside `async` functions. 

Learn more about Async/Await in this article - [Understanding async-await in Javascript](https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c)

## Wrap Up

There is a high probability that you aren't seeing these (`promises`, `callbacks`, `async`, `await` and so on) for the first time, but I hope that in this article I've been able to explain how Javascript handles asynchronous operations in this article.

Remember that Javascript is single-threaded so basically what it does is, it pushes the asynchronous operations elsewhere to deal with its completion and when the main thread is done, the operations are given a second chance to return back for execution.

The method to use is based on your preference but like I stated earlier, callback functions are less functional than the other two methods.

## Useful Resources

- [Asynchronous Programming](https://eloquentjavascript.net/11_async.html)
- [Introducing asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [General asynchronous programming concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
