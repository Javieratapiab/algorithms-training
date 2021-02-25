// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
  let hash = {}
  let result = []

  for(var i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    // if complement is in hash we founded sum of el
    if(hash[complement] !== undefined) {
      result = [hash[complement], i]
      break
    } else {
      // save the value of the int and the index from when was visited
      hash[nums[i]] = i
    }
  }

  return result
};

const result = twoSum([2,7,11,15], 9)
result