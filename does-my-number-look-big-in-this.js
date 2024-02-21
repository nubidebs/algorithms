/* 6kyu
* https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript
* A Narcissistic Number is a positive number which is the sum of its own digits,
* each raised to the power of the number of digits in a given base.
*
* For example, take 153 (3 digits), which is narcissistic:
*
*    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
* and 1652 (4 digits), which isn't:
*
*    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
* The Challenge: Your code must return true or false (not 'true' and 'false') depending upon whether
* the given number is a Narcissistic number in base 10.
* Error checking for text strings or other invalid inputs is not required,
* only valid positive non-zero integers will be passed into the function.
*/

// First Passing Solution

function narcissistic(value) {
  const arr = value.toString().split('');
  const digits = arr.length;
  let tot = [];

  arr.forEach((n) => {
    const power = (base, exponent) => {
      let result = 1;
      for (let count = 0; count < exponent; count++) result *= base;
      return result;
    };

    return tot.push(power(n, digits));
  });

  const sumWithInitial = tot.reduce((a, b) => a + b, 0);
  console.log(sumWithInitial);

  return sumWithInitial === value;
}

// Refactored solution

function narcissistic(value) {
  const arr = value.toString().split('');
  const digits = arr.length;

  const sumOfPowers = arr
    .map((n) => Math.pow(n, digits))
    .reduce((a, b) => a + b, 0);

  return sumOfPowers === value;
}
