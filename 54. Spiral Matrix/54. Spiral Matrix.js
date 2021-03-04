// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// PL  →   0   ←  PR
// PT   1 → 2-→ 3 ↓
// ↓    4 → 5 | 6 ↓
// ↑  ↑ 7 ← 8 ← 9
// PB

// m len !== n len case
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // list of n in spiral
  let rotation = []

  // pointers for the x/y matrix representation
  // PL - PR & PT -PB
  let PL = 0, PR = matrix[0].length
  let PT = 0, PB = matrix.length

  // for each element in my matrix = the pointer doesn't overlap
  while(PL < PR && PT < PB ) {
    // get every element in the current top row
    for(let c = PL; c < PR; c++) {
      rotation.push(matrix[PT][c])
    }
    // update top pointer to remove top row
    PT += 1

    // get every element in the current most right column
    for(let r = PT; r < PB; r++) {
      rotation.push(matrix[r][PR - 1])
    }
    //update right pointer to remove right col
    PR -= 1

    // break in case of last loop overlap
    if(!(PL < PR && PT < PB)) {
      break
    }

    // get every element in the current most bottom column in reverse order
    for(let r = PR - 1; r > PL - 1; r--) {
      rotation.push(matrix[PB - 1][r])
    }
    // update pointer and remove bottom row
    PB -= 1

    // get every element in the current most left column in reverse order
    for(let c = PB - 1; c > PT - 1; c--) {
      rotation.push(matrix[c][PL])
    }
    // update pointer and remove left column
    PL =+ 1
  }

  return rotation
};

const result = spiralOrder([[1,2,3],[4,5,6],[7,8,9]])

console.log(result)
// [1,2,3,6,9,8,7,4,5]
