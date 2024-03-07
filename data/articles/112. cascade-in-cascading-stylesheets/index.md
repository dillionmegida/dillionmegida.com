---
title: What does "cascading" mean in Cascading Stylesheets (CSS)?
date: "2024-02-19"
cover: "112-cascade.png"
pageDescription: "Is 'cascading' in CSS just a fancy name? Or is it named after someone? Or it is actually related to CSS? Let's find out"
pageKeywords: "css, cascade, cascading, waterfall"
tags: ["css"]
# video: https://youtu.be/AhNUQ6Hn3qM
---

**TLDR;**
<br/>
The cascade is an order of rules that the browser uses to determine what style takes priority in an ocean of styles coming from different sources: user agent, author and third party stylesheets.

---

A stylesheet is a file with a lot of style declarations targetting elements in your DOM But what about "cascading" in "Cascading Stylesheet"?

Think of it as a waterfall:

![Waterfall on rocks](https://images.unsplash.com/photo-1482685945432-29a7abf2f466?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJmYWxsfGVufDB8fDB8fHww)
*Waterfall screenshot from Unsplash*

You can think of each step of the waterfall as a rule you set in your CSS.

## What role does the "cascade" play?

When working with CSS, you get stylesheets from different places:

* the default stylesheet that comes from your browser...called **User Agent Stylesheet**
* the stylesheets you create in your application (inline HTML, or external CSS file)...called **Author Stylesheet**
* the stylesheets you import from an external server, like a CDN...called **3rd Party Stylesheet**

Let's say all these stylesheets apply a specific style to `h3`:

```css
/* user-agent stylesheet */
h3 {
  margin: 20px 0;
  font-size: 1.5rem;
}
```

```css
/* author stylesheet */
h3 {
  margin: 30px;
  font-size: 1.4rem;
}
```


```css
/* 3rd party stylesheet */
h3 {
  margin: 10px;
  font-size: 4rem;
}
```

The question now is, what style declaration is going to be applied to the `h3` element? This is where cascading comes in.

Cascading defines the "order" of the styles. It defines the steps in the waterfall, such that the lower step gets the priority. It's an algorithm--*a set of rules*--that the browser follows to determine what style takes priority.

So rules...what are these rules? There are a couple of factors involved in how cascading works. Let's look at some of them.

## The order in which the stylesheets are imported

If your HTML imports one author stylesheet before another author stylesheet, the second stylesheet would take more priority. Similarly, if you import one author stylesheet, before a 3rd party stylesheet, the 3rd party stylesheet would take more priority:

```html
<!-- import author stylesheet -->
<link rel="stylesheet" href="./style.css"></link>

<!-- import author stylesheet -->
<link rel="stylesheet" href="./style2.css"></link>

<!-- import 3rd party stylesheet -->
<link rel="stylesheet" href="https://..."></link>
```

The waterfall here is "fall from first author, to second author, to 3rd party". Which means, if these three stylesheets target the same element either by tag name or class name or any other selector, the browser would select the style declaration from the 3rd party stylesheet.

The style declaration in the second author stylesheet overwrites the declaration in the first author stylesheet. And then,the style declaration in the 3rd party stylesheet overwrites the second author stylesheet.

But that's not all to consider, there's another factor--**specificity**"**

## CSS Specificity

Say you have two styles like this:

```html
<h2 class='heading'>Hello, there</h2>
```

```css
.heading {
  color: green;
  border: 2px solid purple;
}

h2 {
  color: red;
  font-size: 2rem;
}
```


Let's say these styles coming from different stylesheets, and are imported in this order (or you can also assume that they are in the same stylesheet, the same concept applies).

The result is, the `h2` has a:
* `color` of **green**
* `font-size` of **2rem**
* `border` of **2px solid purple**

Why does the `h2` not have a **red** `color` despite the style declaration coming after the `color: green`? This is how CSS specificity affects the cascade.

A simple way to look at CSS specificity is that `.heading` holds more power than `h2`. So `h2` may come last in the stylesheet, but the `color` style from `.heading` will overwrite the `color` style in `h2`.

You can learn more about CSS specificity [on the MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). There's a whole calculation involved here 😅

## Inline styles


Inline styles have more priority than user agent or imported stylesheets (author, or third party):


```html
<h2 style="color: purple">Hello, there</h2>
```

```css
h2 {
  color: pink;
}
```

The `color` of `h2` will be **purple**.

When it comes to the cascade, the browser prioritizes the declared inline styles over imported stylesheets. But...and yes, another but...the `!important` keyword has some superpowers.

## The !important keyword

While there's import order of stylesheets specificity, and inline styles, `!important` is another keyword that gives some styles power over others, thereby affecting the cascade.

For example:

```css
/* from one stylesheet */
h2 {
  color: green !important;
}

/* from another stylesheet */
h2 {
  color: red;
}
```


The `color` of `h2` in this case will be **green**:


Even though the second stylesheet comes after the first, and is expected to overwrite the first (in cases where styles target the same elements), `!important` gives the `color` style in the first stylesheet an upperhand in the cascade.

---

You can now think about how interesting the cascade will be when you have a combination of inline styles, `!important` and varying CSS specificity. See why the cascading algorithm is important?

You probably are getting overwhelmed with the feeling of "how do I remember all these rules?".

## How do I remember all these rules?

When you have a mix of all these factors in your stylesheets, it can be confusing to know "what stylesheet wins over another for a specific element". An approach to solving this is, instead of trying to master the rules (which is not a wrong thing to do), **maintain consistency in your codebase**.


### Inline, External, stick to one

Instead of having a mix of inline and external styles here and there in your application, stick to one format.


### Stick to a selector style

Similarly, instead of having a mix of selectors here and there in your stylesheets like `#id` here, `.class` there, element names `h2` there, combining the selectors `h2#id.class` there and so on, maintain consistency with your selectors.

This is where the models like [BEM](https://getbem.com/) shine because they model a consistent class naming to your elements. This way, you're not messing up the specificity of your styles. If a style A, comes after another style B, you know that A overwrites B. You're not trying to evaluate the rules to see "hmmm, B will overwrite A because of the specificity".

## Wrap

I hope this piece helps you understand what "cascading" means. I think this name used in "CSS" makes a lot of sense and gives a lot of perspective to how we write CSS. It's not just about "write this style and watch how it applies to this element". You have to think about how that specific style relates to other styles existing in your application, and they all fit in the "cascade".

This piece does not cover every factor involved in the cascade, neither does it cover all the alternatives to "remembering all the rules". But I hope it helps you understand CSS better.
