---
title: "How to abort API requests in JavaScript"
date: "2022-05-28"
cover: "89-abort-api-request-in-javascript.png"
pageDescription: "In JavaScript, you can abort API requests before they are completed. In this article, I explain how to abort API requests made with fetch and axios."
pageKeywords: "javascript, axios, fetch, abort, abort api request, abort api request in javascript, abort api request in javascript with fetch, abort api request in javascript with axios, abort api request in javascript with axios and fetch"
tags: ["javascript"]
video: "https://youtu.be/EvAuLZUOG2Q"
---

When building applications, you make API requests to servers for different reasons; to authenticate user credentials, fetch resources, create resources, and so much more.

Did you know that you can abort an API request in JavaScript? By aborting, I mean canceling a request before it is completed (before you get a response or before the request gets to the server).

There are many reasons why you may want to do this. One of them is to prevent a request from being sent to the server if the user has already navigated away from the page the request was made.

Canceling requests can help you avoid unnecessary network traffic, save memory usage and resources, and improve performance.

There are many ways to make API requests in JavaScript. In this article, I'll focus on [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) and [axios](https://axios-http.com/).

So how do you do abort requests in these methods?

## The AbortController Interface

The Web API exposes the [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface, a JavaScript object that allows you to abort requests whenever you want. Here is how to create an `AbortController` object:

```js
const controller = new AbortController()
```

This `controller` object has two important properties for aborting requests.

The first property is the `signal` object. This object is a unique identifier for the request. The structure of this object is as follows:

```js
{
  // other properties
  aborted: false,
  onabort: null
}
```

The second property is a method called `abort()`. This method is used to update the `aborted` flag of the unique request signal. When this method is called, all observers of the `signal` object will be notified, and the requests will be canceled.

Let's see an example:

```js
const controller = new AbortController()

const abortSignal = controller.signal

function abortRequest() {
  controller.abort()
}
```

When the `abortRequest` function is called at any point in your application (such as a button click event, for example), the `abort` method is called, the `abortSignal` object will be updated, and all observers will be notified.

Now let's see how to use this in `fetch` and `axios`.

## Aborting API Requests in Fetch

The `fetch` method is a JavaScript function used to make API requests. It takes two arguments: the URL of the API endpoint and an object containing the request options:

```js
fetch(api, requestOptions)
```

The `requestOptions` object accepts many properties, but the most important is the `signal` property. You can then attach the `signal` object from the controller to this property:

```js
const controller = new AbortController()

const abortSignal = controller.signal

function abortRequest() {
  controller.abort()
}

fetch("api", {
  signal: abortSignal,
})
```

With this, when the `abortRequest` function is called, the `fetch` expression will be notified, and the request will be canceled.

## Aborting API Requests in Axios

Axios is a JavaScript library that is used to make API requests. It has a very similar syntax to the `fetch` method. It also accepts a `signal` property in the request options object. So we can also attach the `signal` object from the controller like this:

```js
const controller = new AbortController()

const abortSignal = controller.signal

function abortRequest() {
  controller.abort()
}

axios.get("api", {
  signal: abortSignal,
})
```

When the `aborted` flag of the `signal` object is updated to `true`, this `axios` expression will be notified, and the request will be canceled.

---

Even for new methods of making API requests, by accepting a `signal` property in their request options object, you can abort requests using the `abort()` method.
