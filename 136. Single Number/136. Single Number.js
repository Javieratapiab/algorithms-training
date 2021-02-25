// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

var singleNumber = function(nums) {
  let i = 0;
  let hash = new Map()
  while(i < nums.length) {
    if(hash.has(nums[i])) {
      hash.delete(nums[i])
      console.log(true)
    } else {
      hash.set(nums[i], 1)
    }
    i++
  }
  return Array.from(hash.keys())[0]
};

const result = singleNumber([2,2,1])
result