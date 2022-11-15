function employeeFreeTime(schedule: number[][][]): number[][] {
  let result: number[][] = [];
  let intervals = schedule.flat();
  intervals.sort(([a, b], [c, d]) => a - c);

  let prevEnd = intervals[0][1];

  intervals.forEach((interval) => {
    const [start, end] = interval;
    if (start > prevEnd) {
      result.push([prevEnd, start]);
    }

    prevEnd = Math.max(prevEnd, end);
  });

  return result;
}

console.log(
  employeeFreeTime([
    [
      [1, 2],
      [5, 6],
    ],
    [[1, 3]],
    [[4, 10]],
  ])
);
