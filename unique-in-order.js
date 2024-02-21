/* 6kyu
* https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript
* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
*/

// First passing Solution

var uniqueInOrder = function (iterable) {
  let arr = [];

  if (typeof iterable === 'object') {
    if (iterable.length === 0) {
      return [];
    }
    arr = iterable;
  }
  if (typeof iterable === 'string') {
    arr = iterable.split('');
  }

  const uniqueInOrder = [];

  arr.forEach((letter) => {
    const includesLetter = uniqueInOrder.includes(letter);
    const indexOfNextLetter =
      uniqueInOrder[uniqueInOrder.lastIndexOf(letter) + 1];

    if (!includesLetter) return uniqueInOrder.push(letter);

    if (indexOfNextLetter !== undefined && indexOfNextLetter !== letter)
      return uniqueInOrder.push(letter);

    return;
  });

  return uniqueInOrder;
};

//Refactored Solution

var uniqueInOrder = function (iterable) {
  return typeof iterable == 'object'
    ? iterable.filter((_, idx, array) => array[idx] !== array[idx + 1])
    : iterable
        .split('')
        .filter((_, idx, array) => array[idx] !== array[idx + 1]);
};
