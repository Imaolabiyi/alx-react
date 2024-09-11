// Import Immutable.js functions
const { List, Map } = require('immutable');

// Create a List
const list1 = List([1, 2, 3, 4]);
console.log('List1:', list1.toJS()); // Should output: [1, 2, 3, 4]

// Create another List and concatenate
const list2 = List([5, 6, 7, 8]);
const concatenatedList = list1.concat(list2);
console.log('Concatenated List:', concatenatedList.toJS()); // Should output: [1, 2, 3, 4, 5, 6, 7, 8]

// Create a Map
const map1 = Map({ a: 1, b: 2 });
console.log('Map1:', map1.toJS()); // Should output: { a: 1, b: 2 }

// Merge another Map into map1
const map2 = Map({ b: 3, c: 4 });
const mergedMap = map1.merge(map2);
console.log('Merged Map:', mergedMap.toJS()); // Should output: { a: 1, b: 3, c: 4 }

