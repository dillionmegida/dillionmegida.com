---
title: "Next.js: Explaining Main Concepts and Ideas"
date: 2021-07-18
pageDescription: "In this article, we'll understand the main concepts and techniques that make up Next.js, and also understand how this framework serves as an SSR tool"
pageKeywords: "nextjs, server-side rendering, ssr, prerendering, react, next.js"
tags: ["ssr", "nextjs"]
---

Next.js is a React framework greatly adopted for its support for Server-Side Rendering (SSR) in React applications. Asides SSR, Next.js also provides a lot of tools that improve the quality of React applications that we build.

In this article, we’ll be looking at some of the major concepts and techniques used in Next.js. We’ll understand the benefits of Server Side Rendering (SSR), and also how SSR and pre-rendering works in the framework. Furthermore, we’ll be going through some of the core components that the framework exposes.

## Server-Side Rendering and Prerendering with Next.js

Developers have widely adopted the React framework Next.js for its server-side rendering (SSR) support in React applications. Aside from SSR, Next.js provides plenty of tools to improve the build quality of React applications.

In this tutorial, we’ll look at some of the significant Next.js concepts and techniques. We’ll start by exploring the benefits of SSR then explaining how SSR and pre-rendering works in the framework. Furthermore, we’ll go through some of the core components that the framework exposes.

At the end of the article, you'll understand the concept and benefits of pre-rendering and SSR in Next.js. You’ll also know how it serves as an efficient tool for those purposes. As well, you’ll have learned about some core Next.js components we can use to build performant applications.

## What is Server-Side Rendering?

The Web started with SSR. When you upload webpage application files to your server, browsers (called clients) can request them.

When you go to `/contact`, for example, the client requests for `contact.html` from the server. This file also comes with other referenced resources like images, stylesheets, and more. After it receives the files, the browser displays the page to the user. For every navigation, the browser requests an entirely new page from the server.

However, there’s more to the Web today. With the original method, when you navigate to a page, you must wait for the browser to download that page’s file before anything displays. Nowadays, we have a new model for creating applications — single-page applications (SPA).

