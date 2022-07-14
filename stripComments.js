/* 4 kyu

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

function solution(input, markers) {
  const arr = input.split('');
  let startCommentIdx = [];

  arr.forEach((item, idx) => {
    markers.forEach((marker) => {
      if (item === marker) {
        return startCommentIdx.push(idx);
      }
    });
    return;
  });

  const comments = startCommentIdx.map((item) => {
    const escapes = '\n';
    const endOfCommentIdx =
      input.indexOf(escapes, item) !== -1
        ? input.indexOf(escapes, item)
        : input.length;
    return input.substring(item - 1, endOfCommentIdx);
  });

  let solution = input;
  comments.reverse().forEach((comm) => {
    const stringWithoutComment = solution.replace(comm, '');
    solution = stringWithoutComment;
  });

  return solution;
}
