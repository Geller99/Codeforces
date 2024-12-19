package algos



func MergeSort (nums []int, left int, right int) {

	if(left < right) {
		mid := left + (right - left) / 2;

		MergeSort(nums, left, mid);
		MergeSort(nums, mid + 1, right);
		Merge(nums, left, mid, right);
	}

}


func Merge(nums []int, left int, mid int, right int) {

	temp := make([]int, right-left+1)
	k := 0 // merge pointer
	j := mid + 1 

	for (left <= mid && j <= right) {
		if(nums[left] <= nums[j]) {
			temp[k] = nums[left];
			k++;
			left++;
		} else {
			temp[k] = nums[j]
			k++;
			j++;
		}
	}

	for(left <= mid) {
		temp[k] = nums[left];
			k++;
			left++;
	}

	for(j <= right) {
		temp[k] = nums[j]
			k++;
			j++;
	}

	for x:=0; x < k; x++ {
		nums[left + x] =  temp[x];
	}	
}