[SPAs](https://developer.mozilla.org/en-US/docs/Glossary/SPA) are web applications or websites that load only a single web document from the server and dynamically determine what to display per different routes. This method means the browser sends a request to the server only once. Navigation is faster as the browser avoids making another request after the first.

These SPAs work with the client-side rendering (CSR) technique. In CSR, JavaScript on the client renders web pages. For each route, the JavaScript (which a framework usually handles) renders elements of the current route. In contrast, SSR renders the different elements for different routes from the server, leaving less work for the client.

One beautiful thing about SSR is that it helps with [Search Engine Optimization (SEO)](https://en.wikipedia.org/wiki/Search_engine_optimization). That is why developers still choose SSR despite its drawbacks. With SSR, the webpage for any URL is already processed from the server, making it easier for search engine crawlers to index different pages of your website.

Although SSR may look like a slow method, since you must always wait for a page reload to get new content for a different page, frameworks like Next.js have a faster process for enjoying features of SSR as well as client-side benefits. We’ll explore that in the rest of this article.

## The Concept of Pre-rendering

Next.js offers a feature called pre-rendering. With pre-rendering from the server, a browser receives an HTML page that shows a user interface (UI) even without JavaScript.

In bare React (which works on client-side rendering), the user would have to enable JavaScript to render and display a page. However, with Next.js, the page shows in the browser when JavaScript is not enabled. Interactions in the website still require JavaScript (like opening a modal or using the Link component), though.

Pre-rendering is the technique of rendering a page in advance. “In advance” here can mean two things for Next.js: **static generation** or **server-side rendering**.

### Static Generation

The static generation pre-rendering process generates your pages when you build your production application (`npm run build`). This process works for your application’s static content.

You can activate static generation for blog posts, for example. During that build, Next.js generates HTML files for each blog post page in advance (which may be from an API or manually written in the application).

This ability means Next.js can also work as a static site generator tool, similar to [Gatsby](https://www.gatsbyjs.com/).

Using client-side navigation (with the `Link` component, which we’ll learn about below) for these static pages makes your site faster. They are faster because they are static and Next.js also prefetches the content for other blog post pages. This prefetching makes navigation between these pages instant.

You can do static generation in Next.js with a page’s exported asynchronous functions [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) (for fetching data at build time) and [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) (for describing paths for dynamic pages).

### Server-Side Rendering

Not all content can be static. A Facebook or Twitter feed, for example, has constantly changing data that most likely will not remain the same when you refresh. The SSR pre-rendering concept works in this situation. Using [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) (an exported function on a page to fetch data as the page is requested), you can request data from an API or external service. This data passes into your page, and the code renders your page and delivers it to your browser.

As we mentioned earlier, your browser displays whatever it gets from the server even without JavaScript, but it requires JavaScript for interactions and other functions.

## Core Next.js Components for Building React Applications

Its makers built the Next.js framework to optimize your applications for search engines and make optimization in general seamless. As much as you can do without these components, it’s worth noting the benefits they offer. They make your application faster, more performant, and optimized.

There are three core Next.js components: the link component, image component, and head component.

### The `Link` Component

Next.js uses the link component for client-side navigation, that is, navigation that JavaScript handles on the client side. Here’s how you use the component:

```jsx
<Link href="/contact">
  <a>Contact us</a>
</Link>
```

The component does not exactly work as an anchor tag. It only serves as a wrapper for the anchor tag.

When you navigate to the contact page using this component, the browser does not reload and make another request to the server for the /contact route. On the current page (say, homepage), when the “Contact us” link (wrapped in the link component) appears in the viewport, even before the user clicks on it, Next.js already prefetches (in production) the code that page requires. When a user clicks the link, the contact page loads fast without making an additional request to the server.

In contrast, when you use an anchor tag directly, it causes a browser to reload and will not make prefetching possible.

### The `Image` Component

Using the `img` element leaves you to handle everything independently, from responsiveness to resizing to manually selecting different image formats for your application. The image component does all optimizations for you. Here’s how to use it:

```jsx
<Image src="source-to-image" width={600} height={600} alt="Alt text of image" />
```

The width and height values are in pixels. Alternatively, you can use the layout prop, which can be one of the following options:

- **fill**: width and height are 100% (and are not required as props any longer) to extend to the edges of the parent element
- **responsiveness**: width and height are bigger on big screens and smaller on small screens
- **fixed**: width and height do not change regardless of the screen size
- **intrinsic** (default): smaller size for a smaller screen but the original size for a large screen

The image component performs caching and optimization techniques on images, such as responsiveness (like in the layout prop) and resizing, and delivers multiple image formats depending on browser support. This component also lazy-loads images by default, thereby not affecting your page load time.

With the image component, optimization occurs as the browser requests page images (when a page loads), not during the production build. Doing this during the production build can affect build time, especially when your site contains many images.

### The `Head` Component

The head component provides an easier way to populate and update the head tag for your pages. Here’s how to use it:

```jsx
<Head>
  <title>My portfolio</title>
  <meta
    name="description"
    content="My portfolio website showing all my completed works"
  />
</Head>
```

With this Next.js component, you can populate a page’s head tag with different elements required for your SEO and seamless client-side navigation.

## Conclusion

Next.js is growing more popular as the team behind it keeps optimizing and improving performance for modern web applications. With the rise of different frontend solutions created to address various challenges, Next.js comes to the top as it optimizes applications for search engines, improves application performance using core components and in-built features like prefetching, and works both as an SSG tool and an SSR tool.

This article explored the main concepts and tools that make Next.js relevant to web development. Now that you know more about Next.js and its rendering capabilities, you can incorporate these elements into your next website or application. To learn more about Next.js, explore [the official website](https://nextjs.org/).
