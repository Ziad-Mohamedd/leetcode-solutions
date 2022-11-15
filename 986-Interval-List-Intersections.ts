function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  let result: number[][] = [];

  let index = 0;
  let index2 = 0;

  while (index < firstList.length && index2 < secondList.length) {
    const maxStart = Math.max(firstList[index][0], secondList[index2][0]);
    const minEnd = Math.min(firstList[index][1], secondList[index2][1]);

    if (maxStart <= minEnd) result.push([maxStart, minEnd]);
    if (minEnd === firstList[index][1]) {
        index++;
    } else {
        index2++;
    }
  }

  return result;
}

console.log(
  intervalIntersection(
    [[0,2],[5,10],[13,23],[24,25]],
    [[1,5],[8,12],[15,24],[25,26]]
  )
);

// expected [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

// output [[1,2],[8,10],[15,23],[25,25]]

// 0 0
// start 1
// end 2