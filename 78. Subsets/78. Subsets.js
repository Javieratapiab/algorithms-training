// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [
//   [],
//   [1],
//   [1,2],
//   [1,2,3]
//   [1,3],
//   [2],
//   [2,3],
//   [3],
// ]


var subsets = function (nums) {
  let subsets = []

  function getSubsets(prevSubset, idx) {
    // push prev subset to results
    subsets.push(prevSubset);
    // if(!nums[idx]) return

    for(let i = idx; i < nums.length; i++) {
      // create new sub set from prev path in array
      let newSubset = [...prevSubset, nums[i]]
      // call getSubsets with next node
      getSubsets(newSubset, i + 1)
    }

  }

  // init recursion with initial seed = [] => min subset
  getSubsets([], 0)

  return subsets
};

const result = subsets([0]);
result
