const array = [1, 2, [3, 4, [5, 6]]]
const flattenedArr = array.flat(2)
// or array.flat(Infinity)

console.log(flattenedArr)
// [ 1, 2, 3, 4, 5, 6 ]