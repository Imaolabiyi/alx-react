// Import the Immutable.js library
const { List, Map } = require('immutable');

/**
 * Concatenate two arrays into an Immutable List.
 * @param {Array} page1 - The first array.
 * @param {Array} page2 - The second array.
 * @returns {List} - An Immutable List containing all elements from page1 followed by page2.
 */
function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

/**
 * Merge two objects into an Immutable Map.
 * Values from page2 take precedence over those from page1 in case of conflicts.
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {Map} - An Immutable Map containing the merged values from page1 and page2.
 */
function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(concatElements(array1, array2).toJS()); // Output: [1, 2, 3, 4, 5, 6]

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
console.log(mergeElements(object1, object2).toJS()); // Output: { a: 1, b: 3, c: 4 }

