package arrays

func maxProfit (prices []int) int{
	if len(prices) < 2 {
		return 0
	}

	minPrice := prices[0]   // cheapest price seen so far
	maxProfit := 0			// max profit possible 

	for i := 1; i < len(prices); i++ {
		// Option 1: sell today
		profit := prices[i] - minPrice
		maxProfit = max(maxProfit, profit)

		// Option 2: don't sell today but update cheapest price if we encounter a cheaper stock 
		minPrice = min(minPrice, prices[i]);
	}
	return maxProfit
}