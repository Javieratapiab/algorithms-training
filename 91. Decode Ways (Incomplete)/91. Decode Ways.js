// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example"11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits return the number of ways to decode it.

// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26)"VF" (22 6)or "BBF" (2 2 6).
// 28

// solution always try to take one or two cases for each
// node in the recursion tree, a simple example could be reviewed
// in exercise 70 climbing stairs, same idea but with less rules
//                 226
//             /        \
//         2-26          26-6
//          / \            |
//     2-2-6   2-26      26-6
//      |
//    2-2-6

/**
 * @param {string}
 * @return {number}
 */
var numDecodings = function(s) {
  // if string is cero, cero cases are possible
  if(s.length < 1) return 0
  // else create memo table
  let memo = []

  function decode(idx) {
    // console.log(idx, s[idx], s.length)

    // ini cases for node in recursion tree
    let cases = 0
    // if idx is equal to the len of the str is a valid result
    // think in stairs cases 0 or -1
    if(s.length === idx) return 1
    // if index is in memo table aka that path was
    // resolved return result from dp table
    if(memo[idx] !== undefined) return memo[idx]

    // if number is higher than cero we can do a 0/1 cases path recursion
    if(s[idx] > 0) {
      cases += decode(idx+1)
    }
    // if chr value in index is not equal to cero
    // and next value in str pointer is not equal to to undefined
    // and sum of chr value of index and index+1 are lower to 26
    // take two for fo the next step in the recursion tree
    if(s[idx] !== '0' && s[idx+1] !== null && (s[idx] + s[idx+1]) < 27) {
      cases += decode(idx+2)
    }

    // save result for discovered path in the recursion tree
    memo[idx] = cases
    // return cases for node tree
    return cases
  }

  return decode(0)
};

const result = numDecodings('226')
result