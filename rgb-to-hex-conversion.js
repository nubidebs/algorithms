/* 5kyu
* https://www.codewars.com/kata/513e08acc600c94f01000001/javascript
* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
* Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
* Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
* 
* The following are examples of expected output values:
* 
* rgb(255, 255, 255) // returns FFFFFF
* rgb(255, 255, 300) // returns FFFFFF
* rgb(0,0,0) // returns 000000
* rgb(148, 0, 211) // returns 9400D3
*/

// First Solution

function rgb(r, g, b){
 
    const hex= [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"]
  
  const result = [r,g,b].map((color, index)=>{
    if (color <= 0) return "00"
    if (color >= 255) return "FF"
    
   
    let firstDigit = +((color/16).toString().split(".")[0])
    let secondDigit=+("0." + (color/16).toString().split(".")[1])*16
   
    const hexDigit1 = Object.is(firstDigit, NaN) ? 0 : firstDigit <= 16 ? hex[firstDigit] : "FF"
    const hexDigit2 = Object.is(secondDigit, NaN) ? 0 : secondDigit <= 16 ? hex[secondDigit] : "FF"
   
    return `${hexDigit1}${hexDigit2}`
  })
  
    return result.join("")
  }

  //Refactored Solution
 