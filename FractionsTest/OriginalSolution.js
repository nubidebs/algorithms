/*
This is the original solution of the test.
This solution uses "brute force" to find the value.
We run out of memory when we run the function with high numbers
*/

function run(max) {
  const array = [];
  for (let denominator = 2; denominator <= max; denominator += 1) {
    for (let numerator = 1; numerator < denominator; numerator += 1) {
      if (denominator % numerator > 0) {
        array.push({
          numerator,
          denominator,
          value: numerator / denominator,
        });
      }
    }
  }
  const sorted = array.sort((a, b) => a.value - b.value);
  const indexOfThreeSeventh = sorted.findIndex(
    (val) => val.denominator === 7 && val.numerator === 3
  );
  return console.log('Original Solution', sorted[indexOfThreeSeventh - 1]);
}

run(1234);
