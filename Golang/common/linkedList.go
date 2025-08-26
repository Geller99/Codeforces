package common

import (
	"fmt"
	"strings"
)

// ListNode represents a node in a singly linked list
type ListNode struct {
	Val  int
	Next *ListNode
}

// CreateList creates a linked list from a slice of integers
// Example: CreateList([]int{1, 2, 3}) returns 1->2->3
func CreateList(values []int) *ListNode {
	if len(values) == 0 {
		return nil
	}
	
	head := &ListNode{Val: values[0]}
	current := head
	
	for i := 1; i < len(values); i++ {
		current.Next = &ListNode{Val: values[i]}
		current = current.Next
	}
	
	return head
}

// ToSlice converts a linked list to a slice of integers
func ToSlice(head *ListNode) []int {
	var result []int
	current := head
	
	for current != nil {
		result = append(result, current.Val)
		current = current.Next
	}
	
	return result
}

// PrintList prints the linked list in a readable format
func PrintList(head *ListNode) {
	fmt.Println(FormatList(head))
}

// FormatList returns a string representation of the linked list
func FormatList(head *ListNode) string {
	if head == nil {
		return "[]"
	}
	
	var parts []string
	current := head
	
	for current != nil {
		parts = append(parts, fmt.Sprintf("%d", current.Val))
		current = current.Next
	}
	
	return strings.Join(parts, " -> ")
}

// Length returns the number of nodes in the linked list
func Length(head *ListNode) int {
	count := 0
	current := head
	
	for current != nil {
		count++
		current = current.Next
	}
	
	return count
}

// GetNth returns the nth node (0-indexed) or nil if out of bounds
func GetNth(head *ListNode, n int) *ListNode {
	current := head
	
	for i := 0; i < n && current != nil; i++ {
		current = current.Next
	}
	
	return current
}

// FindValue returns the first node with the given value, or nil if not found
func FindValue(head *ListNode, val int) *ListNode {
	current := head
	
	for current != nil {
		if current.Val == val {
			return current
		}
		current = current.Next
	}
	
	return nil
}

// Equal checks if two linked lists are equal (same values in same order)
func Equal(list1, list2 *ListNode) bool {
	current1, current2 := list1, list2
	
	for current1 != nil && current2 != nil {
		if current1.Val != current2.Val {
			return false
		}
		current1 = current1.Next
		current2 = current2.Next
	}
	
	// Both should be nil if lists are equal
	return current1 == nil && current2 == nil
}

// Append adds a new node with the given value to the end of the list
// Returns the new head (useful if the original list was empty)
func Append(head *ListNode, val int) *ListNode {
	newNode := &ListNode{Val: val}
	
	if head == nil {
		return newNode
	}
	
	current := head
	for current.Next != nil {
		current = current.Next
	}
	current.Next = newNode
	
	return head
}

// Prepend adds a new node with the given value to the beginning of the list
// Returns the new head
func Prepend(head *ListNode, val int) *ListNode {
	newNode := &ListNode{Val: val, Next: head}
	return newNode
}

// Clone creates a deep copy of the linked list
func Clone(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	
	newHead := &ListNode{Val: head.Val}
	current := head.Next
	newCurrent := newHead
	
	for current != nil {
		newCurrent.Next = &ListNode{Val: current.Val}
		current = current.Next
		newCurrent = newCurrent.Next
	}
	
	return newHead
}

// Reverse reverses the linked list and returns the new head
func Reverse(head *ListNode) *ListNode {
	var prev *ListNode
	current := head
	
	for current != nil {
		next := current.Next
		current.Next = prev
		prev = current
		current = next
	}
	
	return prev
}

// HasCycle detects if there's a cycle in the linked list using Floyd's algorithm
func HasCycle(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return false
	}
	
	slow, fast := head, head
	
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
		
		if slow == fast {
			return true
		}
	}
	
	return false
}

// GetMiddle returns the middle node of the linked list
// For even length lists, returns the second middle node
func GetMiddle(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	
	slow, fast := head, head
	
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	
	return slow
}

// RemoveValue removes the first occurrence of a value from the list
// Returns the new head
func RemoveValue(head *ListNode, val int) *ListNode {
	// Handle case where head needs to be removed
	for head != nil && head.Val == val {
		head = head.Next
	}
	
	if head == nil {
		return nil
	}
	
	current := head
	for current.Next != nil {
		if current.Next.Val == val {
			current.Next = current.Next.Next
		} else {
			current = current.Next
		}
	}
	
	return head
}

// RemoveNth removes the nth node (0-indexed) from the list
// Returns the new head
func RemoveNth(head *ListNode, n int) *ListNode {
	if head == nil || n < 0 {
		return head
	}
	
	// Special case: remove head
	if n == 0 {
		return head.Next
	}
	
	current := head
	for i := 0; i < n-1 && current != nil; i++ {
		current = current.Next
	}
	
	// If we found the node before the target
	if current != nil && current.Next != nil {
		current.Next = current.Next.Next
	}
	
	return head
}