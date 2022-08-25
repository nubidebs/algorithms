/* 5 kyu

Once upon a time, on a way through the old wild mountainous west,…
...a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
How I crossed a mountainous desert the smart way.

The directions given to the man are, for example, the following (depending on the language): ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply: ["WEST"]


Task

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

Notes

Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.

*/

// First Solution

 function dirReduc(arr) {
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr.length; j++) {
       switch (arr[j]) {
         case 'NORTH':
           if (arr[j + 1] === 'SOUTH') {
             arr.splice(j, 2);
           }
           break;
         case 'SOUTH':
           if (arr[j + 1] === 'NORTH') {
             arr.splice(j, 2);
           }
           break;
         case 'EAST':
           if (arr[j + 1] === 'WEST') {
             arr.splice(j, 2);
           }
           break;
         case 'WEST':
           if (arr[j + 1] === 'EAST') {
             arr.splice(j, 2);
           }
           break;
       }
     }
   }
   return arr;
 }


 // Refactored

  function dirReduc(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        const isOppositeX =
          (arr[j] === 'WEST' && arr[j + 1] === 'EAST') ||
          (arr[j] === 'EAST' && arr[j + 1] === 'WEST');
        const isOppositeY =
          (arr[j] === 'NORTH' && arr[j + 1] === 'SOUTH') ||
          (arr[j] === 'SOUTH' && arr[j + 1] === 'NORTH');

        if (isOppositeX || isOppositeY) {
          arr.splice(j, 2);
        }
      }
    }
    return arr;
  }
