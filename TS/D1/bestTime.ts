

const purchaseStock = (nums: number[]): number => {
    if (nums.length <= 1) return 0;

    let buyPrice = nums[0];  // init with first day price
    let maxProfit = 0;

    for(let i = 1; i < nums.length; i++) {  // Start from second element
        if (nums[i] < buyPrice) {
            buyPrice = nums[i];
        } else {
            maxProfit = Math.max(maxProfit, nums[i] - buyPrice);
        }
    }

    return maxProfit;
}