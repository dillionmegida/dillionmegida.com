---
title: "Removing items from an array with the delete operator is not the right way"
date: "2022-05-17"
cover: "87-do-not-remove-with-delete-operator.png"
pageDescription: "Here is why using the delete operator to remove items from an array is not the right way."
pageKeywords: "javascript, delete operator, javascript delete, arrays, objects"
tags: ["javascript"]
---

Using the `delete` operator to remove items from an array is not the right way. In this short article, I will explain why.

## The delete operator works differently with objects and arrays

The `delete` operator can be used to delete properties from an object. Here's how:

```js
const object = {
  name: "Dillion",
  content: "article",
}

delete object.content
// or delete object['content']

console.log(object)
// { name: 'Dillion' }
```

Since arrays are also objects, the `delete` operator can also be used on them. However, it works differently with arrays. Let's take an example:

```js
const array = [1, 2, 3, 4, 5]

delete array[2]

console.log(array, array.length)
// [ 1, 2, <1 empty item>, 4, 5 ]
// 5, length remains 5
```

The deleted item is replaced with **<1 empty item>** (a placeholder to show that the value has been removed). And the length of the array remains 5, just like the original.

If you delete more items, you have:

```js
const array = [1, 2, 3, 4, 5]

delete array[2]
delete array[0]

console.log(array, array.length)
// [ <1 empty item>, 2, <1 empty item>, 4, 5 ]
// 5
```

Both items are removed, but the length remains 5.

The delete method removes the value from the array but does not reindex or reposition other values in the array. If you try accessing a deleted value, you will get `undefined`:

```js
const array = [1, 2, 3, 4, 5]

delete array[2]

console.log(array[2])
// undefined
```

The fact that the other values in the array are not repositioned is why you should not use the delete method to remove items from an array. It is not a practical approach as it can result in unexpected conflicts.

If you want to remove values from an array, you can use the [splice array method](https://dev.to/dillionmegida/arraysplice-for-removing-replacing-or-adding-values-to-an-array-1k6c).
