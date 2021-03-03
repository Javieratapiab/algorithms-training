// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Tree representation
//                              [1,2,3]
// lvl1
//          i=0                  i=1                i=2
//      [2,3] [1]              [1,3] [2]           [1,2] [3]
// lvl2
//    i=0       i=1         i=0         i=1        i=0        i=1
// [3] [1,2]  [2] [1,3]  [3] [2,1]  [1] [2,3]  [2] [3,1]  [1] [3,2]
// lvl3
//   i=0        i=0         i=0        i=0        i=0        i=0
// [1,2,3]    [1,3,2]     [2,1,3]    [2,3,1]    [3,1,2]   [3,2,1]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // list of permutations to return
  var permutations = []

  // backtracking fn
  function permuteFromSeed(remanent, path) {
    // if we don't have more element to merge
    // push prev path and return
    if(remanent.length === 0) {
      permutations.push(path)
      return
    }

    // else for each element in remanent list
    remanent.forEach((n,idx) => {
      // update path and remanent
      let newPath = [...path, n]
      let tmp = [...remanent]
      tmp.splice(idx, 1)
      // call recursion again
      permuteFromSeed(tmp, newPath)
    })
  }

  // start recursion
  // for another example of backtracking see subsets exercise 78
  permuteFromSeed(nums, [])
  return permutations
};

const result = permute([1,2,3])
// console.log(result)