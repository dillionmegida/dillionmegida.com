---
title: "10 Gatsby Plugins To Use For Your Gatsby Blog"
date: "2020-01-20"
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1579494478/images/blogs_cover/gatsby-plugins_horpoc.jpg"
pageDescription: "Here are 10 Gatsby plugins which makes creating contents easy and effective. Some of them are difficult to configure manually but these plugins have been created to make their implementation easy."
pageKeywords: "gatsby, gatsby plugins, gatsby-plugin-google-analytics, gatsby-remark-images, gatsby-remark-prismjs, gatsby-plugin-disqus, gatsby-plugin-manifest, gatsby-plugin-sitemap, gatsby-plugin-dark-mode, gatsby-plugin-feed, gatsby-plugin-netlify-cms, gatsby-remark-embedder, plugins for gatsby blog"
tags: ["gatsby"]
---

My early days with TypeScript were not so cool. I didn't really understand its relevance, so I didn't use it so much in my applications. But as soon as I got the hang of its beauty, I've never liked vanilla JavaScript again 😶. TypeScript is awesome, trust me!

For every new JavaScript project, I make sure I start it with TypeScript. And for existing projects that I have to work on again, I try to convert them to TypeScript.

I've been wanting to convert my blog too for a while, but thinking of the stress that comes with converting (renaming files, adding types, resolving warnings like 'this variable is implicitly `any`') influenced my procastination to do it. I finally did it yesterday, spent ~3hrs (never expected this tbh), and here I am, writing this article to document the process so that someone else doesn't spend that much time.

In addition to learning how to seamlessly convert, I hope you'll also learn some of the internals of Gatsby and maybe TypeScript.

## 1. Setting up TypeScript

Out of the box, Gatsby supports TypeScript. So for start, I thought I did not need to install anything. I only converted my `.js` files to `.ts` or `.tsx` (for React TypeScript). But later on, I realized I had to explicitly install [typescript](https://www.npmjs.com/package/typescript) when I used `ts-node` (you'll see that later in this article).

Also, I needed typescript to set up my `tsconfig.json`.

```shell
npm i --save-dev typescript
npx typescript --init
```

The second command setups up `tsconfig.json`, a file which sets up the rules for how TypeScript should work with your application. Here's the [documentation for tsconfig](https://www.typescriptlang.org/tsconfig) where you can find the different options.

For my application, I used this:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "jsx": "preserve",
    "strict": true,
    "esModuleInterop": true
  },
  "exclude": ["node_modules", "public", ".cache"]
}
```

## 2. Missing declaration file

Although Gatsby has declarations for React and some other libraries by default, I used some other plugins of which their typings were not present. One of them was `react-helmet`. So I had to explicitly install the typings for that (`npm i --save-dev @types/react-helmet`) and every other plugin.

But not all open source libraries have types. And since TypeScript could find the type declarations for such libraries, my IDE kept yelling at me, like this:

[...image about missingm declaration file]

As the error shows, TypeScript adds an implicit `any` to the library as it could not find a declaration file.

There are two ways to stop this warning.

One, is to add the `noImplicit` option to `tsconfig.json` like this:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "jsx": "preserve",
    "strict": true,
    "esModuleInterop": true,
    "noImplicitAny": false // highlight-line
  },
  "exclude": ["node_modules", "public", ".cache"]
}
```

This tells TypeScript to be quite about any types.

The second way (which I did) is to add a `typings` directory at the root, and in it, a a `declaration.d.ts` with the following code:

```ts
declare module <module-name>
```

The above creates a type declaration for `module-name`. Since I didn't add any typings, everything imported from this module will be `any`.

## 3. `.scss` imports throws a warning

[...image about scss]

TypeScript by default supports `.ts` and `.tsx` imports and complains when a different file type is imported. To fix this, I added the following to the declaration file created above:

```ts
declare module "*.scss"
```

Just like in the previous section, this creates a type declaration for `.scss` files.

## 4. Importing from a `.js` file into a `.tsx` file

TypeScript and Gatsby will not complain if I use `.js` in some places and `.tsx` in some other places. The application would run just fine. But I experienced errors in places where I was importing from a `.js` file into a `.tsx` file. Here's one of them:

[...image about importing header]

Here, the header component was created in `Header.js`, and I was trying to use it in a `Layout.tsx` file.

The solution to this, was to change the Header file to `Header.tsx`.

This particular section took a whole lot of my time because the shared components and functions. I ended up converting 95% (if not 100) of `.js` to `.tsx` and fixing the type warnings.

## 5. Implicit `any` throws warning in function arguments

[...image about implicit any]

Without explicitly adding types, TypeScript implicitly handles eveery function argument as `any`-typed. In addition, it throws a warning. There are two solutions to this:

One way, just like we say in the "Missing declaration file" section, is to add the `noImplicitAny` option with the value `false` to `tsconfig.json`.

The second way, which I did, was to explicitly add a type. It could be the `any` type (`(props: any)`) or something more specific to the argument.

## 6. TypeScript for Gatsby Node APIs

After fixing all warnings, I ran `gatsby develop` and it failed. The reason for this was, in `gatsby-node.js`, I used the `createPage` function to dynamically create the pages for all my articles in Markdown, and the template I was using was a `blog.js` file.

Having changed all my `.js` to `.tsx`, `blog.js` was not found. Therefore, creating pages with that template threw the error.

I changed the `blog.js` to `blog.tsx` and expected that everything would work, but nope. More errors. I was trying to access a TypeScript file in a JavaScript environment so obviously, that won't work.

I changed `gatsby-node.js` to `gatsby-node.ts` but I still had errors. The reason for this errors was, Gatsby did not see a `gatsby-node.js`file, and it built the site without it. In `gatsby-node.ts`, I created some GraphQl queries which were accessed by the components. Since the file was not executed, those queries did not exist, thereby causing errors.

Then I realized that the `.ts` file needs to be compiled somehow to `.js` so that Gatsby could pick it up and execute it correctly.

I looked for several solutions online, and this worked for me: [TypeScript + Gatsby config and node API](https://gist.github.com/JohnAlbin/2fc05966624dffb20f4b06b4305280f9)
