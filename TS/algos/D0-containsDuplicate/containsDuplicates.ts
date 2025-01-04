


/**
 * 
 * @param nums 
 * 
 * Given an array, return true if it contains any duplicate values
 * or false if it doesn't
 */

const containsDuplicate = (nums: number[]): boolean => {
    if (nums.length <= 1) return false;

    let checker = new Set();

    for(let num in nums) {
        if(checker.has(num)) return true;
        else checker.add(num);
    }

    return false;

}


console.log(containsDuplicate([1,2,3,2]));