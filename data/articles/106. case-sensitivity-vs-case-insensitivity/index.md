---
title: "Case Sensitivity vs Case Insensitivity"
date: "2023-02-01"
cover: "106-case-sensitivity.png"
pageDescription: "Case sensitivity is a term you will find a lot in programming languages or tech. I explained what this means and how it applies to languages in this article"
pageKeywords: "case, uppercase, lowercase, case-sensitive, case-sensitivity, case-insensitive, case-insensitivity, programming languages, javascript, tech"
tags: ["programming"]
---

test

Amongst many terms in programming languages or tech in general, there are two that you'd hear and see a lot: **case-sensitive** and **case-insensitive**. What do these terms mean?

Let's start by looking at the first word: "case"

**case** here refers to letter casing which includes uppercase (**A**) and lowercase (**a**). Cases make up different words, and you'd find a mix of cases in characters like **Abc**, **AbC**, **aBc**, and so on.

Next, let's look at the word "sensitive".

When something is sensitive, it could be something confidential or with protection. You can say it has **restrictions**.

How do you apply this to cases in programming?

## Case Sensitivity

When you apply the term "case-sensitive" to a string (which could consist of one or more characters), it means that such string can **ONLY** be equal to another string with the same characters if each character in the first string is respectively in the **SAME CASE** with each character in the second string.

Let's see some examples:

- `a` is EQUAL to `a`
- `X` is NOT EQUAL to `x` ("X" different from "x")
- `Be Z` is EQUAL to `Be Z`
- `bAM` is NOT EQUAL to `bAm` ("M" different from "m")
- `programming language` is NOT EQUAL to `programming language` ("L" different from "l")

Case-sensitive involves a **strict** check such that for both strings to be the same, it has to be equal, not just in the characters involved, but the casing of each character.

## Case Insensitivity

When you apply the term "case-insensitive" to a string, it means that such string can be equal to another string with the same characters without each character having to be in the same case.

In the examples we used above, all strings will be equal since they have the same characters:

- `a` is EQUAL to `a`
- `X` is EQUAL to `x`
- `Be Z` is EQUAL to `Be Z`
- `bAM` is EQUAL to `bAm`
- `programming language` is EQUAL to `programming language`

Here, there's no strict check on the cases. As long as the characters are the same in both strings, they are equal.

## How case equality applies to programming languages

Programming languages work differently when it comes to the quality of cases.

For example, one language could allow you to use commands in any case you want. Say, such language has a `delete` command which is used as `delete x`. Since there's no case-sensitivity in such language, you could use a command like `deLEte x` or `DEletE x` and it will execute the operation as expected.

But another language may be strict on cases. So looking at the same `delete` command example, if you attempt an operation with `DEletE x`, you may get an error where the language tells you "I don't know what `DEletE` is".

So, it's important to understand what is allowed in programming languages and what isn't.

In JavaScript, for example, commands are case-sensitive, so if you try to declare a variable with "VAR", you will get an error. JavaScript only knows "var", so using it in a different case means you're referring to **something else** that JavaScript does not know about.

You can also check this nice discussion on StackOverflow: [Should URLs be case-sensitive?](https://stackoverflow.com/questions/7996919/should-url-be-case-sensitive)

## Case Equality In Important Areas

Though programming languages and platforms can have different rules for cases, there are common areas where they apply case-sensitivity.

One example is in comparing user passwords. Such operations require strict checks. If a user registers with "abCde" as their password, during login, a password like "abcde" should not work.

Another example is in unique `id`s. It could be an `id` for a user, a product, or any object. Because it's unique, strict checks must be put in place.

Other examples fall here; the key point is that such data should be unique, hence, strictly checked

## Wrap Up

Now you know what these terms mean. If you're learning a new programming language or using a new tool and you hear any of these terms, I hope this article has helped in explaining that.
