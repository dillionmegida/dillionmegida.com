---
title: "Difference between ng-container and ng-template in Angular | What they are and when to use them"
date: "2022-03-05"
cover: "77-ng-container-vs-ng-template.png"
pageDescription: "In this article, you'll learn the difference between the `ng-container` and `ng-template` Angular elements."
pageKeywords: "angular, ng-container, angular container, angular template, ng-template, angular dom, dom, template, structural directives, angular directive"
tags: ["angular"]
video: https://youtu.be/LsHQV5VMdFc
---

`ng-container` and `ng-template` are Angular elements that work like containers with HTML elements. However, they have different purposes or use cases.

## `ng-container`

If you're familiar with React, you may know the `Fragment` React component. This component is used when you do not want to add an extra HTML element to the DOM (like a `div` or `span`), but you want a wrapper around children components.

`ng-container`s work just like that, and it also accepts Angular structural directives (`ngIf`, `ngFor`, e.t.c). They are elements that can serve as wrappers but do not add an extra element to the DOM.

Let's see an example where you might want to use this:

```ts
// app.component.ts
export class AppComponent {
  products = [
    {
      id: "iphone",
      name: "iPhone",
      price: "599",
    },
    {
      id: "samsung",
      name: "Samsung",
      price: "699",
    },
    {
      name: "Pixel",
      price: "599",
    },
  ]
}
```

```html
<!-- app.component.html -->
<div *ngFor="let product of products">
  <span>{{ product.name }}</span>
</div>
```

Here, in the HTML, we can loop through the `products` array, and display the product's name in a `span` tag.

But what if you want to render the `div` tag conditionally; that is, if the product has an `id` property? Then, we can use the `*ngIf` structural directive, maybe like this:

```html
<div *ngFor="let product of products" *ngIf="product.id">
  <span>{{ product.name }}</span>
</div>
```

But, this will throw an error.

As you may already know, in Angular, you cannot apply two or more [structural directives](https://angular.io/guide/structural-directives) on an element. Your next solution may be:

```html
<div *ngFor="let product of products">
  <div *ngIf="product.id">
    <span>{{ product.name }}</span>
  </div>
</div>
```

This code would work, but now you're introducing a `div` element that you may not need.

We can solve this with `ng-container` like so:

```html
<ng-container *ngFor="let product of products">
  <div *ngIf="product.id">
    <span>{{ product.name }}</span>
  </div>
</ng-container>
```

With this, the DOM won't include the `ng-container`, so we're not adding an extra element that we do not need. Angular will render the container element as a comment in the DOM. And if you need to use another structural directive before the `div` element, you can use more `ng-container`s.

## `ng-template`

Think of `ng-template` as a template that defines a composition of elements (the template content), but Angular does not render it by default. It only does when you specify it to be rendered.

With the following code:

```html
<h1>Hello</h1>

<ng-template>
  <h2>How are you</h2>
</ng-template>
```

In the HMTL source code in the browser, you'll find the second part commented like this:

```html
<h1 _ngcontent-agr-c11>Hello</h1>

<!-- -->
```

It is not rendered; it's only defined in the source code.

Let's look at a use case for this element:

```html
<ng-template #noProducts>
  <p>There are no products in this store</p>
</ng-template>
```

Above, we've defined a template with the name `noProducts`. In this example, we'll render it to the DOM if there are no products, like this:

```html
<ng-container *ngIf="products.length > 0; else noProducts">
  <ng-container *ngFor="let product of products">
    <div *ngIf="product.id">
      <span>{{ product.name }}</span>
    </div>
  </ng-container>
</ng-container>

<ng-template #noProducts>
  <p>There are no products in this store</p>
</ng-template>
```

The template will never be rendered until it has to be.

We can store a piece of UI code with a template element and apply it to the DOM conditionally.

## Difference between `ng-container` and `ng-template`

`ng-container` serves as a container for elements which can also accept structural directives but is not rendered to the DOM, while `ng-template` allows you to create template content that is not rendered until you specifically (conditionally or directly) add it to the DOM.

---

In this article, we've seen how the `ng-container` and `ng-template` Angular elements work, their differences, and when to use them. If you have questions, you can reach out to me on [Twitter - @iamdillion](https://twitter.com/iamdillion)

Watch the video version of this here: [ng-container vs ng-template](https://youtu.be/LsHQV5VMdFc)
