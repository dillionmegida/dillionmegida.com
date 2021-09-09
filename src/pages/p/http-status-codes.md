---
title: "HTTP Status Codes and their meanings simplified"
date: "2021-09-09"
cover: ""
pageDescription: "In this article, I simplified some of the common HTTP Status Codes and examples of where to use them"
pageKeywords: "http status codes, status codes, 200, 404, 400, 500, client errors, server errors"
tags: ["javascript", "http"]
---

There are a lot of HTTP status codes and sometimes it can be hard to keep track of all of their meanings.

In this article, I'll share some of the most common/important status codes and their meanings along with some use cases.

## TLDR / Table of Contents

- [200](#200-ok): Successful request
- [201](#201-created): A new resource was created after successful request
- [202](#202-accepted): A request was accepted for processing, but the processing has not been completed or is in progress
- [204](#204-no-content): Successful request but no content to return
- [301](#301-moved-permanently): URL has been permanently moved which helps seo index the new page and new URL is returned in the response
- [302](#302-found): Temporary redirect, which does not affect SEO
- [304](#304-not-modified): The server redirects the client to the client's cached version of the resource
- [400](#400-bad-request): Bad Request
- [401](#401-unauthorized): Unauthorized (unathenticated)
- [403](#403-forbidden): Authenticated but may not have access to some resources
- [404](#404-not-found): Resource not found
- [405](#405-method-not-allowed): Method used during request is not allowed
- [410](#410-gone): Resource not found, and is assured to be gone
- [415](#415-unsupported-media-type) Unsupported Media Type
- [429](#429-too-many-requests) Too Many Requests
- [500](#500-internal-server-error) Internal Server Error

## More details

### 200 OK

200 is the general status code for successful requests. The exact meaning of "success" is dependent on the request method used. If you make a GET request, you'll get a response with the content of the requested resource. If you make a POST request, you'll get a response with the content of the newly created resource after successful creation.

Examples:

- Making a GET request to get the information of a product
- Making a POST request to create a new product

For PUT, DELETE, and PATCH requests, if you get a response with the content of the updated resource, that can be a 200 but for cases where you do not get such content, a different variation of 20\* (as we'll see below) can be used.

### 201 Created

A 200 may seem sufficient for a POST request, but a 201 better describes that not only was the request successful, a new resource was also created. This new resource may also be returned in the body of the response message.

### 202 Accepted

There are some cases where you may want to send a 202 response. For example, if you are requesting from a server that is not yet available, you may want to send a 202 response to indicate that the request was accepted but the processing is not yet complete.

In some other cases, another server may be responsible for handling that request, and because the other server cannot communicate with the client, this response would be sent from the first server to indicate that the request was accepted and the processing is in progress.

### 204 No Content

This response code is used when the server has processed the request successfully but there is no content to send in the response message body.

Examples:

- Making a DELETE request to delete a product
- Making a PUT request to update a user's bio

In these examples, you'd notice that the client doesn't need content back in the response. All the client needs to know is that the request was successful, and then there could be a popup showing the user it was successful.

Also, the "No content" idea in 204 means that the client doesn't need to navigate from their current view. It's a response that isn't meant to affect the user's view.

### 301 Moved Permanently

30\* is the family of redirects. 301 is the response code for a permanent redirect. It is used when a requested resource has been moved permanently to a new URI. In the response, the new URI is provided and the browser should redirect the user to the new URI. This status code can be cached by the browser to easily navigate the user when such a request is made again.

Example:

- Making a GET request to a product that has been moved permanently to a new URI

This status code also helps search engines to properly index the new location of the page.

### 302 Found

While 301 is permanent, 302 is a temporary redirect. The server returns this response code when the requested resource has been temporarily moved to another URI. This is often used to prevent a search engine from indexing the page.

### 304 Not Modified

For this status code, the server redirects the client to the client. Here's what this means: the server returns this response to the client if the client has a cached version of the requested resource. This is useful because the server would not want to re-send a response that the client already has.

### 400 Bad Request

400 is a general status code for client errors. The server in this case cannot or will not process the request due to something that is perceived to be a client error.

Examples:

- Making a PUT request to a product that doesn't exist
- Making a POST request with missing parameters

> **Note:** If you're unsure of which status code to use for client errors, you should use 400.

### 401 Unauthorized

401 is a status code that implies that the request lacks valid authentication credentials for the target resource. This is most useful when a user who isn't logged in tries to access a private resource.

Examples:

- Making a GET request to a private resource that requires a user to be logged.
- Making an action that requires a user to be logged in

### 403 Forbidden

403 is used when a request is "forbidden" 😅. It sounds somewhat serious though. It's similar to 401 Unauthorized. The difference here is authorization doesn't just apply to authentication. That's one level. 403 Forbidden is used when the user is authenticated but doesn't have the necessary permissions to access the resource.

Examples:

- A free tier user trying to access a paid resource
- A "user" trying to access an "admin" resource (very very forbidden haha)

Yes, this code can also be used in cases of roles and permissions where a user is trying to access a resource that isn't made available for them (depending on specific conditions).

### 404 Not Found

And the most popular status codes of them all (after 200)--404. 404 is used when the server cannot find the requested resource. The resource may have been deleted or the URL may be incorrect.

Examples:

- Making a GET request to a product that doesn't exist
- Making a GET request to a page with a broken URL

> **Note:** in some cases, [410](#410-gone) should be used instead of 404.

### 405 Method Not Allowed

Different resources have different supported methods. For example, a resource may only allow GET requests, but a different resource may allow POST requests. Using 405 informs the client that they have sent a request with an inappropriate/unapplicable method.

### 410 Gone

A 410 status code is similar to a 404. The difference here is, the server is sure that the resource is GONE. For 404, the resource may be gone, it may be a broken link--the server doesn't know. For 410, there is that guarantee, and the resource may likely be gone forever.

A good way to know this is if the server, for example, does not delete a product during a GET request, but instead makes it invisible (`is_deleted` property set to `false`). This way, the server knows the product is gone.

### 415 Unsupported Media Type

A client can send a request with a body that is not supported by the server. For example, a client may send a request with a body that is not a JSON object, which will be required by the server. It could be a file of an unsupported format or a request with a body that is not a form-data object.

415 is the status code to handle such situations.

### 429 Too Many Requests

This status code is used when the client sends too many requests in a given amount of time. For example, if you're making a GET request to a resource that is only available to a limited number of users, you may want to send a 429 response if the user has exceeded the limit.

### 500 Internal Server Error

As 40\* is for client errors, 50\* is for server errors and 500 is a general status code for server errors. In this case, the client may have sent the right data, right parameters, is authorized, requesting an existing path, but for some reason, the server cannot fulfill the request.

For example:

- The server is down
- The server is overloaded

500 is usually used in an error-catch block. In this case, using JavaScript, for example, you have something like:

```js
try {
  // try to process request
} catch (error) {
  // something went wrong
  // log the error
  // send 500 response
}
```

## Conclusion

There are many subsets of the 500 status code family. Many subsets of the 200 and 300 too. There's a whole lot of status codes for different minor and major situations and it's hard to know them all.

In this article, I've tried to cover the most common status codes. If you have any other status code that you think is important, please let me know.

You can learn more of these status codes [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
