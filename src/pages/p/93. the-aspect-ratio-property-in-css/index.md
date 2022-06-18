---
title: "The Aspect Ratio Property in CSS"
date: "2022-06-18"
cover: "93-aspect-ratio-css.png"
pageDescription: "Learn about the new aspect-ratio CSS property and how it handles automatic calculations for width and heights of elements"
pageKeywords: "css, aspect-ratio, aspect ratio, 16:9, 2:1, resolution"
tags: ["css"]
video: "https://www.youtube.com/shorts/9h-zZ8FupUs"
---

The `aspect-ratio` property is a new CSS property that allows you to set the aspect ratio of an element. It allows for the auto-sizing of elements based on the specified aspect ratio.

With aspect ratios, when you set the width of an element, the height of the element is automatically calculated to match the ratio.

The syntax for the `aspect-ratio` property is:

```css
element {
  aspect-ratio: width / height;
}
```

Here are some example ratios:

- a ratio of **1/2** would mean that the height of the element is twice the width of the element
- **16/9** would mean that the element's height is 9/16 times the element's width.
- **1** would mean that the element's height is the same as the element's width.

You can also use floating numbers. Instead of fraction **1/2**, you can use **0.5**.

Let's see some visual examples.

```html
<div class="container">
  <div class="box"></div>
</div>
```

```css
.container {
  width: 200px;
  height: 200px;
  border: 1px solid #0a0a22;
  padding: 20px;
}

.box {
  background-color: #0a0a22;
  width: 100px;
  aspect-ratio: 1;
}
```

An aspect ratio of **1** (or **1/1**) means that the element's height is the same as the element's width. The result of the above is:

![Box with width of 100px and aspect ratio of 1](./box-with-aspect-ratio-of-1.png)

Another example:

```css
.box {
  background-color: #0a0a22;
  width: 100px;
  aspect-ratio: 1/2; // highlight-line
}
```

An aspect ratio of **1/2** means that the element's height is twice the element's width. The result of the above is:

![Box with width of 100px and aspect ratio of 1/2](./box-with-aspect-ratio-of-1-by-2.png)

And another example with the height set:

```css
.box {
  background-color: #0a0a22;
  height: 100px;
  aspect-ratio: 9/16; // highlight-line
}
```

With the height set, an aspect ratio of **9/16** means that the element's width is 9/16 times the element's height. The result of the above is:

![Box with height of 100px and aspect ratio of 9/16](./box-with-aspect-ratio-of-9-by-16.png)

## Without height or width set

What if you do not set a width or height? Let's see an example:

```css
.box {
  background-color: #0a0a22;
  aspect-ratio: 1/2;
}
```

![Box with an aspect ratio of 2/1](./box-with-aspect-ratio-of-2-by-1-with-no-height-or-width.png)

As you can see, without an aspect ratio, the box's width is 100%, and the height is 50% to match the ratio of 2/1. If you inverse the ratio to **1/2**, the result is:

![Box with an aspect ratio of 1/2](./box-with-aspect-ratio-of-1-by-2-with-no-width-or-height.png)

The width is 100%, and the height is two times the width to match the ratio of 1/2.

---

`aspect-ratio` is a very handy property that saves you the stress of setting the width and height of an element and changing them for different screen sizes for responsive layouts. You set an aspect ratio, and all you need to do is set either the width or the height (or even none), and CSS handles the calculation for you.
