// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // lazy solution with native sort O(log n)
  // => no accepted by problem definition
  // return nums.sort((a,b) => a - b)

  // one pass solution
  let unsorted = nums.length - 1
  let red = 0
  let white = 0

  while(unsorted >= 0) {
    // take the last unsorted element
    let tmp = nums.splice(unsorted, 1)[0]

    if(tmp === 0) {
      // if red insert in last know position of W
      // and then update pointer
      nums.splice(unsorted + red, 0, tmp)
      red += 1
    } else if(tmp === 1) {
      // else if insert white in last know position of W+R
      // and then update pointer
      nums.splice(unsorted + red + white, 0, tmp)
      white += 1
    } else {
      // else push to the end of nums array
      nums.splice(nums.length, 0, tmp)
    }

    // move unsorted pointer
    unsorted--
  }

  return nums
};

// fancy idea with the same pointer references idea
// swap pointers in memo of nums => o(1) space
// function swap(i, j) {
//   [nums[i], nums[j]] = [nums[j], nums[i]];
// }

const result = sortColors([2,0,2,1,1,0])
result
