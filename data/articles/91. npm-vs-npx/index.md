---
title: "NPM vs NPX | Understanding the difference"
date: "2022-06-02"
cover: "91-npm-vs-npx.png"
pageDescription: "NPM and NPX are two Node tools used to manage packages from the NPM registry. Learn about their differences in this article"
pageKeywords: "npm, npx, create-react-app, npm registry, npm install, download packages, install packages"
tags: ["npm"]
---

NPM and NPX are two Node tools used to manage packages from the NPM registry. The significant difference between both tools is that NPM is used to **install** (or download) packages, while NPX is used to **execute** packages.

Let's take the [create-react-app](https://www.npmjs.com/package/create-react-app) package as an example to understand these Node tools.

**create-react-app** is a Node package used to bootstrap a React application upon which you can then add your packages and build your components.

To use this package with NPM, you have to install the package globally and then execute it like this:

```bash
npm install create-react-app -g
```

After installing the package, then you can execute it by running:

```bash
create-react-app my-app
```

It works differently with NPX. NPX skips the download process and executes it directly. With NPX, you will run the package like this:

```bash
npx create-react-app my-app
```

This command will execute the package directly from the NPM registry.

## Should you use NPM or NPX?

So which one should you use? My recommendation:

If you’re using a global package often, it would be helpful to install it with NPM so that executions can be faster (since it’s already downloaded).

But if you only want to use a global package one time (or rarely), and you don’t want it downloaded to your device (and also occupy storage), you can use NPX to execute it directly.
