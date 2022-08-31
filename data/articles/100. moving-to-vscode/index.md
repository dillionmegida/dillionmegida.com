---
title: "Moving to VS Code from IntelliJ IDEA"
date: "2001-08-31"
cover: "100-moving-to-vscode.png"
pageDescription: "Is VS Code a worthy alternative for IntelliJ IDEA? Well it depends on your needs as I address in this article"
tags: ["vscode"]
---

Here's a video version of this article if you prefer that: [Moving to VS Code from IntelliJ IDEA - Worth it?](https://youtu.be/W5qfSaFdXqQ)

There are numerous code editors and IDEs out there which come with different features, support, and interfaces.

Comparing editors with each other is usually difficult because there are numerous factors to be considered. One editor can be better than the other when A B C factors are examined, but it could be the other way around with X Y Z factors.

One product can meet the specific needs of an individual or company better than the other.

Let’s say you’re currently using IntelliJ IDEA, JetBrain's IDE (Integrated Development Environment) for writing productive Java, and you’re looking for alternatives to consider. VS Code can serve as a replacement.

In this article, I’ll share some features and benefits of VS Code that can be advantageous, based on the needs you may have, compared to IntelliJ IDEA, and how to also transition to VS Code seamlessly.

## Table of Contents

- [What is VS Code](#what-is-vs-code)
- [What is IntelliJ IDEA](#what-is-intellij-idea)
- [Features of VS Code](#features-of-vs-code)
- [Moving from IntelliJ IDEA to VS Code](#moving-from-intellij-idea-to-vs-code)
  - [Reasons why you may want to](#reasons-why-you-may-want-to)
  - [Steps involved in Transitioning](#steps-involved-in-transitioning)
- [Wrap up](#wrap-up)

## What is VS Code

[VS Code](https://code.visualstudio.com/) is a software product created for enabling developers to write code and build applications. It was released in 2015. It is referred to as a **text editor** (though some call it a code editor) which comes with some in-built features and due to its ease of customizability, supports different plugins and extensions.

## What is IntelliJ IDEA

[IntelliJ IDEA](https://www.jetbrains.com/idea/), released in 2001, is a full IDE (Integrated Development Environment) that contains almost all development features out of the box. This is one of the major differences between this product and VS Code.

IntelliJ comes pre-cooked with a lot of features. While VS Code has some features like Intellisense, Language Support, and Debugging to name a few, but requires a couple of extensions to be installed to get a full IDE experience.

## Features of VS Code

Let’s look at some important features of VS Code.

### 1. High Customizability

VS Code, as a text editor, also creates room for so much customizability to improve your experience. From [customizing the user interface](https://code.visualstudio.com/docs/getstarted/themes), [key bindings](https://code.visualstudio.com/docs/getstarted/keybindings), extended features for different languages, and so much more. You’ll find extensions that allow you to [spell check your code](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) and run [live servers](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to name a few.

### 2. Lightweight Editor

VS Code is a text editor that doesn't come with all the development tools you may need, though, it has some in-built features. This makes it a lightweight editor, and as a result, it uses less RAM and CPU usage. And it makes it possible to run multiple workspaces without experiencing lags, or slow responsiveness.

Also, most extensions you install have been optimized to not impact memory usage, unless you go overhaul bloating the editor with extensions that are heavy or unnecessary.

### 3. Command Line Interface Integration

The [in-built CLI integration](https://code.visualstudio.com/docs/terminal/basics) enables you to run your shell commands without leaving your editor. It also uses any zsh or bash configurations to give you the same CLI experience you will have if you’re using a different terminal application. You can use the CLI to start up your React projects, ssh into a server, run container scripts, and so on.

### 4. Support for multiple languages

As a text editor, [VS Code supports over 100 languages](https://code.visualstudio.com/docs/languages/overview). For most languages, you find in-built code definition and code completion. Also due to its customizability, you can create or install configurations that extend the features of different languages.

### 5. Different shortcuts that improve development speed

From simultaneously highlighting and editing multiple texts, to triggering multiple commands from the Command Dialog to global searching specific characters or patterns, and also with its intuitive interface, and lots more, you can greatly improve development speed.

## Moving from IntelliJ IDEA to VS Code

### Reasons why you may want to

#### 1. More Personalized Customizations

Asides from the existing plugins, themes, and configurations, it’s also easy to create extensions that suit your organization’s or personal needs. Extensions in IntelliJ 
[are created with Java](https://plugins.jetbrains.com/docs/intellij/creating-plugin-project.html#creating-an-intellij-platform-plugin-project) as the major language, while in VS Code, [are created with JavaScript](https://code.visualstudio.com/api/get-started/your-first-extension). JavaScript is a more accessible language for developers which makes it easier and faster to build plugins in VS Code than IntelliJ.

#### 2. Reducing Expenses

VS Code is a [free open-source project](https://github.com/microsoft/vscode) that supports multiple languages. With IntelliJ IDEA, you have the [Community Edition](https://www.jetbrains.com/idea/download/) which is free but doesn’t provide all the features you may need. The Ultimate version does but comes with a [recurring fee](https://www.jetbrains.com/idea/buy).

And with IntelliJ IDEA, when you pay, you may not have support for all the languages you may need. This means you have to purchase other JetBrains products or purchase the whole pack.

VS Code as a free tool allows you to work on different languages without having to leave the editor.

But this does not mean that IntelliJ IDEA is not worth paying for. If your team is heavily focused on java, a product that specializes in one major language such as IntelliJ IDEA could be more useful (in terms of features, Intellisense, and error reports) than a product that covers multiple languages.

However, you can still get an improved Java experience with specific VS Code Extensions.

#### 3. Multiple features available at your disposal through extensions

While VS Code has some in-built features, you can get a variety of features from the plugins created by the community to give you an effective IDE experience. A few of the extensions I’ll share are:

- [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) which contains different testing, building, and code completion extensions for Java applications
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) for collaborative coding with your colleagues or friends
- [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) for sharing your VS Code configurations (like installed extensions, keybindings, e.t.c) across the different machines you work with
- [Remote SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) for sshing into a remote server and interacting with files and folders using the editor on your physical device
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) which provides a rich experience for managing Git in your projects

#### 4. Access to a bigger community

Because VS Code is free and easily accessible by junior or senior developers, with [more than 14 million users which was reported as of February 2021](https://www.zdnet.com/article/visual-studio-code-how-microsofts-any-os-any-programming-language-any-software-plan-is-paying-off/), it has a large and continuously growing community. From extensions to articles, to videos, to many other forms of resources, you can easily get solutions to your problems, extensions for your needs, and answers to your questions.

Some use VS Code for building websites. Some for writing documentation. Some for managing Docker containers. People use VS Code for different things, so you’re assured you’re not alone in any path you follow.

#### 5. Easy Adoption especially for new users

Also because of the community and the easy-to-use interface, new users coming from Sublime, Atom or even IntelliJ can begin using VS Code.

#### 6. More control over features, less Memory usage

Because the product is lightweight, you have more control over the features you want. You only install extensions you need. This results in less memory usage as you do not have unnecessary features, plugins, or tools that you may not need.

#### 7. Smooth Transition to VS Code

After considering the aforementioned benefits, another benefit is that you can experience some things you are already used to in VS Code.

As developers, it can be mentally challenging to get used to a new interface, especially when considering the shortcuts you have been used to. Different extensions exist for different purposes, so you trust the community to also create a seamless process for transitioning from IntelliJ IDEA.

Among the many helpful extensions, there are, there’s also the [IntelliJ IDEA Keybindings](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings) extension which allows you to get most of your shortcuts after switching.

### Steps involved in Transitioning

After installing VS Code, there are a couple of extensions to install for a smooth transition

#### 1. Replicating Java Capabilities in IntelliJ IDEA

To have the same Java features as in IntelliJ IDEA, you can install the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack). This pack comes with a couple of extensions to provide Intellisense, debug, test, and management for your Java programming.

#### 2. Replicating other IntelliJ IDEA top features

Asides from the Java features, IntelliJ provides other features for improving your editor experience. Most of them can also be replicated in VS Code. Let's look at some of these replications:

* For the [Local History feature in IntelliJ](https://www.jetbrains.com/help/idea/local-history.html) which allows you to manage and revert to different versions of files, the [Local History VS Code extension](https://marketplace.visualstudio.com/items?itemName=xyz.local-history) gives you the same experience.
* IntelliJ also has [Code with Me](https://www.jetbrains.com/help/idea/code-with-me.html) which allows developers to collaborate on the same project from different locations. VS Code has [Live Share Extension Pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) which supports live collaborating and audio conversations.
* IntelliJ makes [navigating changes, commits, and branches in Git](https://www.jetbrains.com/help/idea/investigate-changes.html) seamless. Git comes with in-built Git support which can be limited depending on your usage. However, the [GitLens extension](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) also makes navigating Git systems a breeze.
* IDEA supports linting tools like [Eslint](https://www.jetbrains.com/help/idea/eslint.html) for providing linting rules that maintain specific code standards in projects. [VS Code also has Eslint support](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for a similar experience.
* Also as I mentioned earlier, the keymaps and shortcuts in IDEA can be replicated with the [IntelliJ IDEA Keybindings](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings) extension.

With these extensions installed, you get a similar experience in IntelliJ IDEA, while your other needs, as seen in the reasons section, are met.

## Wrap Up

To add; you are not exactly paying for nothing in IDEA. This article doesn't try to say, everything you pay for in IDEA, you can get for free in VS Code.

IntelliJ is a pretty cool and top-tier product, that offers you value for your money. Some companies and developers enjoy the advanced features it provides, the IntelliSense, completions, and suggested fixes--experiences they may never be able to get in a different editor

But here are two things to note as someone considering moving:

1. You may not need all the advanced features you pay for. Not only do they consume more resources on your device, but it also means you are not making the most of your money. If you’re not someone who is tied to those advanced features that VS Code doesn’t have, your move may be worth it.

2. The community and ecosystem around VS Code keep growing so sooner or later, you’d find different features replicated via extensions.

This article also isn't trying to say VS Code is better than IntelliJ IDEA. As I said at the beginning, all things considered, I don’t think there’s one better tool over the other. While one gives you features in-built, the other gives you through extensions. Each of them has its benefits and disadvantages.
