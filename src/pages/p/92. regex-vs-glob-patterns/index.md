---
title: "Regex vs Globbing | Differences and Similarities"
date: "2022-06-04"
cover: "92-regex-vs-glob-patterns.png"
pageDescription: "Learn about the similarities between Regex and Globbing in this article."
pageKeywords: "regex, globbing, glob patterns, regex patterns, javascript"
tags: ["javascript", "terminal"]
---

Have you ever mixed up regex and glob patterns? Those `*.txt` patterns you may have done on your terminal are not regex patterns. They are glob patterns. Though they are similar, they work differently and in different environments.

In this short article, I will explain the similarities and differences between regex and glob patterns.

## Regex and Glob patterns

Regex and Glob patterns are similar ways of matching patterns in strings. The main difference is that the **regex pattern matches strings in code**, while **globbing matches file names or file content in the terminal**.

Globbing is the shell's way of providing regular expression patterns like other programming languages.

Another big difference is that regex has more options and features than glob patterns. It's more advanced, and globbing has fewer options to get you through your search faster.

The scope of this article does not cover globbing and regex patterns in-depth, but here are some basic examples of how they are used.

## Regex in code

Regex patterns exist in many programming languages today. And they work slightly differently across these languages, but they maintain similar syntax in most areas. I'll use the regex in JavaScript for the examples I'm about to share.

### Matching strings that contain a specific word

If you want to check if a string has a specific word, say "world", you can use this regex pattern:

```js
const regex = /.*world.*/

const word1 = "hello world how is it"
const word2 = "my word is here"

console.log(regex.test(word1)) // true
console.log(regex.test(word2)) // false
```

### Matching strings that end with a specific word

If you want to check if a string ends with a specific word, say "world", you can use this regex pattern:

```js
const regex = /.*world$/

const word1 = "this is my world"
const word2 = "this is your world "

console.log(regex.test(word1)) // true
console.log(regex.test(word2)) // false
```

These are all basic examples, of course. The goal is to show you how regex works in code.

## Globbing in the terminal

The terminal uses globbing for file name matching. Here are some examples.

### Matching all files with the same extension

If you wanted to copy all **.txt** files in a directory to another directory, for example, instead of typing:

```bash
cp file.txt file2.txt file3.txt ./text-files
# copy all files to the ./text-files directory
```

You can define a glob pattern that matches all the **.txt** files and copy all the matches like this:

```bash
cp *.txt ./text-files
```

This command copies all the files with the extension `.txt` to the **text-files** directory. The asterisk (**\***) serves as a wildcard that matches any number and mixture of characters before the ".txt" extension in the file name.

### Matching all files with the same name length

Let's say you wanted to list all text files that have names of **5** characters. You can use the **?** character. This character matches any single character. It's similar to a wildcard, but the difference is that the **?** character matches any single character, while the **\*** character matches multiple characters.

To match files with five characters, you can use the following pattern:

```bash
ls ?????.txt
```

This command will list all the files in the current directory with five characters before the extension in their name.

## Globbing with CLI tools

Since globbing works on the terminal, you can use it with CLI tools/commands that support it. For example, as we've seen in the examples, you can use the `cp` and `ls` commands. You can also use it with `git` like this:

```gs
git add *.js
```

This command will match all the files with the extension `.js` and add them to the staging area.

## Wrap up

Globbing is the terminal's way of defining regular expressions for file names or file content. It is also less powerful than regex, as regex has more features. However, regex works in code across different programming languages while globbing works in the terminal.

Check out this [Bash Globbing Tutorial](https://linuxhint.com/bash_globbing_tutorial/) and [RegexOne Website](https://regexone.com/) to learn more about these tools.
