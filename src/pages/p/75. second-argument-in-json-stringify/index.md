---
title: "The second argument in JSON.stringify()"
date: "2022-02-10"
cover: "json stringify second argument.png"
pageDescription: "When JSON.stringify() is called, the second argument is usually null. In this article, I explain the relevance of this argument and why people don't often use it"
pageKeywords: "json, json.stringify, json replace, javascript"
tags: ["javascript"]
---

`stringify` is a method of the global object `JSON`, that converts a JavaScript value to a JSON string. There are many reasons for converting objects to a string; here's some:

- sending a value to a server
- storing a value in a localStorage
- storing a value in a cookie
- storing an object in a file
- breaking down an object for readability

The most common way this method is written is:

```js
JSON.stringify(object, null, number)
```

The first argument is the object (or array), and the last argument is the number of spaces to indent the output. But what is the second argument? Why do people always use `null` as the second argument?

For most cases, the second argument is ignored and somewhat irrelevant. But it has its use, and we'll see that in this article.

## JSON.stringify()

The syntax of the `stringify` method is:

```js
JSON.stringify(value, replacer, space)
```

The second parameter is a function that is called for each value in the object. It can be used to transform the value before it is converted to a string. With it, you can specify the properties that you want to include in the output.

This parameter can either be a function or an array.

### Function replacers

If it is a function, it is called for each value in the object like so:

```js
const replacer = (key, value) => {
  if (key === "id") return undefined

  return value
}
```

If any value of the object is another object, the `replacer` method is recursively called on that object. And if any value of the object is a function, a symbol, or `undefined`, it will be ignored.

From the above code, we returned `undefined` for the `id` property. This means the `id` property will not be included in the output.

Let's test that as follows:

```js
const object = {
  name: "John",
  id: "john",
  obj: {
    name: "Jane",
    id: "jane",
  },
}

console.log(JSON.stringify(object, replacer, 2))

// output
// {
//   "name": "John",
//   "obj": {
//     "name": "Jane"
//   }
// }
```

You can also do modifications like:

```js
const replacer = (key, value) => {
  if (key === "id") return `id-${value}`

  return value
}

console.log(JSON.stringify(object, replacer, 2))

// output
// {
//   "name": "John",
//   "id": "id-john",
//   "obj": {
//     "name": "Jane",
//     "id": "id-jane"
//   }
// }
```

### Array replacers

The values of array replacers determine which properties are included in the output. For example:

```js
const replacer = ["name", "id", "age", "profession"]

const object = {
  name: "John",
  id: "john",
  age: 50,
  type: "human",
  obj: {
    name: "Jane",
    id: "jane",
    type: "human",
  },
}

console.log(JSON.stringify(object, replacer, 2))

// output
// {
//   "name": "John",
//   "id": "john",
//   "age": 50
// }
```

From the replacer, we specified that we only want values with the keys `name`, `id`, `age`, and `profession`.

The `object` has five keys: `name`, `id`, `age`, `type` and `obj`. Using our replacer, we don't expect to see the `profession` key because it doesn't exist in the object.

From the result above, we can see how the object has been filtered.

### The replacer method on array values

The replacer method doesn't work as you would expect on array values. When you use the function replace on an array, a few things happen:

- if you attempt to do any modification, it won't work
- if you attempt to do any filtering, it won't work
- if you return `undefined` or a function, the output will be `undefined`
- if you return `null`, the output will be `null`

Using an array replacer won't do anything. The output remains the same.

## Conclusion

Now you understand why `null` is usually passed as the second argument. That's because there is no intended modification or filtering of the object.

The second argument is a really helpful way of either modifying or specifying only the properties that we want to store, save or send to a server.
