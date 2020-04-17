---
title: "The concept of middleware in Express"
date: "2020-04-17"
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1587081850/images/blogs_cover/middleware_shadb6.png"
pageDescription: "Middleware is a popular concept in Express in which some activities are carried out in the middle or before a next function is called. These activities could validation, authentication and so on."
pageKeywords: "express, middleware, nodejs, req, res, next"
tags: ["nodejs", "express"]
---

[Express](https://expressjs.com/) is a NodeJS framework that provides a lot of features for web and mobile applications. Middleware is a popular concept used in Express as well as other languages. In fact, most parts of express works around middlewares. But what does this concept mean exactly? The idea behind middlewares in Express remains the same in other languages, but this article is about Express.

---

## `middlewares`

Middleware as you assume, is some 'action in the middle'. At the middle of what? Some functions (or before a function). This means some activities are done in the middle before the next function is invoked. These activities could be many things - validation, confirmation and a lot of other things.

Most use cases of middlewares are 'checks' to ensure that the next function to be run has the right or the requirements to do so. Let's go through a small application to see how middlewares are used.

## Small Express Application

Let's have a `server.js` file with the following codes:

```js
const express = require("express")
const app = express()
app.listen(8000, function() {
    console.log("Server started!")
})
```

This is mostly all you need to begin with express. With `node server.js` ran on the terminal, our server is started on port 8000, and requests on localhost:8000 can be handled by our application.

Next, handle some requests with express:

```js
function sendMessage(request, response) {
    res.send("Welcome to this page!")
}
app.get("/", sendMessage)
```

With the above, any requests sent to localhost:8000/ will evoke the function `sendMessage`. The `response` and `reqeust` are prefilled with objects by NodeJS which helps us control the properties of the request (such as url, device, etc) and the response (which controls what we are sending back) respectively.

Are you familiar with this: `(req, res, next)`? This is where middleware comes in. Let's have two request handlers and two functions as follows:

```js
function sendMessage1(request, response, next) {
    response.sendName = function() {
        response.send("I am express")
    }
    console.log("I am the first function!")
}
function sendMessage2(request, response) {
    response.sendMyName()
    console.log("I am the second function!")
}
app.get("/", sendMessage1)
app.get("/", sendMessage2)
```

**Note that**: `next` can be called anything - `callNextFunction`, `callNext` and so on. But `next` is succinct enough to understand, hence many developers do this.

Notice we didn't use next. Now restart the server and enter localhost:8000 in the browser. You'll notice there's nothing in the browser, and it's continuously loading. In the terminal, you'll see a message 'I am the first function!'. It's continuously loading because the response has not been sent yet. We'll look at `response.sendName` soon, so don't worry about that for now.

You'd also notice the `sendMessage2` was never evoked. This is because the request to '/' has already been handled by the first function. And once a request has been handled, express does not check other functions, except been told to do so. How do we tell it to do so?

**By calling next()**

NodeJS passes a third argument (callback) to the function which when called, allows express to check other functions which can be used.

```js
function sendMessage1(request, response, next) {
    response.sendName = function() {
        response.send("I am express")
    }
    console.log("I am the first function!")
    next()
}
function sendMessage2(request, response) {
    response.sendName()
    console.log("I am the second function!")
}
app.get("/", sendMessage1)
app.get("/", sendMessage2)
```

When the server is restarted, and localhost:8000/ is fetched, a couple of things happen: "I am the first function" and "I am the second function" is logged to the console, and "I am express" is displayed on the browser. Now we can see that `sendMessage2` was evoked. This means after express finished with the first `app.get`, it continued to see if any other actions apply at that point in the time. And fortunately, the next `app.get` applies. Look at it this way:

> Normally, after a request is handled, express stops there. But with `next` evoked, express does not stop in the function. It assumes, there are more things that can be done.

If the next `app.get` was handling a different route, say '/about', express checks the codebase, and since nothing applies, express is done. This is the same thing that would happen when you request a route like /help which does not exist. There is nothing express can do : (

In our case, `sendMessage` can be seen as a middleware. But note that if the positions of the `app.get`s were switched, `sendMessage1` would never be reached because `sendMessage2` does not call next.

Now, what about `response.sendName`? Remember one good thing about javascript objects? Properties can be added or modified at any time in the application. This means at `sendMessage1`, a new property which is called a method (function on object) is added to the response object which calls `response.send`. Since express passed through `sendMessage1`, that method was added, so any function that uses the response afterwards has access to the method. But if `sendMessage` was never used, the response object would be intact.

### You'd rarely see middlewares used this way

One popular usage of middlewares is to pass them between the route and callback function (which controls the request and response) in a function. Example is:

```js
function printName(request, response, next) {
    console.log("I am a middleware!")
    next()
}
function sendMessage(request, response) {
    response.send("Hello there!")
}
app.get("/", printName, sendMessage)
```

The same technique applies. Remember that NodeJS passes the request and response object to the next function which in this case is the second argument, `printName`. After the execution of `printName`, if `next()` is called, the request and the response is again passed to the callback function which is the third argument `sendMessage`.

So sequentially, "I am a middleware!" is logged to the console and "Hello there!" is displayed on the browser. If `printName` never called `next()`, `sendMessage` would never called. Another thing we can also experiment is:

```js
function printName(request, response, next) {
    console.log("I am a middleware!")
    response.send("Hello from middleware!")
    next()
}
function sendMessage(request, response) {
    console.log("I am a callback")
    response.send("Hello there!")
}
app.get("/", printName, sendMessage)
```

We get an error! "Hello from middleware!" is displayed on the browser, "I am a middleware!" and "I am a callback" are displayed on the terminal, but the second `response.send` throws and error (Cannot set headers after they are sent to the client). This is because a response has been sent already, and cannot be sent again at the same instance.

### Multiple middlewares

NodeJS passes the request and response object to the next function, and if that function calls `next()`, the request and response object keeps passing until express assumes to be done. What does this imply:

```js
function printName(request, response, next) {
    console.log("I am a middleware!")
    next()
}
function printAge(request, response, next) {
    console.log("I am also a middleware")
    next()
}
function sendMessage(request, response) {
    console.log("I am a callback")
    response.send("Hello there!")
}
app.get("/", printName, printAge, sendMessage)
```

## Wrap up

There a different use cases of middlewares like I stated earlier. `printName` could be a function that checks if the client is coming from chrome device. With this you can say 'If the user is from chrome, call next else response.send("You are not from chrome, we can't help you")'. There are of fun things you could do with middlewares right?

Thanks for reading : )

If you have any questions, you can reach me on [Twitter - @iamdillion](https://twitter.com/iamdillion)