// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
  // create max value to track
  let max = -1

  // for each n in each list
  for(let i = 0; i < accounts.length; i++) {
    // create inner max value
    let acc = 0
    for(let j = 0; j < accounts[i].length; j++) {
      // add the n to the acc of the inner list
      acc += accounts[i][j]
    }
    // then compare with the historic max
    max = Math.max(max, acc)
  }

  // return the historic max
  return max
};

const result = maximumWealth([[1,2,3],[3,2,1]])
result