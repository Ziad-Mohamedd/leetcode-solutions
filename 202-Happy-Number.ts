function isHappy(n: number): boolean {
  function digitSquareSum(num: number) {
    let totalSum = 0;
    while (num > 0) {
      let d = num % 10;
      num = Math.floor(num / 10);
      totalSum += d * d;
    }
    return totalSum;
  }

  let fast = digitSquareSum(n);
  let slow = n;
  while (fast !== slow) {
    slow = digitSquareSum(slow);
    fast = digitSquareSum(digitSquareSum(fast));
  }
  return slow === 1;
}
