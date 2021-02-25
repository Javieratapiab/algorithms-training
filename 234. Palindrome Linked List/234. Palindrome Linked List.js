// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let stack = [1, 1, 1];
  let node = head;

  while (node !== null) {
    stack.push(node.val);
    node = node.next;
  }

  let p1 = stack.slice(0, Math.ceil(stack.length / 2));
  let p2 = stack.slice(Math.floor(stack.length / 2));

  return p1.join("") === p2.reverse().join("");
};

var isPalindrome = function (head) {
  let stack = [];
  let node = head;

  while (node !== null) {
    stack.push(node.val);
    node = node.next;
  }

  let len = Math.floor(stack.length / 2);
  let p1 = stack.length % 2 === 0 ? len - 1 : len;
  let p2 = len;

  // while pointer 1 is higher that stack start (p1 = 0)
  while (p1 >= 0) {
    p1;
    p2;
    if (stack[p1] !== stack[p2]) {
      return false;
    }
    // update pointer
    p1--;
    p2++;
  }
  return true;
};

const result = isPalindrome();
result;

// to fointer with fast and slow pointer
var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;

  var slow = head;
  var fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = reverseList(slow.next);
  slow = slow.next;

  while (slow != null) {
    if (head.val != slow.val) return false;
    head = head.next;
    slow = slow.next;
  }

  return true;
};

var reverseList = function (head) {
  var pre = null;
  var next = null;

  while (head != null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }

  return pre;
};
