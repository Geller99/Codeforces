function findPeakElement(nums: number[]): number {
    if(nums.length < 2){
        return 0
    }
    else if(nums.length == 2){
        if(nums[0] > nums[1]) return 0
        else return 1
    }

    for(let i = 0; i < nums.length; i++){
        if((nums[i] > nums[i -1] && nums[i] > nums[i+1]) || (nums[i] > nums[i+1])){
            return i
            break
        }
        else if( (nums[i-1] === undefined && nums[i] > nums[i+1]) || (nums[i+1] === undefined && nums[i] > nums[i-1]) ){
            return i
        }
        else{
            continue
        }
    }
};