---
title: Using CSS Media Queries and Variables for Responsiveness
date: 2021-11-04
pageDescription: >-
  "In this article, we'll learn how to make responsiveness for manageable using CSS Media queries and Variables."
pageKeywords: "css, responsive, responsiveness, variables, css variables, css media queries, media queries"
tags: ["css", "responsive"]
cover: css-media-queries-and-variables-for-responsiveness.png
---

_This article was inspired by [this tweet](https://twitter.com/ekwonye/status/1455975172826177538?s=20). When I came across it, I recalled that it's a hack I've been using for a while and thought to share_

Responsiveness can be a bit tricky to get right. You'll see so many debates or building mobile-first or desktop-first--just so many suggestions based on opinions that work for people.

Well, here's just another trick that could make responsiveness more manageable.

## CSS Media Queries

Media queries are a way to target specific devices and screen sizes. By doing this, you can create or modify existing style declarations to target the current screen size. With media queries, you can:

- display a button on a desktop and hide it on a mobile device.
- use a large font size for a heading on a desktop, and smaller font on a mobile
- make a flex container wrap on a mobile device and cause it to un-wrap on a desktop

You can learn more about media queries here: [Media queries - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

The main thing to note here is that style declarations can be overwritten anywhere, including **inside of media queries**. This information will guide you throughout the rest of this article.

## CSS Variables

The term "variable" refers to a container that holds a value that can be changed. Variables are prevalent in programming languages and CSS, fortunately, is no exception.

Here's how variables are created and used in CSS:

```scss
.container {
  --padding: 20px;
  padding: var(--padding);
}
```

The double hyphen (`--`) used as a prefix for a custom property is used to declare a CSS variable, and that variable can be used as a value for any property using the `var()` function.

You can learn more about variables here: [Using CSS custom properties (variables) - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

As stated earlier, style declarations can be overwritten. And style declarations also include variable declarations. This means you can do the following:

```scss
.container {
  --padding: 20px;
  padding: var(--padding);
  --padding: 10px; // highlight-line
}
```

From the above, the `.container` element will have a `padding` of `10px` as the highlighted line has overwritten the earlier declaration.

## CSS Media Queries and Variables

From what we've seen above, it means you can do the following:

```scss
.container {
  --padding: 20px;
  padding: var(--padding);

  // highlight-start
  @media (max-width: 768px) {
    --padding: 10px; // highlight-line
  }
  // highlight-end
}
```

The above means, on a larger screen than 768px, the `.container` element will have a `padding` of `20px`. On a smaller screen, the `.container` element will have a `padding` of `10px`.

Now let's focus more on using this hack to make a responsive design more manageable.

## Making Responsive Design Easier

In the following non-exhaustive list, I'll show some ways you can achieve responsiveness using this hack.

### Control the number of columns in a grid container

If you were to control the number of columns in a grid container without a variable, you'd probably have something like this:

```scss
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

To reduce the number of times you have to write `grid-template-columns`, you can do this:

```scss
.container {
  display: grid;
  // highlight-start
  --columns: 4;
  grid-template-columns: repeat(var(--columns), 1fr);
  // highlight-end

  @media (max-width: 768px) {
    --columns: 2; // highlight-line
  }

  // highlight-start
  @media (max-width: 480px) {
    --columns: 1;
  }
  // highlight-end
}
```

### Using variables for responsive font sizes

Using this hack, here's how you can change fonts across different screen sizes:

```scss
:root {
  --font-xl: 40px;

  @media (max-width: 768px) {
    --font-xl: 30px;
  }

  @media (max-width: 480px) {
    --font-xl: 20px;
  }

  @media (max-width: 320px) {
    --font-xl: 10px;
  }
}

h1 {
  font-size: var(--font-xl);
}
```

In the [`:root` selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:root), we defined a variable for font size and overwrote it for different screen sizes. Now in the `h1` element, we can use the variable, and depending on the screen size, the value for the font size will change.

_I'll add more examples here in due time. But I believe you already know how this hack can improve your development. You can use it in different suitable ways 🙃_

## Conclusion

Using media queries, variables, and overwriting of styles, we've seen how to improve our codes and make responsive design easier in this article.

Kindly share if you find this article helpful : )
