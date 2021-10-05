---
title: "How to set a default image when an image fails to load"
date: "2021-05-13"
pageDescription: ""
pageKeywords: ""
tags: ["javascript"]
---

Image loading in websites fail for many reasons. It could be that the `src` of the image contains a broken link. Or, the internet connection may be poor, and not enough to fetch the image from an external source. Or, the image's server (which may be external) may be down.

When images don't load, the `alt` text is displayed in the container with a tiny icon signifying a broken image, like so:

![Showing alt text of image](/showing-image-alt-text.png)

This view can affect UX especially when the text begins to exceed the image container.

We can display default iamges (instead of alt texts) when an image is not fetched correctly for whatever reason. And in this article, we'll see how.

## The `onerror` event

According to [MDN](How to set a default image when an image fails to load),

> The error event is fired on an Element object when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.

When an image fails to load due to connection, broken link, or whatever reason, the `onerror` event is fired. And this is where we set the default image.

## Setting a default image

The idea here is, we declare a callback function such that when the error event is fired, that function with the `event` object as the argument will be invoked. In that callback function, we can change the `src` of the image to a default link that we're sure is not broken, and also maybe exists on the same server.

Now, let's look at the code side of things.

**In Plain HTML and JS:**

```html
<!-- html file -->
<img id="image" src="https://broken-link-goes-here" />
```

```js
// js file
const img = document.getElementById("image")
img.addEventListener("error", function(event) {
  event.target.src = "https://default-image-link-goes-here"
  event.onerror = null
})
```

**In React:**

```jsx
function Component() {
  return (
    <div>
      <img
        src="https://broken-link-goes-here"
        alt="A house with two children standing in front of it"
        onError={event => {
          event.target.src = "https://default-image-link-goes-here"
          event.onerror = null
        }}
      />
    </div>
  )
}
```

The same idea goes for other frameworks. In the callback, you reassign a different image link (which will be used as the default) to the `src` attribute.

One extra thing I did was add `event.onerror = null`. The relevance of that line is, if for any reasons the newly assigned image link is broken or the image not fetched, the `onerror` event will be triggered again. And if the image doesn't load again, another trigger. And there you have an infinite loooooooop 🥵.

Assignining `null` to the event prevents that. If the new image link doesn't work, the error event does not call a callback function and then the `alt` text will be displayed.

And that's how to set a default image when an image fails to load.
