

/**
 * merge sort works by recursively splitting the array into two sub arrays,
 * sorting each subarray and merging them afterwards
 * 
 * in this approach, we will implement a function mergeSort that works recursively
 * and a function merge that is called by mergesort after the arrays are split and sorted
 */




const mergeSort = (nums: number[], left:number, right:number):void => {
    if(left < right) { 
        let mid = left + (right - left) / 2;  // find the mid-point of the array nums

        mergeSort(nums, left, mid);  // sort the first half
        mergeSort(nums, mid + 1, right);  // sort the second half, why is mid + 1 used instead of just mid?

        // merge the sorted halves
        merge(nums, left, mid, right);
    }
}


const merge = (nums: number[], left:number, mid:number, right:number) => {
    
    let temp:number[] = new Array(right - left + 1);  // temp array to store values as we merge
    let k = 0; // merge pointer
    let j =  mid + 1;

    while(left <= mid && j <= right) {  
        if(nums[left] <= nums[j]) {   // first half 
            temp[k++] = nums[left++];
        } else {
            temp[k++] = nums[j++];
        }
    }

    // copy remaining values after comparison if any
    while (left <= mid) {
        temp[k++] = nums[left++];
    }
    while (j <= right) {
        temp[k++] = nums[j++]
    }


    // copy sorted values back to original array
    for(let x = 0; x < k; x++) {
        nums[left + x] = temp[x];
    }

}