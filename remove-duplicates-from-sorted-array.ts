/*
** https://leetcode.com/problems/remove-duplicates-from-sorted-array
*/
function removeDuplicates(nums: number[]): number {
    let k = 1; // keeps track of unique elements
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
