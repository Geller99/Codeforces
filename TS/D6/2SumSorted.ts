

const twoSumSorted = (nums: number[], target: number) => {
    if (!target) return [];
    if(!nums.length) return [];

    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let res = nums[left]+ nums[right]
        if(target < res) {
            right--;
        } else if(target > res) {
            left++;
        }
        else if(target === res) {
            return [nums[left], nums[right]];
        } else {
            return []
        }
    }
}

console.log(twoSumSorted([1,2,3,4], 3));