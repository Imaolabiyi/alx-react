import { List, Map } from 'immutable';

// Function to concatenate arrays into a List
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Function to merge objects into a Map
export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}

