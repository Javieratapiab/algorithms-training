// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example 1:

// Input: 5
// Output: [0,1,1,2,1,2]

var countBits = function(num) {
  var arr = [0, 1, 1];

  for (var i=3; i<=num; i++){
    var temp = i;
    var odd = 0, even = 0;
    //if odd
    if(i % 2 !== 0){
      even += 1;
      temp = i-1;
    }
      console.log({i, temp})
      odd = arr[temp/2];
      even
      odd
      arr.push(even + odd);
  }

  return arr.slice(0, num+1);
};

const result = countBits(10)
console.log(result)

// clever math
// 2∗(a+b+c)−(a+a+b+b+c)=c
// class Solution {
//   public int singleNumber(int[] nums) {
//     int sumOfSet = 0, sumOfNums = 0;
//     Set<Integer> set = new HashSet();

//     for (int num : nums) {
//       if (!set.contains(num)) {
//         set.add(num);
//         sumOfSet += num;
//       }
//       sumOfNums += num;
//     }
//     return 2 * sumOfSet - sumOfNums;
//   }
// }