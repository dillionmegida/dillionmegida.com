---
title: "JavaScript is Not Actually JavaScript"
date: "2020-05-03"
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1588457651/images/blogs_cover/20200502_224725_0000_kagsaq.png"
pageDescription: "JavaScript uses browser APIs to perform some operations on the web. Without these APIs, Javascript cannot do what many people think it can. In these article, we'll learn how Javascript works."
pageKeywords: "fetch api, browswer apis, apis, dom api, setTimeOut"
tags: ["javascript"]
---

JavaScript isn't completely JavaScript. The reason I say this is that what many people (like I used to) think JavaScript is (or can do) is not exactly true. For example, JavaScript does not have a timer feature (as you may think `setTimeOut`), network feature (as seen in `fetch` or `XTMLHTTPRequest`) and so many more.

Interested to know more? Read further.

In this article, I'd share a mechanism which makes JavaScript what it is (or people think it is).

## What is JavaScript?

JavaScript is a dynamic programming language which was majorly used on **the web** (until NodeJS) for adding functionalities and manipulating elements on the page. It allows us to make network requests (e.g fetching external data), manipulate timer operations and so on. But JavaScript with all its power doesn't achieve so much on the web by its self.

## So, JavaScript and?

**The browser!** The browser powers most of the features exhibited by JavaScript. A quick example to justify this statement is:

```js
console.log(document);
```

Have you ever tried executing something similar to the above on a NodeJS server?

An error is expected. Not because NodeJS scrapped out the `document` object. This is because the `document` object does not exist on NodeJS.

What HTML document would you be inspecting on a server? But it's the same JavaScript right? And JavaScript should be the same anywhere it is used don't you think?

Back to what I said, the browser provides features which allows JavaScript to interact with its environment. These features are called **Browser APIs**.

Browser APIs are exposed to JavaScript to perform most of its operations. For example, the `document` object is exposed from the **DOM API**, the `fetch` promise function is exposed from the **Fetch API**, the `navigator` function is exposed from the **[Native Share API](/p/web-share-api)** and so much more.

Similarly, the browser provides the timer feature which JavaScript takes advantage of by using `setTimeOut`, `setInterval` and many other time related methods.

## But Firefox is different from Chrome ❔

The browser powers most of the features in JavaScript as we now understand. But Chrome, Firefox, Safari and the likes exposes most of these same features. And they are different browsers. Quite odd. Is there some sort of agreement between the browser companies, or is there a standard they are all following?

Well, the latter is mostly correct. The [W3C standards](https://w3.org/standards) develops technical speicifications and guidelines which browsers follow during development and improvement. These standards apply also to HMTL, CSS and so on.

As a browser company, you can integrate other features but you must follow the standards for the majorly used features. This establishes an agreement between the browsers, and that's the reason why these APIs are mostly available among these browsers.

## JavaScript on NodeJS

In the development of NodeJS, many features provided by the browser had to be recreated to continue the flow of JavaScript. The APIs had to be redesigned, because JavaScript cannot do those things on its own. For example, the [timer feature was recreated](https://nodejs.org/uk/docs/guides/timers-in-node/) and exposed to JavaScript. This is the reason why `setTimeout` still exists on NodeJS.

## Wrap up

Having a grasp understanding of these basics goes a long way in helping you understand the language. This article may or may not change the way your use JavaScript but now, you should understand how these APIs work, how JavaScript works, and why some browser APIs are not available on NodeJS.

Thanks for reading : )
