/*
** https://www.hackerrank.com/challenges/array-left-rotation
*/

function rotateLeft(d, arr) {
    // while we have rotations to do
    while (d) {
      let newLastElement = arr.shift()
      //push first element at the end of the array
      arr.push(firstElement);
      d--;
   }
   
return arr;
}
