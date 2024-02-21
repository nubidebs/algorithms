/* 6kyu
*https://www.codewars.com/kata/62ca07aaedc75c88fb95ee2f
*/

function ascendDescend(length, minimum, maximum) {
    let increase = '';
    let descending = '';
    let result = '';
    
  for (let i = minimum; i <= maximum; i++) {
      increase += i;
  }
  for (let j = maximum - 1; j > minimum; j--) {
      descending += j;
  }
  for (let k = 0; k < length; k++) {
      result += increase;
      result += descending;
  }
  return result.slice(0, length);
}
