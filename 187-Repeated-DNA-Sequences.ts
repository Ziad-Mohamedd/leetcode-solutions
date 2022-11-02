function findRepeatedDnaSequences(s: string, k: number): string[] {
  let myMap = new Map<string, number>();
  let obj: { seq: string; val: number } = {
    seq: "",
    val: 0,
  };

  for (let i = 0; i < s.length; i++) {
    obj.seq = s.substring(i, k + i);
    obj.val = 1;
    if (myMap.has(obj.seq)) {
      let temp = myMap.get(obj.seq);
      myMap.set(obj.seq, (obj.val += temp as number));
    } else {
      myMap.set(obj.seq, obj.val);
    }
  }
  let result: string[] = [];

  for( var [key, value] of myMap ) {
    if (value > 1) {
        result.push(key);
    }
  }

  return result;
}

console.log(findRepeatedDnaSequences("ATATATATATATATAT", 6));