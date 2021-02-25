// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

const merge = intervals => {
  intervals.sort((a,b) => a[0] - b[0])
  let merged = []

  for(var i = 0; i < intervals.length; i++) {
    // take the first element in the list or
    // check if right number of the lasted merged element is lower to the fir
    if(merged.length === 0 || merged[merged.length -1][1] < intervals[i][0]) {
      merged.push([intervals[i][0], intervals[i][1]])
    } else {
      merged[merged.length -1][1] = Math.max(
        merged[merged.length -1][1],
        intervals[i][1]
      )
    }
  }

  return merged
};

//[[1,6],[8,10],[15,18]]
const result = merge([[1,4],[0,4]])
result