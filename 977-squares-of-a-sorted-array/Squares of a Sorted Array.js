// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function(nums) {
  let result = new Array(nums.length).fill(null);
  let l = 0;
  let r = nums.length - 1;
  // pointer to track at insertion time
  let p = r;

  while (l <= r) {
    let powL = Math.pow(nums[l], 2)
    let powR = Math.pow(nums[r], 2)
    powL
    powR
    if (powL > powR) {
        // insert val and update the pointer
        result[p] = powL;
        p--
        l++
    } else {
        // insert val and update the pointer
        result[p] = powR;
        p--
        r--
    }
  }

  return result;
};

const result = sortedSquares([-4,-1,0,3,10])
console.log(result)