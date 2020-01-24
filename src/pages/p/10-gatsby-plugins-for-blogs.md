---
title: "10 Gatsby Plugins To Use For Your Gatsby Blog"
date: "2020-01-20"
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1579494478/images/blogs_cover/gatsby-plugins_horpoc.jpg"
pageDescription: "Here are 10 Gatsby plugins which makes creating contents easy and effective. Some of them are difficult to configure manually but these plugins have been created to make their implementation easy."
pageKeywords: "gatsby, gatsby plugins, gatsby-plugin-google-analytics, gatsby-remark-images, gatsby-remark-prismjs, gatsby-plugin-disqus, gatsby-plugin-manifest, gatsby-plugin-sitemap, gatsby-plugin-dark-mode, gatsby-plugin-feed, gatsby-plugin-netlify-cms, gatsby-remark-embedder, plugins for gatsby blog"
tags: ["gatsby"]
---
## Table of Contents

- [Intro](#intro)
- [gatsby-plugin-google-analytics](#google-analytics)
- [gatsby-remark-images](#remark-images)
- [gatsby-remark-prismjs](#prismjs)
- [gatsby-plugin-disqus](#disqus)
- [gatsby-plugin-manifest](#manifest)
- [gatsby-plugin-sitemap](#sitemap)
- [gatsby-plugin-dark-mode](#dark-mode)
- [gatsby-plugin-feed](#feed)
- [gatsby-plugin-netlify-cms](#netlify-cms)
- [gatsby-remark-embedder](#embedder)
- [Conclusion](#conclusion)

<h3>
    <a class='offset_link' id='intro' name='intro'></a>
    Intro
</h3>

In this article, I'd share 10 plugins (listed above) you can use on your gatsby blog to improve it. These are plugins I've used (some of which I currently use) which I find helpful.

You'd need to already have (or hoping to have) a blog running which is built with Gatsby.

If you don't but are hoping on creating a blog, here's why you should use Gatsby.<br/>
Gatsby actually makes creating blogs easy. It uses React for the frontend and GraphQL for data. You can also use several plugins to suit your needs so all you have to worry about is the application itself and your contents. You can create a blog and host for free on Netlify by following this tutorial - [Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/part-zero/)

Let's look at the plugins in detail.

<h3>
    <a class='offset_link' id='google-analytics' name='google-analytics'></a>
    gatsby-plugin-google-analytics
</h3>

What's the joy in writing posts without people viewing it? Even if people were, how would you know? Personally, I get encouraged to put out more contents when I notice how many people go through them.

Google Analytics is google's free web analytics service that allows you to analyze in-depth detail about the visitors on your website. It allows you to see the number of views on your posts as well as other pages. Read more about Google Analytics here - [10 Good Reasons Why You Should Use Google Analytics](https://medium.com/@dineshsem/10-good-reasons-why-you-should-use-google-analytics-699f10194834)

This plugin is used to add google analytics to your blog. You can monitor all your pages and also view insights in the Google Analytics dashboard. Read more - [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics)
<h3>
    <a class='offset_link' id='remark-images' name='remark-images'></a>
    gatsby-remark-images
</h3>

This plugin allows processing images in markdowns so that they can be used in production build. This allows images to be stored in same folder with the post and referenced with a relative URL. It also generates multiple versions of images with different widths so that the right size of the image would also be loaded for the device.

Read more - [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)

<h3>
    <a class='offset_link' id='prismjs' name='prismjs'></a>
    gatsby-remark-prismjs    
</h3>

This plugin adds syntax highlighting to code blocks (of several languages) in markdowns using [PrismJS](http://prismjs.com/). For example, the following HTML and JS code blocks:
```html
<html>
    <head>
        <title>10 Gatsby Plugins To Use On Your Gatsby Blog</title>
    </head>
</html>
```
```javascript
console.log("10 Gatsby Plugins To Use On Your Gatsby Blog")
```
Read more - [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/).

<h3>
    <a class='offset_link' id='disqus' name='disqus'></a>
    gatsby-plugin-disqus
</h3>

Added to the fact that you can see the number of views on your posts, you would also like to enable engagements from users on your posts. For example, comments from users.

[Disqus](https://disqus.com) is a service which enables this. With the free tier, you are able to get  engagements from users. Setting up disqus manually on your site could be difficult or time taking.

This plugin however, makes setting up Disqus on your blog easy.  Read more - [gatsby-plugin-disqus](https://www.gatsbyjs.org/packages/gatsby-plugin-disqus/)

<h3>
    <a class='offset_link' id='manifest' name='manifest'></a>
    gatsby-plugin-manifest
</h3>

Progressive Web Applications (PWAs) are web applications which operate similarly to native applications. One of the features of native applications which PWAs also integrates is that applications are placed on users device screen.

Web app manifest which is a requirement for PWAs is used to achieve this.

This plugin creates a web app manifest which allows users to add your site to their home screen thereby making it easily accessible. The manifest provides configuration and icons to be used on the app. Read more - [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/)

This plugin also works with [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/) which adds support for making a Gatsby site work offline and more resistant to bad network connections. This function is powered by service workers which caches visited pages of the site when the worker is installed.

<h3>
    <a class='offset_link' id='sitemap' name='sitemap'></a>
   gatsby-plugin-sitemap
</h3>

This plugin creates a sitemap for your Gatsby plug. What is a sitemap? A sitemap makes it easy for google to find all pages within your site. Remember that google ranks web pages too, not just websites.

Read more -  [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/)

<h3>
    <a class='offset_link' id='dark-mode' name='dark-mode'></a>
   gatsby-plugin-dark-mode
</h3>

You'd always want more readers to come to your blog right? One means of achieving this is to make reading convenient for them. While some users are okay with bright screens, some prefer the most common nowadays - dark screens (also called dark mode).

With this plugin, creating a dark theme on your blog becomes easy. Read more - [gatsby-plugin-dark-mode](https://www.gatsbyjs.org/packages/gatsby-plugin-dark-mode/).

<h3>
    <a class='offset_link' id='feed' name='feed'></a>
   gatsby-plugin-feed
</h3>

This plugin helps create an RSS feed (or multiple feeds) for your Gatsby site. RSS Feeds are used by readers who do not want to always check your site for new contents. With the feed, content comes in one centralized location. When they subscribe to your feed, they will get notified every time a new content is published.

Read more - [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/)

<h3>
    <a class='offset_link' id='netlify-cms' name='netlify-cms'></a>
   gatsby-plugin-netlify-cms
</h3>

What about a content management system where you can easily manae contents? Where you also wouldn't have to always open your code editor to add posts, then add files, commit and push to repository?

[Netlify CMS](https://www.netlifycms.org/docs/intro/) allows you to manage contents (add, update and delete) easily.

With this plugin, Netlify CMS is integrated into your Gatsby blog. Read more - [gatsby-plugin-netlify-cms](https://www.npmjs.com/package/gatsby-plugin-netlify-cms). I also have an article on this. Check it out here - [Gatsby with Netlify CMS](/p/gatsby-with-netlify-cms/)

<h3>
    <a class='offset_link' id='embedder' name='embedder'></a>
    gatsby-remark-embedder
</h3>

While writing blogs, you'd most times want to embed external resources. This could youtube videos, codepens, tweets and on.

This plugin is used embed well known services by their URL.. Read more - [gatsby-remark-embedder](https://www.gatsbyjs.org/packages/gatsby-remark-embedder/)

I also created something similar - [gatsby-remark-liquid-tags](https://www.gatsbyjs.org/packages/gatsby-remark-liquid-tags/) which allows embeds of codepens and youtube videos (at the moment).

<h2>
    <a class='offset_link' id='conclusion' name='conclusion'></a>
    Conclusion
</h2>
These are plugins which makes creating contents easy and effective. You can give any of them a try.