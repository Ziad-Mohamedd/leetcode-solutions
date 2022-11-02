function minWindow(s: string, t: string): string {
  let table: Map<string, number> = new Map();

  for (const char of t) {
    const prev = table.get(char);
    if (prev) {
      table.set(char, prev + 1);
    } else {
      table.set(char, 1);
    }
  }

  let begin: number = 0;
  let end: number = 0;
  let counter: number = table.size;
  let len: number = Infinity;
  let ans: string = "";

  while (end < s.length) {
    const endChar = s.charAt(end);
    const endCharValue: number | undefined = table.get(endChar);

    if (endCharValue !== undefined) {
      table.set(endChar, endCharValue - 1);
      if (table.get(endChar) === 0) counter--;
    }
    console.table(table);
    console.log(counter);

    end++;

    while (counter === 0) {
      if (end - begin < len) {
        len = end - begin;
        ans = s.substring(begin, end);
      }

      const startChar: string = s.charAt(begin);
      const startCharValue: number | undefined = table.get(startChar);
      if (table.has(startChar) && startCharValue !== undefined) {
        table.set(startChar, startCharValue + 1);
        if (Number(table.get(startChar)) > 0) counter++;
      }

      begin++;
    }
  }

  return ans;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));

