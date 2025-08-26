const maxProfit = (prices: number[]): number => {
    if (prices.length <= 1) return 0;
    
    let hold = -prices[0];  // bought on day 0
    let sold = 0;           // can't sell on day 0
    let rest = 0;           // doing nothing
    
    for (let i = 1; i < prices.length; i++) {
        const prevHold = hold;
        const prevSold = sold;
        const prevRest = rest;
        
        hold = Math.max(prevHold, prevRest - prices[i]);
        sold = prevHold + prices[i];
        rest = prevSold;
    }
    
    return Math.max(sold, rest); // can't end holding stock
};