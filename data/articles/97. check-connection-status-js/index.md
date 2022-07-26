---
title: "How to check internet connection status in JavaScript"
date: "2022-07-26"
cover: "97-connection-status-js.png"
pageDescription: "Here is how to easily check the internet connection status in the browser using JavaScript"
pageKeywords: "javascript, internet, wifi, internet connection status, online event, offline event, browser events, online and offline, browser, browser APIs, navigator, navigator.onLine"
tags: ["javascript"]
video: "https://www.youtube.com/shorts/647DpUmx5HI"
---

The browser triggers numerous events for different things that happen in it. When you click a button, a `click` event is triggered on that button. When you leave a tab to another tab, a `visibilitychange` event is triggered.

Also, when you connect to or disconnect from the internet on your device, the browser triggers some events.

When you connect to the internet, the browser triggers the `online` event.

When you disconnect from the internet, the browser triggers the `offline` event.

By listening to these events, just like you would with other events, you can execute some code.

Here is an example on Google Docs:

![Notification on google docs showing an internet disconnection](./google-notification.png)

This notification is displayed after detecting a change in my internet connectivity. By listening to the `online` and `offline` events, you can also create popups like this. Let's see how:

```js
window.addEventListener("online", function() {
  console.log("I am connected to the internet")
})

window.addEventListener("offline", function() {
  console.log("Disconnected...so sad!!!")
})
```

By running this on my browser, and putting my Wi-Fi on and off, I have these results:

![Browser console showing connection logs from code](./browser-console-showing-connection-logs.png)

What if you wanted to know what the connection status is at any point in your code? You can find that information on the `navigator.onLine` property:

```js
console.log(navigator.onLine)

// true, if connected
// false, if connected
```

This property returns `true` or `false` if the browser is connected to the internet or not.
