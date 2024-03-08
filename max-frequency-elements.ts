/*
** https://leetcode.com/problems/count-elements-with-maximum-frequency/description/
*/

function maxFrequencyElements(nums: number[]): number {
const countMap: {[id: number]: number } = {}
nums.forEach((num)=> {
    if (Object.keys(countMap).includes(`${num}`)){
     countMap[num] = countMap[num] + 1;
     return
    }

    countMap[num] = 1
})
 const frequencies: number[] = Object.values(countMap)
 const maxFrequency: number = Math.max(...frequencies) 

 let result: number = 0
 for (let property in countMap){
  if (countMap[property] === maxFrequency){
      result = result + countMap[property]
  }
 }

return result 
};
