---
title: "My first experience with Angular"
date: "2020-06-04"
pageDescription: "Guess who is using angular now...me! In this post, I share my first experience with it, why I think it's easy to learn and why I'd like to learn it more"
pageKeywords: "angular, typescript"
tags: ["angular", "typescript"]
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1591226517/images/blogs_cover/angular-first-experience_tyisjp.png"
---

At the time of this post, I've been learning angular for a week now (precisely 28th of May). I'm not writing this like I know the framework well enough already, but I want to share my first experience with it, what I find interesting with it, and what makes me feel, it's easy to learn.

Interested? Read on...

---

Before sharing my experience, I'd like to share how React transformed my thinking and how that led to my approach with angular.

## React, before Angular

I've been working with React for over a year now. React introduced me to the concept of components. Working with a `header` component, or a `button` component separately, and using them inside many other components was an amazing technique that inspired me to learn more of React. I later found out that many other frameworks were using this technique too, but I stayed with React because it improved my understanding of JavaScript.

The idea of `props`, `state`, Single Page Applications (SPAs), and what not, made React the first tool I ever thought of when I wanted to build any web application. (I didn't use template engines that much)

While learning React, I discovered Gatsby (a framework of React) which I immediately learnt to power up my blog. Subsequently, I fell in love with Gatsby. So, React altogether.

## Why did I learn Angular?

I used to think Angular was a framework used for creating mobile applications. I had a Mobile Developer friend who used Ionic and Angular for his projects. Although, he tried filling me in on how Ionic and Angular works, I always felt Angular was for mobile apps. I have future plans of checking out the mobile app development field, but since I didn't have curiosity for it at that time, I didn't consider looking at Ionic or Angular.

Then recently, I found myself in a team where we wanted to build a large scale web application. The initial idea was that I (the frontend developer) use React, but later, the project manager suggested Angular for the project's frontend. He talked about the organized and full-fledged nature of Angular and why he'd prefer it.

I was actually surprised. Angular for web? Then, he explained things better for me (how angular can also be a frontend tool like React). I told him I'd look it up that same day and get back to him the next day. I picked up an [Angular Crash Course by Brad Traversy](https://www.youtube.com/watch?v=Fdf5aTYRW0E) on youtube, and wow...Angular!

This was the outcome the next day: [Todo Application with Angular](http://deee-todo-angular.herokuapp.com/). It's not so usable, but with it I was able to understand:

- state of components
- a bit of data binding
- inputting values to a child component and outputting values to a parent component.
- and many more.

Thanks Brad!

## My experience

Angular looked so complicated at first. Coming from a React background, I unconsciously expected angular to work the same. But I was able to catch fast. At least, the basic.

What I found so stressful (at the same time interesting) is how two to three files at least, would be used to make up a component. `header.component.ts`, `header.component.html` and `header.component.css` would be used to create a header component. `.ts` manages the logic and data, `.html` works as the template (which uses the data, and triggers methods) and `.css` for styles.

In React, the logic, data and the template (and even CSS - [CSS in JS](https://cssinjs.org/)) would be managed in the same `.js` file. I loved the concept of handling data separately and binding it to the template. But (maybe because I'm a React dev), it was a bit stressful.

## Why I'm falling in love with Angular

### 1. Typescript!

I've been wanting to learn typescript for a while (hearing how powerful and useful it was) but didn't find any reason to learn it. Angular uses typescript, so this was that opportunity. So far, I've just been dancing around the `variable:Type` syntax for ensuring your variable conforms to a type. I know there's more to typescript, but now, I clearly understand why developers do say "typescript helps you catch type errors faster".

For instance:

```ts
class Obj {
    name: String,
    number: Number
}
const variable:Obj = {
    nam: 'Typescript',
    number: 33
}
```

An error would be thrown with this code because the `Obj` type does not allow the `nam` key.

I can't wait to explore this tool more (even outside angular).

### 2. The CLI

The CLI's a life-saver. Creating components, services and many more I'm yet to discover are made easy with the CLI. It provides the necessary files, and you can just begin working with your component easily.

### 3. All-in-one

Angular is fully-fledged. From routing to form validations to many other things you may to need a package to ease the process, angular offers all of those.

## Why I think Angular is easy to learn

There's a very common advice given to beginner JavaScript developers:

> Understand the language very well before jumping into the frameworks.

Although, this advice is arguable, as people have testified to been able to get better at JavaScript by starting with the frameworks. Nevertheless, it's still a valid advice.

With my understanding of `classes`, `promises` and many other JavaScript concepts, I was able to understand Angular. Therefore, I would say that, with a solid understanding of JavaScript, Angular, as well other frameworks would be very easy to learn.

## Final thoughts

One thing I got to understand through Angular is that, all these frameworks work the same way, just different methods. While trying to create a web-based framework which would make development easy, the features required would include:

- sending dynamic data into elements
- managing the state of elements somehow
- nesting elements (components)
- handling logic for elements
- and so many more common things...

Angular, React, Vue, and many more all achieve these features, just with different methods. These different methods determines the end product (in terms of performance), the learning curve, and many other choices we as developers consider before selecting the one we are more comfortable with.

For example, React uses `props` to take input from a parent component while Angular uses the `Input` module. React also uses `this.state` or the `useState()` hook for managing the state of components, while in angular, the state values are bounded to the template from the component instance.

If I were to pick Vue this week, I'd surely be able to get started with it because it has all these features but a different approach to achieving them (and also because of my good understanding of JavaScript).

## Wrap up

There's still a lot to explore in angular. Also, things are not all that easy as I'm still trying to wrap my head around reusable components, data binding, nesting components, and so on. It's a nice ride anyway.

Angular so far has been awesome. The team behind the framework (as well as all the external contributors) are awesome. I still do React. In fact, I would still go for React if any web project comes up.

If you ever wanted to get started with angular, I believe my experience has given you an insight on what you are about to embark on.

Thanks for reading : )
