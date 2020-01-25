---
title: "Template Literals: What You Probably Didn't Know"
date: "2020-01-25"
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1579952575/images/blogs_cover/template-literals_sjbdqb.jpg"
pageDescription: "Template literals allows interpolation of expressions in strings, and they also allow the creation of tagged templates which enables the combination of functions with template literals."
pageKeywords: "template literals, javascrPipt template literals, literals, templates, javascript templates, backticks, javascript backticks, template backticks, template strings, tagged templates"
tags: ["javascript"]
---
Template literals was introduced in JavaScript ES2015 (ES6). They are enclosed by the backtick (**\` \`**) character. They provide more features which single and double quotes don't allow.

You may already know that template literals;

1. makes it easier to place expressions within strings. An example is this;

```javascript
let arr = ["rice", "beans", "egg"];
console.log(`I bought ${arr.join(', ')}`)
// Expected Output
// I bought rice, beans, egg
```

2. creates multiline strings with ease. An example is;

```javascript
let multi = `My name
is
Dillion!`
console.log(multi);
// Expected output
// My name
// is
// Dillion!
```

## More to these features is

**Template literals are actually functions.** The contents found between the backticks are passed to a function. The default function is the **interpolation function** which allows interpolation of expressions into strings as we can see in the code block above.  We'd see how that function works later in the article.

I was going through the [documentation on styled-components](https://styled-components.com/docs) and what caught my attention was the fact that they are maximizing the use of template literals (as functions) to achieve the awesome CSS in JavaScript.

Template Literals as functions? I asked myself. All I knew about them was template strings (interpolation). But there's more to it.

Let's say we have the following function;

```js
let fn = text => `You inputted "${text}"`;
```

Then call the function with an argument like you normally would;

```js
let result = fn("games");
console.log(result);
// Expected output
// You inputted "games"
```

You shouldn't be surprised at the result. Now try the following;

```js
let result2 = fn`games`
console.log(result2);
// Expected output
// You inputted "games"
```

Chances are that you're probably amazed. If you are, then I'd like to let you know (at this point) that this article is for you 😇. It's actually for you either ways so please continue.

## Template Tags

As I stated above, the contents (text and expressions) found between the backticks are passed to a function. If there is an expression stated before the template literal (as seen here - **fn\`games\`**), then it is called a **tagged template**.

This is the feature which styled-components uses.

The tagged template takes two arguments - an array of string values and expressions. The expressions are those passed into the curly braces preceeded by a dollar sign - `${}`

For example,

```js
let myName = "Dillion";
let myAge = 49;
let tagTemp = (str, exp) => console.log(str, exp);
tagTemp`My name is ${myName}. My age is ${myAge}`;
// Expected Output
// ["My name is ",  ".My age is ", "" ]
// "Dillion"
```

This returns an array of three string values. The array splits the string at the points where an expression was found. If you look closely, the second value starts with a period (**.**) which is immediately after `myName`. The last value is  an empty string which is after `myAge`. If there was a whitespace after that expression, the last value would be **" "**. 

We also notice that the function only returns one expression (**"Dillion"**). Remember I said it takes it many expressions. For this we can use the rest operator (`...`), to take in as many expressions that are provided.

```js
let tagTemp = (str, ...exp) => console.log(str, exp);
tagTemp`My name is ${myName}. My age is ${myAge}`;
// Expected Output
// ["My name is ",  ".My age is ", "" ]
// ["Dillion", 49]
```

Now, it returns an array of all expressions used.

**Note:** For our code above (**fn\`games\`**), "games" is a single value in an array, but it is converted to a string. That's the reason we were able to get **You inputted "games"**.

## Interpolation Function

This function is also a tag template but it is the default function used for interpolating expressions in strings. This is how it works;

```javascript
let interpolation = (vals, ...exp) => {
    let string = '';
    for(let i = 0; i < vals.length; i++) {
        if(vals[i] !== undefined){
            string += vals[i];
        }
        if(exp[i] !== undefined) {
            string += exp[i];
        }
    }
    return string;
}
```

Since the first and second arguments return an array, we can loop through the values and concatenate them. We had to check if it is not undefined because the length of the values array may be more than the expressions array.

In other words, when you write **`My name is ${name}`**, what we get at the background is either **interpolation\`My name is ${name}\`** or **interpolation(\`name is ${name}\`)**

I'm not saying this is the exact function working in the background but it does the same thing.

## Conclusion

I have been working with template literals but I only used it for interpolations.

 You probably knew some of this and hopefully, you are just knowing but I hope you learned something new from this article.

Thanks for reading : )
