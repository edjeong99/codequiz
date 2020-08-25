// solve counting change combination
// use recursive
// if money = 0, right combination has been found.

let countChange = function (money, coins) {
  if (money < 0 || coins.length < 1) return 0;
  if (money === 0) return 1;

  //   console.log(
  //     'CC money = ' + money + ' coins = ' + coins,
  //     ' new Coin = ',
  //     newCoins
  //   );
  return (
    countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
  );
};
console.log(countChange(4, [1, 2]));
