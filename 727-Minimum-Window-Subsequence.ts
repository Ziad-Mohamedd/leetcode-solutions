var minWindow = function (str1: string, str2: string) {
  let sizeStr1 = str1.length,
    sizeStr2 = str2.length;

  let length = Infinity;
  let indexS1 = 0,
    indexS2 = 0,
    minSubsequence = "";

  while (indexS1 < sizeStr1) {
    if (str1[indexS1] == str2[indexS2]) {
      indexS2++;
      if (indexS2 == sizeStr2) {
        let start = indexS1,
          end = indexS1 + 1;

        indexS2--;
        while (indexS2 >= 0) {
          if (str1[start] == str2[indexS2]) indexS2 -= 1;

          start -= 1;
        }
        start++;
        if (end - start < length) {
          length = end - start;
          minSubsequence = str1.substring(start, end);
        }

        indexS1 = start;
        indexS2 = 0;
      }
    }
    indexS1++;
  }
  return minSubsequence;
};

console.log(minWindow("abcdebdde", "bde"));
console.log(minWindow("fgrqsqsnodwmxzkzxwqegkndaa" , "kzed"))
console.log(minWindow("michmznaitnjdnjkdsnmichmznait" , "michmznait"))
console.log(minWindow("afgegrwgwga" , "aa"))
console.log(minWindow("abababa" , "ba"))
