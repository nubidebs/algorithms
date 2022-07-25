/* Solution 1 - 1.5/2h 

This is the first working solution I came up with.
This is NOT the BESt solution performance-wise, but improves the previous solution by removing nested loops.

To solve this problems I went back to the fractions and algebra properties I studied at high school.

According to the problem n < d            n     3
              and we are looking for     --- < ---
                                          d     7

CASE A - d is divisible by 7
n     3                                   3d
-- = --    can be also written as   n =  -- - 1
d    7                                   7

CASE B - d is NOT divisible by 7
n     3                                  3d
-- = --    can be also written as   n =  -- 
d    7                                   7


- Using this formula I can find out what's my numerator and consequently the value of the fraction by looping through the denominators.
- I push all my values to the array
- sort from the smallest to the biggest
- find the item with index just before the 3/7

*/

function run(max) {
  let array = [];

  for (let denominator = 2; denominator <= max; denominator++) {
    numerator = Math.floor((3 * denominator) / 7);

    if (denominator % 7 == 0) {
      array.push({
        numerator: numerator - 1,
        denominator: denominator,
        value: (numerator - 1) / denominator,
      });
    }
    array.push({
      numerator: numerator,
      denominator: denominator,
      value: numerator / denominator,
    });
  }
  const sorted = array.sort((a, b) => a.value - b.value);

  const indexOfThreeSeventh = sorted.findIndex(
    (val) => val.denominator === 7 && val.numerator === 3
  );

  return console.log('Solution 1', sorted[indexOfThreeSeventh - 1]);
}

/* /* =========================================

Solution 2 - (+20 mins) BETTER PERFORMANCE WITH BIG NUMBERS.

This solution uses my previous solution but only saves in the array those fractions that are smaller than 3/7 and bigger than the current smallest fraction (kind of bubble sort).
This means the algorithm uses less memory.

- I the selected values to the array
- sort from the smallest to the biggest
- find the item with index just before the 3/7
*/

function run(max) {
  const threeSeventhValue = 3 / 7;
  let array = [];
  let currentLowestValue = 0;

  for (let denominator = max; denominator >= 2; denominator--) {
    const numerator = Math.floor((3 * denominator) / 7);
    let value = numerator / denominator;

    if (denominator % 7 == 0) {
      value = (numerator - 1) / denominator;
      if (value < threeSeventhValue && value > currentLowestValue) {
        currentLowestValue = value;
        array.push({
          numerator: numerator - 1,
          denominator: denominator,
          value,
        });
      }
    }
    if (value < threeSeventhValue && value > currentLowestValue) {
      currentLowestValue = value;
      array.push({
        numerator: numerator,
        denominator: denominator,
        value,
      });
    }
  }

  const sorted = array.sort((a, b) => a.value - b.value);

  return console.log('Solution 2', sorted[sorted.length - 1]);
}

/* =========================================

Solution 3 (+10 mins)

This solution is based on Solution 2 but splits the values coming from fractions with ODD denominators from those coming from fractions with EVEN denominators.

That means we don't have to sort at the end but can choose the smallest value between the pair oddLowestValue, evenLowestValue (note we return the odd value if they are equal).


**** I think this solution is too complex and it's not worth it. ****

*/

function run(max) {
  const threeSeventhValue = 3 / 7;
  let evenLowestValue = 0;
  let oddLowestValue = 0;
  let oddResult = {};
  let evenResult = {};

  for (let denominator = max; denominator >= 2; denominator--) {
    const isEven = denominator % 2 === 0;
    const comparingValue = isEven ? evenLowestValue : oddLowestValue;
    const numerator = Math.floor((3 * denominator) / 7);
    let value = numerator / denominator;

    if (denominator % 7 == 0) {
      value = (numerator - 1) / denominator;
      if (value < threeSeventhValue && value > comparingValue) {
        isEven ? (evenLowestValue = value) : (oddLowestValue = value);

        isEven
          ? (evenResult = {
              numerator: numerator - 1,
              denominator: denominator,
              value,
            })
          : (oddResult = {
              numerator: numerator - 1,
              denominator: denominator,
              value,
            });
      }
    }
    if (value < threeSeventhValue && value > comparingValue) {
      isEven ? (evenLowestValue = value) : (oddLowestValue = value);

      isEven
        ? (evenResult = {
            numerator: numerator,
            denominator: denominator,
            value,
          })
        : (oddResult = {
            numerator: numerator,
            denominator: denominator,
            value,
          });
    }
  }

  return oddResult.value >= evenResult.value
    ? console.log(oddResult)
    : console.log(evenResult);
}

run(999999999);
