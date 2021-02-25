// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

var climbStairs = function(n) {
  function findSteps(n, memo) {
    // if I pass the step target aka i go drop from the stairs
    // invalid path think about -1 in graph
    if(n < 0) return 0
    // if path is valid aka 0
    if(n === 0) return 1
    // if I visited the path return from memo table
    if(memo[n]) return memo[n]
    // else go one step deeper
    memo[n] = findSteps(n -1, memo) + findSteps(n - 2, memo)
    return memo[n]
  }

  return findSteps(n, {})
};

const result = climbStairs(3)
result