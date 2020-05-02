---
title: "Javascript is Not Actually Javascript"
date: "2020-05-02"
cover: ""
pageDescription: ""
pageKeywords: "fetch api, browswer apis, apis, dom api, setTimeOut"
tags: ["javascript"]
---

Javascript isn't completely javascript. The reason I say this is that what many people (like I used to) think Javascript is (or can do) is not exactly true. For example, Javascript does not have a timer feature (as you may think `setTimeOut`), network feature (as seen in `fetch` or `XTMLHTTPRequest`) and so many more.

Interested to know more? Read further.

In this article, I'd share a mechanism which makes Javascript what it is (or people think it is).

## What is Javascript?

Javascript is a dynamic programming language which was majorly used on **the web** (until NodeJS) for adding functionalities and manipulating elements on the page. It allows us to make network requests (e.g fetching external data), manipulate timer operations and so on. But Javascript with all its power doesn't achieve so much on the web alone.

## So, Javascript and?

**The browser!** The browser powers most of the features exhibited by Javascript. A quick example to justify this statement is:

```js
console.log(document);
```

Have you ever tried executing something similar to the above on a NodeJS server?

An error is expected. Not because Javascript scrapped out the `document` object. This is because the `document` object does not exist on NodeJS.

What HTML document would you be inspecting on a server? But it's the same Javascript right? And Javascript should be the same anywhere it is used don't you think?

Back to what I said, the browser provides features which allows Javascript to interact with it's environment. These features are called **Browser APIs**.

Browser APIs are exposed to Javascript to perform most of its operations. For example, the `document` object is exposed from the **DOM API**, the `fetch` promise function is exposed from the **Fetch API**, the `navigator` function is exposed from the **[Native Share API](web-share-api)** and so much more.

Similarly, the browser provides the timer feature which Javascript takes advantage of by using `setTimeOut`, `setInterval` and many other time related methods.

## But Firefox is different from Chrome

The browser powers most of the features in Javascript as we now understand. But Chrome, Firefox, Safari and the likes exposes most of these same features. And they are different browsers. Quite odd. Is there some sort of agreement between the browser companies, or is there a standard they are all following?

Well, the latter is mostly correct. The [W3C standards](https://w3.org/standards) develops technical speicifications and guidelines which browsers follow during development and improvement. These standards apply also to HMTL, CSS and so on.

As a browser company, you can integrate other features but you must follow the standards for the majorly used features. This establishes an agreement between the browsers, and that's the reason why these APIs are mostly available among these browsers.

## Javascript in NodeJS

In the development of NodeJS ([as seen in this documentation]()), many features provided by the browser had to be recreated to continue the flow of Javascript. The APIs had to be redesigned, because Javascript cannot do those things on its own. For example, the [timer feature was recreated](https://nodejs.org/uk/docs/guides/timers-in-node/) and exposed to Javascript. This is the reason why `setTimeout` still exists on NodeJS.

## Wrap up

Having a grasp understanding of these basics goes a long way in helping you understand the language. This article may or may not change the way your use Javascript but now, you should understand how these APIs work, how Javascript works, and why some browser APIs are not available in NodeJS.

Thanks for reading : )
