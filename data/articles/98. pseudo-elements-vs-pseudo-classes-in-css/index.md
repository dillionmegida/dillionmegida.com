---
title: "Pseudo classes vs Pseudo elements"
date: "2022-08-25"
cover: "98-pseudo-classes-elements.png"
pageDescription: "Pseudo classes and Pseudo elements are types of selectors used in CSS for styling elements in different states or different parts of the element. So what's the difference?"
pageKeywords: "css, pseudo elements, pseudo classes, css selectors, selectors, styles, properties, selection, after, placeholder-shown, placeholder, disabled, hover, css styles, element state"
tags: ["css"]
video: https://youtu.be/g-JRPtI__ms
---

Pseudo classes and Pseudo elements are types of selectors used in CSS for styling elements in different states or different parts of the element. So what's the difference?

## Pseudo classes

Pseudo classes allow you to style an element in a specific state.

For example, you have the `:hover` class which allows you to apply some styles to an element when the mouse hovers over it.

Another example is the `:placeholder-shown` class which allows you to apply styles to an input element when the placeholder is shown.

One more example is the `:disabled` class which allows you to style an element (such as an input or a button) when it is disabled.

Notice that these classes are applied to "when" situtations? That's why they are referred to as states of an element.

As you would notice also, in the three examples mentioned above, pseudo classes are prefixed with one colon: `:`.

There are [many more pseudo classes in the MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

## Pseudo elements

Pseudo elements, on the hand, allow you to style a part of an element or to add an extra element to the existing one.

For example, you have the [::selection](/p/css-selection-pseudo-element) element which allows you to style **the highlighted** part of an element (such has when a user clicks and drags the mouse across a text)

There's also the `::placeholder` element which allows you to style the placeholder text of an input.

Another example is the `::after` element which allows you to add an extra element (called a pseudo element) after the target element (of which you can also style).

Unlike pseudo classes, as you would notice in these examples, pseudo elements are prefixed with two colons: `::`.

> The number of colons a selector has distinguishes them to be either a pseudo class or a pseudo element. However, because the colon count identification was not introduced in early versions of browsers, some pseudo elements (like `::before` and `::after`) still work with one colon in some browsers.

The MDN documentation contains [all CSS pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

## The confusing parts of pseudos

There are some pseudo classes that you could wrongly identify as a pseudo element. I call these the **confusing parts of pseudos**.

Let's look at some examples here: the [`:first-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) pseudo class and the [`::first-letter`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter) pseudo element. The former selects an element that is the first of its siblings while the latter targets the first letter of a block element.

You might get confused to call `:first-child` a pseudo element because literally (or almost), it is targetting a "part of" the parent element.

But here's a better way to understand such cases. As I mentioned earlier, **pseudo classes** match a state of an element (**when** something happens). In the case of `:first-child`, the matched element is in the state of being the "first of its siblings". This state can change when another element is placed before it. Also, this matched element can exist on its own.

But with `::first-letter`, the matched part of the element cannot necessarily exist on its own, as it is not an element. Instead, it, with other letters, constitute an element. So you are actually targetting a "part of the element". And that's what makes it a pseudo element.

I don't know if this explanation is simplified enough for you but this is how best I know how to differentiate between selectors that fall in these confusing parts.

## Wrap up

In summary, Pseudo classes are for **states** while Pseudo elements are for **elements**. Pseudo classes are prefixed with **one colon** while Pseudo elements are prefixed with **two colons**.
