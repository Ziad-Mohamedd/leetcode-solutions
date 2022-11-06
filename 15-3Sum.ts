function threeSum(nums: number[], target: number): boolean {
  let low = 1;
  let high = nums.length - 1;
  let output: number[][] = [[]];

  let sortedNums = nums.sort((a, b) => a - b);
  console.log(sortedNums);
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] + sortedNums[low] + sortedNums[high] == target) {
      output.push([sortedNums[i], sortedNums[low], sortedNums[high]]);
      low++;
      high--;
    } else if (sortedNums[i] + sortedNums[low] + sortedNums[high] < target) {
      low++;
    } else {
      high--;
    }
  }

  if (output) {
    return true;
  }

  return false;
}

console.log(threeSum([3, 7, 1, 2, 8, 4, 5] , 10));
