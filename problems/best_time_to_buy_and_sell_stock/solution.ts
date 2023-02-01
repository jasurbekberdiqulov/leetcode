function maxProfit(prices: number[]): number {
    let min = prices[0];
    let profit = 0;
    for(let i = 0; i < prices.length; ++i) {
        if(prices[i] < min) min = prices[i];
        const _profit = prices[i]-min;
        if(_profit > profit) profit = _profit;
    }
    return profit;
};