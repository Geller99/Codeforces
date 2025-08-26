package linkedlists

import "exo/common"


func partition(head *common.ListNode, x int) *common.ListNode {
	less, greater := &common.ListNode{}, &common.ListNode{}
	l, g := less, greater

	for head != nil {
		if head.Val < x {
			l.Next, l = head, head
		} else {
			g.Next, g = head, head
		}
		head = head.Next
	}

	g.Next = nil
	l.Next = greater.Next
	return less.Next
}