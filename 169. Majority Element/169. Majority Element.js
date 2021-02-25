// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

var majorityElement = function(nums) {
  let hash = new Map()
  nums.forEach((n, i) => {
    hash.set(n, hash.get(n) + 1 || 0)
  })
  return Array.from(hash.entries())
    .sort((a,b) => b[1] - a[1])[0][0]
};

const result = majorityElement([3,2,3])
result