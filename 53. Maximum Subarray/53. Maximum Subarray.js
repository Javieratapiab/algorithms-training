// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
  let p1 = nums[0]
  let p2 = nums[0]

  for(var i = 1; i < nums.length; i++) {
    // get curr max from ...list n -1 + n | ...list n -1
    p1 = Math.max(nums[i], p1 + nums[i])
    // compare to historic visited max
    p2 = Math.max(p2, p1)
  }

  return p2
};

const result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
result