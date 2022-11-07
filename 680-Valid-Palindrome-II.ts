function validPalindrome(s: string): boolean {
  const validString = s.replace(/[^0-9a-z]/gi, "").toLocaleLowerCase();
  let left = 0;
  let length = validString.length - 1;
  let right = length;
  let count = 0;
  while (left <= Math.floor(length / 2)) {
    if (validString[left] !== validString[right]) {
        count++;
      if (validString[left + 1] === validString[right]) {
        left++;
      }
      if (validString[left] === validString[right - 1]) {
        right--;
      } else {
        return false;
      }
    }
    if(count > 1) {
         return false
    };
    console.log(count);
    left++;
    right--;
  }

  return true;
}

console.log(validPalindrome('eeccccbebaeeabebccceea'));