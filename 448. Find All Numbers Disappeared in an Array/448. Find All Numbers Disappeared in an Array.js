// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

// var findDisappearedNumbers = function(nums) {
//   if(nums.length === 0) return []

//   let uniq = new Set(nums)
//   let missing = new Map();
//   let min = 1;
//   let max = nums.length;

//   for (var i = min; i <= max; i++) {
//     missing.set(i, i)
//   }

//   uniq.forEach(n => {
//     missing.delete(n)
//   });

//   return Array.from(missing.values())
// };

var findDisappearedNumbers = function(nums) {
  let res = []
  nums.forEach((val, ind, arr) => {
      let tmp = Math.abs(arr[ind]) - 1;

      if (arr[tmp] > 0)
          arr[tmp] *= -1;
          console.log({arr})
  })
  nums//
  nums.forEach((val, ind) => {
      if (val > 0) {
        ind
          res.push(ind + 1)
      }
  })
  res
  return res
};

const result = findDisappearedNumbers([4,3,2,7,8,2,3,1])
result