package linkedlists

import "exo/common"


func MergeTwoLists (listOne *common.ListNode, listTwo *common.ListNode) *common.ListNode {

	dummy := &common.ListNode{}
	current := dummy

	// compare nodes from both lists
	for listOne != nil && listTwo != nil {
		if listOne.Val <= listTwo.Val {
			current.Next = listOne
			listOne = listOne.Next  // advance pointer
		} else {
			current.Next = listTwo
			listTwo = listTwo.Next  // advance pointer
		}
		current = current.Next
	}

	// attach remaining nodes
	if listOne != nil {
		current.Next = listOne
	} else {
		current.Next = listTwo
	}
	return dummy.Next
}

