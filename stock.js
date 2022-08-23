/* The function receives an array of daily prices [3, 6 ,9, 10]

Calculate possible profit from buying at the lower price and sell it at the highest

e.g. buy at 3, sell at 10 --> profit: 7

Note
You can't sell before buying
Return 'no profit' if there is no chance to make money

e.g. [10, 9, 6, 2] --> 'no profit'

*/

const caulculateProfit = (prices) => {
  let max;
  let min;

  prices.forEach((num1, idx1, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (num1 === arr[1]) return;
      if (num1 < arr[i] && min === undefined) {
        min = num1;
        max = num1;
      }

      if (num1 < arr[i] && num1 < min) {
        // check index
        idx1 < i ? (min = num1) : null;
      }
      if (num1 > arr[i] && num1 > max) {
        idx1 > i ? (max = num1) : null;
      }
    }
  });

  const profit = max - min > 0 ? max - min : 'no profit';

  return profit;
};

calculateProfit([10, 6, 2, 300]);
