function merge(intervals: number[][]): number[][] {
    intervals.sort(([a], [c]) => a - c);
  
    let i = 1;
  
    while (i < intervals.length) {
      const [a, b] = intervals[i - 1];
      const [c, d] = intervals[i];
  
      if (b >= c) {
           intervals.splice(i - 1, 2, [a, Math.max(b, d)]);
      }
      else {
           i++;
      }
      console.table(intervals)
    }
  
    return intervals;
  }
  
  console.log(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  );
  