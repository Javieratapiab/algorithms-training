# LeetCode problem (Easy)
# https://leetcode.com/problems/reverse-linked-list/
# Explanation: https://www.youtube.com/watch?v=NhapasNIKuQ

# Definition for singly-linked list.
# class ListNode(object):
#    def __init__(self, val=0, next=None):
#        self.val = val
#        self.next = next


class Solution(object):
    def reverseList(self, head: ListNode) -> ListNode:
        # Base cases
        if head == None or head.next == None:
            return head
        prev = None
        curr = head

        while(curr != None):
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        return prev
