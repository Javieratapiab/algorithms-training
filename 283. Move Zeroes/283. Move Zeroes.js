// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
  // only play slice the element that doesn't be visited
  // then push the cero at end
  for(var i = nums.length; i--;){
    console.log(i)
    if(nums[i] === 0){
        nums.splice(i,1)
        nums.push(0);
    }
    nums
  }
  return nums
};

// function moveZeroes(nums) {
//   var idx = 0;
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       console.log(nums[i], idx, i)
//       nums[idx] = nums[i];
//       console.log(nums[idx], nums)
//       nums[i] = idx === i ? nums[i] : 0;
//       idx++;
//     }
//   }
//   return nums
// }

const result = moveZeroes([0,0,1,])
result