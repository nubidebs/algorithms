/* Given a string, find longest substring with not repeated characters

*/

const solution = (s) => {
  let longestStrLength = 0;

  for (let i = 0; i < s.length; i++) {
    let currentStrSet = new Set();

    for (let x = i; x < s.length; x++) {
      if (currentStrSet.has(s[x])) {
        break;
      }
      currentStrSet.add(s[x]);
    }

    longestStrLength = Math.max(longestStrLength, currentStrSet.size);
  }

  return longestStrLength;
};
