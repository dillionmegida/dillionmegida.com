---
title: "Array concat method simplified"
date: "2022-11-22"
cover: "102-array-concat.png"
pageDescription: "The array concat method allows you to concatenate values of an array with new values, to form a new array. Learn more in this article"
tags: ["javascript"]
# video: https://youtube.com/shorts/MYQ1yUeX7rQ
---

The `concat` method in JavaSript is used to concatenate the contents of an existing array with new values to form a new array. I'll explain, with examples, how this method works on different values.

## Array.concat()

The syntax of the `concat` method is:

```js
array.concat(value1, value2, ..., valueN)
```

This method takes a list of arguments separated by commas, which will be concatenated with the contents of the array it is used on. The return value of this method is a new array that contains the former array's contents merged with the values passed as arguments.

This method does not modify the array it is applied to. It only returns a new value.

Here's an example:

```js
const array = [1, 2, 3, 4]

const concatenated = array.concat("hello", 5)

console.log(concatenated)
// [ 1, 2, 3, 4, 'hello', 5 ]

console.log(array)
// [1, 2, 3, 4]
```

The `concat` method is applied to the `array` variable, which is concatenated with the values **"hello"** and **5** to form a new array. You see the new array, `concatenated`, containing the values from `array` combined with the new values you specified.

You also see that the original `array` is not modified.

## `Array.concat` with an array argument

With values like numbers, strings, booleans, and objects, the `concat` method merges them directly with the contents of the array the method is applied on:

```js
const array = [1, 2, 3, 4]

const concatenated = array.concat("javascript", false, 50, { name: "Dillion" })

console.log(concatenated)

// [
//   1,
//   2,
//   3,
//   4,
//   "javascript",
//   false,
//   50,
//   { name: "Dillion" },
// ]
```

But when the `concat` method is applied with array values, something else happens. Look at the following example:

```js
const array = [1, 2, 3, 4]

const concatenated = array.concat([5, 6, 7, 8])

console.log(concatenated)

// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
```

With the way the `concat` method works with other values, I'd expect `concatenated` here to be:

```bash
[ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]
```

Which means, the array is concatenated and becomes nested into the original array. But that's not what happens. When you specify an array argument to the `concat` method, the array as a whole is not merged; the contents of the array are. So instead of getting a nested array, you get a zero-depth array:

```bash
[ 1, 2, 3, 4, 5, 6, 7, 8]
```

Let's look at another example:

```js
const array = [1, 2, 3, 4]

const concatenated = array.concat("hello", [5, 6, 7, 8])

console.log(concatenated)

// [
//   1, 2, 3, 4, "hello",
//   5, 6, 7, 8
// ]
```

Here, we apply two arguments to the `concat` method: a string value and an array value. From the result, you see that the string is concatenated, and again, the **contents** of the array (not the array as a whole) are concatenated.

Therefore, you can use the `concat` method to merge multiple arrays together:

```js
const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]
const array3 = [9, 10, 11, 12]

const merged = array1.concat(array2, array3)

console.log(merged)
// [
//   1,  2, 3, 4,  5,
//   6,  7, 8, 9, 10,
//  11, 12
// ]
```

The contents of `array2` and `array3` are merged with the contents of `array1` to create a new array.

But if you want a nested array for your merging, then you need to pass a 1-level deep array as an argument:

```js
const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]

const merged = array1.concat([array2])

console.log(merged)
// [1, 2, 3, 4, [5, 6, 7, 8]]
```

Since the "content" of the array passed to `concat` is an array also, then the content is merged with `array1` to form an array with a nested array.

## Wrap up

Arrays have different methods for different functions. In this article, we've looked at the `concat` method, which allows you to merge the contents of an array with other values (including arrays) to form a new array.
