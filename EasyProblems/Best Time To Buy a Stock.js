var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        const profit = prices[i] - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
