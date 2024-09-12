import { concatElements, mergeElements } from './5-merge.js';

// Arrays example
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(concatElements(arr1, arr2).toArray());  // [ 1, 2, 3, 4, 5, 6 ]

// Objects example
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeElements(obj1, obj2).toObject());  // { a: 1, b: 3, c: 4 }

