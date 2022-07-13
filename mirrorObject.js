/*

Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -
Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx
"You cannot change the original object, because if you did that the reflection would change."

*/

const mirror = (obj) => {
  const arrOfValues = Object.keys(obj);
  const reversed = arrOfValues.map((key) => key.split('').reverse().join(''));

  let result = {};

  arrOfValues.forEach((item, idx) => {
    return (result[item] = reversed[idx]);
  });

  return result;
};
