// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

const topKFrequent = (nums, k) => {
  // set doesn't respect 0 values, need research
  // let el = new Set(nums)
  // return Array.from(el).slice(0,k)

  // respect 0 values
  let hash = nums.reduce((acc, n) => {
    return {
      ...acc,
      [n]: acc[n] !== undefined ? acc[n] + 1 : 1
    }
  }, {})

  return Object.entries(hash)
    .sort((a,b) => b[1] - a[1])
    .slice(0, k)
    .map(n => n[0])
};

result = topKFrequent([4,1,-1,2,-1,2,3], 2)
result