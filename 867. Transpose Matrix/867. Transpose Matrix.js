// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// see the inversion from x1...x3 to y1...y3
// [1,2,3]      [1,4,7]
// [4,5,6]  =>  [2,5,8]
// [7,8,9]      [3,6,9]

// test case
// [1,2,3]      [1,4]
// [4,5,6]  =>  [2,5]
//              [3,6]

/**
 * @param {number[][]}
 * @return {number[][]}
 */
var transpose = function(matrix) {
  let rotation = []

  // create matrix
  // note the reflect from inner to outside matrix[0]
  for(var m = 0; m < matrix[0].length; m++){
    rotation.push(new Array(matrix.length).fill(-1))
  }


  // move an assign values
  for(var i = 0; i < matrix.length; i++) {
    for(var j =0; j < matrix[0].length; j++) {
      // rotate
      rotation[j][i] = matrix[i][j]
    }
  }

  // return rotation
  return rotation
};

const result = transpose([[1,2,3],[4,5,6]])
result