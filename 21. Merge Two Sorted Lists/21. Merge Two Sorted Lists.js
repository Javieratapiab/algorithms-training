// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let mergeHead = {val: -1, next: null}
  let head = mergeHead

  while(l1 !== null && l2 !== null) {
    if(l1.val < l2.val) {
      // map node to head
      head.next = l1
      // move header pointer
      l1 = l1.next
    } else {
      head.next = l2
      l2 = l2.next
    }
    // move header pointer
    head = head.next
  }

  // in case of break the while we some children unassigned
  // we map to last next node ex l1 == null but l2 is valid node
  head.next = l1 || l2
  console.log(mergeHead)

  return mergeHead.next
};

// console.log(mergeTwoLists([1,2,4], [1,3,4]))