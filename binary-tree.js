const solution = (arr) => {
  let leftBranch = [];
  let rightBranch = [];

  arr.forEach((num, idx) => {
    if (idx === 0) {
      rightBranch.push(num);
      return leftBranch.push(num);
    } else if (idx % 2 == 0) {
      return rightBranch.push(num);
    }
    return leftBranch.push(num);
  });

  if (sum(leftBranch) > sum(rightBranch)) {
    return 'Left';
  }

  return 'Right';
};
