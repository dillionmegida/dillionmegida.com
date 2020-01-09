---
title: "Web Share API"
date: "2020-01-09"
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1578574736/images/blogs_cover/web-share-api_eifaum.jpg"
pageDescription: "The Web Share API enables native sharing on webpages. It provides access to various applicatins which allows sharing media"
pageKeywords: "api, web share api, native share api, native api, native sharing, web native sharing, web api, sharing api, web sharing api"
tags: ["javascript", "api"]
---
The margin between web apps and mobile apps is greatly reducing as similar functionalities between them increases. The advent of Progressive Web Applications (PWA) has a great effect on this.

Talk about sharing? Often times when developing a website, you'd want to users to be able to spread your content accross their audience thereby widening your own audience.

In previous times, you'd have to get several social media APIs which allows posts to be created directly from the URL. Some of them are easy to configure while others are not. As a matter of fact, not all social medias have provided such APIs. Examples of applications with this ability are Twitter, LinkedIn, Facebook and few others.

But on native applications, when the share button is clicked, access is given to variety of applications which allows sharing. How about giving websites this ability? 🤔 

## Native Sharing on the Web 🔥 
The Web Share API provides access to the variety of applications which allows sharing just as native applications.

## Browser Compatibility
From [caniuse.com](https://caniuse.com/#search=web%20share%20api), this diagram represents the browser compatibilities.

For Desktop;
<img src="https://res.cloudinary.com/dillionmegida/image/upload/v1578574624/images/blogs_cover/others/desktop_agzcyf.jpg" alt="Browser compatibility of web share api for desktop" width="100%" />

For Mobile Phones;
<img src="https://res.cloudinary.com/dillionmegida/image/upload/v1578574624/images/blogs_cover/others/phone_zwxqed.jpg" alt="Browser compatibility of web share api for mobile phones" width="100%" />
As seen above, Chrome 79 for Android, Safari 12.1 for desktop, Safari 12.2 on iOS are compatible with this API.

### With this API,
- The number of share buttons (for different media) are reduced on a webpage as only one share button can handle everything.
- You have access to varities of applications rather than the few medias which provides their own APIs. This also allows the user to share in different media.
- You webpage speed can also be increased because extra script for handling other media are removed.

### However,
The version of the browser matters. Any version lower than the versions stated above will not have access to this functionality.

## How to Use The API
### Requirements
The two major things required before this API can be used are:
- Your website has to served over HTTPS. This is for security purposes. Localhost is an exception for allowing local development.
- The API has be called in response to a user action usually click event. This is necessary to prevent abuse of the API.

### Syntax
```js
navigator.share(data)
.then(() => {
    // some codes
})
.catch(() => {
    // some codes
});
```
The data is an object which contains the `url`, `title` and `text` like so;
```js
let data = {
    url: "https://dillionmegida.com",
    title: "A title to be shared along with the url",
    text: "Optional, represents extra text to be shared"
}
```
The API returns a promise. It rejects if the data is not correctly specified or if the user cancels the sharing. 

### Examples
Let's share this article which you are reading now.
```js
let articleUrl =  document.querySelector('link[canonical]') ?
    document.querySelector('link[canonical]').href
    : document.location.href;
let articleTitle = document.title;
let extraText = "Check out this article!"
let articleData = {
    url: articleUrl,
    title: articleTitle,
    text: extraText
}
```
For the url, we check if there's a canonical URL and if there isn't, it defaults to the current link. The title represents the title of the article - "Web Share API - Dillion's Blog" and the text is just extra information we want to add while sharing.

Let's share the article. For example, let's say there is a button on the page with the id of "shareBtn". We can do the following.
```js
let shareBtn = document.querySelector('#shareBtn');
if(!navigator.share) {
    shareBtn.style.display = 'none';
}
shareBtn.addEventListener('click', () => {
    navigator.share(articleData)
    .then(() => {
        console.log("Article shared!")
    })
    .catch((err) => {
        console.log(`Article could not be share because ${err}`)
    })
})
```
First we check if the share API is supported. If it isn't, I do not think there is any reason showing the button. In this case, you could provide the limited media options.

Next, we add an event listener of click. When the button is clicked, the API is triggered. If successful, "Article shared!" is logged to the console. Else, the article would not be shared and the reason would be displayed in the console.

You can do more than showing messages in the console. An example is displaying a dialog.

## Conclusion
This is amazing right? 🙂 

If you aren't adopting it on your website already, I guess you've seen reasons why you should.