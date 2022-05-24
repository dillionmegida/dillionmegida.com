---
title: "10 Useful String Methods in JavaScript"
date: "2022-05-24"
cover: "88-javascript-string-methods.png"
pageDescription: "Here are 10 useful JavaScript String Methods for different purposes in your applications."
pageKeywords: "javascript, string, split, replace, match, startsWith, endsWith, toUpperCase, toLowerCase, includes, substring, search, charAt, trim, string.replace, string.match, string.startsWith, string.endsWith, string.toUpperCase, string.toLowerCase, string.includes, string.substring, string.search, string.charAt, string.trim"
tags: ["javascript"]
---

In JavaScript, the `String` Constructor has many methods that all strings inherit. These methods are helper functions that serve different purposes.

In this article, I'll share ten helpful string methods.

## TLDR

- [split](#split): to split a string into an array of substrings
- [replace](#replace): to replace substrings in a string
- [match](#match): returns an array of substring(s) that match a RegEx pattern
- [startsWith and endsWith](#startswith-and-#endswith): for asserting if a string starts with or ends with a substring respectively
- [toUpperCase and toLowerCase](#touppercase-and-tolowercase): for converting strings to uppercase and lowercase respectively
- [includes](#includes): for checking if a substring can be found in a string
- [substring](#substring): for slicing out a part of a string
- [search](#search): returns an index of the first substring that matches a regex
- [charAt](#charat): returns the *char*acter **at** a specified positoin
- [trim](#trim): to remove whitespace from both ends of a string

Read further to learn about these methods in detail.

## 10 JavaScript String Methods

### .split()

This method is used to split a string into an array of substrings based on a specified breakpoint. Here's the syntax:

```js
string.split(breakpoint)
// breakpoint can be a string or a Regex
```

It returns an array of the splitted substrings.

This method accepts either a string to use as the breakpoint like this:

```js
const string = "Hello world, Holla"

const breakpoint = " " // a space breakpoint

const splitted = string.split(breakpoint)

console.log(splitted)
// ["Hello", "world,", "Holla"]
```

And it can accept a Regex as the breakpoint. The characters in the string that match the regex will be used as the splitter for the string like this:

```js
const string = "Hello world, Holla"

// regex that matches characters e or o
const breakpoint = /e|o/

const splitted = string.split(breakpoint)

console.log(splitted)
// [ 'H', 'll', ' w', 'rld' ]
```

As you would notice, the regex matches the "e" in "Hello", the "o" in "Hello" and the "o" in "world". It uses the matches as breakpoints for the string.

### .replace()

This method is used to replace the substrings in a string with new strings. Here's the syntax:

```js
string.replace(searchValue, replaceValue)
// searchValue can be a string or a Regex
// replaceValue is a string
```

It returns a new string with the replaced substring(s).

The `replaceValue` replaces the substrings in the string that match the `searchValue`.

The `searchValue` can be a string like this:

```js
const string = "hello world"

const searchValue = "hello"

const replaceValue = "holla"

const replaced = string.replace(searchValue, replaceValue)

console.log(replaced)
// holla world
```

or with a RegEx like this:

```js
const string = "hello world"

const searchValue = /e|o/g

const replaceValue = "--"

const replaced = string.replace(searchValue, replaceValue)

console.log(replaced)
// h--ll-- w--rld
```

The regex, in this case, has to have the "g" flag so that it matches all occurrences of the matched strings. Without the "g" flag, only the first matched string will be replaced.

The regex matches an "e" or an "o" and as you can see in "hello" and "world", the matched characters are replaced with double hyphens.

### .match()

This method is used to find substring(s) in a string that matches a RegEx pattern. Here's the syntax:

```js
string.match(regex)
```

It returns an array of:

- the first matched substring (along with other properties) if the `g` flag is not in the regex
- of all matched substrings (with no express properties)) if the `g` flag is in the regex

Here's an example:

```js
const string = "Hello world"

const regex1 = /(e|o).{1}l/

const regex2 = /(e|o).{1}l/g

const match1 = string.match(regex1)
console.log(match1)
// [ 'ell', 'e', index: 1, input: 'Hello world', groups: undefined ]

const match2 = string.match(regex2)
console.log(match2)
// [ 'ell', 'orl' ]
```

Both regex patterns are to match a substring with either an **e** or **o**, a character of any type, followed by the character "l".

The first pattern does not have the global flag, so you can see from the output an array with two items, 'ell' (the matched substring) and 'e' (the matched character in the brackets), along with other properties.

The second pattern, which has a global flag, returns an array of all substrings in the string that match the pattern.

### .startsWith() and .endsWith()

As the name implies, these methods are respectively used to check if a string starts with or ends with a substring. Both methods are case-sensitive.

**For startsWith**, this can be at the beginning of the string by default, or you can also specify a position to start checking from. Here's the syntax:

```js
string.startsWith(substring, position)
// position is optional and defaults
// to 0 index
```

The return value is `true` or `false` if the string starts with the substring or not.

Here's an example:

```js
const string = "Hello world"

const check1 = string.startsWith("ello")
// false

const check2 = string.startsWith("ello", 1)
// true
```

In the second check, using the position index 1, the `startsWith` method starts checking from the second character and returns true because the second character to the right begins with 'ello'.

**For endsWith**, this can be from the end of the string by default, or you can also specify an end point to start checking from. Here's the syntax:

```js
string.endsWith(substring, length)
// length is optional and defaults
// to string.length
```

The return value is `true` or `false` if the string ends with the substring or not.

Here's an example:

```js
const string = "Hello world"

const check1 = string.endsWith("worl")
// false

const check2 = string.endsWith("worl", string.length - 1)
// true
```

In the second check, using the specified length argument is `string.length - 1`. This means the `endsWith` method starts checking from the "l" character as that is the character at the specified length and returns true because the last character to the left ends with 'worl'.

### .toUpperCase() and .toLowerCase()

As the name implies, both methods are used to convert a string to uppercase and lowercase, respectively. Their syntax is:

```js
string.toUpperCase()
string.toLowerCase()
```

Their return values are the string (the method is called upon) in uppercase and lowercase, respectively. Examples:

```js
const string = "Hello world"

const upper = string.toUpperCase()
// HELLO WORLD

const lower = string.toLowerCase()
// hello world
```

### .includes()

This method checks if a substring can be found in a string. The syntax:

```js
string.includes(substring, position)
// position is optional and defaults
// to 0
```

Similar to the [startsWith](#startswith-and-endswith) method, it has a `position` argument that specifies the point from which the method should start checking.

The return value is `true` if the substring can be found; else, `false`. For example:

```js
const string = "Hello world"

const check1 = string.includes("llo")
// true

const check2 = string.includes("llo", 4)
// false
```

For the second check, `includes` starts checking from position 4, the "o" character after "ll", so it doesn't find the "llo" substring and returns `false`.

### .substring()

This method is used to cut out a substring from an entire string. Here is the syntax:

```js
string.substring(indexStart, indexEnd)
// indexEnd is optional, and
// defaults to the length of the string
```

The return value of this string is the sliced out substring depending on the specified start and end position. Here's an example:

```js
const string = "Hello world"

const sub1 = string.substring(5)
// world

const sub2 = string.substring(5, 8)
// wor
```

If the end position is not provided, the method slices from the start position to the end of the string, but as you can see in the second example, the end position specifies a stop position for the method to cut.

### .search()

This method is used to search a string for a substring that matches a specified regex pattern. Here's the syntax:

```js
string.search(regex)
```

The return value of this method is the index of the first match, or `-1` if there is no match. Examples:

```js
const string = "Hello world"

const search1 = string.search(/l.{1}o/)
// 2

const search2 = string.search(/l.{5}o/)
// -1
```

The first regex searches for an "l", any other character, followed by an "o". The `search` method finds that at index `2`. The second regex searches for an "l", five other characters, followed by an "o". It does not find that, so it returns `-1`.

### .charAt()

This method is used to retrieve the **char**acter **at** a specified position. Here's the syntax:

```js
string.charAt(position)
// if position is not specified
// it defaults to 0
```

It returns the string at the specified index. For example:

```js
const string = "Hello world"

const char0 = string.charAt()
// H

const char5 = string.charAt(6)
// w
```

### .trim()

This method is used to remove white space from both ends of a string. Whitespaces here include tabs, spaces, breakpoints, e.t.c. The syntax:

```js
string.trim()
```

It returns a new string without the whitespaces at both ends. Here's an example:

```js
const string1 = "   Hello      world     "

const string2 = `
Hello world
       `

const trimmed1 = string1.trim()
// Hello      world

const trimmed2 = string2.trim()
// Hello world
```

It only trims the whitespaces are both ends and not between the characters. This method is handy for removing whitespaces in forms (like email inputs) where the user may have entered extra whitespaces by mistake.

## Wrap up

There are many more string methods in JavaScript. This article contains a non-exhaustive list of the common ones you may need at different points in your applications.

Kindly share if you find this article helpful :)
