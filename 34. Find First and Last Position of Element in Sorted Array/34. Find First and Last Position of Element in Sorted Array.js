// la clasica => vanhack
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

var nums = [5,7,7,8,8,10]

// linear
var searchRangeLinear = function(nums, target) {
  var result = [-1, -1]

  nums.forEach((n, i) => {
    if(n === target && result[0] === -1) {
      result[0] = i
    }
    else if(n === target && result[0] !== -1) {
      result[1] = i
    }
  });

  if(result[1] === -1) {
    result[1] = result[0]
  }

  return result
};

// binary search
var searchRangeBinary = function(nums, target) {
     let l = 0;
     let r = nums.length - 1;

    //  [5,6,7,8,8,9,10]
     while (l < r) {
         let mid = Math.floor((l + r) / 2);
         console.log(mid, nums[mid]) //
         if(nums[mid] >= target) {
          r = mid
         } else {
          l = mid + 1
         }
     }

     // if target is not found return
     if (nums[l] !== target) return [-1, -1];

     let start = l;
     r = nums.length - 1;

     while (l < r) {
      let mid = Math.floor((l + r) / 2);
        if(nums[mid] <= target) {
          l = mid + 1
        } else {
          r = mid
        }
     }

     return [
       start,
       nums[l] === target ? l : l - 1
      ];
}

var result = searchRangeBinary(nums, 8)
result

