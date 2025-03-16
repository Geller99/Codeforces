


/**
 * 
 * using the prefix, suffix technique, we can essentially find the product of all values before each nums[i] and all values after it
 * the combined product will yield the product of every value in the array excluding nums[i]
 */

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // Calculate prefix products from left to right
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // Calculate suffix products and combine with prefix
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}

